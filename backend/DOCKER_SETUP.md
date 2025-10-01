# Docker Setup for Wallet System

This guide helps you set up the complete development environment for the Wallet System using Docker.

## 🚀 Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (version 20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 2.0+)
- [Node.js](https://nodejs.org/) (version 16+)
- [npm](https://www.npmjs.com/) (version 8+)

### One-Command Setup

```bash
# Clone the repository and navigate to it
cd jmd-backend

# Make the setup script executable and run it
chmod +x docker-setup.sh && ./docker-setup.sh
```

This script will:
- ✅ Check Docker installation
- ✅ Create necessary directories
- ✅ Set environment variables
- ✅ Start all services (PostgreSQL, Redis, Kafka, Zookeeper)
- ✅ Wait for services to be healthy
- ✅ Display connection information

## 🐳 Services Overview

| Service | Port | Description | Connection String |
|---------|------|-------------|-------------------|
| PostgreSQL | 5432 | Main database for wallet data | `postgresql://postgres:password@localhost:5432/wallet_db` |
| Redis | 6379 | Caching and session storage | `redis://127.0.0.1:6379/0` |
| Kafka | 9092 | Message streaming | `localhost:9092` |
| Zookeeper | 2181 | Kafka coordination | `localhost:2181` |

## 📋 Manual Setup

If you prefer to set up manually:

### 1. Start Services

```bash
# Start all services in detached mode
docker-compose up -d

# Check service status
docker-compose ps
```

### 2. Verify Services

```bash
# Check PostgreSQL
docker-compose exec postgres pg_isready -U postgres

# Check Redis
docker-compose exec redis redis-cli ping

# Check Kafka
docker-compose exec kafka kafka-topics --bootstrap-server localhost:9092 --list
```

### 3. Set Environment Variables

```bash
# Option 1: Copy example file
cp env.example .env

# Option 2: Set manually
export POSTGRES_URL="postgresql://postgres:password@localhost:5432/wallet_db"
export REDIS_EXTENSIONS_READ_WRITE="redis://127.0.0.1:6379/0"
export PORT=5070
```

### 4. Start Application

```bash
# Install dependencies
npm install

# Start the application
npm run start:dev
```

## 🛠️ Development Commands

### Docker Commands

```bash
# View logs
docker-compose logs -f postgres
docker-compose logs -f redis
docker-compose logs -f kafka

# Restart services
docker-compose restart postgres
docker-compose restart redis

# Stop all services
docker-compose down

# Stop and remove volumes (reset data)
docker-compose down -v

# Rebuild services
docker-compose up -d --build
```

### Database Commands

```bash
# Access PostgreSQL CLI
docker-compose exec postgres psql -U postgres -d wallet_db

# Create a backup
docker-compose exec postgres pg_dump -U postgres wallet_db > backup.sql

# Restore from backup
docker-compose exec -T postgres psql -U postgres -d wallet_db < backup.sql

# List all tables
docker-compose exec postgres psql -U postgres -d wallet_db -c "\dt"
```

### Redis Commands

```bash
# Access Redis CLI
docker-compose exec redis redis-cli

# Monitor Redis commands
docker-compose exec redis redis-cli monitor

# Clear all data
docker-compose exec redis redis-cli flushall
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Database
POSTGRES_URL=postgresql://postgres:password@localhost:5432/wallet_db

# Redis
REDIS_EXTENSIONS_READ_WRITE=redis://127.0.0.1:6379/0

# Server
PORT=5070
NODE_ENV=development
LOG_LEVEL=info

# Kafka
KAFKA_BROKER_LIST=127.0.0.1:9092
KAFKA_CONSUMER_GROUP_NAME=wallet-consumer-group
```

### Docker Compose Override

For development-specific configurations, use `docker-compose.override.yml`:

```yaml
version: '3.8'
services:
  postgres:
    environment:
      POSTGRES_INITDB_ARGS: "--auth-host=scram-sha-256"
    volumes:
      - ./logs/postgres:/var/log/postgresql
```

## 🧪 Testing

### Test the Setup

```bash
# Test database connection
docker-compose exec postgres psql -U postgres -d wallet_db -c "SELECT version();"

# Test Redis connection
docker-compose exec redis redis-cli ping

# Test API endpoints
node test-wallet-apis.js
```

### API Testing

```bash
# Setup wallet
curl -X POST http://localhost:5070/api/wallet/setup \
  -H "Content-Type: application/json" \
  -d '{"balance": 100.50, "name": "Test Wallet"}'

# Get wallet details
curl http://localhost:5070/api/wallet/1

# Credit amount
curl -X POST http://localhost:5070/api/wallet/transact/1 \
  -H "Content-Type: application/json" \
  -d '{"amount": 25.75, "description": "Test Credit"}'

# Get transactions
curl "http://localhost:5070/api/wallet/transactions?walletId=1&skip=0&limit=10"
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :5432
   
   # Stop conflicting services
   brew services stop postgresql
   ```

2. **Docker Permission Issues**
   ```bash
   # Add user to docker group (Linux)
   sudo usermod -aG docker $USER
   
   # Restart Docker Desktop (macOS/Windows)
   ```

3. **Database Connection Failed**
   ```bash
   # Check if PostgreSQL is running
   docker-compose ps postgres
   
   # View PostgreSQL logs
   docker-compose logs postgres
   
   # Restart PostgreSQL
   docker-compose restart postgres
   ```

4. **Redis Connection Failed**
   ```bash
   # Check Redis status
   docker-compose exec redis redis-cli ping
   
   # Restart Redis
   docker-compose restart redis
   ```

### Reset Everything

```bash
# Stop all services and remove volumes
docker-compose down -v

# Remove all containers and images
docker system prune -a

# Start fresh
./docker-setup.sh
```

## 📊 Monitoring

### Health Checks

All services include health checks:

```bash
# Check service health
docker-compose ps

# View health check logs
docker-compose exec postgres pg_isready -U postgres
docker-compose exec redis redis-cli ping
```

### Logs

```bash
# Follow all logs
docker-compose logs -f

# Follow specific service logs
docker-compose logs -f postgres
docker-compose logs -f redis
docker-compose logs -f kafka
```

## 🔒 Security Notes

- Default passwords are used for development only
- Change passwords for production environments
- Use environment variables for sensitive data
- Consider using Docker secrets for production

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)
- [Kafka Documentation](https://kafka.apache.org/documentation/)

## 🤝 Contributing

When contributing to this project:

1. Use the Docker setup for consistency
2. Test your changes with the provided test scripts
3. Update documentation if you modify the setup
4. Follow the existing code style and patterns
