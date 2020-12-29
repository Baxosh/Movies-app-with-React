export default function Input({ name, label, error, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input className="form-control" id={name} name={name} {...rest} />
      {error && <p className="alert alert-danger">{error}</p>}
    </div>
  )
}
