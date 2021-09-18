import React from 'react';

function Balance(props) {
    return (
        <div className="balance">
            <div>Your Balance</div>
            <div className="balance-amount">{'$' + props.transactions.reduce(((acc, t) => parseInt(t.amount) + acc), 0)}</div>
            <div className="card">
                <div className="income-expense">
                    <div>Income</div>
                    <div className="income">{'$' + props.transactions.filter(t => t.amount > 0).reduce(((acc, t) => parseInt(t.amount) + acc), 0)}</div>
                </div>
                <div className="vl">

                </div>
                <div className="income-expense">
                    <div>Expense</div>
                    <div className="expense">{'$' + props.transactions.filter(t => t.amount < 0).reduce(((acc, t) => parseInt(t.amount) + acc), 0)}</div>
                </div>

            </div>
        </div>
    );
}

export default Balance;

