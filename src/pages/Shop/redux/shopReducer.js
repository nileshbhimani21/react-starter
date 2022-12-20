import { ShopMap } from "./shopAction";
import shopImg from "../../../assets/images/shop.png"
import f1 from "../../../assets/images/f1.png"
import v1 from "../../../assets/images/v1.png"

const initialState = {
  isLoading: false,
  category: ["All", "Asian", "Fruits", "Vegetables"],
  shopDetails: {
    "id": 1,
    "name": "Harris Farm Markets",
    "address": "Castle Hill, NSW AU 2154",
    "image": shopImg,
    "reviewTotal": 56,
    "review": 4,
    "itemTotal": 134,
    "category": ["All", "Fruits", "Vegetables"],
    "products": [
      {
        'name': "Lemon",
        'price': "3.49",
        'priceKg': "10.99",
        "image": f1,
        "category": "Fruits"
      },
      {
        'name': "Zuccini Black Organic (Each)",
        'price': "3.49",
        'priceKg': "10.99",
        "image": v1,
        "category": "Vegetables"
      },
      {
        'name': "Lemon",
        'price': "3.49",
        'priceKg': "10.99",
        "image": f1,
        "category": "Fruits"
      },
      {
        'name': "Zuccini Black Organic (Each)",
        'price': "3.49",
        'priceKg': "10.99",
        "image": v1,
        "category": "Vegetables"
      },
      {
        'name': "Lemon",
        'price': "3.49",
        'priceKg': "10.99",
        "image": f1,
        "category": "Fruits"
      },
      {
        'name': "Zuccini Black Organic (Each)",
        'price': "3.49",
        'priceKg': "10.99",
        "image": v1,
        "category": "Vegetables"
      },
      {
        'name': "Lemon",
        'price': "3.49",
        'priceKg': "10.99",
        "image": f1,
        "category": "Fruits"
      },
      {
        'name': "Zuccini Black Organic (Each)",
        'price': "3.49",
        'priceKg': "10.99",
        "image": v1,
        "category": "Vegetables"
      },
      {
        'name': "Lemon",
        'price': "3.49",
        'priceKg': "10.99",
        "image": f1,
        "category": "Fruits"
      },
      {
        'name': "Zuccini Black Organic (Each)",
        'price': "3.49",
        'priceKg': "10.99",
        "image": v1,
        "category": "Vegetables"
      },
      {
        'name': "Lemon",
        'price': "3.49",
        'priceKg': "10.99",
        "image": f1,
        "category": "Fruits"
      },
      {
        'name': "Zuccini Black Organic (Each)",
        'price': "3.49",
        'priceKg': "10.99",
        "image": v1,
        "category": "Vegetables"
      }
    ]
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopMap.GET_PRODUCTS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ShopMap.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        shopDetails: action.payload,
      };
    }
    case ShopMap.GET_PRODUCTS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
