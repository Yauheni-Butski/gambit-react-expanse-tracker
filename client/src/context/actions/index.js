export const getAllTransactions = (transactions) => ({
    type: 'GET_TRANSACTIONS',
    payload: transactions
});

export const deleteTransaction = id => ({
    type: 'DELETE_TRANSACTION',
    payload: id
});

export const addTransaction = transaction => ({
    type: 'ADD_TRANSACTION',
    payload: transaction
});

export const transactionError = (errors) => ({
    type: 'TRANSACTION_ERROR',
    payload: errors
});