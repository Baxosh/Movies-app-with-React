import http from './httpService'
import { apiUrl } from '../config.json'
import jwtDecode from 'jwt-decode'

// Variables
const endPoint = apiUrl + '/auth'
const tokenKey = 'token'

const login = async (email, password) => {
  const { data: jwt } = await http.post(endPoint, { email, password })
  await localStorage.setItem(tokenKey, jwt)
}
const loginWithToken = (token) => {
  localStorage.setItem(tokenKey, token)
}
const logout = () => {
  localStorage.removeItem(tokenKey)
}

const getCurrentUser = () => {
  const token = localStorage.getItem(tokenKey)
  return jwtDecode(token)
}

const getJwt = () => {
  return localStorage.getItem(tokenKey)
}

http.setJwt(getJwt())


export {
  login,
  loginWithToken,
  logout,
  getCurrentUser,
  getJwt
}
