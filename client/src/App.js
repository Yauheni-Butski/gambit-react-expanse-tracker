import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { ReduxProvider } from './redux_provider/ReduxProvider';

function App() {
  return (
    <ReduxProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ReduxProvider>
  );
}

export default App;
