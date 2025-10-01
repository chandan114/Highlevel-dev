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
├── docker-compose.yml         # Docker services
├── package.json               # Root workspace manager
└── README.md                  # This file
```

## 🚀 Quick Start

### Option 1: Docker (Recommended)

```bash
# Start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Services:**
- **Backend API**: http://localhost:5070
- **Frontend**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

### Option 2: Local Development

#### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Redis 7+

#### Setup

1. **Install all dependencies:**
```bash
npm run install:all
```

2. **Start database services:**
```bash
# Start PostgreSQL and Redis (using Docker)
docker-compose up -d postgres redis
```

3. **Run migrations:**
```bash
npm run migrate
```

4. **Start applications:**
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend  
npm run dev:frontend
```

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
REDIS_URL=redis://localhost:6379
```

## 🐳 Docker Services

- **postgres**: PostgreSQL 15 database
- **redis**: Redis 7 cache
- **backend**: NestJS API server (port 5070)
- **frontend**: React development server (port 3000)

## 📝 Available Scripts

### Root Level (Workspace Manager)
- `npm run install:all` - Install all dependencies
- `npm run build:all` - Build both applications
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services
- `npm run migrate` - Run database migrations
- `npm run clean` - Clean all node_modules and lock files

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
   - Ensure PostgreSQL is running
   - Check connection string in environment variables

2. **Port Already in Use**
   - Backend: Change PORT in environment
   - Frontend: Webpack dev server will auto-increment

3. **Docker Issues**
   - Run `docker-compose down -v` to clean volumes
   - Rebuild with `docker-compose up -d --build`

4. **Dependency Issues**
   - Clean and reinstall: `npm run clean && npm run install:all`
   - Or install individually: `cd backend && npm install`


## 📋 Development Workflow

1. **Backend Changes**: Work in `backend/` folder independently
2. **Frontend Changes**: Work in `frontend/` folder independently
3. **Database Changes**: Run migrations from `backend/` folder
4. **Deployment**: Use Docker for production deployment

Each part can be developed, tested, and deployed completely independently! 🎉
