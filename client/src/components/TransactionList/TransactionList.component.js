import React from 'react';
import { Transaction } from '../Transaction';
import styles from './TransactionList.module.scss';

export const TransactionListComponent = ({transactions}) => {
    return (
        <>
            <h3>History</h3>
            <ul className={styles.list}>
                {transactions.map(tran => (
                    <Transaction key={tran._id} transaction={tran} />
                ))}
            </ul>
        </>
    )
}