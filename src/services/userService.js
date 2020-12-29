import http from './httpService'
import { apiUrl } from '../config.json'

const endPoint = apiUrl + "/users"

export const register = ({username, password, name}) => {
  return http.post(endPoint, {
    email: username,
    password, 
    name
  })
}