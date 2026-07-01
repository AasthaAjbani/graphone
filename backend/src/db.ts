import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const useSSL = process.env.DATABASE_SSL === "true";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle Postgres client", err);
});
