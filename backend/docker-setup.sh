#!/bin/bash

# Docker Setup Script for Wallet System
# This script helps you set up the development environment with Docker

set -e

echo "🚀 Setting up Wallet System with Docker..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

print_status "Docker and Docker Compose are installed ✓"

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p init-scripts
mkdir -p logs/postgres
mkdir -p logs/redis

# Set environment variables
print_status "Setting up environment variables..."
export POSTGRES_URL="postgresql://postgres:password@localhost:5432/wallet_db"
export REDIS_EXTENSIONS_READ_WRITE="redis://127.0.0.1:6379/0"

print_success "Environment variables set ✓"

# Stop any existing containers
print_status "Stopping any existing containers..."
docker-compose down --remove-orphans

# Build and start services
print_status "Starting services with Docker Compose..."
docker-compose up -d

# Wait for services to be healthy
print_status "Waiting for services to be ready..."

# Wait for PostgreSQL
print_status "Waiting for PostgreSQL to be ready..."
timeout=60
while ! docker-compose exec -T postgres pg_isready -U postgres > /dev/null 2>&1; do
    sleep 2
    timeout=$((timeout - 2))
    if [ $timeout -le 0 ]; then
        print_error "PostgreSQL failed to start within 60 seconds"
        exit 1
    fi
done
print_success "PostgreSQL is ready ✓"

# Wait for Redis
print_status "Waiting for Redis to be ready..."
timeout=30
while ! docker-compose exec -T redis redis-cli ping > /dev/null 2>&1; do
    sleep 2
    timeout=$((timeout - 2))
    if [ $timeout -le 0 ]; then
        print_error "Redis failed to start within 30 seconds"
        exit 1
    fi
done
print_success "Redis is ready ✓"

# Display service information
echo ""
print_success "🎉 All services are up and running!"
echo ""
echo "📋 Service Information:"
echo "  PostgreSQL:"
echo "    Host: localhost"
echo "    Port: 5432"
echo "    Database: wallet_db"
echo "    Username: postgres"
echo "    Password: password"
echo "    Connection String: $POSTGRES_URL"
echo ""
echo "  Redis:"
echo "    Host: localhost"
echo "    Port: 6379"
echo "    Connection String: $REDIS_EXTENSIONS_READ_WRITE"
echo ""
echo "  Kafka:"
echo "    Host: localhost"
echo "    Port: 9092"
echo ""

# Show running containers
print_status "Running containers:"
docker-compose ps

echo ""
print_success "✅ Setup complete! You can now start your application with:"
echo "   npm run start:dev"
echo ""
print_warning "💡 Useful commands:"
echo "   docker-compose logs postgres    # View PostgreSQL logs"
echo "   docker-compose logs redis       # View Redis logs"
echo "   docker-compose down             # Stop all services"
echo "   docker-compose restart postgres # Restart PostgreSQL"
echo ""
