import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

//also can use Transaction = (props) => {.. and use props.transaction ..}
export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const classSign = transaction.amount < 0 ? 'minus' : 'plus';
    const absAmount = Math.abs(transaction.amount);

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={classSign}>
            {transaction.text} <span>{sign} ${absAmount}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
