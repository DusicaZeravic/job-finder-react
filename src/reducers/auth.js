import { ADD_USER, RETRIEVE_USERS } from "../actions/types";

const initialState = [];

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_USERS:
            return payload;
        case ADD_USER: 
            return [...state, payload];
        default: 
            return state;
    }
}

export default authReducer;