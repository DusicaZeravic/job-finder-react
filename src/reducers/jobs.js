import { ADD_JOB, DELETE_JOB, RETRIEVE_JOBS, RETRIEVE_JOB_BY_ID } from '../actions/types';

const initialState = [];

const jobReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_JOBS:
            return payload;
        case ADD_JOB:
            return [...state, payload];
        // case RETRIEVE_JOB_BY_ID:
        //     return payload;
        case DELETE_JOB:
            return state.filter(({ id }) => id !== payload.id)
        default:
            return state;
    }
}

export default jobReducer;