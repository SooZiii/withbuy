import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SpecialPrice from "./components/SpecialPrice";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
import Mypage from "./components/Mypage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SpecialPrice" element={<SpecialPrice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Details" element={<Details />}>
          <Route path="/Details/Login" element={<Login />} />
          <Route path="/Details/SignUp" element={<SignUp />} />
          <Route path="/Details/Mypage" element={<Mypage />} />
        </Route>
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
