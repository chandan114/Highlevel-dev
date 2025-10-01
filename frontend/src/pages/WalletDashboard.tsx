import React, { useState, useEffect } from 'react';
import { Wallet, Transaction } from '../types';
import TransactionForm from '../components/TransactionForm';
import './WalletDashboard.css';

const API_BASE_URL = 'http://localhost:5070/wallet';

interface WalletDashboardProps {
  onNavigateToTransactions: () => void;
}

const WalletDashboard: React.FC<WalletDashboardProps> = ({ onNavigateToTransactions }) => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showWalletForm, setShowWalletForm] = useState(false);
  const [walletForm, setWalletForm] = useState({
    name: '',
    balance: 0,
  });

  // Check for existing wallet in localStorage on component mount
  useEffect(() => {
    const savedWalletId = localStorage.getItem('walletId');
    if (savedWalletId) {
      fetchWallet(savedWalletId);
    } else {
      setShowWalletForm(true);
    }
  }, []);

  const fetchWallet = async (walletId: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/${walletId}`);
      if (!response.ok) throw new Error('Failed to fetch wallet');
      const data = await response.json();
      setWallet({
        id: parseInt(data.id),
        name: data.name,
        balance: parseFloat(data.balance),
        createdAt: data.date,
        updatedAt: data.date,
      });
      setShowWalletForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // If wallet not found, clear localStorage and show form
      localStorage.removeItem('walletId');
      setShowWalletForm(true);
    } finally {
      setLoading(false);
    }
  };

  const createWallet = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: walletForm.name,
          balance: walletForm.balance,
        }),
      });

      if (!response.ok) throw new Error('Failed to create wallet');
      
      const data = await response.json();
      const newWallet: Wallet = {
        id: parseInt(data.id),
        name: data.name,
        balance: parseFloat(data.balance),
        createdAt: data.date,
        updatedAt: data.date,
      };
      
      setWallet(newWallet);
      localStorage.setItem('walletId', data.id);
      setShowWalletForm(false);
      setWalletForm({ name: '', balance: 0 });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleTransactionSuccess = (updatedWallet: Wallet) => {
    setWallet(updatedWallet);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (walletForm.name.trim()) {
      createWallet();
    }
  };

  if (loading && !wallet) {
    return (
      <div className="wallet-dashboard">
        <div className="loading">Loading wallet...</div>
      </div>
    );
  }

  return (
    <div className="wallet-dashboard">
      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {showWalletForm ? (
        <div className="wallet-setup-container">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">Create Your Wallet</h1>
              <p className="card-subtitle">Set up your digital wallet to start managing your finances</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="wallet-form">
              <div className="form-group">
                <label htmlFor="name">Username (Wallet Name)</label>
                <input
                  type="text"
                  id="name"
                  value={walletForm.name}
                  onChange={(e) => setWalletForm({ ...walletForm, name: e.target.value })}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="balance">Initial Balance (Optional)</label>
                <input
                  type="number"
                  id="balance"
                  value={walletForm.balance}
                  onChange={(e) => setWalletForm({ ...walletForm, balance: parseFloat(e.target.value) || 0 })}
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Creating...' : 'Create Wallet'}
              </button>
            </form>
          </div>
        </div>
      ) : wallet ? (
        <div className="wallet-dashboard-content">
          {/* Balance Cards Section */}
          <div className="balance-cards">
            <div className="balance-card primary">
              <div className="balance-header">
                <div className="balance-icon">💰</div>
                <div className="balance-info">
                  <h3>Current Balance</h3>
                  <div className="balance-amount">
                    <span className="currency">USD</span>
                    <span className="amount">${wallet.balance.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>

          {/* Wallet Info Card */}
          <div className="card wallet-info-card">
            <div className="card-header">
              <h2 className="card-title">Wallet Information</h2>
              <p className="card-subtitle">Account details and quick actions</p>
            </div>
            
            <div className="wallet-details-grid">
              <div className="wallet-detail">
                <span className="detail-label">Wallet Name</span>
                <span className="detail-value">{wallet.name}</span>
              </div>
              <div className="wallet-detail">
                <span className="detail-label">Wallet ID</span>
                <span className="detail-value">#{wallet.id}</span>
              </div>
              <div className="wallet-detail">
                <span className="detail-label">Created</span>
                <span className="detail-value">{new Date(wallet.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Transaction Section */}
          <div className="card transaction-section">
            <div className="card-header">
              <h2 className="card-title">Make a Transaction</h2>
              <p className="card-subtitle">Add or withdraw funds from your wallet</p>
            </div>
            
            <TransactionForm
              walletId={wallet.id}
              onTransactionSuccess={handleTransactionSuccess}
              loading={loading}
            />
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button 
              className="btn btn-secondary action-btn"
              onClick={onNavigateToTransactions}
            >
              <span className="btn-icon">📊</span>
              View All Transactions
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WalletDashboard;
