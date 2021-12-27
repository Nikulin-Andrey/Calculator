export const getHistoryExpration = (
  x,
  y,
  operation,
  commands,
  show,
  operationChanged,
) => {
  if (commands > 0 && show && !operationChanged) {
    return `${x} ${operation} ${y}`
  }
}
