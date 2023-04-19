import { storageTokens } from '@/config/storageTokens';
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(async config => {
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
})





export default api 