import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { AddTransactionComponent } from './AddTransaction.component';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (text, amount) => {

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            amount: +amount,
            text
        }

        addTransaction(newTransaction);
    }

    return (
        <AddTransactionComponent addTransaction={onSubmit}/>
    )
}
