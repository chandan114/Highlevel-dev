import React, { useState } from 'react';
import { Transaction, Wallet, CreateTransactionData } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
  wallet: Wallet;
  onCreateTransaction: (data: CreateTransactionData) => void;
  loading: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  wallet,
  onCreateTransaction,
  loading,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<CreateTransactionData, 'walletId'>>({
    amount: 0,
    description: '',
    type: 'CREDIT',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.description.trim() && formData.amount > 0) {
      onCreateTransaction({
        ...formData,
        walletId: wallet.id,
      });
      setFormData({ amount: 0, description: '', type: 'CREDIT' });
      setShowForm(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button
          className="btn"
          onClick={() => setShowForm(!showForm)}
          style={{ marginBottom: '1rem' }}
        >
          {showForm ? 'Cancel' : 'Add Transaction'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <div className="form-group">
            <label htmlFor="type">Transaction Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="CREDIT">Credit (Add Money)</option>
              <option value="DEBIT">Debit (Spend Money)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="0.01"
              step="0.01"
              placeholder="0.00"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Transaction description"
              required
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Creating...' : 'Create Transaction'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="loading">Loading transactions...</div>
      ) : transactions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          <p>No transactions found. Add your first transaction above!</p>
        </div>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className={`transaction-item ${transaction.type.toLowerCase()}`}>
              <div className="amount credit">
                {transaction.type === 'CREDIT' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </div>
              <div className="description">{transaction.description}</div>
              <div className="date">
                {new Date(transaction.createdAt).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                Balance after: ${transaction.balance.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
