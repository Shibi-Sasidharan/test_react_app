import { FETCH_LIST } from "../constants/actiontypes";

const initialState = {
    list: []
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST: {
            return {
                ...state,
                list: action.data
            };
        }
        default:
            return state;
    }
}
export default AppReducer