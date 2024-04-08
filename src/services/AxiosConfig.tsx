import * as React from 'react';
import axios from 'axios'
import { useLocalStorage } from '../hooks/useLocalStorage'
import AuthContext from '../context/AuthContext';


const AxiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 10000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
})

AxiosConfig.interceptors.request.use(function (config) {
  const authTokens: any = window.localStorage.getItem('authTokens')
  const newAuthTokens = JSON.parse(authTokens)
  config.headers.Authorization = newAuthTokens ? `Bearer ${newAuthTokens.access}` : '';
  return config;
});

export default AxiosConfig