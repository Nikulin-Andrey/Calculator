export const isOperand = value =>
  !isNaN(Number(value)) || value == '.'

export const getDisplayValue = (
  prevValue,
  value,
  commandBefore,
) => {
  if (value === '.') {
    return prevValue.includes(value)
      ? prevValue
      : prevValue + value
  }
  return prevValue === '0' || commandBefore
    ? value
    : prevValue + value
}
