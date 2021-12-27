import { handleActions } from 'redux-actions'

import {
  addOperandAtion,
  addOperationAtion,
  getResultAtion,
  clearAllAtion,
  clearExprationAtion,
  changeThemeAction,
  openExprationAction,
  closeExprationAction,
} from '@/actions'
import {
  getDisplayValue,
  getCommand,
  executeCommand,
  getHistoryExpration,
  getCommands,
  getExprations,
  getResult,
  closeAllExprations,
} from '@/helpers'

const INITIAL_STATE = {
  displayValue: '0',
  result: 0,
  changeOperand: true,
  beforeResult: true,
  commands: [],
  exprations: [],
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
        const exprationsCount = state.exprations.length
        const result = executeCommand(value, state)
        const command = new getCommand(action.payload)
        const historyExpration = getHistoryExpration(
          value,
          state,
        )
        return {
          ...state,
          commands:
            exprationsCount > 0
              ? state.commands
              : getCommands(
                  value,
                  action.payload,
                  command,
                  state,
                ),
          result:
            exprationsCount > 0 ? state.result : result,
          exprations: getExprations(
            state,
            result,
            command,
            value,
            action.payload,
          ),
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
        let displayValue = state.displayValue
        console.log(state)
        if (state.exprations.length > 0) {
          displayValue = closeAllExprations(state)
        }
        const result = getResult({ ...state, displayValue })
        return {
          ...state,
          exprations: [],
          commands: [...result.commands],
          result: result.result,
          displayValue: result.displayValue,
          beforeResult: false,
          changeOperand: true,
          history: result.history,
        }
      },
    ],
    [
      openExprationAction,
      (state, action) => {
        return {
          ...state,
          exprations: [
            ...state.exprations,
            {
              result: 0,
              commands: [],
            },
          ],
          displayValue: '0',
          beforeResult: true,
          changeOperand: true,
        }
      },
    ],
    [
      closeExprationAction,
      (state, action) => {
        const lastExpr = state.exprations.length - 1
        if (lastExpr < 0) {
          return { ...state }
        }
        const exprCommands =
          state.exprations[lastExpr].commands
        const result = getResult({
          ...state,
          commands: exprCommands,
        })
        console.log(result)
        return {
          ...state,
          exprations: state.exprations.filter(
            (expr, index) => index < lastExpr,
          ),
          displayValue: result.displayValue,
          history: result.history,
          changeOperand: true,
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
