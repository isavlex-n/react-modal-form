const REGEX_PHONE = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
const REGEX_NAME = /^[A-Za-z|А-Яа-я]+$/

function isEmpty(value) {
  return !value.length ? 'Поле не должно быть пустым!' : null
}

function isCorrectLength(value, min, max) {
  if (value.length < min) {
    return `Количество символов не должно менее чем ${min}`
  }
  if (value.length > max) {
    return `Количество символов не должно более чем ${max}`
  }
  return null
}

function validate(regex, value) {
  return regex.test(value)
}

function validatePhone(value) {
  let result = isEmpty(value)
  if (!result) {
    if (!validate(REGEX_PHONE, value)) {
      result = 'Телефон указан не в заданном формате'
    }
    if (!result) {
      result = isCorrectLength(value, 18, 18)
    }
  }
  return result
}

function validateName(value) {
  let result = isEmpty(value)
  if (!result) {
    if (!validate(REGEX_NAME, value)) {
      result = 'Допускаются только буквы'
    }
    if (!result) {
      result = isCorrectLength(value, 2, 100)
    }
  }
  return result
}

function isValid(value, name) {
  switch (name) {
    case 'name':
      return validateName(value)
    case 'phone':
      return validatePhone(value)
    default:
      return null
  }

}

export { isValid }
