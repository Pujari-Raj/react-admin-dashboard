import React from 'react';
import "./FeaturedValues.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { FaHandHoldingUsd,FaPiggyBank,FaFunnelDollar } from "react-icons/fa";

const FeaturedValues = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredicon"><FaHandHoldingUsd /></span>
                <h3 className="featuredTitle">Total Income</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,915.24</span>
                </div>
                <div className="featured-stats">
                    <span className="featuredMoneyRate">-8.4 <ArrowDownward className="featuredIcon negative" /></span>
                    <span className="featuredSub">Than Last Year</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredicon"><FaPiggyBank/></span>
                <h3 className="featuredTitle">Total Savings</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,015.24</span>
                </div>
                <div className="featured-stats">
                    <span className="featuredMoneyRate">+8.4 <ArrowDownward className="featuredIcon negative" /></span>
                    <span className="featuredSub">Than Last Year</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredicon"><FaFunnelDollar /></span>
                <h3 className="featuredTitle">Total Expenses</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,915.24</span>
                </div>
                <div className="featured-stats">
                    <span className="featuredMoneyRate">-8.4 <ArrowDownward className="featuredIcon negative" /></span>
                    <span className="featuredSub">Than Last Year</span>
                </div>
            </div>

        </div>
    )
}

export default FeaturedValues