import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {

  

  const { productRed, basketReducer } = useSelector((store) => ({
    productRed: store.productReducer,
    basketReducer: store.basketReducer,
  }));
  //console.log(productReducer.isLoading);
 // console.log(basketReducer)
 //console.log('productRed',productRed);

  return (
    <div style={productRed.isLight ? {background:'#242424'} : {background:'#fff'}}>

      
      {productRed.isLoading && <Loading />}

      <div className="d-flex  flex-wrap gap-5 justify-content-center p-5">
        {productRed.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
