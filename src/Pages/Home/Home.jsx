import React from 'react';
import './Home.css';
// import  FeaturedInfo  from "./components/FeaturedInfo/FeaturedInfo";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Charts/Chart";
import { userData } from "../../Dummydata";

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="Sales Analytics" grid dataKey="Active User"  />
    </div>
  )
}

export default Home;