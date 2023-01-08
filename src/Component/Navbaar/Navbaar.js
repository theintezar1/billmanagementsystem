import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Navbaar() {

const EMPCODE  = localStorage.getItem("employeeCode");
const EMPNAME = localStorage.getItem("name");
const EMPEMAIL = localStorage.getItem("email");
const userType = localStorage.getItem("User")

  const handleonclickLogOut=async () => {
    console.log({


    });
 //  main URl=   http://13.126.160.155:8088/bill/login/logout?email=aarti%40thepinchlife.com&employeeCode=10230301
    try {
      let response = await axios.post(`http://13.126.160.155:8088/bill/login/logout?email=${EMPEMAIL}&employeeCode=${EMPCODE}`, {
        email:EMPEMAIL
      });
      alert("Logout successfully");
      console.log(response);
      localStorage.clear()
      navigate("/")
      window.location.reload();
     
    } catch (error) {
      alert(error);
    }
  };


  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 1,
        justifyContent: "space-between",
        backgroundColor: "#fab100",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <Box sx={{marginLeft:{ sm: 4, xs: 1 },  display:"grid", alignItems:"center", justifyContent:"center"}}>

        <img
         onClick={()=>{{userType=="ADMIN" && navigate("/billtable")}}}
          style={{
            borderRadius: "50%",
            cursor:"pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
          width={"50px"}
          src="https://media.licdn.com/dms/image/C4D0BAQFLfwyhVhoTow/company-logo_200_200/0/1667996664233?e=1678924800&v=beta&t=45r3-39fVU5rmGzZEf0ozbtcfJbY4f4mlvtAUpeuVug"
          alt=""
        />
        <p style={{textAlign:"center", color:"#b04325", fontFamily:"Garamond, serif", fontWeight:"800"}}>pinch</p>
      </Box>
      <Box sx={{display:"flex", gap:"30px"}}>
      <Button mt={.8} variant="contained" color="success">
        <Link 
        // onClick={()=>{localStorage.clear()}}
         style={{color:"white", fontWeight: "600"}} to="/mainform">Add Bill</Link>
      </Button>

     <Button variant="contained" color="success" onClick={handleonclickLogOut}>LOGOUT</Button>
</Box>

    </Box>
  );
}

export default Navbaar;
