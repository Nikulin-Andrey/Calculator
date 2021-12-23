import { handleActions } from 'redux-actions'

import {
  addOperandAtion,
  addOperationAtion,
  getResultAtion,
  clearAllAtion,
  clearExprationAtion,
  changeThemeAction,
} from '@/actions'
import {
  getDisplayValue,
  getCommand,
  executeCommand,
  getHistoryExpration,
} from '@/helpers'

const INITIAL_STATE = {
  displayValue: '0',
  result: 0,
  afterOperation: false,
  beforeResult: true,
  commands: [],
  history: [],
  theme: 'light',
}

export default handleActions(
  new Map([
    [
      addOperandAtion,
      (state, action) => ({
        ...state,
        displayValue: getDisplayValue(
          state.displayValue,
          action.payload,
          state.commands.length > 0,
        ),
      }),
    ],
    [
      addOperationAtion,
      (state, action) => {
        const value = Number(state.displayValue)
        const commandsCount = state.commands.length
        console.log(state.beforeResult)
        const result = executeCommand(
          value,
          commandsCount,
          state.commands[commandsCount - 1],
          state.result,
          state.beforeResult,
        )
        const command = new getCommand(action.payload)
        console.log(state.commands[commandsCount - 1])
        const historyExpration = getHistoryExpration(
          state.result,
          value,
          state.commands[commandsCount - 1]?.type,
          commandsCount,
          state.beforeResult,
        )

        return {
          ...state,
          commands: [
            ...state.commands,
            new command(value, action.payload),
          ],
          result: result,
          displayValue: result + '',
          afterOperation: !state.afterOperation,
          beforeResult: true,
          history: historyExpration
            ? [historyExpration, ...state.history]
            : [...state.history],
        }
      },
    ],
    [
      getResultAtion,
      (state, action) => {
        const commandsCount = state.commands.length
        const value = state.beforeResult
          ? Number(state.displayValue)
          : state.commands[commandsCount - 1].value
        const type = state.commands[commandsCount - 1].type
        const result = executeCommand(
          value,
          commandsCount,
          state.commands[commandsCount - 1],
          state.result,
          true,
        )
        const command = getCommand(type)
        const historyExpration = getHistoryExpration(
          state.result,
          value,
          state.commands[commandsCount - 1]?.type,
          commandsCount,
          true,
        )
        return {
          ...state,
          commands: [
            ...state.commands,
            new command(value, type),
          ],
          result: result,
          displayValue: result + '',
          beforeResult: false,
          history: historyExpration
            ? [historyExpration, ...state.history]
            : [...state.history],
        }
      },
    ],
    [
      clearExprationAtion,
      (state, action) => {
        const lastCommand = state.commands.length - 1
        if (lastCommand < 0) {
          return { ...state }
        }
        const result = state.commands[lastCommand].undo(
          state.result,
          state.commands[lastCommand].value,
        )
        console.log(state.commands, lastCommand)
        return {
          ...state,
          result: result,
          displayValue: result + '',
          commands: state.commands.filter(
            (command, index) => index < lastCommand,
          ),
        }
      },
    ],
    [
      clearAllAtion,
      (state, action) => ({
        ...INITIAL_STATE,
        theme: state.theme,
      }),
    ],
    [
      changeThemeAction,
      (state, action) => ({
        ...state,
        theme: action.payload,
      }),
    ],
  ]),
  INITIAL_STATE,
)
