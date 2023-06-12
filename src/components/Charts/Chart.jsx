import React from 'react';
import './Chart.css';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
  

const Chart = ({ title, data, dataKey, grid }) => {
    
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#19191e" />
                {/* <YAxis /> */}
                <Line type="monotone" dataKey={dataKey} stroke="#323239" />
                <Tooltip/>
                <CartesianGrid  stroke="#e0dfdf" strokeDasharray="5 5"  />
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart