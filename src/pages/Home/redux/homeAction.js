export const HomeMap = {
  GET_SHOPS_START: "GET_SHOPS_START",
  GET_SHOPS_SUCCESS: "GET_SHOPS_SUCCESS",
  GET_SHOPS_ERROR: "GET_SHOPS_ERROR",
  GET_PRODUCTS_START: "GET_PRODUCTS_START",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
};

export const HomeActions = {
  getShopssStart: () => ({ type: HomeMap.GET_SHOPS_START }),
  getShopsSuccess: (data) => ({ type: HomeMap.GET_SHOPS_SUCCESS, payload: data }),
  getShopsError: (errors) => ({ type: HomeMap.GET_SHOPS_ERROR, payload: errors }),
  getProductsStart: () => ({ type: HomeMap.GET_PRODUCTS_START }),
  getProductsSuccess: (data) => ({ type: HomeMap.GET_PRODUCTS_SUCCESS, payload: data }),
  getProductsError: (errors) => ({ type: HomeMap.GET_PRODUCTS_ERROR, payload: errors }),
  
};
