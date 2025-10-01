# Wallet System API Documentation

This document describes the Wallet System APIs implemented in the JMD Backend service.

## Overview

The Wallet System provides functionality for:
- Setting up new wallets with initial balance
- Performing credit/debit transactions
- Fetching transaction history
- Retrieving wallet details

## API Endpoints

### 1. Setup Wallet

**Endpoint:** `POST /api/wallet/setup`

**Description:** Creates a new wallet with an initial balance.

**Request Body:**
```json
{
  "balance": 20.5612,
  "name": "Hello world"
}
```

**Response (200 OK):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "balance": 20.5612,
  "transactionId": "507f1f77bcf86cd799439012",
  "name": "Hello world",
  "date": "2023-12-01T10:30:00.000Z"
}
```

**Validation Rules:**
- `balance`: Required, number with max 4 decimal places, minimum 0
- `name`: Required, string

### 2. Credit/Debit Transaction

**Endpoint:** `POST /api/wallet/transact/:walletId`

**Description:** Performs a credit or debit transaction on the specified wallet.

**Path Parameters:**
- `walletId`: The ID of the wallet (MongoDB ObjectId)

**Request Body:**
```json
{
  "amount": 10,
  "description": "Recharge"
}
```

**Response (200 OK):**
```json
{
  "balance": 30.5612,
  "transactionId": "507f1f77bcf86cd799439013"
}
```

**Validation Rules:**
- `amount`: Required, number with max 4 decimal places (positive for credit, negative for debit)
- `description`: Required, string

**Error Cases:**
- 400 Bad Request: Invalid wallet ID or insufficient balance
- 404 Not Found: Wallet not found

### 3. Get Transactions

**Endpoint:** `GET /api/wallet/transactions`

**Description:** Retrieves transaction history for a specific wallet with pagination.

**Query Parameters:**
- `walletId`: Required, the ID of the wallet
- `skip`: Optional, number of transactions to skip (default: 0)
- `limit`: Optional, maximum number of transactions to return (default: 10)

**Example Request:**
```
GET /api/wallet/transactions?walletId=507f1f77bcf86cd799439011&skip=0&limit=10
```

**Response (200 OK):**
```json
[
  {
    "id": "507f1f77bcf86cd799439013",
    "walletId": "507f1f77bcf86cd799439011",
    "amount": 10,
    "balance": 30.5612,
    "description": "Recharge",
    "date": "2023-12-01T10:35:00.000Z",
    "type": "CREDIT"
  },
  {
    "id": "507f1f77bcf86cd799439012",
    "walletId": "507f1f77bcf86cd799439011",
    "amount": 20.5612,
    "balance": 20.5612,
    "description": "Setup",
    "date": "2023-12-01T10:30:00.000Z",
    "type": "CREDIT"
  }
]
```

**Error Cases:**
- 400 Bad Request: Invalid wallet ID
- 404 Not Found: Wallet not found

### 4. Get Wallet Details

**Endpoint:** `GET /api/wallet/:id`

**Description:** Retrieves details of a specific wallet.

**Path Parameters:**
- `id`: The ID of the wallet (MongoDB ObjectId)

**Response (200 OK):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "balance": 30.5612,
  "name": "Hello world",
  "date": "2023-12-01T10:30:00.000Z"
}
```

**Error Cases:**
- 400 Bad Request: Invalid wallet ID
- 404 Not Found: Wallet not found

## Database Schema

### Wallet Table
```typescript
{
  id: number, // Primary key (auto-increment)
  balance: number, // min: 0, max 4 decimal places (DECIMAL(10,4))
  name: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Transaction Table
```typescript
{
  id: number, // Primary key (auto-increment)
  walletId: number, // Foreign key to Wallet table
  amount: number, // max 4 decimal places (DECIMAL(10,4))
  balance: number, // Wallet balance after transaction (DECIMAL(10,4))
  description: string,
  type: 'CREDIT' | 'DEBIT',
  createdAt: Date,
  updatedAt: Date
}
```

## Example Usage Flow

1. **Setup Wallet:**
   ```bash
   curl -X POST http://localhost:5070/api/wallet/setup \
     -H "Content-Type: application/json" \
     -d '{"balance": 20.5612, "name": "Hello world"}'
   ```

2. **Credit Amount:**
   ```bash
   curl -X POST http://localhost:5070/api/wallet/transact/1 \
     -H "Content-Type: application/json" \
     -d '{"amount": 10, "description": "Recharge"}'
   ```

3. **Get Transactions:**
   ```bash
   curl "http://localhost:5070/api/wallet/transactions?walletId=1&skip=0&limit=10"
   ```

4. **Get Wallet Details:**
   ```bash
   curl http://localhost:5070/api/wallet/1
   ```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- **400 Bad Request**: Invalid input data or business logic violations
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server-side errors

Error response format:
```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "Bad Request"
}
```

## Testing

To test the wallet APIs, you can use the provided test script:

```bash
node test-wallet-apis.js
```

Make sure the server is running on `http://localhost:5070` before executing the test script.

## Database Setup

The wallet system uses PostgreSQL with Sequelize ORM. You have two options for setup:

### Option 1: Docker Setup (Recommended)

1. **Prerequisites:**
   - Docker and Docker Compose installed
   - Node.js and npm installed

2. **Quick Setup:**
   ```bash
   # Make the setup script executable
   chmod +x docker-setup.sh
   
   # Run the setup script
   ./docker-setup.sh
   ```

3. **Manual Docker Setup:**
   ```bash
   # Start all services
   docker-compose up -d
   
   # Check if services are running
   docker-compose ps
   
   # View logs
   docker-compose logs postgres
   docker-compose logs redis
   ```

4. **Environment Variables:**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Or set manually
   export POSTGRES_URL="postgresql://postgres:password@localhost:5432/wallet_db"
   export REDIS_EXTENSIONS_READ_WRITE="redis://127.0.0.1:6379/0"
   ```

### Option 2: Local Installation

1. **Install PostgreSQL:**
   ```bash
   # macOS
   brew install postgresql
   brew services start postgresql
   
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   sudo systemctl start postgresql
   
   # Create database
   createdb wallet_db
   ```

2. **Install Redis:**
   ```bash
   # macOS
   brew install redis
   brew services start redis
   
   # Ubuntu/Debian
   sudo apt-get install redis-server
   sudo systemctl start redis
   ```

3. **Set Environment Variables:**
   ```bash
   export POSTGRES_URL="postgresql://postgres:password@localhost:5432/wallet_db"
   export REDIS_EXTENSIONS_READ_WRITE="redis://127.0.0.1:6379/0"
   ```

### Docker Services

The Docker Compose setup includes:

- **PostgreSQL 15**: Database for wallet and transaction data
  - Port: 5432
  - Database: wallet_db
  - Username: postgres
  - Password: password

- **Redis 7**: Caching and session storage
  - Port: 6379

- **Kafka + Zookeeper**: Message streaming (existing services)
  - Kafka Port: 9092
  - Zookeeper Port: 2181

### Useful Docker Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f postgres
docker-compose logs -f redis

# Restart a specific service
docker-compose restart postgres

# Access PostgreSQL CLI
docker-compose exec postgres psql -U postgres -d wallet_db

# Access Redis CLI
docker-compose exec redis redis-cli

# Remove all data (reset)
docker-compose down -v
```

The tables will be automatically created when the application starts due to `synchronize: true` in the Sequelize configuration.
