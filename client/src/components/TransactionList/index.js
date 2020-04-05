import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TransactionListComponent } from './TransactionList.component';
import { fetchAllSagaTransactions } from '../../sagas/actions';

export const TransactionList = () => {
    const transactions = useSelector(state => state.transactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSagaTransactions());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TransactionListComponent transactions={transactions}/>
    )
}
