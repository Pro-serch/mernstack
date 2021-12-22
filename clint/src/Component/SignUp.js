import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink,useHistory } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
const history = useHistory();
  const [userRegistration,setuserRegistration]=useState({
    name:"  ",
    email:"  ",
    phone:"  ",
    work:"",
    password:"  ",
    cpassword:" "
}); 
let name,value;
const handleInput=(e)=>{
 name=e.target.name;  //const name=e.target.name;
 value=e.target.value;// const value=e.target.value;
console.log(name,value);

setuserRegistration({...userRegistration, [name]:value})
}

const postData=async(e)=>{
  e.preventDefault();
  const { name,email,phone,work,password,cpassword} =userRegistration
  const res = await fetch('/register',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    }, 
    body:JSON.stringify({
      name,email,phone,work,password,cpassword
    })
  });

  const data= await res.json();
  if(data.status===422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration")
  }else{
    window.alert("successfull Registration");
    console.log("successfull Registration");

    history.push("/login");
  }
}
  
    return (
        <>
            <div className="form-group1">
            <div className= "right">
  <NavLink to ="/login" className="btn btn-secondary">i am already register</NavLink>
</div>
 <form method="POST">
 <div className="group">
    <label htmlFor="InputName">Name</label>
    <input type="text" className="center" autoComplete="off" placeholder="Enter name"
    value={userRegistration.name}
    onChange={handleInput}
    name="name" id="name"
    />
  </div>
  
  <div className="group">
    <label htmlFor="InputEmail1">Email address</label>
    <input type="email"className="center1" autoComplete="off"  placeholder="Enter email"
    value={userRegistration.email}
    onChange={handleInput}
    name="email" id="email" 
    
    />
  </div>
  
  <div className="group">
    <label htmlFor="InputPhone">Phone</label>
    <input type="phone" className="center2" autoComplete="off"  placeholder="Enter Phone"
    value={userRegistration.phone}
    onChange={handleInput}
    name="phone" id="phone" 
    
    />
  </div>
  
  <div className="group">
    <label htmlFor="InputWork">Work</label>
    <input type="work"className="center3" autoComplete="off" placeholder="Work"
    
    value={userRegistration.work}
            onChange={handleInput}
            name="work" id="work" 
    />
  </div>
  
  <div className="group">
    <label htmlFor="InputPassword">Password</label>
    <input type="email"className="center4" autoComplete="off" placeholder="Enter Password"
    value={userRegistration.password}
    onChange={handleInput}
    name="password" id="password" 
    />
    
  </div>
  
  <div className="group">
    <label htmlFor="InputCPassword">CPassword</label>
    <input type="cpassword" className="center5"autoComplete="off" placeholder="Enter CPassword"
    value={userRegistration.cpassword}
    onChange={handleInput}
    name="cpassword" id="cpassword" 
    />
    
  </div>

  <div className="form-check">
    <input type="checkbox"  id="exampleCheck1"/>
    <label htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className="group form-button">
    <input type="submit"name="signup" id="signup" className="form-submit"
    value="register" onClick={postData}
    
     
    />
    
  </div>

  {/* <div>
  <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
  </div> */}




</form>



</div> 
                       
                    
                     
        </>
    )
}








export default SignUp
