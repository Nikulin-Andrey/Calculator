export const getHistoryExpration = (
  x,
  y,
  operation,
  commands,
  show,
) => {
  if (commands > 0 && show) {
    return `${x} ${operation} ${y}`
  }
}
