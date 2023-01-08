import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function AddItems() {
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [sgst, setSgst] = useState("");
  const [cgst, setCgst] = useState("");
  const [igst, setIgst] = useState("");
  const [discount, setDiscount] = useState("");
  const [redeem, setRedeem] = useState("");
  const [unit, setUnit] = useState("");
  const [amountPaid, setAmountpaid] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [hsnCode, setHSNCode] = useState("");
  const [gstAmount, setGstAmount] = useState("");
  const { id } = useParams();
  const [tDSAmount, setTDSAmount] = useState("");
  const [totelItemAmountBB, setTotelItemAmountBB] = useState("");

  const invbillid = localStorage.getItem("BillID");
  const invNum = localStorage.getItem("InvoiceNumber");
  const invDate = localStorage.getItem("InvoiceDate");
  // const invname = localStorage.getItem("EmployeeName");
  let navigate = useNavigate();

  const handleonclick = () => {
    navigate(`/addItem/uploadeDocuments/${id}`);
    
  };



  
  const amount1 = +quantity * +rate;
  const tDSAmountTotel = (+amount1 * +tDSAmount) / 100;
  const gsttotelvalue =
    (+amount1 * +sgst) / 100 +
    (+amount1 * +cgst) / 100 +
    (+amount1 * +igst) / 100;
  const totelItemAmount = +amount1 + +gsttotelvalue - +discount - +redeem;
  console.log("totelAmount", totelItemAmount);


  const EMPNAME = localStorage.getItem("name");
  // useEffect(() => {
  //   const getData = async () => {
  //     let response2 = await fetch(`http://localhost:8082/bill/item/get/${id}`);
  //     let data2 = await response2.json();
  //     setTotelItemAmountBB(data2.data);
  //     // console.log("data2",data2)
  //   };
  //   getData();
  // }, []);



useEffect(() => {
  const getData = async()=>{
  let response2 = await fetch(`http://localhost:8082/bill/item/get/${id}`)
  let data2 = await response2.json()
  setTotelItemAmountBB(data2.data)
  // console.log("data2",data2)
  }
  getData()
 }, [totelItemAmountBB])

const totelAddItem = totelItemAmountBB.length;
 //console.log("totelItemAmountBB",totelItemAmountBB.length)



//  const handleonclickLogOut=async () => {
//     console.log({


//     });

//     try {
//       let response = await axios.post("http://13.126.160.155:8088/bill/item/save", {
//         amount: amount1,
//       });
//       alert("Item save successfully");
//       console.log(response);
//       // window.location.reload();
//     } catch (error) {
//       alert(error);
//     }
//   };






  const handleSubmit = async () => {
    console.log({
      // invoicenumber,
      category,
      itemName,
      quantity,
      rate,
      amount,
      itemCode,
      unit,
      sgst,
      cgst,
      igst,
      discount,
      redeem,
      totelItemAmount,
      hsnCode,
      gstAmount,
    });

    try {
      let response = await axios.post("http://13.126.160.155:8088/bill/item/save", {
        amount: amount1,
        amountPaid: totelItemAmount,
        categoryItem: category,
        cgst: cgst,
        dateOfInvoice: invDate,
        discount: discount,
        gstAmountItem: gsttotelvalue,
        igst: igst,
        invoiceNumber: invNum,
        itemCode: itemCode,
        itemName: itemName,
        quantity: quantity,
        rate: rate,
        redeemed: redeem,
        unit: unit,
        sgst: sgst,
        tds: tDSAmount,
        tdsAmount: tDSAmountTotel,
        invoiceId: invbillid,
      });
      alert("Item save successfully");
      console.log(response);
      // window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box sx={{backgroundColor:"#febd55", minHeight:"900px", maxHeight:"100%"}}>
      <Box
       
        gap={3}
        sx={{
          // backgroundColor:"#fab100",
          display: "flex",
          flexDirection: "column",
          padding: { sm: "8px", xs: "40px" },
        }}
      >
        {/* <Box sx={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
        <Box sx={{ display: "flex",flexDirection:"column", gap:"10px" }}>
          <Typography variant="p" color="initial">
            Invoice number:- {invNum}
          </Typography>
          <Typography variant="p" color="initial">
            Employee Name:- {invname}
          </Typography>
          <Typography variant="p" color="initial">
            Date:- {invDate}
          </Typography>
        </Box>
        <Box sx={{fontSize:"17px",}}>Totel Add Item:- {totelAddItem}</Box>
        </Box> */}

        <Box sx={{display: "flex",justifyContent:"space-between"}}>
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: { sm: "80px" },
            }}
          >
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "20px", fontWeight: "800" }}
              >
                Invoice number:-
              </span>{" "}
              {invNum || "No-Data"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "800" }}
              >
                {" "}
                Employee Name:-{" "}
              </span>{" "}
              {EMPNAME || "No-Data"}
            </Typography>
            <Typography variant="p" color="initial">
              <span
                style={{ color: "green", fontSize: "16px", fontWeight: "800" }}
              >
                Date:-
              </span>{" "}
              {invDate || "No-Data"}
            </Typography>
          </Box>
          {/* <Box>
            <Box>{totelItemAmountBB.length}</Box>
          <Button 
      onClick={handleonclickLogOut}
      color="success"
      variant="contained"
      >
      logout
      </Button>
      </Box> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* <Autocomplete
          
          disablePortal
          options={top100Films}
          sx={{ width: 223 }}
          onChange={(event, newValue)=>{setSource(newValue.label)}}
          renderInput={(params) => <TextField  {...params} label="Source" />}
        /> */}

          {/* <TextField   label="Source"  onChange={(e)=>{setSource(e.target.value)}}/> */}

          <TextField
            label="Category"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <TextField
            label="Item Code"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(e) => {
              setItemCode(e.target.value);
            }}
          />

          <TextField
            label="Item Name"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />

          {/* <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: "300px" }}
            onChange={(event, newValue) => {
              setItemCode(newValue.label);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Item Code" />
            )}
          /> */}

          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: "300px" }}
            onChange={(event, newValue) => {
              setItemName(newValue.label);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Name of Item" />
            )}
          /> */}

          {/* <TextField   label="HSN/SAC Code"  onChange={(e)=>{setHSNCode(e.target.value)}}/> */}
          <TextField
            label="Quantity"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />

          {/* <TextField   label="Unit"  onChange={(e)=>{setUnit(e.target.value)}}/> */}

          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: "300px" }}
            onChange={(event, newValue) => {
              setUnit(newValue.label);
            }}
            renderInput={(params) => <TextField {...params} label="Unit" />}
          /> */}

          <TextField
            label="Unit"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          />
          <TextField
            label="Rate"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />

          <TextField
            label="Amount"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            InputLabelProps={{ shrink: true }}
            disabled
            value={amount1}
          />

          {/* <TextField   label="Rate" size="small" onChange={(e)=>{setRate(e.target.value)}}/> */}

          {/* <TextField label="Delivery Charges"    onChange={(e)=>{setDeliveryCharges(e.target.value)}}/>

        <TextField label="Packaging Charges"    onChange={(e)=>{setPackaging(e.target.value)}}/> */}

          {/* <TextField label="SGST"  onChange={(e)=>{setSgst(e.target.value)}}/> */}

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            options={sGSTDATA}
            onChange={(event, newValue) => {
              setSgst(newValue.label);
            }}
            renderInput={(params) => <TextField {...params} label="SGST %" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cGSTDATA}
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(event, newValue) => {
              setCgst(newValue.label);
            }}
            renderInput={(params) => <TextField {...params} label="CGST %" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={iGSTDATA}
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(event, newValue) => {
              setIgst(newValue.label);
            }}
            renderInput={(params) => <TextField {...params} label="IGST %" />}
          />

          {/* <TextField label="CGST"  onChange={(e)=>{setCgst(e.target.value)}}/>

        <TextField label="IGST"  onChange={(e)=>{setIgst(e.target.value)}}/> */}
          <TextField
            label="GST AMOUNT"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            InputLabelProps={{ shrink: true }}
            disabled
            value={gsttotelvalue}
          />

          <TextField
            label="Discount"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />

          <TextField
            label="Redeem"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setRedeem(e.target.value);
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tDSDATA}
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            onChange={(event, newValue) => {
              setTDSAmount(newValue.label);
            }}
            renderInput={(params) => <TextField {...params} label="TDS %" />}
          />
          <TextField
            label="TDS Amount"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            disabled
            InputLabelProps={{ shrink: true }}
            value={tDSAmountTotel}
          />

          <TextField
            label="Amount Paid"
            sx={{ width: "300px", backgroundColor:"rgba(251, 251, 251, 0.3)" }}
            InputLabelProps={{ shrink: true }}
            // disabled
            // onChange={(e)=>{setBillAmount(e.target.value)}}
            value={totelItemAmount}
          />
        </Box>
        </Box>
        <Box textAlign={"center"}>
          <Button
            color="success"
            size="large"
            sx={{ width:{sm:"300px", xs:"240px"} }}
            onClick={handleSubmit}
            variant="contained"
          >
            Add Item
          </Button>
        </Box>
      <Box mt={5} sx={{ display: "flex", justifyContent:"center"}}>

      <Button
        endIcon={<CloudUploadIcon/>}
        color="success"
        variant="contained"
        onClick={handleonclick}>
          Document
      </Button>

      

      </Box>
    </Box>
  );
}

export default AddItems;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const sGSTDATA = [
  { label: "2.5" },
  { label: "6" },
  { label: "9" },
  { label: "14" },
  { label: "0" },
];

const cGSTDATA = [
  { label: "2.5" },
  { label: "6" },
  { label: "9" },
  { label: "14" },
  { label: "0" },
];

const iGSTDATA = [
  { label: "5" },
  { label: "12" },
  { label: "18" },
  { label: "28" },
  { label: "0" },
];

const tDSDATA = [
  { label: "0" },
  { label: "1" },
  { label: "2" },
  { label: "5" },
  { label: "10" },
  { label: "15" },
  { label: "20" },
  { label: "25" },
  { label: "30" },
];
