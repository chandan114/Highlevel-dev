-- Initialize Wallet Database
-- This script runs when the PostgreSQL container starts for the first time

-- Create the wallet database if it doesn't exist
-- (Note: The database is already created via POSTGRES_DB environment variable)

-- Create extensions that might be useful
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Set timezone
SET timezone = 'UTC';

-- Create a user for the application (optional)
-- CREATE USER wallet_user WITH PASSWORD 'wallet_password';
-- GRANT ALL PRIVILEGES ON DATABASE wallet_db TO wallet_user;

-- The tables will be created automatically by Sequelize when the application starts
-- due to synchronize: true in the configuration
