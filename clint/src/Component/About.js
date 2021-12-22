import React,{useEffect,useState} from 'react'
import{useHistory} from 'react-router-dom'
import"./About.css"
const About = () => {
const history = useHistory()

const [userData, setUserData,] = useState('')



useEffect(() => {
    const callAboutpage = async ()=>{
        try{
            const res=await fetch('/about',{
        method:"GET",
        headers:{
            Accept:"application/jason", // for cockies
            "Content-Type":"application/json"
        },
        credentials:"include"/// for token
            });
         
             
        
            const data=await res.json();
            console.log(data);
            setUserData(data);
        
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        
        }catch(err){
        console.log(err);
        history.push('/login');
        }
            }
    callAboutpage();
 },[history,userData])



    return (
        <>
              <div className="continer emp-profile">
                  <form method="GET">
           {/* first grid        */}
  <div className="row">
    <div className="col-md-4">
    <img  width= '40%' height ='60%'src="https://st4.depositphotos.com/1842549/21161/i/450/depositphotos_211610776-stock-photo-about-us-icon.jpg" alt ="logo"/>
    </div>
{/* second grid */}
    <div className="col-md-6">
     <div className="profile-head">
       <h5>{userData.name}</h5>
       <h6>{userData.work}</h6>
        <p className="profile-rating mt-3 mb-5">Ranking:<span>1/10</span></p>
             
  <ul className="nav nav-tabs" id="myTab" role ="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
  </li>
  <li className="nav-item">
  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Time Line</a>
  </li>
   
</ul>
     </div>
    </div>
    
    {/* third grid */}
    <div className="col-md-2 ">
    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"></input>
    </div>
  </div>

  {/* buttom ka grid */}
  <div className="row">
    {/* left side url */}
    <div className="col-md-4">
     <div className="profile-work">
        <p>WORK LINK</p>
        <a href="https://www.youtube.com/" target=""> youtube</a><br/>
        <a href="https://www.instagram.com/" target=""> Instagram</a><br/>
        <a href="https://www.linkedin.com/signup" target=""> Linkedin</a><br/>
        <a href="https://github.com/" target=""> github</a><br/>
        <a href="https://www.w3schools.com/" target=""> Web devp Tutorials</a><br/>
        <a href="https://www.youtube.com/watch?v=W74y1RxN6BA" target=""> About mechanical engineer</a>
     </div>

    </div>
    {/* right side data toogle */}
    <div className="col-md-8 pl-5 about-info">
          <div className="tab-content" id="myTabContent">
              <div className="tab-pan fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {/* level */}
                    <div className="row">
                        <div className="col-md-6">
                           <label>USER ID</label><br/>
                            </div>
    {/* level value */}
    <div className="col-md-6">
    <text>{userData.id}</text>
    </div>
    </div>

    <div className="row mt-3">
    <div className="col-md-6">
     <label>Name</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
     <text>{userData.name}</text>
    </div>
    </div>

    <div className="row mt-1.5">
    <div className="col-md-6">
     <label>Email</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
     <text>{userData.email}</text>
    </div>
    </div>
    <div className="row mt-1.5">
    <div className="col-md-6">
     <label>Phone No</label>
    </div>
    {/* level value */}
    <div className="col-md-6">
     <text>{userData.phone}</text>
    </div>
    </div>

    <div className="row mt-1.5">
    <div className="col-md-6">
     <label>proffession</label>
    </div>
    {/* level value */}
    <div className="col-md-6">
     <text>{userData.work}</text>
    </div>
    </div>
    </div>
{/* timeline */}

<div className="tab-pan fade" id="profile" role="tabpanel"aria-labelledby="profile-tab">
    {/* row for grid */}
    <div className="row">  
    {/* col-md-6 for grid division */}
    <div className="col-md-6">
     <label>Experience</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
    <text>Expert</text>
    </div>
    </div>
    <div className="row mt-0.5">
    <div className="col-md-6">
     <label>Hourly Rate</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
    <text>$101</text>
    </div>
    </div>
    <div className="row mt-0.5">
    <div className="col-md-6">
     <label>Hourly Rate</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
    <text>$101</text>
    </div>
    </div>

    <div className="row mt-0.5">
    <div className="col-md-6">
     <label>Hourly Rate</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
    <text>$101</text>
    </div>
    </div>
    <div className="row mt-0.5">
    <div className="col-md-6">
     <label>Hourly Rate</label><br/>
    </div>
    {/* level value */}
    <div className="col-md-6">
    <text>$101</text>
    </div>
    </div>
    
    
</div>

     </div>
     
    </div>
    
    </div>
    





                  </form>
              </div>

        </>
    )
}

export default About
