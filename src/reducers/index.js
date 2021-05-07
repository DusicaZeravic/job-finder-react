import jobReducer from './jobs';
import { combineReducers } from 'redux';
import authReducer from './auth';

const allReducers = combineReducers({
    jobs: jobReducer,
    users: authReducer
});

export default allReducers;