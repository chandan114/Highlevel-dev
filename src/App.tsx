import React, { useState } from 'react';
import './App.css';
import WalletDashboard from './pages/WalletDashboard';
import WalletTransactions from './pages/WalletTransactions';

type Page = 'dashboard' | 'transactions';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const navigateToTransactions = () => {
    setCurrentPage('transactions');
  };

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div className="app">
      {currentPage === 'dashboard' ? (
        <WalletDashboard onNavigateToTransactions={navigateToTransactions} />
      ) : (
        <WalletTransactions onNavigateToDashboard={navigateToDashboard} />
      )}
    </div>
  );
};

export default App;