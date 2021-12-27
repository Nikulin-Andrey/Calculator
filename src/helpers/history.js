export const getHistoryExpration = (
  value,
  {
    result,
    commands,
    beforeResult,
    changeOperand,
    exprations,
  },
) => {
  const commandsCount = commands.length
  const expLength = exprations.length
  if (expLength > 0 && beforeResult && !changeOperand) {
    const currentExp = exprations[expLength - 1]
    const expCommandsCount = currentExp.commands.length
    if (expCommandsCount > 0) {
      return `${currentExp.result} ${currentExp.commands[expCommandsCount - 1]?.type} ${value}`
    }
  } else if (
    commandsCount > 0 &&
    beforeResult &&
    !changeOperand
  ) {
    return `${result} ${commands[commandsCount - 1]?.type} ${value}`
  }
}
