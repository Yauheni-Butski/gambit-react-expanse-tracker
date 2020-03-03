import React from 'react';

import classNames from 'classnames/bind';
import styles from './Transaction.module.scss';

let cx = classNames.bind(styles);

export const TransactionComponent = ({transaction, deleteTran}) => {

    const absAmount = Math.abs(transaction.amount);
    const sign = transaction.amount < 0 ? '-' : '+';

    let elClass = cx({
        el: true,
        plus: transaction.amount > 0,
        minus: transaction.amount < 0
    });

    const onClick = () => {
        deleteTran(transaction.id);
    }

    return (
        <li className={elClass}>
            {transaction.text} <span>{sign} ${absAmount}</span>
            <button onClick={onClick} className={styles.deleteBtn}>x</button>
        </li>
    )
}