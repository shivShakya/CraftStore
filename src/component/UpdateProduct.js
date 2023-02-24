import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ParticlesBg from 'particles-bg';

const UpdateProduct = () =>{

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [err,setErr] = useState(false);
    const params = useParams();
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();

    const nav = () =>{
        navigate('/profile');
    }
     



    useEffect(()=>{
        getProduct();
        getProductDetails();
    },[]);


    const getProductDetails = async() =>{
        console.warn(params);
        let result = await fetch(`http://localhost:3001/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    const updateProduct = async() =>{

        console.warn(name,price,category,company);
        let result = await fetch(`http://localhost:3001/product/${params.id}`,{
            method: 'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);

    }

    //delete product

    const deleteProduct = async(id) =>{
        let result = await fetch(`http://localhost:3001/products/${id}`,{
            method:"Delete"
    
        });
        result = await result.json();
        if(result){
            alert("Your Product has been deleted");
        }
    };
    



    // get product


    const getProduct = async( ) =>{
        let result = await fetch('http://localhost:3001/products');
        result = await result.json();
        const userId = JSON.parse(localStorage.getItem('user')).user._id;
        console.warn(userId);
        const array = [];
        result.forEach(element => {
            if (userId === element.userId){
                  array.push(element) ;   
            }
         })
        setProducts(array);
    }
    return(
        <div  className="profile">
              <div className="ad-sell">
                 <div className="btn-add-sell" onClick={nav}>Add Product</div>
                 <div className="product-box">
                 <div style={{display:'block'}} className='form-group'>
                 <input className="ma3" type = 'text' value={name} onChange={(e)=>{setName(e.target.value)}}   placeholder="Enter Product Name" />  
                 </div>
                 <div className="form-group">
                 <input className="ma3" type = 'text' value={price} onChange={(e)=>{setPrice(e.target.value)}}   placeholder="Enter Price" />
                 </div>
                 <div className="form-group">
                 <input className="ma3" type = 'text' value={category} onChange={(e)=>{setCategory(e.target.value)}}  placeholder="Enter Category" />
                 </div>
                 <div className="form-group">
                 <input className="ma3" type = 'text' value={company} onChange={(e)=>{setCompany(e.target.value)}}   placeholder="Enter Company" />
                 </div>
               
                 <button  onClick={updateProduct}>Update</button>
                 </div>
            </div>
        
         <div className="card-list">
            {
               products.map((item,index)=>
                 <div className="card" >
                       <div className="card-tags">
                      <img 
                             src =  {`https://source.unsplash.com/200x200/?${item.name}`}
                             alt = 'unsplash'
                      />
                      <h1>{item.name}</h1>
                      <hr></hr>
                      <h5>{item.category}</h5>
                        <h5> {item.company}</h5>
                      
                      <button onClick={()=> deleteProduct(item._id)}>Delete</button>
                      <a href= {"/update/"+item._id}>Update</a>
                    </div>
                 </div>
               )       
         }
          </div>
          <ParticlesBg type="tadpole" bg={true} />
          </div>
    )
}

export default UpdateProduct;