import React from 'react';
import './Analytics.css';
import Chart from "../../components/Charts/Chart";
import { productData } from "../../Dummydata";
import FeaturedAnalytics from '../../components/FeaturedAnalytics/FeaturedAnalytics';
import WidgetsAnalytics from '../../components/Widgets/WidgetsAnalytics';

const Analytics = () => {
    return (
        <div className='Analytics'>
            <FeaturedAnalytics/>
            <Chart data={productData} title="Views Analytics" grid dataKey="Views"  />
            <WidgetsAnalytics/>
        </div>
    )
}

export default Analytics;