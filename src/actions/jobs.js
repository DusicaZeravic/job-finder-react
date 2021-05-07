import { ADD_JOB, DELETE_JOB, RETRIEVE_JOBS } from './types';
import { deleteJobById, getJobs, postJob } from '../service';

export const getAll = () => async (dispatch) => {
    try {
        const res = await getJobs();

        dispatch({
            type: RETRIEVE_JOBS,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
}

export const createNewJob = (job) => async (dispatch) => {
    try {
        const res = await postJob(job);

        dispatch({
            type: ADD_JOB,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteJob = (id) => async (dispatch) => {
    try {
        await deleteJobById(id);

        dispatch({
            type: DELETE_JOB,
            payload: { id }
        })
    }
    catch (err) {
        console.log(err);
    }
}