import * as serviceHandler from "../dal/serviceHandler";
import { FETCH_LIST } from "../constants/actiontypes";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const getRecord = () => {
  return dispatch => {
    serviceHandler
      .getHandler(API_ENDPOINTS.GET_USER_LIST)
      .then(response => {
        dispatch(itemsFetchDataSuccess(response.results));
      })
      .catch(err => {
        console.log("Error in application:", err);
      });
  };
};

const itemsFetchDataSuccess = data => {
  return {
    type: FETCH_LIST,
    data
  };
};
