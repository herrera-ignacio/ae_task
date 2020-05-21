import { createSelector } from 'reselect'
import { getTransactionsFromState } from './getters'

const transactionsAsArray = transactions => Array.from(transactions.values())

export const getTransactions = createSelector(
  [getTransactionsFromState],
  transactions => transactionsAsArray(transactions)
)
