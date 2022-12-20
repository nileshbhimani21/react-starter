import axios from "axios";
import { HomeActions } from "./homeAction";
import { toast } from 'react-toastify';
import { getErrorMsg } from "../../../utils/GetErrorMsg";

export const getGameWeekData = () => {
  return async (dispatch) => {
    try {
      dispatch(HomeActions.getProductsStart());
      const data = await axios({
        method: "GET",
        url: `API URL`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.code === 200) {
        return dispatch(HomeActions.getProductsSuccess(data.data));
      } else {
       dispatch(HomeActions.getProductsError(getErrorMsg(data)));
      }
    } catch (error) {
      toast.error(error.message)
      return dispatch(HomeActions.getProductsError(error.message));
    }
  };
};
