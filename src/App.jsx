import Modal from 'components/Modal'
import BaseFieldText from 'components/BaseFieldText'
import PhoneField from 'components/PhoneField'
import { isValid } from 'utils/validate'
import { useState } from 'react'

function App() {
  const [modal, setModal] = useState(false)
  const [fields, setFields] = useState({
    name: {
      valid: false,
      value: '',
    },
    phone: {
      valid: false,
      value: '',
    },
  })
  const [errors, setErrors] = useState({
    phone: null,
    name: null,
  })

  const [jsonFormData, setJsonFormData] = useState(null)

  const isFormValid = (fields) => {
    return Object.entries(fields).every(([_, value]) => value.valid)
  }

  const onChangeHandler = (event) => {
    const target = event.target
    setFields((prev) => ({
      ...prev,
      [target.name]: {
        value: target.value,
        valid: !isValid(target.value, target.name),
      },
    }))
  }

  const formHandler = (event) => {
    event.preventDefault()
    if (!isFormValid(fields)) return
    const formData = {}
    Object.entries(fields).forEach(([key, fieldData]) => {
      if (key === 'phone') {
        formData[key] = fieldData.value.replace(/[^+\d]/g, '')
      } else {
        formData[key] = fieldData.value
      }
    })
    setJsonFormData(JSON.stringify(formData))
    setModal(false)
  }

  const focusHandler = (event) => {
    setErrors((prev) => ({
      ...prev,
      [event.target.name]: '',
    }))
  }

  const blurHandler = (event) => {
    const target = event.target
    setErrors((prev) => ({
      ...prev,
      [target.name]: isValid(target.value, target.name),
    }))
  }

  return (
    <>
      <pre>{jsonFormData}</pre>
      <button onClick={() => setModal(true)} className="button">Обратная связь</button>
      <Modal active={modal} setActive={setModal}>
        <h1>Feedback</h1>
        <form className="form" onSubmit={formHandler}>
          <BaseFieldText
            name="name"
            value={fields.name.value}
            onChange={onChangeHandler}
            error={errors.name}
            title="Имя"
            placeholder="Введите ваше имя"
            onBlur={blurHandler}
            onFocus={focusHandler}
          />
          <PhoneField
            name="phone"
            value={fields.phone.value}
            onChange={onChangeHandler}
            error={errors.phone}
            title="Телефон"
            onBlur={blurHandler}
            onFocus={focusHandler}
          />
          <button type="submit" className="button" disabled={!isFormValid(fields)}>
            Отправить
          </button>
        </form>
      </Modal>
    </>
  )
}

export default App
