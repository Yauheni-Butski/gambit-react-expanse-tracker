import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { TransactionComponent } from './Transaction.component';
import { deleteTransaction, transactionError } from '../../context/actions';

//also can use Transaction = (props) => {.. and use props.transaction ..}
export const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();

    //TODO. Вынести отдельно. SAGA?
    async function delTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch(deleteTransaction(id));
        } catch (error) {
            dispatch(transactionError(error.response.data.error));
        }
    }

    return (
        <TransactionComponent
            transaction={transaction}
            deleteTran={delTransaction}/>
    )
}
