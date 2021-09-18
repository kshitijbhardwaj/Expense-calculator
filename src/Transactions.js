import React, {useState} from 'react';
import {AiOutlineCloseCircle} from "react-icons/all";

function Transactions(props) {
    // const [dltButton, setdltButton] = useState({display: 'none'});
    const deleteTransaction = (i) => {
        props.deleteTransaction(prev => prev.filter((tr, index) => index !== i))
    }
    return (
        <div className="balance">
            <span className="history">History</span>
            <hr/>
            <ul className="ul-remove">{props.transactions.map((t, index) => (
                <li className={`transaction ${t.amount > 0 ? "transaction-border-income" : "transaction-border-expense"}`}
                    key={index}>
                    <div className="delete-tran" onClick={() => deleteTransaction(index)}>
                        <AiOutlineCloseCircle/>
                    </div>
                    <div className="tran-name">
                        {t.name}
                    </div>
                    <div className="tran-price">
                        {t.amount > 0 ? '$' + t.amount : '-$' + Math.abs(t.amount)}
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Transactions;
