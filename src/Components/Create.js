import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Create() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const history=useNavigate()
    const header={"Access-Control-Allow-Origin":"*"};
    const handleSubmit=(e)=>{
        e.preventDefault();
       axios.post(
        "https://64857754a795d24810b6fade.mockapi.io/crud",{
         name:name,
         email:email,
         header,
       })
      .then(()=>{
        history("/read");
      })
    };
  return (
    <>
      <div className="d-flex justify-content-between m-3">
     <h2>Create Account</h2>
     <Link to="/read">
     <button className="btn btn-primary">Show Data</button>
     </Link>
     </div>
    <form>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </form>
    </>
  )
}

export default Create
