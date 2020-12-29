import Joi from 'joi-browser'
import Form from './Form'
import * as userService from '../../services/userService'
import { loginWithToken } from '../../services/authService'

export default class RegisterForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      name: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
    name: Joi.string().required().label('Name'),
  }

  doSubmit = async () => {
    try {
      const { headers } = await userService.register(this.state.data)
      loginWithToken(headers['x-auth-token'])
      window.location = '/'
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = err.response.data
        this.setState({ errors })
      }
    }
  }

  render() {
    return (
      <div className="container p-4 w-50">
        <h3>Register</h3>
        <form onSubmit={this.handlerSubmit}>
          {this.renderingInput('username', 'Username')}
          {this.renderingInput('password', 'Password', 'password')}
          {this.renderingInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}
