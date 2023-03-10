import axios from "axios";
import { HomeActions } from "./homeAction";
import { toast } from 'react-toastify';
import { getErrorMsg } from "../../../utils/GetErrorMsg";

export const getShops = () => {
  return async (dispatch) => {
    try {
      dispatch(HomeActions.getShopsStart());
      const data = await axios({
        method: "GET",
        url: `API URL`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.code === 200) {
        return dispatch(HomeActions.getShopsSuccess(data.data));
      } else {
       dispatch(HomeActions.getShopsError(getErrorMsg(data)));
      }
    } catch (error) {
      toast.error(error.message)
      return dispatch(HomeActions.getProductsError(error.message));
    }
  };
};
