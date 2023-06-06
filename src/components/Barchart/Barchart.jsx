import React from 'react';
import './Barchart.css';
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    ResponsiveContainer,
    Legend
} from "recharts";
import { salesdata } from '../../Dummydata';

const Barchart = ({ title }) => {
    return (
        <div className='saleschart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart width={730} height={250} data={salesdata} >
                    <XAxis dataKey="Month" fill="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Sales" fill="#8884d8" />
                    <Legend/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Barchart;