import React from 'react';
import { useDispatch } from 'react-redux';

import { TransactionComponent } from './Transaction.component';
import { deleteSagaTransaction } from '../../sagas/actions';

//also can use Transaction = (props) => {.. and use props.transaction ..}
export const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();

    const delTransaction = (id) =>{
        dispatch(deleteSagaTransaction(id));
    }

    return (
        <TransactionComponent
            transaction={transaction}
            deleteTran={delTransaction}/>
    )
}
