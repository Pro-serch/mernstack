
import React,{useEffect,useState} from 'react'
// import { post } from '../../../server/router/auth';
import './Contact.css'
const Contact = () => {

  const [userData, setUserData,] = useState({name:"",email:"",phone:"",message:""});

useEffect(() => {

  const userContact=async()=>{
    try{
      const res=await fetch('/getdata',{
  method:"GET",
  headers:{ 
      "Content-Type":"application/json"
  },
  
      });
   
      const data=await res.json();
      console.log(data);
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone,message:data.message});
  
      if(!res.status===200){
          const error=new Error(res.error);
          throw error;
      }
  
  }catch(err){
  console.log(err);
  
  }
  
  }
  userContact();
  
}, [userData]);

const handleInputs=(e)=>{
const name=e.target.name;
const value=e.target.value;

setUserData({...userData,[name]:value})
}

const sendMessage=async (e)=>{
e.preventDefault();
const {name,email,phone,message}=userData;

const res=await fetch('/contact',{
  method: "POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,phone,message
  })
});
const data=await res.json();
if(!data){
  console.log("Message not send");
} else{
  alert("Message send");
  setUserData({...userData,message:""})
}
}



    return (
        <>
              <div className="container-fluid ">
                  <div className="row mt-5">
                      <div className="col-lg-10 offset-lg-1 d-flex justify-content-between"> 
                        {/* phoneno */}
                        <div className="contact_info_item d-flex justify-center align-item-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png " widht="30" height="30" alt="phone"/>
                            <div className="contact_info_content ">
                            <div className="contact_info_title ">
                                Phone
                                </div>
                                <div className="contact_info_text ">
                                  +91 6589451258
                                </div>
                            </div>
                            

                        </div>

                          {/* phoneno */}
                          <div className="contact_info_item d-flex justify-center align-item-center">
                            <img src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/007/873/original/email.png" widht="30" height="30" alt="phone"/>
                            <div className="contact_info_content ">
                            <div className="contact_info_title ">
                                Emai
                                </div>
                                <div className="contact_info_text ">
                                  kumar@gmail.com
                                </div>
                            </div>
                            

                        </div>

                          {/* phoneno */}
                          <div className="contact_info_item d-flex justify-center align-item-center">
                            <img src="https://icones.pro/wp-content/uploads/2021/04/icones-de-localisation-de-la-carte-verte.png " widht="30" height="30" alt="phone"/>
                            <div className="contact_info_content ">
                            <div className="contact_info_title ">
                               Address
                                </div>
                                <div className="contact_info_text ">
                                  bangalore
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>

              </div>

{/* contact us form */}
   

   <div className="contact_form">
   <div className="container-fluid">
   <div className=" row">
   <div className="col-lg-10 offset-lg-1">
   <div className="contact_form_container py-5">
   <div className="contact_form_title">
Get in Touch
   </div>
   <form method="POST" id="contact_form">
   <div className="contact_form_name d-flex justify-content-between align-item-between mt-2">
    <input type="text" id="contact_form_name" value={userData.name}
    name="name"
    onChange={handleInputs}
    className="contact_form_name" placeholder="your name"
    require="true"/>
<input type="email" id="contact_form_email"value={userData.email}
   name="email"
   onChange={handleInputs}
    className="contact_form_email" placeholder="your Email"
    require="true"/>
    <input type="text" id="contact_form_phone"value={userData.phone}
    name="phone"
    onChange={handleInputs}
    classphone="contact_form_name" placeholder="your phone no"
    require="true"/>
</div>
<div className="contact_form_text mt-5">
<textarea className="text_field contact_form_message"
     name="message"
     value={userData.message}
     onChange={handleInputs}
     placeholder="message" cols="15" rows="1"></textarea>
</div>
<div className="contact_from_button">
    <button type="submit" className="button contact_submit_button"
    onClick={sendMessage}> send Message</button>
</div>
</form>
</div>

</div>

</div>

</div>

   </div>


        </>
    )
}

export default Contact
