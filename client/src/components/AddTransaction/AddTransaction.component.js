import React, { useState } from 'react';
import styles from './AddTransaction.module.scss';

export const AddTransactionComponent = ({addTransaction}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        addTransaction(text, amount);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text..." />
                </div>
                <div>
                    <label>Amount <br />
                    (negative - expense, positive - income)
                    </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button className={styles.btn}>Add transaction</button>
            </form>
        </>
    )
}