import React from 'react';
import './Sales.css';
import Barchart from '../../components/Barchart/Barchart';
import Chart from "../../components/Charts/Chart";
import { earningData } from "../../Dummydata";

const Sales = () => {
  return (
    <div className='sales'>
      <Barchart title="Sales Report" />
      <Chart data={earningData} title="Earning" grid dataKey="Earning" />
    </div>
  )
}

export default Sales