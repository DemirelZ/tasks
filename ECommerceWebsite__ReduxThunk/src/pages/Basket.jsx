import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const { state, productReducer } = useSelector((store) => ({
    state: store.basketReducer,
    productReducer: store.productReducer,
  }));
  //console.log("sepet", state.basket);

  const toplamTutarArr = state.basket.map((i) => i.price * i.amount);

  //console.log(toplamTutarArr);

  const sumTutar = toplamTutarArr.reduce((topla, x) => topla + x, 0);

  return (
    <div style={{background: productReducer.isLight ? '#242424' : '#fff' , height: '100vh'}} className="row align-items-center p-4">
      <div className="col-md-9">
        {/*Eğer Ürün Yoksa */}

        {state.basket.length === 0 && <p>Henüz Ürün Eklenmedi</p>}

        {state.basket.map((basketProduct) => (
          <BasketItem key={basketProduct.id} basketProduct={basketProduct} />
        ))}
      </div>
      <div className="col-md-3 bg-warning p-5 rounded">
        <h5>Toplam Tutar: {sumTutar}</h5>
        <button className="btn btn-success">Alışverişi Tamamla</button>
      </div>
    </div>
  );
};

export default Basket;
