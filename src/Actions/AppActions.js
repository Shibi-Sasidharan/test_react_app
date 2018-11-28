import { API } from "../dal/serviceHandler"
import { FETCH_LIST } from "../constants/actiontypes"

export const getRecord = () => {
    return (dispatch) => {
        API.then((response) => {
            dispatch(itemsFetchDataSuccess(response.data))
        })
            .catch();
    };
}

const itemsFetchDataSuccess = (data) => {
    return {
        type: FETCH_LIST,
        data
    };
}

