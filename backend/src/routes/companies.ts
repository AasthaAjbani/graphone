import { Router } from "express";
import { pool } from "../db";

const router = Router();

// GET /api/companies - trending companies, most jobs first
router.get("/", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, initial, verified, people_count AS "peopleCount",
              jobs_count AS "jobsCount", stage, website_url AS "websiteUrl"
       FROM companies
       ORDER BY jobs_count DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load companies" });
  }
});

export default router;
