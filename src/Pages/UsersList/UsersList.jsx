import React from 'react'
import './UsersList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
const UsersList = () => {

  // state for manipulating the user data
  const [data, setData] = useState(userRows);

  // functn for deleting user form ui
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  // function for table-data
  const columns = [
    // id-field
    { field: "id", headerName: "ID", width: 95 },

    //username,img field
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    // user-email
    { field: "email", headerName: "Email", width: 170 },
    //user-status
    {
      field: "status",
      headerName: "Status",
      width: 125,
    },
    // user-transaction-amount
    {
      field: "transaction",
      headerName: "Transaction Amount",
      width: 224,
    },
    // user actions
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userslist">
      
       <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default UsersList;