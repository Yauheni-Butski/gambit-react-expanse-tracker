import React from 'react';

export const BalanceComponent = ({total}) => {
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}