import React from 'react';
import './Radialbarchart.css';
import {
    RadialBarChart,
    RadialBar,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { data } from '../../Dummydata'

const Radialbarchart = ({ title }) => {
    return (
        <div className='Radialbarchart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width={420} height="80%">
                <RadialBarChart
                    width={730}
                    height={250}
                    innerRadius="30%"
                    outerRadius="100%"
                    data={data}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart', fontSize: '15px' }} background clockWise={true} dataKey='units' />
                    <Legend iconSize={10} width={120} height={100} layout='centric' verticalAlign='bottom' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Radialbarchart