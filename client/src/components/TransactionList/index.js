import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import axios from 'axios';

import { TransactionListComponent } from './TransactionList.component';
import { getAllTransactions, transactionError } from '../../context/actions';

export const TransactionList = () => {
    const transactions = useSelector(state => state.transactions, shallowEqual);
    const dispatch = useDispatch();

    //TODO. Вынести отдельно. SAGA?
    async function getTransactions(){
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch(getAllTransactions(res.data.data));

        } catch (error) {
            dispatch(transactionError(error.response.data.error));
        }
    }

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TransactionListComponent transactions={transactions}/>
    )
}
