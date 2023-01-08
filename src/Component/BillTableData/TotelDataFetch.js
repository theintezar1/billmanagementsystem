import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
     { field: 'invoiceId', headerName: 'ID', width: 90 },
    // {
    //   field: 'employeeName',
    //   headerName: 'Employee Name',
    //   width: 150,
    //   editable: true,
    // },
    // {
    //   field: 'employeeCode',
    //   headerName: 'Employee Code',
    //   width: 150,
    //   editable: true,
    // },
    // {
    //   field: 'email',
    //   headerName: 'Email',
    //   width: 170,
    //   editable: true,
    // },
    {
        field: '',
        headerName: 'Category Item',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell:params=><button onClick={()=>{alert("hii")}}>hii</button>
        
      },

    {
        field: 'categoryItem',
        headerName: 'Category Item',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell:params=><button>hii</button>
        
      },
      {
        field: 'invoiceNumber',
        headerName: 'Invoice Number',
        width: 170,
        editable: true,
      },
    {
        field: 'dateOfInvoice',
        headerName: 'Invoice Date',
        width: 150,
        editable: true,
      },

      {
        field: 'itemCode',
        headerName: 'Item Code',
        width: 150,
        editable: true,
      },
      {
        field: 'itemName',
        headerName: 'Item Name',
        width: 110,
        editable: true,
      },

      {
        field: 'unit',
        headerName: 'Unit',
        width: 150,
        editable: true,
      },
      {
        field: 'quantity',
        headerName: 'Quantity',
        width: 150,
        editable: true,
      },
      {
        field: 'rate',
        headerName: 'Rate',
        width: 150,
        editable: true,
      },
      {
        field: 'amount',
        headerName: 'Amount',
        width: 110,
        editable: true,
      },
      {
        field: 'gstAmountItem',
        headerName: 'GST AmountItem',
        width: 170,
        editable: true,
      },
      {
        field: 'tdsAmount',
        headerName: 'TDS Amount',
        width: 110,
        editable: true,
      },
      {
        field: 'amountPaid',
        headerName: 'Amount Paid',
        width: 110,
        editable: true,
      },
     {
        field: 'discount',
        headerName: 'Discount',
        width: 110,
        editable: true,
      },

      {
        field: 'redeemed',
        headerName: 'Redeemed',
        width: 170,
        editable: true,
      },
      {
        field: 'cgst',
        headerName: 'CGST',
        width: 170,
        editable: true,
      },
      {
        field: 'sgst',
        headerName: 'SGST',
        width: 190,
        editable: true,
      },
      {
        field: 'igst',
        headerName: 'ISGT',
        width: 190,
        editable: true,
      },
      {
        field: 'tds',
        headerName: 'TDS',
        width: 190,
        editable: true,
      },
   

    
  ];
  

function TotelDataFetch() {
    const [billtabledata, setBillTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
          "http://localhost:8082/bill/item/get/items/"
       //  "http://localhost:8082/bill/bill/gets/merge"
          );
         let table = await dataTable.json();
         let adminTableData = await table.data;
        //  let cityData=  adminTableData;
         setBillTabledata(adminTableData?adminTableData:"");
        // console.log(cityData)
      };
      fetchData();
    }, []);
     console.log("tabledata", billtabledata);
  return (
    <>
<Box p={.5} sx={{ height: 720, width: '100%' }}>
      <DataGrid
        rows={billtabledata}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[500]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

   

    </>
  )
}

export default TotelDataFetch