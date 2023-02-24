import React, { useEffect, useState , useRef} from "react";
import ParticlesBg from 'particles-bg';
import './Product.css';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const Products =() =>{

    const [products,setProducts] = useState([]);
  
    useEffect(()=>{
       getProduct();
    },[])
   

    const getProduct = async() =>{
        let result = await fetch('http://localhost:3001/products');
        result = await result.json();
        setProducts(result);
        console.warn(result);
    }


    const handleSearch = async (e)=>{
        let key = e.target.value;
        if(key){
            let result = await fetch(`http://localhost:3001/search/${key}`);
        result = await result.json();
        if(result){
            setProducts(result);
        }
        }else{
            getProduct();
        }
    }



const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scroll({
      left: -2000, // adjust this value to scroll more or less
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    listRef.current.scroll({
      left: 2000, // adjust this value to scroll more or less
      behavior: 'instant'
    });
  };
   
       
       
     
      
      
    return(
         <div className="card-list-wrapper" >
             <h3>Product List</h3>
             <input type="text" className="search-product-box" placeholder="Search Product" onChange={handleSearch} />
        <div className="card-list"  ref={listRef}>
         {
               products.map((item,index)=>
                 <div className="card">
                       <div className="card-tags">
                      <img 
                             src =  {`https://source.unsplash.com/200x200/?${item.name}`}
                             alt = 'unsplash'
                      />
                      <h3>{item.name}</h3>
                      <hr></hr>
                      <h5>{item.category}</h5>
                      <h5> {item.company}</h5>
                      <button>{item.price}</button> 
                    </div>
                 </div>
               )
         }
         </div>
         <div className="arrow-wrapper">
        <div className="arrow left" onClick={scrollLeft} ><FaArrowLeft style={{marginTop: '17px'}}/></div>
        <div className="arrow right" onClick={scrollRight} ><FaArrowRight style={{marginTop:'17px'}}/></div>
      </div>
      <ParticlesBg type="tadpole" bg={true} />
         </div>
    )
}
export default Products;