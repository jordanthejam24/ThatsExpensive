import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';


function AddTransaction() {
    {/* default empty string, amount will be 0 */}
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <div className="addTransaction">
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label forhtml="text">Text</label>
                {/* onchange looks for when something is typed in, calls function setText to what we want to set it to. e.target.value gets that */}
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label forhtml="amount">Amount<br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </div>
        
    )
}

export default AddTransaction
