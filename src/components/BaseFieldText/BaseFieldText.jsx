import BaseField from 'components/BaseField'
export default function BaseFieldText({
  name,
  title,
  placeholder,
  error,
  value,
  onChange,
  ...otherProps
}) {

  return (
    <BaseField title={title} error={error}>
      <input
        className="form__input"
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </BaseField>
  )
}
