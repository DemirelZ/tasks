import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/actions/productActions";

const Card = ({ product }) => {

 const productReducer= useSelector((store)=> store.productReducer)

  const dispatch=useDispatch();
  //console.log(product)

  /* */
  const addBasket=()=>{
    dispatch(addToBasket(product))
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="p-5" style={{ height: "300px" }}>
        <img
          className="card-img-top img-fluid h-100"
          src={product.image}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.slice(0, 50) + "..."}</p>
        <button onClick={addBasket} className="btn btn-primary">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
