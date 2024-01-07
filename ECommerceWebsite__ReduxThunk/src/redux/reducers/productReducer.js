import { actionTypes } from "../actions/actionTypes";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  isLight: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        isError: true,
      };

    case actionTypes.DARK_LIGHT:
      return {
        ...state,
        isLight: !state.isLight,
      };
    default:
      return state;
  }
};

export default productReducer;
