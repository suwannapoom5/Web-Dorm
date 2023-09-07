import React, { useState, useEffect } from "react";
import "./css/paybill.css";
import DataTablePY from "../components/dataTablePY/DataTablePY";
import Add from "../components/add/Add";
import firebase from "../firebase";
import "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "roomNumber",
    type: "string",
    headerName: "เลขห้อง",
    width: 150,
  },
  {
    field: "fullName",
    type: "string",
    headerName: "ชื่อ - นามสกุล ",
    width: 220,
  },
  {
    field: "email",
    type: "string",
    headerName: "อีเมล",
    width: 220,
  },
  {
    field: "status",
    headerName: "สถานะ",
    type: "string",
    width: 220,
  },
];

const Paybill = () => {
  const [open, setOpen] = useState(false);
  const [paybillData, setPaybillData] = useState([]);
  useEffect(() => {
    const fetchPaybillData = async () => {
      try {
        const db = firebase.firestore();
        const paybillCollection = db.collection("paybill"); 

        const querySnapshot = await paybillCollection.get();
        const data = [];

        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        setPaybillData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPaybillData();
  }, []);

  return (
    <div className="content">
      <div className="info">
        <h1>จ่ายบิล</h1>
      </div>
      <DataTablePY slug="products" columns={columns} rows={paybillData} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Paybill;
