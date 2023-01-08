import MainForm from "./Pages/MainForm";
import React from "react";
import Navbaar from "./Component/Navbaar/Navbaar";
import AddItems from "./Component/AddItem/AddItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadeDocuments from "./Component/UploadeDocuments/UploadeDocuments";
import BillTableData from "./Component/BillTableData/BillTableData";
import ItemDataTable from "./Component/ItemDataTable/ItemDataTable";
import PaymentdetailsForm from "./Component/PaymentDetailsForm/PaymentdetailsForm";
import Login from "./Pages/Login/Login"

function App() {

  const invbillid =localStorage.getItem("BillID");
  const userType = localStorage.getItem("User")
  const status = localStorage.getItem("status")
  console.log(status)
  return (
  <BrowserRouter>
    {status&&<Navbaar/>}
    <Routes>
    {userType==="ADMIN"&& <Route path="/billtable" element={<BillTableData/>}/>}
    {userType==="ADMIN"&&<Route path="/billtable/admin/:id" element={<ItemDataTable/>}/>}
    {userType==="ADMIN"&&<Route path="/billtable/updatepagment/:id" element={<PaymentdetailsForm/>}/>}
    <Route path="/mainform" element={<MainForm/>}/>
    <Route path="/mainform/addItem/:id" element={<AddItems/>}/>
    <Route path="/addItem/uploadeDocuments/:id" element={<UploadeDocuments/>}/>
    {!status? <Route path="/" element={<Login/>}/>:<Route path="/login" element={<Login/>}/>}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
