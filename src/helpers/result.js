import {
  executeCommand,
  getCommand,
  getHistoryExpration,
} from './index'

export const getResult = state => {
  const commandsCount = state.commands.length
  if (
    commandsCount === 0 ||
    (!state.changeOperand && !state.beforeResult)
  ) {
    return { ...state }
  }
  const value = state.beforeResult
    ? Number(state.displayValue)
    : state.commands[commandsCount - 1].value
  const type = state.commands[commandsCount - 1].type
  const result = executeCommand(value, {
    ...state,
    beforeResult: true,
    changeOperand: false,
  })
  const command = getCommand(type)
  const historyExpration = getHistoryExpration(value, {
    ...state,
    beforeResult: true,
    changeOperand: false,
  })
  return {
    commands: [...state.commands, new command(value, type)],
    result: result,
    displayValue: result + '',
    history: historyExpration
      ? [historyExpration, ...state.history]
      : [...state.history],
  }
}
