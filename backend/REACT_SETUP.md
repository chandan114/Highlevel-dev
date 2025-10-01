# React Frontend Setup

This project now uses React instead of Vue.js for the frontend. Here's how to set up and run the React application.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Installation

1. Install all dependencies:
```bash
npm install
```

## Available Scripts

### Frontend Development
- `npm run client-dev` - Start the React development server (runs on http://localhost:3000)
- `npm run client-build` - Build the React app for production

### Backend Development
- `npm run start:dev` - Start the NestJS backend with hot reload
- `npm run start` - Start the NestJS backend in production mode

### Full Stack Development
- `npm run build` - Build both frontend and backend for production
- `npm run start:prod` - Start the production build

## Running the Application

### Development Mode (Recommended)

1. **Start the backend server:**
```bash
npm run start:dev
```
This will start the NestJS backend on http://localhost:5070

2. **Start the React frontend (in a new terminal):**
```bash
npm run client-dev
```
This will start the React development server on http://localhost:3000

3. **Open your browser and navigate to:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5070

### Production Mode

1. **Build the application:**
```bash
npm run build
```

2. **Start the production server:**
```bash
npm run start:prod
```

The application will be served from the backend server at http://localhost:5070

## Project Structure

```
src/
├── components/          # React components
│   ├── WalletList.tsx   # Wallet list component
│   ├── WalletForm.tsx   # Wallet creation form
│   └── TransactionList.tsx # Transaction management
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx              # Main React application
├── App.css              # Application styles
├── index.tsx            # React entry point
└── index.html           # HTML template
```

## Features

The React frontend includes:

- **Wallet Management**: Create and view wallets
- **Transaction Management**: Add credit/debit transactions
- **Real-time Updates**: Automatic refresh after operations
- **Responsive Design**: Works on desktop and mobile
- **Modern UI**: Clean, gradient-based design with smooth animations

## API Integration

The React app communicates with the NestJS backend through REST APIs:

- `GET /api/wallets` - Fetch all wallets
- `POST /api/wallets` - Create a new wallet
- `GET /api/wallets/:id/transactions` - Fetch transactions for a wallet
- `POST /api/wallets/:id/transactions` - Create a new transaction

## Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload in development mode
2. **TypeScript**: Full TypeScript support for type safety
3. **Error Handling**: Built-in error handling and loading states
4. **Responsive**: Mobile-first responsive design

## Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 3000 and 5070 are available
2. **CORS issues**: The backend is configured to allow requests from the frontend
3. **Build errors**: Make sure all dependencies are installed with `npm install`

### Database Setup

Make sure PostgreSQL is running and the database is set up:

```bash
# Start PostgreSQL with Docker
docker-compose up -d postgres

# Run migrations
npm run migrate
```

## Next Steps

- Add authentication and user management
- Implement real-time updates with WebSockets
- Add data visualization for transaction history
- Implement wallet categories and tags
- Add export functionality for transactions
