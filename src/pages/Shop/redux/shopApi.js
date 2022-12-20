import axios from "axios";
import { ShopActions } from "./shopAction";
import { toast } from 'react-toastify';
import { getErrorMsg } from "../../../utils/GetErrorMsg";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(ShopActions.getProductsStart());
      const data = await axios({
        method: "GET",
        url: `API URL`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.code === 200) {
        return dispatch(ShopActions.getProductsSuccess(data.data));
      } else {
       dispatch(ShopActions.getProductsError(getErrorMsg(data)));
      }
    } catch (error) {
      toast.error(error.message)
      return dispatch(ShopActions.getProductsError(error.message));
    }
  };
};
