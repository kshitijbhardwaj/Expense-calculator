import './App.css';
import Balance from "./Balance";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";
import React, {useState} from "react";
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string,
    amount: PropTypes.string
}
const trans = [{name: 'Payment', amount: '5000'},
    {name: 'Book', amount: '-50'},
    {name: 'Bonus', amount: '500'},
    {name: 'Fees', amount: '-600'}];

function App() {
    const [transactions, setTransaction] = useState(trans);

    return (
        <div className="outer-layout">
            <div>
                <h2>Expense Tracker</h2>
            </div>
            <div>
                <Balance transactions={transactions}/>
            </div>
            <div>
                <Transactions transactions={transactions} deleteTransaction={setTransaction}/>
            </div>
            <div>
                <AddTransaction transactions={transactions} addTransaction={setTransaction}/>
            </div>
        </div>
    );
}

export default App;
