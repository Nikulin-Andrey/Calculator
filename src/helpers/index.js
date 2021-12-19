export const isOperand = value =>
  !isNaN(Number(value)) || value == '.'

export const getDisplayValue = (prevValue, value) => {
  if (value === '.') {
    return prevValue.includes(value)
      ? prevValue
      : prevValue + value
  }
  return prevValue === '0' ? value : prevValue + value
}

export const getCommand = (state, action) => {
  console.log(action.payload)
  return { ...state }
}
