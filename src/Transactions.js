import React from 'react';

function Transactions(props) {
    return (
        <div className="balance">
            <span className="history">History</span>
            <hr/>
            <ul>
                <li className="transaction">
                    <div className="tran-name">
                        Book
                    </div>
                    <div className="tran-price">
                        -$40
                    </div>
                </li>
                <li className="transaction">
                    <div className="tran-name">
                        Payment
                    </div>
                    <div className="tran-price">
                        $500
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Transactions;
