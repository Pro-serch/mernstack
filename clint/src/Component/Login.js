import React ,{useState,useContext} from 'react'
import './Login.css'
import { NavLink,useHistory } from 'react-router-dom';
import {UserContext} from "../App";

const Login = () => {

const {dispatch} = useContext(UserContext)
  const history = useHistory();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const loginUser = async(e)=>{
  e.preventDefault(); 
  const res=await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }, 
    body:JSON.stringify({ 
      email,password
    })
  });

  const data=res.json();
  if(data.status===400|| !data){
    window.alert("Invalid credential");
    console.log("Invalid credential")
  }else{
    window.alert("Login successfull ");
    console.log(" Login successfull ");

    dispatch({type:"USER",payload:true })
    history.push("/");
  }
}

    return (
        <>
        <div className="form-group">
                <div className="title">
    <h1>Sign Up</h1>
   
  </div>

  <div className="sub_mit1">
  <NavLink to ="/about" className="btn btn-secondary">About</NavLink>
</div>
             <form method="POST">
     
 
  <div className="group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="center6"  autoComplete="off" placeholder="Enter email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    name="email" id="email"
    />
  </div>
  <br/>
  <div className="group">
    <label htmlFor="exampleInputEmail1">Password</label>
    <input type="text" className="center7" autoComplete="off" placeholder="Enter Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    name="password" id="password"
    />
  </div>
  <br/>
  <div className="form-check">
    <input type="checkbox"  id="exampleCheck1"/>
    <label  htmlFor="exampleCheck1">Check me out</label>
  </div>
  
  <div className="sub_mit">
  <button type="submit" className="btn btn-primary" 
  onClick={loginUser}>log in</button>
  </div>
</form>
<div>
<br></br>
</div>

<br></br>
</div>
        </>
    )
}

export default Login
    


