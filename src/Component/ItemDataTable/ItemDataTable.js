import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid,GridEventListener ,useGridApiEventHandler,GridToolbar} from '@mui/x-data-grid';
import { useParams } from "react-router";

const columns = [
    //  { field: 'invoiceId', headerName: 'ID', width: 90 },
    {
      field: 'itemName',
      headerName: 'Item Name',
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
      field: 'categoryItem',
      headerName: 'Item Category',
      width: 170,
      editable: true,
    },
    {
        field: 'dateOfInvoice',
        headerName: 'Invoice Date',
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
        field: 'dateOfInvoice',
        headerName: 'Invoice Date',
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
        width: 110,
        editable: true,
      },

      {
        field: 'redeemed',
        headerName: 'Redeemed',
        width: 150,
        editable: true,
      },
      {
        field: 'sgst',
        headerName: 'SGST',
        width: 150,
        editable: true,
      },
      {
        field: 'cgst',
        headerName: 'CGST',
        width: 150,
        editable: true,
      },
      {
        field: 'igst',
        headerName: 'IGST',
        width: 110,
        editable: true,
      },
      {
        field: 'tds',
        headerName: 'TDS',
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
        headerName: 'Total Amount',
        width: 110,
        editable: true,
      },
       {
        field: 'unit',
        headerName: 'Unit',
        width: 110,
        editable: true,
      },
      {
        field: 'amount',
        headerName: 'Amount',
        width: 110,
        editable: true,
      },

    //   {
    //     field: 'amountPaid',
    //     headerName: 'Amount Paid',
    //     width: 110,
    //     editable: true,
    //   },
 

  ];
  

function ItemDataTable() {
    const { id } = useParams();
    const [billtabledata, setBillTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
        //   `http://localhost:8082/bill/item/get/${id}`
          `http://13.126.160.155:8088/bill/item/get/${id}`
  
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
     console.log("length",billtabledata.length)
  return (
    <>
    {/* <Box>Totel Item:-{billtabledata.length}</Box> */}
    <Box p={.5}  sx={{ height: 680, width: '100%' }}>
      <DataGrid
        rows={billtabledata}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[500]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
    
    
    </>
  )
}

export default ItemDataTable