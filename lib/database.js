// /lib/database.js
const { Pool } = require('pg');

// Create a connection pool using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // This uses the DATABASE_URL you set on Vercel
  ssl: {
    rejectUnauthorized: false, // Required for cloud-based database connections like Supabase
  },
});

module.exports = pool;
