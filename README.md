# Wallet System

A complete wallet management system with completely independent frontend and backend applications.

## 📁 Project Structure

```
wallet-system/
├── backend/                    # NestJS Backend (Completely Independent)
│   ├── app/                   # NestJS application code
│   ├── build/                 # Compiled backend
│   ├── dist/                  # Production build
│   ├── test/                  # Backend tests
│   ├── init-scripts/          # Database initialization
│   ├── node_modules/          # Backend dependencies
│   ├── package.json           # Backend package.json
│   ├── package-lock.json      # Backend lock file
│   ├── tsconfig.json          # Backend TypeScript config
│   ├── nest-cli.json          # NestJS CLI config
│   └── .gitignore             # Backend gitignore
├── frontend/                   # React Frontend (Completely Independent)
│   ├── src/                   # React source code
│   ├── dist/                  # Built frontend
│   ├── node_modules/          # Frontend dependencies
│   ├── package.json           # Frontend package.json
│   ├── package-lock.json      # Frontend lock file
│   ├── tsconfig.json          # Frontend TypeScript config
│   └── webpack.config.js      # Webpack configuration
├── docker-compose.yml         # PostgreSQL Docker service
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+ (or use Docker for PostgreSQL only)

### Setup

1. **Install dependencies:**
```bash
# Backend
cd backend && npm install

# Frontend
cd frontend && npm install
```

2. **Start PostgreSQL:**
```bash
# Option A: Using Docker (Recommended for PostgreSQL only)
docker-compose up -d postgres

# Option B: Local PostgreSQL installation
# Make sure PostgreSQL is running on localhost:5432
```

3. **Run database migrations:**
```bash
cd backend && npm run migrate
```

4. **Start applications:**
```bash
# Terminal 1 - Backend
cd backend && npm run start:dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

**Access your application:**
- **Backend API**: http://localhost:5070
- **Frontend**: http://localhost:3000
- **PostgreSQL**: localhost:5432

## 🛠️ Independent Development

### Backend Development (Completely Independent)

```bash
cd backend

# Install dependencies
npm install

# Start in development mode
npm run start:dev

# Build for production
npm run build

# Run tests
npm test

# Run migrations
npm run migrate
```

### Frontend Development (Completely Independent)

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📊 API Endpoints

### Wallet Management
- `POST /wallet` - Create a new wallet
- `GET /wallet/:id` - Get wallet details
- `POST /wallet/:id/transactions` - Create a transaction

### Health Check
- `GET /health` - Application health status

## 🗄️ Database Schema

### Wallets Table
- `id` (UUID, Primary Key)
- `name` (String, Required)
- `balance` (Decimal, Default: 0)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Transactions Table
- `id` (UUID, Primary Key)
- `wallet_id` (UUID, Foreign Key)
- `amount` (Decimal, Required)
- `type` (Enum: CREDIT, DEBIT)
- `description` (String, Optional)
- `balance_after` (Decimal)
- `created_at` (Timestamp)

## 🔧 Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=5070
POSTGRES_URL=postgresql://postgres:password@localhost:5432/wallet_db
```

## 🐳 Docker Services (PostgreSQL Only)

- **postgres**: PostgreSQL 15 database (port 5432)

**Note:** Backend and Frontend run locally, only PostgreSQL uses Docker for convenience.

## 📝 Available Scripts

### Backend (Independent)
- `npm run start:dev` - Start in development mode
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run migrate` - Run migrations
- `npm test` - Run tests

### Frontend (Independent)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start development server

## 🔄 Complete Independence

Each folder (`backend/` and `frontend/`) is completely independent:

- ✅ **Separate `node_modules/`** - No shared dependencies
- ✅ **Separate `package.json`** - Independent dependency management
- ✅ **Separate `package-lock.json`** - Independent lock files
- ✅ **Separate TypeScript configs** - Independent compilation
- ✅ **Separate build processes** - Independent builds
- ✅ **Separate development servers** - Independent development

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running: `docker-compose up -d postgres`
   - Check connection string in environment variables
   - Verify database exists: `wallet_db`

2. **Port Already in Use**
   - Backend: Change PORT in environment variables
   - Frontend: Webpack dev server will auto-increment to next available port

3. **Dependency Issues**
   - Clean and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Install individually: `cd backend && npm install` or `cd frontend && npm install`

4. **PostgreSQL Issues**
   - Stop and restart: `docker-compose down && docker-compose up -d postgres`
   - Check logs: `docker-compose logs postgres`
   - Reset database: `docker-compose down -v && docker-compose up -d postgres`


## 📋 Development Workflow

1. **Start PostgreSQL**: `docker-compose up -d postgres`
2. **Backend Development**: Work in `backend/` folder independently
3. **Frontend Development**: Work in `frontend/` folder independently
4. **Database Changes**: Run migrations from `backend/` folder
5. **Local Testing**: Both applications run locally for development

Each part can be developed, tested, and deployed completely independently! 🎉
