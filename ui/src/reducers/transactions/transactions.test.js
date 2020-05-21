import { transactions, transactionsLoader, addTransactionsToMap } from './index'
import { INITIAL_TRANSACTIONS_STATE, INITIAL_LOADER_STATE } from './constants'
import types from '../../actions/types/transactions'

const mockedTransactions = [{ id: 1 }, { id: 2}]

const includesTransaction = (mapObj, transaction) => mapObj.has(transaction.id)

const includesTransactions = (mapObj) => mockedTransactions.every(
	(t) => includesTransaction(mapObj, t)
)

describe('Transactions reducer', () => {
	it('Should return initial state', () => {
		expect(transactions(undefined, {})).toEqual(INITIAL_TRANSACTIONS_STATE)
	})

	it('Should handle receiving transactions', () => {
		const reducer = transactions(undefined, {
			type: types.GET_TRANSACTIONS_SUCCESS,
			transactions: mockedTransactions
		})
		expect(includesTransactions(reducer, mockedTransactions)).toEqual(true)
	})

});

describe('Transactions Loader reducer', () => {
	it('Should return initial state', () => {
		expect(transactionsLoader(undefined, {})).toEqual(INITIAL_LOADER_STATE)
	})

	it('Should set as loading on transactions request', () => {
		const loader = transactionsLoader(undefined, {
			type: types.GET_TRANSACTIONS_REQUEST,
		})
		expect(loader.loading).toEqual(true)
		expect(loader.error).toEqual(false)
	})

	it('Should stop loading transactions success', () => {
		const loader = transactionsLoader([], {
			type: types.GET_TRANSACTIONS_SUCCESS,
		})
		expect(loader.loading).toEqual(false)
		expect(loader.error).toEqual(false)
	})

	it('Should stop loading if request transactions success', () => {
		const loader = transactionsLoader(
			{ loading: true, error: false },
			{ type: types.GET_TRANSACTIONS_SUCCESS }
		)
		expect(loader.loading).toEqual(false)
		expect(loader.error).toEqual(false)
	})
	it('Should stop loading and set error if request transactions fails', () => {
		const loader = transactionsLoader(
			{ loading: true, error: false },
			{ type: types.GET_TRANSACTIONS_ERROR }
		)
		expect(loader.loading).toEqual(false)
		expect(loader.error).toEqual(true)
	})
})