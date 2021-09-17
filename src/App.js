import './App.css';
import Balance from "./Balance";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";
import React from "react";

function App() {
    return (
        <div className="outer-layout">
            <div>
                <h2>Expense Tracker</h2>
            </div>
            <div>
                <Balance/>
            </div>
            <div>
                <Transactions/>
            </div>
            <div>
                <AddTransaction/>
            </div>
        </div>
    );
}

export default App;
