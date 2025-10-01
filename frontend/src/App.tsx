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
      {/* Modern Navigation Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <div className="logo-icon">💰</div>
              <span className="logo-text">Wallet</span>
            </div>
          </div>
          
          <nav className="nav-tabs">
            <button 
              className={`nav-tab ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={navigateToDashboard}
            >
              <span className="nav-icon">🏠</span>
              Dashboard
            </button>
            <button 
              className={`nav-tab ${currentPage === 'transactions' ? 'active' : ''}`}
              onClick={navigateToTransactions}
            >
              <span className="nav-icon">📊</span>
              Transactions
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {currentPage === 'dashboard' ? (
          <WalletDashboard onNavigateToTransactions={navigateToTransactions} />
        ) : (
          <WalletTransactions onNavigateToDashboard={navigateToDashboard} />
        )}
      </main>
    </div>
  );
};

export default App;