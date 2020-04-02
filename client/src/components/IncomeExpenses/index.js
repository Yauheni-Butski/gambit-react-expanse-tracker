import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { IncomeExpensesComponent } from './IncomeExpenses.component';

export const IncomeExpenses = () => {
    const transactions = useSelector(state => state.transactions, shallowEqual);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <IncomeExpensesComponent
            income={income}
            expense={expense}/>
    )
}
