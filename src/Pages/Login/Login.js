import React, { useState } from "react";
import "./login.css";
import { Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [employeeCode, setEmployeeCode] = useState("")
  const [password, setPassword] = useState("")

  console.log(employeeCode, password)

  const navigate = useNavigate()
  
  
  const handleSubmit = async () => {

    try {
      let response = await axios.post("http://13.126.160.155:8088/bill/login/login",{
        employeeCode:employeeCode,
        password:password
      });

      alert(response.data.message);
       if(response.data.data.userType=="USER"){

      navigate("/mainform")
      localStorage.setItem("User", response.data.data.userType)
      localStorage.setItem("employeeCode", response.data.data.employeeCode)
      localStorage.setItem("email", response.data.data.email)
      localStorage.setItem("name", response.data.data.employeeName)
      localStorage.setItem("status", response.data.data.status)
      console.log(response.data.data.userType);
      window.location.reload();
       }

       if(response.data.data.userType=="ADMIN"){
        navigate("/billtable")
        localStorage.setItem("User", response.data.data.userType)
        localStorage.setItem("employeeCode", response.data.data.employeeCode)
        localStorage.setItem("email", response.data.data.email)
        localStorage.setItem("name", response.data.data.employeeName)
        localStorage.setItem("status", response.data.data.status)
        console.log(response.data.data.userType);
        window.location.reload();
         }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="Body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
        <Box
          sx={{
            mt:"-30px",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            }}
            width={"70px"}
            src="https://media.licdn.com/dms/image/C4D0BAQFLfwyhVhoTow/company-logo_200_200/0/1667996664233?e=1678924800&v=beta&t=45r3-39fVU5rmGzZEf0ozbtcfJbY4f4mlvtAUpeuVug"
            alt=""
          />
          <p
            style={{
              textAlign: "center",
              color: "#b04325",
              fontFamily: "Garamond, serif",
              fontWeight: "800",
              fontSize:"17px"
            }}
          >
            pinch
          </p>
        </Box>

        <label for="username">Employee Code</label>
        <input onChange={(e)=>{setEmployeeCode(e.target.value)}} type="text" placeholder="Employee Code" id="username" />

        <label for="password">Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" id="password" />

        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}

export default Login;
