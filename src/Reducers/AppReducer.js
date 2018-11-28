import { FETCH_LIST } from "../Constants/actiontypes";

const initialState = {
    list: {}
};

const AppReducer = (state = initialState, action) => {
    debugger
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