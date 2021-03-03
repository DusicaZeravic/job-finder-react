import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
const JOBS = '/jobs';
const USERS = '/users';

export const getJobs = () => axios.get(`${BASE_URL}${JOBS}`);

export const getJobById = (id) => axios.get(`${BASE_URL}${JOBS}/${id}`);

export const postJob = (job) => axios.post(`${BASE_URL}${JOBS}`, job);

export const deleteJobById = (id) => axios.delete(`${BASE_URL}${JOBS}/${id}`);

export const getUsers = () => axios.get(`${BASE_URL}${USERS}`);

export const postUser = (user) => axios.post(`${BASE_URL}${USERS}`, user);
