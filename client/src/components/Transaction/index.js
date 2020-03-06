import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { TransactionComponent } from './Transaction.component';

//also can use Transaction = (props) => {.. and use props.transaction ..}
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <TransactionComponent
            transaction={transaction}
            deleteTran={deleteTransaction}/>
    )
}
