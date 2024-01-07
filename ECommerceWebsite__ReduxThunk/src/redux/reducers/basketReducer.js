import { actionTypes } from "../actions/actionTypes";

const initialState = {
  basket: [],
  total: 0,
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      //elelemanın sırasını bulma
      const durum = state.basket.some((i) => i.id === payload.id);
      //Eğer indeks varsa
      //console.log(durum);
      if (durum) {
        const newArr = state.basket.map((item) =>
          item.id === payload.id ? { ...item, amount: item.amount + 1 } : item
        );

        //console.log("newArr", newArr);
        return {
          ...state,
          basket: newArr,
        };

        /* 
        const cloneBasket = [...state.basket];
        cloneBasket[index].amount++;
        return {
          ...state,
          basket: cloneBasket,
        };
        */
      }
      //Eğer Sepette Eleman yoksa
      else {
        //const newArray = state.basket.concat({ ...payload, amount: 1 });

        const newObject = { ...payload, amount: 1 };
        const newArray = [...state.basket, newObject];
        return {
          ...state,
          basket: newArray,
          total: state.total + payload.price,
        };
      }

      case actionTypes.DELETE_FROM_BASKET:
        const updatedBasket = state.basket.map((item) =>
          item.id === payload.id ? { ...item, amount: item.amount - 1 } : item
        ).filter((item) => item.amount > 0)
      
        return {
          ...state,
          basket: updatedBasket,
        };

    default:
      return state;
  }
};

/* 

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      //elelemanın sırasını bulma
      const index = state.basket.findIndex((i) => i.id === payload.id);
      //Eğer indeks varsa
      if (index >= 0) {
        const cloneBasket = [...state.basket];
        cloneBasket[index].amount++;
        return {
          ...state,
          basket: cloneBasket,
        };
      }
      //Eğer Sepette Eleman yoksa
      else {
        const newArray = state.basket.concat({ ...payload, amount: 1 });
        return {
          ...state,
          basket: newArray,
          total: state.total + payload.price,
        };
      }

    default:
      return state;
  }
};

*/

export default basketReducer;

//Burası Düzenlenecek
