import './App.css';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './component/SignIn/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/LogIn/Login';
import AddProduct from './component/AddProduct';
import Products from './component/Product/Product';
import UpdateProduct from './component/UpdateProduct';
import BuyrerSeller from './component/firstPage/BuyrerSeller';
import MainPage from './component/MainPage';
import Profile from './component/Profile/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element = {<PrivateComponent/>}>
        <Route path='/main' element = {<MainPage/>}/>
        <Route path='/' element={<Products/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/logout' element={<h1>logout Listing component</h1>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element= {<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
