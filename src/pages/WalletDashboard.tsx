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
      <header className="dashboard-header">
        <h1>💰 Wallet Dashboard</h1>
        <p>Manage your wallet and transactions</p>
      </header>

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {showWalletForm ? (
        <div className="wallet-setup">
          <h2>Create Your Wallet</h2>
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
      ) : wallet ? (
        <div className="wallet-info">
          <div className="wallet-card">
            <h2>Your Wallet</h2>
            <div className="wallet-details">
              <div className="wallet-name">
                <strong>Name:</strong> {wallet.name}
              </div>
              <div className="wallet-balance">
                <strong>Balance:</strong> ${wallet.balance.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="transaction-section">
            <h3>Make a Transaction</h3>
            <TransactionForm
              walletId={wallet.id}
              onTransactionSuccess={handleTransactionSuccess}
              loading={loading}
            />
          </div>

          <div className="navigation-section">
            <button 
              className="btn btn-secondary"
              onClick={onNavigateToTransactions}
            >
              View All Transactions →
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WalletDashboard;
