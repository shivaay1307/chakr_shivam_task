import React from 'react';
import Chart from '../chartData';
import { Link } from 'react-router-dom';

const ChartCard = () => {
    return (
        <Link to="/chart" className='card card4'>
            <Chart />
        </Link>
    );
}

export default ChartCard;
