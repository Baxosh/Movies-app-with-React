import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, (ex) => {
  const expected =
    ex.response && ex.response.status >= 400 && ex.response.status < 500

  if (!expected) {
    toast.error('You made a mistake during the process.')
  }
  return Promise.reject(ex)
})

const setJwt = (jwt) => {
  return axios.defaults.headers.common['x-auth-token'] = jwt
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
}

export default http
