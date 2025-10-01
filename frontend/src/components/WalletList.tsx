import React from 'react';
import { Wallet } from '../types';

interface WalletListProps {
  wallets: Wallet[];
  onWalletSelect: (wallet: Wallet) => void;
  selectedWallet: Wallet | null;
  loading: boolean;
}

const WalletList: React.FC<WalletListProps> = ({
  wallets,
  onWalletSelect,
  selectedWallet,
  loading,
}) => {
  if (loading) {
    return <div className="loading">Loading wallets...</div>;
  }

  if (wallets.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
        <p>No wallets found. Create your first wallet above!</p>
      </div>
    );
  }

  return (
    <div className="wallet-list">
      {wallets.map((wallet) => (
        <div
          key={wallet.id}
          className={`wallet-item ${selectedWallet?.id === wallet.id ? 'selected' : ''}`}
          onClick={() => onWalletSelect(wallet)}
        >
          <h3>{wallet.name}</h3>
          <div className="balance">${wallet.balance.toFixed(2)}</div>
          <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
            Created: {new Date(wallet.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletList;
