import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./dataTable.css";

const DataTablePY = (props) => {
  const [showReceiptPopup, setShowReceiptPopup] = useState(false);
  const [receiptImageUrl, setReceiptImageUrl] = useState("");

  const handleClick = (params) => {
    const receiptImageUrl = params.row.receiptImageUrl;
    setReceiptImageUrl(receiptImageUrl);
    setShowReceiptPopup(true);
  };

  const receiptPopup = (
    <div className="centered-popup">
      <img
        src={receiptImageUrl}
        alt="Receipt"
        className="img"
        onError={(e) => {
          console.error("Error loading image:", e);
        }}
      />

      <button onClick={() => setShowReceiptPopup(false)}>Close</button>
    </div>
  );

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <IconButton onClick={() => handleClick(params)}>
            <AssignmentIcon />
          </IconButton>
          <div>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <div className="Popup">
        {showReceiptPopup && receiptPopup}
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              pageSize: 10,
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    </div>
  );
};

export default DataTablePY;
