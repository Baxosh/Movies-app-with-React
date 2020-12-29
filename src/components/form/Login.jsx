import Joi from 'joi-browser'
import Form from './Form'
import { login } from '../../services/authService'

export default class Login extends Form {
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data
      await login(username, password)
      window.location = this.props.location.state.from ?? '/'
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
        <h3>Login</h3>
        <form onSubmit={this.handlerSubmit}>
          {this.renderingInput('username', 'Username')}
          {this.renderingInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}
