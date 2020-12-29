import http from './httpService'
import { apiUrl } from '../config.json'

const endPoint = apiUrl + "/movies"

const movieUrl = (id) => `${endPoint}/${id}`

export const getMovies = () => {
  return http.get(endPoint)
}

export const getMovie = (id) => {
  return http.get(movieUrl(id))
}

export const saveMovie = (movie) => {
  if (movie._id) {
    const body = {...movie}
    delete body._id
    return http.put(movieUrl(movie._id), body)
  }
  return http.post(endPoint, movie)
}

export const deleteMovie = (id) => {
  return http.delete(movieUrl(id))
}
