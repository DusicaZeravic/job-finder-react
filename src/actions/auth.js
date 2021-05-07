import { getUsers, postUser } from "../service"
import { ADD_USER, RETRIEVE_USERS } from "./types";

export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await getUsers();

        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const addUser = (user) => async (dispatch) => {
    try {
        const res = await postUser(user);

        dispatch({
            type: ADD_USER,
            payload: res.data
        })
        Promise.resolve(res.data);
    } catch (err) {
        Promise.reject(err);
    }
}