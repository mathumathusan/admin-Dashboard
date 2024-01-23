import React, { useState } from 'react'
import "./Userlist.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, redirect } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import { userrows } from '../../dummyData';


function Userlist() {
  
  const [data,setData]=useState(userrows)

  const handledelete=(id)=>{
     setData(data.filter((item)=>{
      return item.id!==id
     }))
  }
   
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      editable: true,
      renderCell:(params)=>{
        return(
            <div className='userListUser'>
                <img src={params.row.avatar} className='userListImg' alt="" />
                {params.row.username}
            </div>
        )
      }
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
        field:"action",
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                  <button className="edit" >edit</button>
                  </Link>
                
                <DeleteOutline className='delete' onClick={()=>{handledelete(params.row.id)}} />
                </>
            )
        }
    }
  ];
  





  return (
    <div className='userlist'>
<Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}

export default Userlist