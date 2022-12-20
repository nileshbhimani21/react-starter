export const ShopMap = {
  GET_PRODUCTS_START: "GET_PRODUCTS_START",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",
};

export const ShopActions = {
  getProductsStart: () => ({ type: ShopMap.GET_PRODUCTS_START }),
  getProductsSuccess: (data) => ({ type: ShopMap.GET_PRODUCTS_SUCCESS, payload: data }),
  getProductsError: (errors) => ({ type: ShopMap.GET_PRODUCTS_ERROR, payload: errors }),
  
};
