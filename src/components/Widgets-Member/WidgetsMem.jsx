import React from 'react';
import './WidgetsMem.css';
import { Visibility } from "@material-ui/icons";

const WidgetsMem = () => {
  return (
    <div className="widgets-mem">
        <span className="widgets-mem-title">Freshly Hired Members</span>
        <ul className="widgets-mem-list">
            <li className="widgets-mem-list-item">
                <img src="https://shorturl.at/kFGR7" alt="" srcset=""
                className="widgets-mem-img" />
                <div className="widgets-mem-data">
                    <span className="widgets-mem-name">Joey Tribbani</span>
                    <span className="widgets-mem-role">Data Analyst</span>
                </div>
                <button className="widgets-mem-btn">
                    <Visibility className="widgets-icon"/>
                    View
                </button>
            </li>
            <li className="widgets-mem-list-item">
                <img src="https://shorturl.at/csvWY" alt="" srcset=""
                className="widgets-mem-img" />
                <div className="widgets-mem-data">
                    <span className="widgets-mem-name">Ross Geller</span>
                    <span className="widgets-mem-role">Software Eng</span>
                </div>
                <button className="widgets-mem-btn">
                    <Visibility className="widgets-icon"/>
                    View
                </button>
            </li>
            <li className="widgets-mem-list-item">
                <img src="https://shorturl.at/PSZ37" alt="" srcset=""
                className="widgets-mem-img" />
                <div className="widgets-mem-data">
                    <span className="widgets-mem-name">Monica Geller</span>
                    <span className="widgets-mem-role">Data Scientist</span>
                </div>
                <button className="widgets-mem-btn">
                    <Visibility className="widgets-icon"/>
                    View
                </button>
            </li>
            <li className="widgets-mem-list-item">
                <img src="https://shorturl.at/lmy01" alt="" srcset=""
                className="widgets-mem-img" />
                <div className="widgets-mem-data">
                    <span className="widgets-mem-name">Rachel Green</span>
                    <span className="widgets-mem-role">FrontEnd Dev</span>
                </div>
                <button className="widgets-mem-btn">
                    <Visibility className="widgets-icon"/>
                    View
                </button>
            </li>
            <li className="widgets-mem-list-item">
                <img src="https://shorturl.at/jrHL4" alt="" srcset=""
                className="widgets-mem-img" />
                <div className="widgets-mem-data">
                    <span className="widgets-mem-name">Chandler Bing</span>
                    <span className="widgets-mem-role">Team Leader</span>
                </div>
                <button className="widgets-mem-btn">
                    <Visibility className="widgets-icon"/>
                    View
                </button>
            </li>
            <li className="widgets-mem-list-item">
                <img src="https://shorturl.at/kprI1" alt="" srcset=""
                className="widgets-mem-img" />
                <div className="widgets-mem-data">
                    <span className="widgets-mem-name">Pheobe Buffay</span>
                    <span className="widgets-mem-role">Database Mng</span>
                </div>
                <button className="widgets-mem-btn">
                    <Visibility className="widgets-icon"/>
                    View
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetsMem