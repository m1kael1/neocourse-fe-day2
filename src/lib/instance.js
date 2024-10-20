import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

instance.interceptors.request.use(
  (config) => {

    const token = JSON.parse(localStorage.getItem('user'))?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
