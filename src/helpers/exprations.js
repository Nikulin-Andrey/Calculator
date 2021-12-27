import { getResult } from './index'
export const getExprations = (
  state,
  result,
  command,
  value,
  type,
) => {
  if (state.exprations.length === 0) {
    return []
  }
  return state.exprations.map((expration, index) => {
    if (index === state.exprations.length - 1) {
      return {
        result: result,
        commands: [
          ...expration.commands,
          new command(value, type),
        ],
      }
    }
    return expration
  })
}

export const closeAllExprations = state => {
  const last = state.exprations.length - 1
  for (let index = last; index >= 0; index--) {
    if (state.exprations[index].commands.length === 0) {
      continue
    }
    let result = getResult({
      ...state,
      commands: state.exprations[index].commands,
    })
    return result.displayValue
  }
}
