/**
 * Data Handlers for GET,POST Methods implemented here
 */

import { ERROR } from "../constants/errorConstants";
import axios from "axios";

/**
 * Data handler for GetData in services.js
 * @param {string} url
 * @returns JSON
 */

export const getHandler = url => {
  return axios
    .get(url)
    .then(validateResponse)
    .catch(handleError);
};

/**
 * Data handler for PostData in services.js
 * @param {string} url
 * @param {JSON} data
 * @returns JSON
 */
export const postHandler = (url, data) => {
  return axios
    .post(url, data)
    .then(validateResponse)
    .catch(handleError);
};

/**
 * Error handling in case of API errors
 */
function handleError(error) {
  var errMsg = ERROR.SERVICE_DEFAULT_ERR;
  if (error instanceof Error) {
    if (error && error.request && error.request.status) {
      var errReq = error.request;
      errMsg = errReq.statusText;
      switch (errReq.status) {
        case 500:
          if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.Error
          ) {
            errMsg = error.response.data.Error.ErrorDescription;
          } else {
            errMsg = ERROR.SERVICE_DEFAULT_ERR;
          }
          break;
        case 401:
          break;
        default:
          if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.Error
          ) {
            errMsg = error.response.data.Error.ErrorDescription;
          } else {
            errMsg = ERROR.SERVICE_DEFAULT_ERR;
          }
          break;
      }
    }
  }
  let errorObj = { message: errMsg, request: error.request };
  return Promise.reject(errorObj);
}

/**
 * Validate the response coming from API
 */
var validateResponse = response => {
  if (response && response.data && !response.data.error) {
    return response.data;
  } else {
    return handleError();
  }
};
