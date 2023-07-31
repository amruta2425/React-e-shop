import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Pg404 from './Components/Pg404/Pg404'
import Cart from './Components/Cart/Cart'
import UserProfile from './Components/UserProfile/UserProfile'
import AddProduct from './Components/AddProduct/AddProduct'
import AllProducts from './Containers/AllProducts/AllProducts'
import SpecificProductPage from './Containers/SpecificProductPage/SpecificProductPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userprofile" element={<UserProfile/>} />
        <Route exact path="/sellproduct" element={<AddProduct/>} />
        <Route exact path="/cart" element={<Cart />} />
       
      
        <Route exact path="/product-type/camera" element={<AllProducts type={'Camera'} />} />
        <Route exact path="/product-type/TV" element={<AllProducts type={'TV'} />} />
        <Route path="/product/:type/:id" element={<SpecificProductPage />} />
        <Route exact path ="/cartdata" element={<Cart/>}/>
        <Route path="*" element={<Pg404 />} />
       

    </Routes>
    </BrowserRouter>
  )
}

export default App
