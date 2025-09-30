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
      <header className="transactions-header">
        <h1>📊 Wallet Transactions</h1>
        <button 
          className="btn btn-secondary"
          onClick={onNavigateToDashboard}
        >
          ← Back to Dashboard
        </button>
      </header>

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {transactions.length > 0 && (
        <div className="transactions-controls">
          <div className="sort-controls">
            <label>Sort by:</label>
            <button 
              className={`sort-btn ${sortBy === 'date' ? 'active' : ''}`}
              onClick={() => handleSort('date')}
            >
              Date {sortBy === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button 
              className={`sort-btn ${sortBy === 'amount' ? 'active' : ''}`}
              onClick={() => handleSort('amount')}
            >
              Amount {sortBy === 'amount' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </div>
          
          <button className="btn btn-primary" onClick={exportToCSV}>
            📥 Export CSV
          </button>
        </div>
      )}

      {transactions.length === 0 ? (
        <div className="no-transactions">
          <p>No transactions found. Make your first transaction from the dashboard!</p>
        </div>
      ) : (
        <>
          <div className="transactions-table-container">
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
                    <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span className={`transaction-type ${transaction.type.toLowerCase()}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className={`amount ${transaction.type.toLowerCase()}`}>
                      {transaction.type === 'CREDIT' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </td>
                    <td>${transaction.balance.toFixed(2)}</td>
                    <td>{transaction.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="btn btn-secondary"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              
              <button 
                className="btn btn-secondary"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WalletTransactions;
