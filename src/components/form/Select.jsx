export const Select = ({name, label, options, error, ...rest}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="form-control" {...rest}>
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id} >
            {option.name}
          </option>
        ))}
      </select>
      {error && <p className="alert alert-danger">{error}</p>} 
    </div>
  )
}
