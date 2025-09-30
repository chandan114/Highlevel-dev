import React, { useState } from 'react';
import { Wallet } from '../types';
import './TransactionForm.css';

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
    if (formData.amount <= 0) {
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
          description: formData.description.trim() || 'Transaction',
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

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFormData(prev => ({
        ...prev,
        amount: parseFloat(value) || 0,
      }));
    }
  };

  return (
    <div className="transaction-form-container">
      {successMessage && (
        <div className="success-message">
          <p>✅ {successMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="type">Transaction Type</label>
            <div className="transaction-type-selector">
              <button
                type="button"
                className={`type-btn ${formData.type === 'CREDIT' ? 'active credit' : ''}`}
                onClick={() => setFormData({ ...formData, type: 'CREDIT' })}
              >
                <span className="type-icon">➕</span>
                <span className="type-label">Credit</span>
                <span className="type-desc">Add Money</span>
              </button>
              <button
                type="button"
                className={`type-btn ${formData.type === 'DEBIT' ? 'active debit' : ''}`}
                onClick={() => setFormData({ ...formData, type: 'DEBIT' })}
              >
                <span className="type-icon">➖</span>
                <span className="type-label">Debit</span>
                <span className="type-desc">Spend Money</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <div className="amount-input-container">
              <span className="currency-symbol">$</span>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount === 0 ? '' : formData.amount}
                onChange={handleAmountChange}
                placeholder="0.00"
                required
                className="amount-input"
                inputMode="decimal"
                pattern="[0-9]*\.?[0-9]*"
              />
            </div>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="description">Description (Optional)</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter transaction description (optional)"
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className={`btn btn-primary submit-btn ${formData.type.toLowerCase()}`}
            disabled={submitting || loading}
          >
            {submitting ? (
              <>
                <span className="loading-spinner"></span>
                Processing...
              </>
            ) : (
              <>
                <span className="btn-icon">
                  {formData.type === 'CREDIT' ? '💰' : '💸'}
                </span>
                {formData.type === 'CREDIT' ? 'Add Money' : 'Spend Money'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
