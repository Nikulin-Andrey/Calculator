import { createAction } from '@reduxjs/toolkit'

import {
  ADD_OPERAND, // ADD_OPERAND_ACTION_TYPE
  ADD_OPERATION,
  CLEAR_ALL,
  CLEAR_EXPRATION,
  GET_RESULT,
  OPEN_EXPRATION,
  CLOSE_EXPRATION,
} from '@/constants'

export const addOperandAtion = createAction(ADD_OPERAND)
export const addOperationAtion = createAction(ADD_OPERATION)
export const getResultAtion = createAction(GET_RESULT)
export const clearAllAtion = createAction(CLEAR_ALL)
export const clearExprationAtion = createAction(
  CLEAR_EXPRATION,
)
export const openExprationAction = createAction(
  OPEN_EXPRATION,
)
export const closeExprationAction = createAction(
  CLOSE_EXPRATION,
)
