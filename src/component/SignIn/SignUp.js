import React, {useState } from "react";
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import ParticlesBg from 'particles-bg';
import Kap from './Kap';
import Nap from "./Nap";
import Gap from "./Gap";

const SignUp = () => {

     const [name ,setName] = useState("");
     const [password ,setPassword] = useState("");
     const [email ,setEmail] = useState("");
     const navigate = useNavigate();
    
    const nav = () =>{
        navigate('/login');
    }
     

const collectData = async()=>{
      console.warn(name,email,password);

      let result = await fetch('http://localhost:3001/register',{
          method: 'post',
          body: JSON.stringify({name,email,password}),
          headers: {
            'Content-Type':'application/json'
          },   
      });
      result = await result.json();
     
      if(result){
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/products');
      }
      console.warn(result);
     }


    return(
        <>
        <div className="main">
        <div className="under">
         <div className="change" onClick={nav}>Log In</div>
        <div className="car">
       
             <div className="card-header">
                   <h1>Form Card</h1>
            </div>
             <div className="card-body">
             <div className="form-group">
            <label htmlFor="name">Name</label>
            <input className="inputBox" type="text" value ={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="inputBox" type="text" value ={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Email' />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="inputBox" type="text" value ={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password' />
            </div>
            <button type = "button" onClick={collectData} className="btn" >Sign Up</button>
            </div>
           </div>
           </div>
           <div className="side">
           <div className="three">
           <div className="three-kap"><Kap/></div>
           <div className="three-nap"><Nap/></div>
           <div className="three-gap"><Gap/></div>
           </div>
           <div id="scroll-container">
           <div id="scroll-text">
           “Products which are produced either completely by hand or with the help of tools.
            Mechanical tools may be <br/>used as long as the direct manual contribution of the 
            artisan remains the most substantial <br/> component of the finished product.
            Handicrafts are made from raw materials and can <br/> be produced in unlimited numbers.
           Such products can be utilitarian, aesthetic, artistic, creative,<br /> culturally attached,
            decorative, functional, traditional, religiously and socially symbolic and significant”.<br />
           </div>
           </div>
           </div>
           <ParticlesBg type="tadpole" bg={true} />
           </div></>
    )
}
export default SignUp;