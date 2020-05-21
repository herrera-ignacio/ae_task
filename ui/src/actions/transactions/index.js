import types from '../types/transactions'
import { apiURL } from '../../config/urls'

const requestTransactions = () => ({
  type: types.GET_TRANSACTIONS_REQUEST
})

const requestTransactionsError = () => ({
  type: types.GET_TRANSACTIONS_ERROR
})

export const receiveTransactions = (transactions) => ({
  type: types.GET_TRANSACTIONS_SUCCESS,
  transactions
});

export const getTransactions = () => async (dispatch) => {
  dispatch(requestTransactions())
  try {
    const response = await fetch(`${apiURL}/transactions`);
    const data = await response.json();
    return dispatch(receiveTransactions(data));
  }
  catch (err) {
    console.log(err);
    return dispatch(requestTransactionsError())
  }
}