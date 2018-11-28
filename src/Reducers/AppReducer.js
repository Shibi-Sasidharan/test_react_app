import { FETCH_LIST } from "../Actiontypes";

const initialState = {
    list: []
};

const AppRouter = (state = initialState, action) => {
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
export default AppRouter