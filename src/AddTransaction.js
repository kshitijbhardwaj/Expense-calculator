import React, {useState} from 'react';

function AddTransaction(props) {
    const [newName, setnewName] = useState('');
    const [newAMount, setnewAmount] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        props.addTransaction((prev) => [...prev, {name: newName, amount: newAMount}]);
    }
    return (
        <div>
            <span className="history">Add new transaction</span>
            <hr/>
            <form onSubmit={onSubmit}>
                <label className="label-names">Text</label>
                <input aria-label="Text" onChange={(e) => setnewName(e.target.value)} className="input-box"/>
                <label className="label-names">Amount</label>
                <input aria-label="Text" onChange={(e) => setnewAmount(e.target.value)} className="input-box"/>
                <button className="add-tran" onClick={onSubmit}>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
