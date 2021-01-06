import Joi from 'joi-browser'
import Form from './Form'
import { login } from '../../services/authService'

// Styles
import styled from 'styled-components'

const LoginContainer = styled.div`
  margin: 60px;
  max-width: 500px;
  width: 100%;

  h3 {
    text-indent: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  form div {
    width: 100%;
  }

  form label {
    text-indent: 5px;
  }

  button {
    align-self: center;
  }
`

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
      const { state } = this.props.location
      window.location = state ? state.from : '/'
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
      <LoginContainer>
        <h3>Login</h3>
        <form onSubmit={this.handlerSubmit}>
          {this.renderingInput('username', 'Username')}
          {this.renderingInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </LoginContainer>
    )
  }
}
