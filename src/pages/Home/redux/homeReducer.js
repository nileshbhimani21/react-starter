import { HomeMap } from "./homeAction";
import shopImg from "../../../assets/images/shop.png"

const initialState = {
  isLoading: false,
  shops: [
    {
      "id": 1,
      "name": "Harris Farm Markets",
      "address": "Castle Hill, NSW AU 2154",
      "image": shopImg,
      "reviewTotal": 56,
      "review": 4,
      "itemTotal": 134,
      "category":["All", "Fruits", "Vegetables"]
    },
  ],
  category: ["All", "Asian", "Fruits", "Vegetables"],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeMap.GET_SHOPS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case HomeMap.GET_SHOPS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        shops: action.payload,
      };
    }
    case HomeMap.GET_SHOPS_ERROR: {
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
