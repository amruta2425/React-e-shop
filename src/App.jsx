import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import PgFOF from './Components/PgFOF/PgFOF'
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
       
        <Route exact path="/product-type/mobile" element={<AllProducts type={'Mobile'} />} />
        <Route exact path="/product-type/laptop" element={<AllProducts type={'Laptop'} />} />
        <Route exact path="/product-type/camera" element={<AllProducts type={'Camera'} />} />
        <Route exact path="/product-type/TV" element={<AllProducts type={'TV'} />} />
        <Route path="/product/:type/:id" element={<SpecificProductPage />} />
        <Route path="*" element={<PgFOF />} />
       

    </Routes>
    </BrowserRouter>
  )
}

export default App
