import React, { useState, useEffect } from 'react';
import { Transaction } from '../types';
import './WalletTransactions.css';

const API_BASE_URL = 'http://localhost:5070/wallet';

interface WalletTransactionsProps {
  onNavigateToDashboard: () => void;
}

const WalletTransactions: React.FC<WalletTransactionsProps> = ({ onNavigateToDashboard }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [walletId, setWalletId] = useState<string | null>(null);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const savedWalletId = localStorage.getItem('walletId');
    if (savedWalletId) {
      setWalletId(savedWalletId);
      fetchTransactions(savedWalletId);
    } else {
      setError('No wallet found. Please create a wallet first.');
    }
  }, []);

  const fetchTransactions = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/${id}/transactions`);
      if (!response.ok) throw new Error('Failed to fetch transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const sortTransactions = (transactions: Transaction[]) => {
    return [...transactions].sort((a, b) => {
      let aValue: any, bValue: any;
      
      if (sortBy === 'date') {
        aValue = new Date(a.createdAt).getTime();
        bValue = new Date(b.createdAt).getTime();
      } else {
        aValue = a.amount;
        bValue = b.amount;
      }

      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  };

  const exportToCSV = () => {
    const sortedTransactions = sortTransactions(transactions);
    const csvContent = [
      ['Date', 'Type', 'Amount', 'Balance', 'Description'],
      ...sortedTransactions.map(t => [
        new Date(t.createdAt).toLocaleDateString(),
        t.type,
        t.amount.toFixed(2),
        t.balance.toFixed(2),
        t.description
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wallet-transactions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleSort = (field: 'date' | 'amount') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const sortedTransactions = sortTransactions(transactions);
  const totalPages = Math.ceil(sortedTransactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTransactions = sortedTransactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading && transactions.length === 0) {
    return (
      <div className="wallet-transactions">
        <div className="loading">Loading transactions...</div>
      </div>
    );
  }

  return (
    <div className="wallet-transactions">
      <div className="transactions-header">
        <div className="header-content">
          <div className="header-info">
            <h1 className="page-title">Transaction History</h1>
            <p className="page-subtitle">View and manage all your wallet transactions</p>
          </div>
          <button 
            className="btn btn-secondary back-btn"
            onClick={onNavigateToDashboard}
          >
            <span className="btn-icon">←</span>
            Back to Dashboard
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {transactions.length > 0 && (
        <div className="transactions-controls">
          <div className="controls-left">
            <div className="sort-controls">
              <span className="sort-label">Sort by:</span>
              <div className="sort-buttons">
                <button 
                  className={`sort-btn ${sortBy === 'date' ? 'active' : ''}`}
                  onClick={() => handleSort('date')}
                >
                  <span className="sort-icon">📅</span>
                  Date
                  {sortBy === 'date' && (
                    <span className="sort-arrow">
                      {sortOrder === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </button>
                <button 
                  className={`sort-btn ${sortBy === 'amount' ? 'active' : ''}`}
                  onClick={() => handleSort('amount')}
                >
                  <span className="sort-icon">💰</span>
                  Amount
                  {sortBy === 'amount' && (
                    <span className="sort-arrow">
                      {sortOrder === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className="controls-right">
            <button className="btn btn-primary export-btn" onClick={exportToCSV}>
              <span className="btn-icon">📥</span>
              Export CSV
            </button>
          </div>
        </div>
      )}

      {transactions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h3>No Transactions Yet</h3>
          <p>Make your first transaction from the dashboard to see it here!</p>
          <button 
            className="btn btn-primary"
            onClick={onNavigateToDashboard}
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <>
          <div className="transactions-table-container">
            <div className="table-wrapper">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Balance After</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransactions.map((transaction) => (
                    <tr key={transaction.id} className={`transaction-row ${transaction.type.toLowerCase()}`}>
                      <td className="date-cell">
                        <div className="date-info">
                          <span className="date">{new Date(transaction.createdAt).toLocaleDateString()}</span>
                          <span className="time">{new Date(transaction.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                        </div>
                      </td>
                      <td className="type-cell">
                        <span className={`transaction-type ${transaction.type.toLowerCase()}`}>
                          <span className="type-icon">
                            {transaction.type === 'CREDIT' ? '➕' : '➖'}
                          </span>
                          {transaction.type}
                        </span>
                      </td>
                      <td className={`amount-cell ${transaction.type.toLowerCase()}`}>
                        <span className="amount-value">
                          {transaction.type === 'CREDIT' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </span>
                      </td>
                      <td className="balance-cell">
                        <span className="balance-value">${transaction.balance.toFixed(2)}</span>
                      </td>
                      <td className="description-cell">
                        <span className="description-text">{transaction.description}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="btn btn-secondary pagination-btn"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <span className="btn-icon">←</span>
                Previous
              </button>
              
              <div className="pagination-info">
                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <span className="total-info">
                  {sortedTransactions.length} transactions total
                </span>
              </div>
              
              <button 
                className="btn btn-secondary pagination-btn"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <span className="btn-icon">→</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WalletTransactions;
