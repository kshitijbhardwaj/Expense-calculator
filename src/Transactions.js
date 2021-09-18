import React, {useState} from 'react';
import {AiOutlineCloseCircle} from "react-icons/all";

function Transactions(props) {
    const [dltButton, setdltButton] = useState({display: 'none'});
    const deleteTransaction = (i) => {
        props.deleteTransaction(prev => prev.splice(i, 1))
    }
    return (
        <div className="balance">
            <span className="history">History</span>
            <hr/>
            <ul>{props.transactions.map((t, index) => (
                <li className={`transaction ${t.amount > 0 ? "transaction-border-income" : "transaction-border-expense"}`}
                    key={index}
                    onMouseEnter={e => {
                        setdltButton({display: 'inline-block'});
                    }}
                    onMouseLeave={e => {
                        setdltButton({display: 'none'})
                    }}>
                    <div className="delete-tran" style={dltButton} onClick={() => deleteTransaction(index)}>
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
