import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

//passing in props 
//using math.abs because without it there are 2 negtive signs but we need to know if it's pos or neg
//dynamic classname checks if the amount is pos or neg and assigns class on them
function Transaction({transaction}) {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
