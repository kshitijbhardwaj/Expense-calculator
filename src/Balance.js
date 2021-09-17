import React from 'react';

function Balance(props) {
    return (
        <div className="balance">
            <div>Your Balance</div>
            <div className="balance-amount">$350.00</div>
            <div className="card">
                <div className="income-expense">
                    <div>Income</div>
                    <div className="income">400.00</div>
                </div>
                <div className="vl">

                </div>
                <div className="income-expense">
                    <div>Expense</div>
                    <div className="expense">50.00</div>
                </div>

            </div>
        </div>
    );
}

export default Balance;

