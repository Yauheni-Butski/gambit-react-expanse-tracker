import React from 'react';
import { AddTransactionComponent } from './AddTransaction.component';
import { addSagaTransaction } from '../../sagas/actions';
import { useDispatch } from 'react-redux';

export const AddTransaction = () => {
    const dispatch = useDispatch();

    const onSubmit = (text, amount) => {
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            amount: +amount,
            text
        }

        dispatch(addSagaTransaction(newTransaction));
    }

    return (
        <AddTransactionComponent addTransaction={onSubmit}/>
    )
}
