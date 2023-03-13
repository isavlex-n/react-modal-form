import BaseField from 'components/BaseField'
import InputMask from 'react-input-mask'

export default function PhoneField({name, title, error, value, onChange, ...otherProps}) {
  return (
    <BaseField title={title} error={error}>
      <InputMask
        className="form__input"
        name={name}
        mask="+7 (999) 999-99-99"
        value={value}
        type="tel"
        onChange={onChange}
        {...otherProps}
      />
    </BaseField>
  )
}