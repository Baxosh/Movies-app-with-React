import { Component } from 'react'
import {logout} from '../services/authService'

export default class logOut extends Component {
  componentDidMount() {
    logout()
    window.location = '/'
  }
  render() {
    return null
  }
}
