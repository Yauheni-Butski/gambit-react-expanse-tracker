import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { TransactionListComponent } from './TransactionList.component';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <TransactionListComponent transactions={transactions}/>
    )
}
