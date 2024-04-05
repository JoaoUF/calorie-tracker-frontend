import axios from 'axios'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AxiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 10000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
})

AxiosConfig.interceptors.request.use(function (config) {
  const { authTokens } = useLocalStorage()
  config.headers.Authorization = authTokens ? `Bearer ${authTokens}` : '';
  return config;
});

export default AxiosConfig