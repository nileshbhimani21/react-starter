export const HomeMap = {
  GET_SHOPS_START: "GET_SHOPS_START",
  GET_SHOPS_SUCCESS: "GET_SHOPS_SUCCESS",
  GET_SHOPS_ERROR: "GET_SHOPS_ERROR",
};

export const HomeActions = {
  getShopsStart: () => ({ type: HomeMap.GET_SHOPS_START }),
  getShopsSuccess: (data) => ({ type: HomeMap.GET_SHOPS_SUCCESS, payload: data }),
  getShopsError: (errors) => ({ type: HomeMap.GET_SHOPS_ERROR, payload: errors }),  
};
