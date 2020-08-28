import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
    
  );
}

export default App;