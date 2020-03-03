import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import classNames from 'classnames/bind';
import styles from './Transaction.module.scss';

let cx = classNames.bind(styles);

//also can use Transaction = (props) => {.. and use props.transaction ..}
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const absAmount = Math.abs(transaction.amount);
    const sign = transaction.amount < 0 ? '-' : '+';
    let elClass = cx({
        el: true,
        plus: transaction.amount > 0,
        minus: transaction.amount < 0
    });

    return (
        <li className={elClass}>
            {transaction.text} <span>{sign} ${absAmount}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className={styles.deleteBtn}>x</button>
        </li>
    )
}
