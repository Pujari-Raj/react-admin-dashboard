import React from 'react';
import './ProductList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../Dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

    // state for manipulating the user data
    const [data, setData] = useState(productRows);

    // functn for deleting user form ui
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    // function for table-data
    const columns = [
    // id-field
    { field: "id", headerName: "ID", width: 93 },

    //username,img field
    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    // user-email
    { field: "stock", headerName: "Stock", width: 140 },
    //user-status
    {
      field: "status",
      headerName: "Status",
      width: 125,
    },
    // user-transaction-amount
    {
      field: "price",
      headerName: "Price",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

    return (
        <div className="productList">
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

export default ProductList