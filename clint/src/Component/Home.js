import React,{useEffect,useState} from 'react'
import './Home.css'

const Home = () => {
// const header={
//     backgroudColor: "#121212 ",
//     minHeight: "100vh",                   // in inline css firstly make a objrct
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 'calc(10px + 2vmin)',
//     color: 'blue'
// }



const [userName, setUserName,] = useState('');
const [show, setshow] = useState(false);

const userHomePage=async()=>{
  try{
    const res=await fetch('/getdata',{
method:"GET",
headers:{
    "Content-Type":"application/json"
},

    });
  
    const data=await res.json();
    console.log(data);
    setUserName(data.name);
     setshow(true)
}catch(err){
console.log(err);

}

}
useEffect(() => {
    userHomePage();
  
}, []);

    return (
        <>
        {/* <div style={header}>  for inline css */}
        <div className="home">
        <h4  > welcome</h4>
        <h1> {userName}</h1>
           <h2 > {show?'Happy To Come Back':'we are developer'}</h2>
        </div>
            
        </>
    )
}

export default Home
