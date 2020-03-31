import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import { addTransaction, deleteTransaction, getAllTransactions, transactionError } from './actions';

const initialState = {
    transactions: [],
    error: null,
    loading: true
};

export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //TODO. Вынести отдельно. SAGA?
    async function getTransactions(){
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch(getAllTransactions(res.data.data));

        } catch (error) {
            dispatch(transactionError(error.response.data.error));
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                error: state.error,
                loading: state.loading,
                getTransactions,
                deleteTransaction: (id) => dispatch(deleteTransaction(id)),
                addTransaction: (transaction) => dispatch(addTransaction(transaction))}}>
            {children}
        </GlobalContext.Provider>
    );
}