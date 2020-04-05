export const deleteSagaTransaction = id => ({
    type: 'SAGA_DELETE_TRANSACTION',
    payload: id
});

export const fetchAllSagaTransactions = () => ({
    type: 'SAGA_FETCH_TRANSACTIONS'
});

export const addSagaTransaction = transaction => ({
    type: 'SAGA_ADD_TRANSACTION',
    payload: transaction
});