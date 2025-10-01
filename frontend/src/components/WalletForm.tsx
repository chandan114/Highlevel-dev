import React, { useState } from 'react';
import { CreateWalletData } from '../types';

interface WalletFormProps {
  onSubmit: (data: CreateWalletData) => void;
  loading: boolean;
}

const WalletForm: React.FC<WalletFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState<CreateWalletData>({
    name: '',
    balance: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.balance >= 0) {
      onSubmit(formData);
      setFormData({ name: '', balance: 0 });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'balance' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div className="form-group">
        <label htmlFor="name">Wallet Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter wallet name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="balance">Initial Balance</label>
        <input
          type="number"
          id="balance"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
          min="0"
          step="0.01"
          placeholder="0.00"
          required
        />
      </div>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? 'Creating...' : 'Create Wallet'}
      </button>
    </form>
  );
};

export default WalletForm;
