import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import * as actions from './index'
import types from '../types/transactions'
import { apiURL } from '../../config/urls'

const mockStore = configureMockStore([thunk])

describe('Transactions Actions', () => {
	it('Should create action to receive transactions', () => {
		const transactions = ['1', '2', '3']
		const expectedAction = { type: types.GET_TRANSACTIONS_SUCCESS, transactions }
		expect(actions.receiveTransactions(transactions)).toEqual(expectedAction)
	});

	it('Should create receiveTransactions after successfull fetch', () => {
		fetchMock.getOnce(`${apiURL}/transactions`, ['1', '2', '3']);

		const expectedActions = [
  		{ type: types.GET_TRANSACTIONS_REQUEST },
			{ type: types.GET_TRANSACTIONS_SUCCESS, transactions: ['1', '2', '3'] }
		]

		const store = mockStore({})
		
		return store.dispatch(actions.getTransactions())
			.then(() => expect(store.getActions()).toEqual(expectedActions))
	});
})