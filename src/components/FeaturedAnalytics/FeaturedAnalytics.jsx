import React from 'react';
import './FeaturedAnalytics.css';

const FeaturedAnalytics = () => {
    return (
        <>
        <h3 className='FeaturedAnalyticsTitle'>30 Days Performance</h3>
        <div className='FeaturedAnalytics'>
            <div className="AnalyticsItem views">
                <span className="AnalyticsTitle">Views</span>
                <div className="AnalyticsContainer">
                    <span className='Count'>7,482,120</span>
                </div>
            </div>
            <div className="AnalyticsItem follows">
                <span className="AnalyticsTitle">Follows</span>
                <div className="AnalyticsContainer">
                    <span className='Count'>482,120</span>
                </div>
            </div>
            <div className="AnalyticsItem likes">
                <span className="AnalyticsTitle">Likes</span>
                <div className="AnalyticsContainer">
                    <span className='Count'>182,120</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default FeaturedAnalytics;