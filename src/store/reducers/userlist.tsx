import { LIST_SUCCESS, LIST_FAIL, RESET_APP_STATE } from "../constants";

const initialState = {
    list: [],
    code: -1
}

const reducer = (state = initialState, action: any) => {

    switch(action.type) {
        case LIST_SUCCESS:
            return {
                ...state,
                code: 0,
                list: action.payload.users
            }
        case LIST_FAIL:
            return {
                ...state,
                code: -1
            }
        case RESET_APP_STATE:
            return initialState;
        default:
            return state;
    }
}

export default reducer;