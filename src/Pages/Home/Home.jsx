import React from 'react';
import './Home.css';
// import  FeaturedInfo  from "./components/FeaturedInfo/FeaturedInfo";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";


const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
    </div>
  )
}

export default Home