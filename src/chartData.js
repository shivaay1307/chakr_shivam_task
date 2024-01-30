// Chart.js
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import data from "./dataset.csv";
import "./App.css";

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

const downsampleByAveraging = (data, factor) => {
  const downsampledData = [];
  const newLength = Math.floor(data.length / factor);

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

  return downsampledData;
};

const Chart = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data);
        const csvData = await response.text();
        const rawData = parseCSV(csvData);
        const downsampledData = downsampleByAveraging(rawData, 100);
        setGraphData(downsampledData);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, []);

  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Growth",
        data: [],
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
      labels: [],
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
  });

  useEffect(() => {
    if (graphData.length > 0) {
      setChartState((prevChartState) => ({
        ...prevChartState,
        series: [
          {
            name: "Growth",
            data: graphData.map((i) => Math.ceil(i["Profit Percentage"])),
          },
        ],
        options: {
          ...prevChartState.options,
          labels: graphData.map((i) => i["Timestamp"]),
        },
      }));
    }
  }, [graphData]);

  if (graphData.length === 0) {
    return null;
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
      />
      <div className="chart-select">
        <select name="cars" id="cars" className="select-style">
          <option value="volvo">Yearly</option>
          <option value="volvo">Monthly</option>
        </select>
      </div>
    </div>
  );
};

export default Chart;
