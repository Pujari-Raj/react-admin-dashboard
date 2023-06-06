import React from 'react';
import './Radialbarchart.css';
import {
    RadialBarChart,
    RadialBar,
    Tooltip,
    ResponsiveContainer,
    Legend,
    YAxis,
} from "recharts";
import {data} from '../../Dummydata'

const Radialbarchart = () => {
    return (
        <div className='Radialbarchart'>
            <RadialBarChart
                width={730}
                height={250}
                innerRadius="30%"
                outerRadius="100%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart',fontSize: '15px'  }} background clockWise={true} dataKey='units' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
            </RadialBarChart>
        </div>
    )
}

export default Radialbarchart