import React from 'react';
import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared To Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-2.4 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared To Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">+2.4 <ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared To Last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo