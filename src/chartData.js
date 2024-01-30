import React, { useEffect, useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import data from "./dataset.csv";
import "./App.css";
import { useLocation } from "react-router-dom";

const parseCSV = (csvData) => {
  const lines = csvData.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const entry = {};

    headers.forEach((header, index) => {
      const trimmedHeader = header.trim();
      if (trimmedHeader === "Timestamp") {
        entry[trimmedHeader] = new Date(values[index].trim());
      } else {
        entry[trimmedHeader] = parseFloat(values[index]);
      }
    });

    return entry;
  });
};

const downsampleByAveraging = (data, factor, selectedOption) => {
  const downsampledData = [];
  let groupBy;

  const newLength = Math.floor(data.length / factor);

  if (selectedOption === "yearly") {
    groupBy = (entry) => entry.Timestamp.getFullYear();
  } else if (selectedOption === "monthly") {
    groupBy = (entry) => entry.Timestamp.getMonth();
  }else {
    for (let i = 0; i < newLength; i++) {
      const startIndex = i * factor;
      const endIndex = startIndex + factor;
      const group = data.slice(startIndex, endIndex);
  
      const sum = group.reduce(
        (sum, entry) => sum + entry["Profit Percentage"],
        0
      );
      const average = sum / factor;
  
      const lastEntry = group[group.length - 1];
      downsampledData.push({
        Timestamp: lastEntry.Timestamp.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        "Profit Percentage": average,
      });
    }
  }

  if(groupBy){
    const groupedData = data.reduce((acc, entry) => {
      const key = groupBy(entry);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(entry);
      return acc;
    }, {});
  
    for (const key in groupedData) {
      const group = groupedData[key];
      const sum = group.reduce(
        (sum, entry) => sum + entry["Profit Percentage"],
        0
      );
      const average = sum / group.length;
  
      const lastEntry = group[group.length - 1];
      downsampledData.push({
        Timestamp: lastEntry.Timestamp.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        "Profit Percentage": average,
      });
    }
  }

  return { downsampledData };
};

const Chart = () => {
  const location = useLocation();
  const [graphData, setGraphData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("default");
  const [factor] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const csvData = await response.text();
        const rawData = parseCSV(csvData);

        const defaultFactor = selectedOption === "default" ? 100 : factor;

        const { downsampledData } = downsampleByAveraging(
          rawData,
          defaultFactor,
          selectedOption
        );
        setGraphData(downsampledData);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, [selectedOption, factor]);

  const chartState = useMemo(() => {
    if (graphData?.length > 0) {
      return {
        series: [
          {
            name: "Growth",
            data: graphData?.map((i) => Math.ceil(i["Profit Percentage"])),
          },
        ],
        options: {
          chart: {
            type: "area",
            toolbar: {
              show: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Growth",
            align: "left",
          },
          labels: graphData?.map((i) => i["Timestamp"]),
          xaxis: {
            type: "datetime",
          },
          yaxis: [
            {
              opposite: false,
              labels: {
                align: "left",
              },
            },
          ],
          legend: {
            horizontalAlign: "left",
          },
        },
      };
    }
    return null;
  }, [graphData]);

  const loadingElement = useMemo(() => <h3>Loading . . .</h3>, []);

  if (!chartState) {
    return loadingElement;
  }

  return (
    <div id={location.pathname === "/chart" ? "chart" : ""}>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
      />
      <div
        className={
          location.pathname === "/chart" ? "chart-select2" : "chart-select"
        }
      >
        <select
          name="timespan"
          id="timespan"
          className="select-style"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="default">Factor 100</option>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
    </div>
  );
};

export default Chart;