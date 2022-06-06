import React,{useState} from 'react'
import "./admin.css"
import Button from '@mui/material/Button';
import { BasicModal, BasicTextFields } from './components';
function Admin() {

  return (
    <div className="admin"> 
   
     <div className="employee">
         <h1>Add Employee</h1> 
         <BasicTextFields title="name" />
         <BasicTextFields title="job" />
         <BasicTextFields title="id" />

         <Button variant="contained" >Add Employee</Button>

     </div>
    </div >
  )
}

export default Admin