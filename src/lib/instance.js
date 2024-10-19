import axios from "axios";
import { useAtom } from "jotai";
import { authUserAtom } from "./atoms";

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:8081/api/v1',
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
