import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Slider from "./components/Slider";
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./reductconfig/ProductSlice";
import { fetchBrand } from "./reductconfig/BrandSlice";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import 'react-toastify/dist/ReactToastify.css';
import ViewCart from "./components/ViewCart";
import { Placeorder } from "./components/Placeorder";

function App() {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProduct());
  
    dispatch(fetchBrand()); 

  },[])
  return (<>
  
    <Header />
    <Routes>
      <Route path="/" element={<Slider/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/viewcart" element={<ViewCart/>} />
      <Route path="/placeorder" element={<Placeorder/>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
