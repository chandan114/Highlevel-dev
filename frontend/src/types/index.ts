export interface Wallet {
  id: number;
  name: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: number;
  walletId: number;
  amount: number;
  balance: number;
  description: string;
  type: 'CREDIT' | 'DEBIT';
  createdAt: string;
  updatedAt: string;
}

export interface CreateWalletData {
  name: string;
  balance: number;
}

export interface CreateTransactionData {
  walletId: number;
  amount: number;
  description: string;
  type: 'CREDIT' | 'DEBIT';
}
