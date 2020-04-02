import React from 'react';
import { AddTransactionComponent } from './AddTransaction.component';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { addTransaction, transactionError } from '../../context/actions';

export const AddTransaction = () => {
    const dispatch = useDispatch();

    //TODO. Вынести отдельно. SAGA?
    async function createTransaction(transaction){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch(addTransaction(res.data.data));
        } catch (error) {
            dispatch(transactionError(error.response.data.error));
        }
    }

    const onSubmit = (text, amount) => {
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            amount: +amount,
            text
        }

        createTransaction(newTransaction);
    }

    return (
        <AddTransactionComponent addTransaction={onSubmit}/>
    )
}
