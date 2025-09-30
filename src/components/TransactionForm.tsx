import React, { useState } from 'react';
import { Wallet } from '../types';

interface TransactionFormProps {
  walletId: number;
  onTransactionSuccess: (updatedWallet: Wallet) => void;
  loading: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  walletId,
  onTransactionSuccess,
  loading,
}) => {
  const [formData, setFormData] = useState({
    amount: 0,
    description: '',
    type: 'CREDIT' as 'CREDIT' | 'DEBIT',
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.amount <= 0 || !formData.description.trim()) {
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch(`http://localhost:5070/wallet/${walletId}/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: formData.amount,
          description: formData.description,
          type: formData.type,
        }),
      });

      if (!response.ok) throw new Error('Failed to create transaction');
      
      const data = await response.json();
      
      // Fetch the updated wallet data to ensure we have the latest balance
      const walletResponse = await fetch(`http://localhost:5070/wallet/${walletId}`);
      if (!walletResponse.ok) throw new Error('Failed to fetch updated wallet');
      
      const walletData = await walletResponse.json();
      
      // Update the wallet with new balance
      const updatedWallet: Wallet = {
        id: walletId,
        name: walletData.name,
        balance: parseFloat(walletData.balance),
        createdAt: walletData.date,
        updatedAt: new Date().toISOString(),
      };
      
      onTransactionSuccess(updatedWallet);
      
      // Show success message
      setSuccessMessage(`Transaction successful! New balance: $${updatedWallet.balance.toFixed(2)}`);
      
      // Reset form
      setFormData({
        amount: 0,
        description: '',
        type: 'CREDIT',
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      console.error('Transaction failed:', error);
    } finally {
      setSubmitting(false);
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
      {successMessage && (
        <div className="success-message">
          <p>✅ {successMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="transaction-form">
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
      
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={submitting || loading}
      >
        {submitting ? 'Processing...' : 'Submit Transaction'}
      </button>
    </form>
    </div>
  );
};

export default TransactionForm;
