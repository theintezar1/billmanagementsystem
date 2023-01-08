import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { useParams, useNavigate } from "react-router";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import Button from '@mui/material/Button';
import moment from "moment"
import axios from "axios";
function PaymentdetailsForm() {
    let navigate = useNavigate();
const { id } = useParams();
const[paidAmount,setPaidAmount]= useState("");
const[paymentStatus,setPaymentStatus]=useState("");
const[transactionsDetail,setTransactionsDetail]=useState("");
const[paymentDate,setPaymentDate]=useState(null);


const newUpdatePaymentDate= moment(paymentDate).format("DD/MM/YYYY");

console.log({newUpdatePaymentDate})

const handlePaymanetUpdate= async ()=>{

    try {
        let response = await axios.put(`http://13.126.160.155:8088/bill/bill/update/${id}`
            , {
            paidAmount: paidAmount,
            paymentDate: newUpdatePaymentDate,
            paymentStatus: paymentStatus,
            transactionDetail: transactionsDetail,
        });
        alert("Your Payment Details Update successfully");
        console.log(response);
           navigate("/billtable")
      } catch (error) {
        alert(error);
      }


}

 return (
    <>
    
<Box mt={4}  p={2}>
    <h2 style={{}}>Bill Id :- {id}</h2>
     <Box mt={2} sx={{display:"flex", gap:"30px" , justifyContent:"center",flexWrap:"wrap"}}>
     <TextField sx={{ width: 300 }} id="outlined-basic" label="Paid Amount" variant="outlined" onChange={(e) => setPaidAmount(e.target.value)}
      value={paidAmount} />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Payment Date"
             value={paymentDate}
              onChange={(newValue) => {
                setPaymentDate(newValue);
              }}
              renderInput={(params) => (
                <TextField required {...params} size="medium" sx={{ width: 300, color:"black" }} />
              )}
            />
          </LocalizationProvider>


         <TextField sx={{ width: 300 }} id="outlined-basic" label="Payment Status" variant="outlined" onChange={(e) => setPaymentStatus(e.target.value)}
          value={paymentStatus}
           />

           <TextField sx={{ width: 300 }} id="outlined-basic" label="Transactions Detail" variant="outlined" onChange={(e) => setTransactionsDetail(e.target.value)}
             value={transactionsDetail} />


            <Button size='large' sx={{ width:{sm:300, xs:250}, mb:"20px" }} onClick={handlePaymanetUpdate}  variant="contained" color="success">Update Payment</Button>
     </Box>

     </Box>
    </>
  )
}

export default PaymentdetailsForm