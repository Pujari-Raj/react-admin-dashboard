import React from 'react';
import './Home.css';
//
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Charts/Chart";
import WidgetsMem from "../../components/Widgets-Member/WidgetsMem";
import WidgetsTransaction from "../../components/Widgets-Transaction/WidgetsTransaction";
import { userData } from "../../Dummydata";
import Radialbarchart from '../../components/Radialbarchart/Radialbarchart';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="Sales Analytics" grid dataKey="Active User" />
      <Radialbarchart></Radialbarchart>
      <div className="homeWidgets">
        <WidgetsMem/>
        <WidgetsTransaction/>
      </div>
    </div>
  )
}

export default Home;