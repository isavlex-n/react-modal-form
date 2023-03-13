export default function BaseField({ title, error, children }) {
  return (
    <label className="form__label">
      {children}
      <span className="form__value">{title}</span>
      {error && <span className="form__error">{error}</span>}
    </label>
  )
}
