import { createAction } from '@reduxjs/toolkit'

import {
  ADD_OPERAND,
  ADD_OPERATION,
  CLEAR_ALL,
  CLEAR_EXPRATION,
  GET_RESULT,
} from '@/constants'

export const addOperandAtion = createAction(ADD_OPERAND)
export const addOperationAtion = createAction(ADD_OPERATION)
export const getResultAtion = createAction(GET_RESULT)
export const clearAllAtion = createAction(CLEAR_ALL)
export const clearExprationAtion = createAction(
  CLEAR_EXPRATION,
)
