import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Basket from "./pages/Basket";
import Header from "./components/Header"

import { useDispatch } from "react-redux";

import { getProduct } from "./redux/actions/productActions";
import DenemePage from "./pages/denemePage";
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/deneme" element={<DenemePage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
