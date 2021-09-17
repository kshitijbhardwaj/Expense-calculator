import React from 'react';

const AddTransaction = (props) => (
    <div>
        <span className="history">Add new transaction</span>
        <hr/>
        <label className="label-names">Text</label>
        <input aria-label="Text" className="input-box"/>
        <label className="label-names">Amount</label>
        <input aria-label="Text" className="input-box"/>
        <button className="add-tran">Add Transaction</button>
    </div>
);

export default AddTransaction;
