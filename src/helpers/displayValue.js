export const isOperand = value =>
  !isNaN(Number(value)) || value == '.'

export const getDisplayValue = (
  prevValue,
  value,
  changeOperand,
) => {
  if (value === '.') {
    return changeOperand
      ? '0' + value
      : prevValue.includes(value)
      ? prevValue
      : prevValue + value
  }
  return changeOperand ? value : prevValue + value
}
