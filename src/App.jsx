import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<HomePage/>}/>
        <Route path = "/products/:category" element = {<ProductList/>}/>
        <Route path = "/product/:id" element = {<Product/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/success" element = {<Success/>}/>
        <Route path = "/login" element = {user ? <Navigate to="/" /> : <Login />}/>
        <Route path = "/register" element = {user ? <Navigate to="/" /> : <Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;