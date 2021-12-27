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
  changeOperand: true,
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
        changeOperand: false,
        commands: state.beforeResult
          ? [...state.commands]
          : [],
        displayValue: getDisplayValue(
          state.displayValue,
          action.payload,
          state.changeOperand,
        ),
      }),
    ],
    [
      addOperationAtion,
      (state, action) => {
        const value = Number(state.displayValue)
        const commandsCount = state.commands.length
        console.log(state.beforeResult)
        const result = executeCommand(value, state)
        const command = new getCommand(action.payload)
        const historyExpration = getHistoryExpration(
          state.result,
          value,
          state.commands[commandsCount - 1]?.type,
          commandsCount,
          state.beforeResult,
          state.changeOperand,
        )
        return {
          ...state,
          commands:
            state.changeOperand && commandsCount > 0
              ? state.commands.map((current, index) =>
                  index === commandsCount - 1
                    ? new command(value, action.payload)
                    : current,
                )
              : [
                  ...state.commands,
                  new command(value, action.payload),
                ],
          result: result,
          displayValue: result + '',
          beforeResult: true,
          changeOperand: true,
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
        if (
          (state.changeOperand && commandsCount === 0) ||
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
          changeOperand: true,
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
        const preLastCommand =
          lastCommand > 0 ? lastCommand - 1 : lastCommand
        if (lastCommand < 0) {
          return { ...state }
        }
        const result = state.commands[preLastCommand].undo(
          state.result,
          state.commands[lastCommand].value,
        )
        console.log(state.commands, lastCommand)
        return {
          ...state,
          result: result,
          displayValue: result + '',
          changeOperand: true,
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
        history: action.payload ? [] : [...state.history],
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
