import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useParams } from "react-router";
function UploadeDocuments() {
  const invbillid = localStorage.getItem("BillID");
   const {id} = useParams();
  const [invoiceAttachment, setInvoiceAttachment] = useState();

  const invNum = localStorage.getItem("InvoiceNumber");
  const invDate = localStorage.getItem("InvoiceDate");
  const invname = localStorage.getItem("EmployeeName");
  const formData = new FormData()
  formData.append("document", invoiceAttachment);
  let navigate = useNavigate();
  const changeHandler = (event) => {
    const imagebase =URL.createObjectURL(event.target.files[0]);
    setInvoiceAttachment(event.target.files[0]);
};

const EMPNAME = localStorage.getItem("name");

const handleonclick = async () => {
    if (invoiceAttachment){

        let formData = new FormData();
        formData.append('file',invoiceAttachment);

        axios.post(
            `http://13.126.160.155:8088/bill/files/upload/file?invoiceId=${id}`,
          //  `http://localhost:8082/bill/files/upload/file?invoiceId=${id}`,
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },                    
            }
        )
        .then(res => {
            console.log(`Success` + res.data);
            alert("uploaded successfully")
            navigate("/billtable")
        })
        .catch(err => {
            console.log(err);
        })
        }
    // try {
    //     console.log(formData);
    //   let response = await axios.post(`
    //   http://localhost:8082/bill/files/upload/file?invoiceId=${id}
    //   `,formData, {
    //     mode: 'no-cors',
    //     headers: {
    //         "Content-type": "multipart/form-data",
    //     },                    
    //   })
    //   alert("Item save successfully");
    //   localStorage.clear();
    //   navigate("/mainform");
    //   console.log(response);
    // } catch (error) {
    //   alert(error);
    // }
  };

  return (
    <>
      <Box p={2}>
        <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ fontSize: "20px", fontWeight: "600" }}>
            {" "}
            Invoice Number :- {invNum}
          </Box>

          <Box sx={{ fontSize: "18px", fontWeight: "600" }}>
            {" "}
            Employee Name :- {EMPNAME}
          </Box>
        </Box>
        <Box sx={{ fontSize: "14px" }}> Invoice Date :- {invDate}</Box>

        <Box mt={3}>
          <input type="file" name="file" onChange={changeHandler} />
        </Box>
        <Box mt={3}>
          <Button
            color="success"
            variant="contained"
            sx={{}}
            onClick={handleonclick}
          >
            Submit Bill
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default UploadeDocuments;
