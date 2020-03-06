import React from 'react';

import classNames from 'classnames';
import styles from './IncomeExpenses.module.scss';

export const IncomeExpensesComponent = ({income, expense}) => {

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