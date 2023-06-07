import React from 'react';
import './Piechart.css';
import {
    Pie,
    PieChart,
    Area,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { expensdata1, expensdata2 } from '../../Dummydata';

const Piechart = ({ title }) => {
    return (
        <div className='Piechart'>
            <h3 className="chartTitle">{title}</h3>

            <PieChart width={350} height={250}>
                <Pie data={expensdata1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={expensdata2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip/>
            </PieChart>
        </div>
    )
}

export default Piechart