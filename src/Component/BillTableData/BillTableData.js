import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid,GridEventListener ,useGridApiEventHandler,GridToolbar} from '@mui/x-data-grid';


import { Link, useNavigate } from 'react-router-dom';
import TotelDataFetch from './TotelDataFetch';


// let id = "";




 



  
function BillTableData() {


    const[ idMM,setIDMM ]=useState("");
    const handleEvent = (
        params, // GridRowParams
        event // MuiEvent<React.MouseEvent<HTMLElement>>
    // GridCallbackDetails
      ) => {
       //  navigate(`admin/${params.row.invoiceId}`)
      
       if(params.field==="showItem"){
     navigate(`/billtable/admin/${params.row.invoiceId}`)
      }
      if(params.field==="updatePayment"){
        navigate(`/billtable/updatepagment/${params.row.invoiceId}`)
         }
         if(params.field==="showBill"){
            alert("files")
            setIDMM(params.row.invoiceId)
            // navigate(`${params.row.invoiceId}`)
         

//     const getData = async()=>{
//     let response2 = await fetch(`http://localhost:8082/bill/files/get/file/?invoiceId=P000670171`)
//     let data2 = await response2.json()
//     // setTotelItemAmountBB(data2.data)
//  console.log("data2",data2)
//     }
//     getData()

             }
    

      }


    const columns = [
        {
            field: 'invoiceId',
            headerName: ' Invoice Id',
            width: 150,
            editable: true,
          },
        {
          field: 'employeeName',
          headerName: 'Employee Name',
          width: 150,
          editable: true,
        },
        {
          field: 'employeeCode',
          headerName: 'Employee Code',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 220,
          editable: true,
        },
    
        {
            field: 'reportingManager',
            headerName: 'Reporting Manager',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
    
          },
          {
            field: 'invoiceNumber',
            headerName: 'Invoice Number',
            width: 170,
            editable: true,
          },
        {
            field: 'invoiceDate',
            headerName: 'Invoice Date',
            width: 150,
            editable: true,
          },
          {
            field: 'brand',
            headerName: 'Brand',
            width: 150,
            editable: true,
          },
          {
            field: 'subBrand',
            headerName: 'Sub Brand',
            width: 150,
            editable: true,
          },
    
          {
            field: 'subCatagory1',
            headerName: 'Sub Catagory 1',
            width: 150,
            editable: true,
          },
          {
            field: 'subCatagory2',
            headerName: 'Sub Catagory 2',
            width: 150,
            editable: true,
          },
          {
            field: 'location',
            headerName: 'Location',
            width: 150,
            editable: true,
          },
          {
            field: 'expensesType',
            headerName: 'Expenses Type',
            width: 150,
            editable: true,
          },
          {
            field: 'preTaxAmount',
            headerName: 'Pre Tax Amount',
            width: 170,
            editable: true,
          },
          {
            field: 'gstAmount',
            headerName: 'GST Amount',
            width: 150,
            editable: true,
          },
          {
            field: 'totalAmount',
            headerName: 'Total Amount',
            width: 150,
            editable: true,
          }, {
            field: 'paymentMode',
            headerName: 'Payment Mode',
            width: 150,
            editable: true,
          },
    
          {
            field: 'paymentMethod',
            headerName: 'Payment Method',
            width: 170,
            editable: true,
          },
          {
            field: 'payDirectCard',
            headerName: 'Pay Direct Card Details',
            width: 190,
            editable: true,
          },
          {
            field: 'partnerCode',
            headerName: 'Partner/Customer Code',
            width: 190,
            editable: true,
          },
          {
            field: 'partnerName',
            headerName: 'Partner/Customer Name',
            width: 190,
            editable: true,
          },
          {
            field: 'invoiceDescription',
            headerName: 'Invoice Description',
            width: 190,
            editable: true,
          },
          {
            field: 'utr',
            headerName: 'URT',
            width: 150,
            editable: true,
          },
          {
            field: 'taskId',
            headerName: 'Task Id',
            width: 170,
            editable: true,
          },
          {
            field: 'serviceCategory',
            headerName: 'Service Category',
            width: 150,
            editable: true,
          },
          
          {
            field: 'transactionDetail',
            headerName: 'Transaction Detail',
            width: 170,
            editable: true,
          },
          {
            field: 'paidAmount',
            headerName: 'Update Paid Amount',
            width: 170,
            editable: true,
          },
         
          {
            field: 'paymentStatus',
            headerName: 'paymentStatus',
            width: 170,
            editable: true,
          },
          {
            field: 'paymentDate',
            headerName: 'paymentDate',
            width: 170,
            editable: true,
          },
          {
            field: 'showBill',
            headerName: 'Show Bill',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            type:"action",
             renderCell:()=><a style={{color:"blue",fontWeight:"600",cursor:"pointer"}}  
             href={`http://13.126.160.155:8088/bill/files/get/file/?invoiceId=${idMM}`} target="_blank"
             >Show Bill</a>
          }, 
     
          {
            field: 'showItem',
            headerName: 'Items Details',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            type:"action",
             renderCell:()=><p style={{color:"blue",fontWeight:"600",cursor:"pointer"}}
             >Item Details</p>
           
          }, 
          {
            field: 'updatePayment',
            headerName: 'Update Payment',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            type:"action",
             renderCell:()=><p style={{color:"blue",fontWeight:"600",cursor:"pointer"}}
             >Update Payment</p>
           
          }, 
    
      ];
      

   
    
    let navigate = useNavigate();
    const [billtabledata, setBillTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
          "http://13.126.160.155:8088/bill/bill/get/data/all"
          );
         let table = await dataTable.json();
         let adminTableData = await table.data;
         setBillTabledata(adminTableData?adminTableData:"");
      };
      fetchData();
    }, []);
     console.log("tabledata", billtabledata);
     const [pageSize, setPageSize] = React.useState(5);

  return (
    <>
<Box p={.5} sx={{ height: 680, width: '100%', backgroundColor:"#febd55"}}>
      <DataGrid
        rows={billtabledata}
        columns={columns}
         //====================Old Pagination code==========
        pageSize={100}
        rowsPerPageOptions={[500]}
        //====================New Pagination code==========
    //     rowsPerPageOptions={[5, 10, 20]}
    //     pageSize={pageSize}
    //    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
 //====================New Pagination Code End==========

        // checkboxSelection
        // disableSelectionOnClick
       // experimentalFeatures={{ newEditingApi: true }}    (rows)=>{setid(rows.email}
       //==============On Row Click event ===================
        //  onRowClick={handleEvent}
         //==============On Row Click event ===================
          //==============On Cell Click event ===================
        onCellClick={handleEvent}
         //============== On cell Click event ===================
           //============== On Export Csv Click event ===================
            components={{ Toolbar: GridToolbar }}
          //==============On Export Csv Click event ===================
      />
    </Box>

   

    </>
  )
}

export default BillTableData