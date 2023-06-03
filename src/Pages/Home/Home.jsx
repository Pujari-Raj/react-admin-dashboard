import React from 'react';
import './Home.css';
//
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Charts/Chart";
import WidgetsMem from "../../components/Widgets-Member/WidgetsMem";
import WidgetsTransaction from "../../components/Widgets-Transaction/WidgetsTransaction";
import { userData } from "../../Dummydata";


const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="Sales Analytics" grid dataKey="Active User"  />
      <div className="homeWidgets">
        <WidgetsMem/>
        <WidgetsTransaction/>
      </div>
    </div>
  )
}

export default Home;