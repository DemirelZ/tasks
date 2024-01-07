import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { darkAndLight } from "../redux/actions/productActions";

const Header = () => {
  const dispatch = useDispatch();
  const { sepetHeader, productReducer } = useSelector((store) => ({
    sepetHeader: store.basketReducer,
    productReducer: store.productReducer,
  }));

   console.log('productReducer',productReducer.isLight);

  const amountArray = sepetHeader.basket.map((i) => i.amount);

  const toplam = amountArray.reduce(
    (topla, currentValue) => topla + currentValue,
    0
  );

  // console.log(toplam);

  return (
    <header className="d-flex w-100 align-items-center flex-wrap justify-content-between px-4 py-3 bg-light text-black fixed-top">
      <div>E-Commerce</div>

      <div className="d-flex gap-4">
        <button
          onClick={() => dispatch(darkAndLight(!(productReducer.isLight)))}
          className="btn btn-secondary"
        >
          {productReducer.isLight ? "Light" : "Dark"}
        </button>
        <Link className="btn btn-danger" to={"/deneme"}>
          deneme
        </Link>
        <Link className="btn btn-primary btn-lg active" to={"/"}>
          Ürünler
        </Link>
        <Link className="btn btn-warning btn-lg active" to={"/basket"}>
          <i className="fa-solid fa-cart-shopping"></i> <span>({toplam})</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
