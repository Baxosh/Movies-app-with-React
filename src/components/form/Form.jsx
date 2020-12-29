import { Component } from 'react'
import Joi from 'joi-browser'
import { Select } from './Select'
import Input from './Input'

export default class Form extends Component {
  validation = () => {
    let { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    })
    if (!error) return null
    let errors = {}
    error.details.forEach((err) => (errors[err.path[0]] = err.message))
    return errors
  }

  validProperty = ({ name, value }) => {
    let obj = { [name]: value }
    let schema = { [name]: this.schema[name] }
    let { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handlerChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    let data = { ...this.state.data }
    data[input.name] = input.value
    this.setState({ data, errors })
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    let errors = this.validation()    
    this.setState({ errors: errors ?? {} })
    if (errors) return
    this.doSubmit()
  }

  renderButton = (label) => {
    return (
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    )
  }

  renderingInput = (name, label, type = 'text') => {
    const { data, errors } = this.state
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handlerChange}
        type={type}
        error={errors[name]}
      />
    )
  }
  renderingSelect = (name, label) => {
    const { data, errors, genres } = this.state
    return <Select 
      name={name}
      label={label}
      value={data[name]}
      onChange={this.handlerChange}
      error={errors[name]}
      options={genres}
    />
  }
}
