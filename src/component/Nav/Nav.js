import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Nav.css';
const Nav = ()=> {
    const auth = localStorage.getItem('user');
   
    const navigate = useNavigate('/signup');
    const logout = ()=>{
      localStorage.clear();
      navigate('/signup');
      
    }
    return(
        <div>
            <ul className='nav-ul'>
                <li>{auth?<Link to="">Product</Link>:<Link></Link>}</li>
                <li>{auth?<Link to="profile">Profile</Link>:<Link></Link>}</li>
                <li> { auth?<Link onClick={logout} to="/signup">Logout </Link>:<Link to="/signup" className='craft'>CraftStore </Link>} 
                 <img alt="photos" style={{width:'50px', height:'50px' , marginLeft:'200px'}} 
                 src='https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/hand-wave-icon.svg'/></li>
                <li>{auth?<Link></Link>:<Link to="login"></Link>}</li>
                
                
            </ul>
        </div>
    )
}


export default Nav;