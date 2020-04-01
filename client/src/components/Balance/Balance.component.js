import React from 'react';
import { numberWithCommas } from '../../utils/format';

export const BalanceComponent = ({total}) => {
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </>
    )
}