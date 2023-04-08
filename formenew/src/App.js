

import React, { useState } from "react";
import './App.css'

function Form() {
    let[username,setusername]=useState('')
    
    let[email,setemail]=useState('')
    let[userpass,setpassword]=useState('')
    let[name,setname]=useState('')
    
    let[emailid,setemailid]=useState('')
    let[pass,setpass]=useState('')
    let showbox=(e)=>{e.preventDefault() 
      setusername(name) 
      setemail(emailid)
      setpassword(pass)
    }
  return (
    <center>
    <div>
      <div className="box">
        <form onSubmit={showbox}>
        <input type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)}/>
        <br/>
        <br/>
          <input type="email" placeholder="Email" onChange={(e)=>setemailid(e.target.value)}/>
          <br/>
          <br/>
          <input type="password" placeholder="Password" onChange={(e)=>setpass(e.target.value)}/>
          <br/>
          <br/>
          <button type="submit">submit</button>
        </form>
      </div>
      <h4>name : <span>{username}</span></h4>
      <h4>Email: <span> {email}</span></h4>
      <h4>password : <span>{userpass}</span></h4>
    </div>
    </center>
  );
}

export default Form;


