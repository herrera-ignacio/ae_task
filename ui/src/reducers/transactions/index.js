import types from '../../actions/types/transactions'
import { INITIAL_LOADER_STATE, INITIAL_TRANSACTIONS_STATE } from './constants'

export const transactionsLoader = (state = INITIAL_LOADER_STATE, action) => {
  switch(action.type)
  {
    case types.GET_TRANSACTIONS_REQUEST:
    {
      return { loading: true, error: false }
    }
    case types.GET_TRANSACTIONS_SUCCESS:
    {
      return { loading: false, error: false }
    }
    case types.GET_TRANSACTIONS_ERROR:
    {
      return { loading: false, error: true }
    }
    default: return state
  }
}

const addTransactionsToMap = (transactions, map) => {
  transactions.forEach(t => map.set(t.id, t))
  return map
}

const mergeTransactionsFromPayload = (newTransactions, prevTransactions) => {
  return addTransactionsToMap(newTransactions, new Map(prevTransactions))
}

export const transactions = (state = INITIAL_TRANSACTIONS_STATE, action) => {
  switch(action.type)
  {
    case types.GET_TRANSACTIONS_SUCCESS:
    {
      return mergeTransactionsFromPayload(action.transactions, state)
    }
    default: return state
  }
}