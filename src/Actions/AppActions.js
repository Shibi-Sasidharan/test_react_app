import { API } from "../Service"
import { FETCH_LIST } from "../Actiontypes"

export const getRecord = () => {
    debugger
    return (dispatch) => {
        API.then((response) => {
                dispatch(itemsFetchDataSuccess(response.data))})
            .catch();
    };
}

const itemsFetchDataSuccess = (data) => {
    return {
        type: FETCH_LIST,
        data
    };
}
