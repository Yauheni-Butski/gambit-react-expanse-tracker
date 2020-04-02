import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { BalanceComponent } from './Balance.component';

export const Balance = () => {
    const transactions = useSelector(state => state.transactions, shallowEqual);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <BalanceComponent total={total}/>
    )
}
