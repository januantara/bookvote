import axios from "axios";

export const api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
});

api.interceptors.request.use((config) => {
    return config;
});
