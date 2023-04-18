import { storageTokens } from '@/config/storageTokens';
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(async config => {
  const cookies = parseCookies({})
  const token = cookies[storageTokens.token]
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})

api.interceptors.response.use(
  response => {

    return response;
  },
  error => {
    if (error.response.status === 401) {
      destroyCookie(undefined, storageTokens.token);
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
)



export default api 