import React from "react";
import "./SingleUser.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  PublishOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const SingleUser = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
          <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="edit-user">
          <div className="edit-user-img">
            <img src="https://shorturl.at/prEHQ" alt=""
              srcset="" className="user-img" />

            <div className="edit-user-details">
              <span className="user-name">Jeenifer Luis</span>
              <span className="user-role">FrontEnd Developer</span>
            </div>
          </div>
          <div className="edit-user-contactdetails">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">JeeniferLuis189</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10/12/1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91 12345667</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">JeeniferLuis99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>

        <div className="update-user">
            <span className="update-user-title">Edit</span>
            <form action="" className="update-user-form">
                <div className="update-user-form-left">
                    <div className="form-field">
                        <label htmlFor="">Username: </label>
                        <input type="text"
                        placeholder="JeeniferLuis189"
                        className="update-form-field" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="">Name: </label>
                        <input type="text"
                        placeholder="Jeenifer Luis"
                        className="update-form-field" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="">Email: </label>
                        <input type="text"
                        placeholder="JeeniferLuis99@gmail.com"
                        className="update-form-field" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="">Phone: </label>
                        <input type="text"
                        placeholder="+91 12345667"
                        className="update-form-field" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="">Address: </label>
                        <input type="text"
                        placeholder="New York | USA"
                        className="update-form-field" />
                    </div>
                </div>
                <div className="update-user-form-right">
                    <div className="user-update-img">
                        <img src="https://shorturl.at/prEHQ" alt=""
                        srcset="" className="user-update-img" /> 
                        <label htmlFor="file">
                            <PublishOutlined className="userUpdateIcon"/>
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="user-update-btn">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
