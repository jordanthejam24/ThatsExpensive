import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const {transactions} = useContext(GlobalContext);

    return (
        <div className="transactionList">
        <h3>History</h3>
        <ul id="list" className="list">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
        </div>
    )
}
// <Transaction transaction={transaction} /> is passing in props. list needs unique key
export default TransactionList
