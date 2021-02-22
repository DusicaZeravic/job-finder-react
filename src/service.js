import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
const JOBS = '/jobs';
const USERS = '/users';
const QUOTES = '/quotes';

export const getJobs = () => axios.get(`${BASE_URL}${JOBS}`);

export const getJobById = (id) => axios.get(`${BASE_URL}${JOBS}/${id}`);

export const getUsers = () => axios.get(`${BASE_URL}${USERS}`);

export const postUser = (user) => axios.post(`${BASE_URL}${USERS}`, user);

export const getQuotes = () => axios.get(`${BASE_URL}${QUOTES}`);