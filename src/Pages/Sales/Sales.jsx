import React from 'react';
import './Sales.css';
import Barchart from '../../components/Barchart/Barchart';
import Chart from "../../components/Charts/Chart";
import Radialbarchart from "../../components/Radialbarchart/Radialbarchart";
import Widgetsproducts from "../../components/Widgets-Products/Widgetsproducts";
import { earningData } from "../../Dummydata";


const Sales = () => {
  return (
    <div className='sales'>
      <Barchart title="Sales Report" />
      <Chart data={earningData} title="Earning" grid dataKey="Earning" />
      <div className="earning-product">
        <Radialbarchart title='Earning' ></Radialbarchart>
        <Widgetsproducts></Widgetsproducts>
      </div>
    </div>
  )
}

export default Sales