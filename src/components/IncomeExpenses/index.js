import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import classNames from 'classnames';
import styles from './IncomeExpenses.module.scss';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    let moneyPlus = classNames(styles.money, styles.plus);
    let moneyMinus = classNames(styles.money, styles.minus);

    return (
        <div className={styles.incExpContainer}>
            <div>
                <h4>Income</h4>
                <p className={moneyPlus}>${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className={moneyMinus}>${expense}</p>
            </div>
        </div>
    )
}
