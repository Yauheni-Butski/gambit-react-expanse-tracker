import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { TransactionListComponent } from './TransactionList.component';

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TransactionListComponent transactions={transactions}/>
    )
}
