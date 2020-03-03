import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from '../Transaction';

import styles from './TransactionList.module.scss';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className={styles.list}>
                {transactions.map(tran => (<Transaction key={tran.id} transaction={tran} />))}
            </ul>
        </>
    )
}
