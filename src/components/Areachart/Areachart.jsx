import React from 'react';
import './Areachart.css';
import {
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Area,
    ResponsiveContainer,
} from "recharts";
import { incomedata } from '../../Dummydata';


const Areachart = ({title}) => {
    return (
        <div className='areachart'>
            <h3 className="chartTitle">{title}</h3>

            <AreaChart width={530} height={250} data={incomedata}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="loss" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    )
}

export default Areachart