import React from 'react';
import "./Widgetsproducts.css";
import { SiOneplus,SiApple } from "react-icons/si";

const Widgetsproducts = () => {

    // const Button = ({ type }) => {
    //     return <button className={"widgetLgButton " + type}>{type}</button>;
    // };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Top Selling Products</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">ID</th>
                    <th className="widgetLgTh">Product</th>
                    <th className="widgetLgTh">Price</th>
                    <th className="widgetLgTh">Sold(Units)</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">6621</span>
                    </td>
                    <td className="widgetLgDate">
                        <SiOneplus className='product-icon' />
                        Oneplus-7
                    </td>
                    <td className="widgetLgAmount">$122</td>
                    <td className="widgetLgStatus">
                        30000
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">6622</span>
                    </td>
                    <td className="widgetLgDate">
                    <SiOneplus className='product-icon' />
                        Oneplus-7t</td>
                    <td className="widgetLgAmount">$142</td>
                    <td className="widgetLgStatus">
                        5000
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">6623</span>
                    </td>
                    <td className="widgetLgDate">
                    <SiOneplus className='product-icon' />
                        Oneplus-8</td>
                    <td className="widgetLgAmount">$182</td>
                    <td className="widgetLgStatus">
                        2000
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">6624</span>
                    </td>
                    <td className="widgetLgDate">
                    <SiApple className='product-icon' />
                        iPhone-10</td>
                    <td className="widgetLgAmount">$222</td>
                    <td className="widgetLgStatus">
                        800
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">6625</span>
                    </td>
                    <td className="widgetLgDate">
                    <SiApple className='product-icon' />
                        iPhone-11</td>
                    <td className="widgetLgAmount">$322</td>
                    <td className="widgetLgStatus">
                        1200
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">6626</span>
                    </td>
                    <td className="widgetLgDate">
                    <SiApple className='product-icon' />
                        iPhone-13</td>
                    <td className="widgetLgAmount">$622</td>
                    <td className="widgetLgStatus">
                        1100
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Widgetsproducts;