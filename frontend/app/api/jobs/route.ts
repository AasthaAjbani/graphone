import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");
  const location = searchParams.get("location");
  const category = searchParams.get("category");

  const conditions: string[] = [];
  const values: string[] = [];

  if (search) {
    values.push(`%${search.toLowerCase()}%`);
    conditions.push(`(LOWER(jobs.title) LIKE $${values.length} OR LOWER(companies.name) LIKE $${values.length})`);
  }
  if (location) {
    values.push(`%${location.toLowerCase()}%`);
    conditions.push(`LOWER(jobs.location) LIKE $${values.length}`);
  }
  if (category && category !== "All") {
    values.push(category);
    conditions.push(`jobs.category = $${values.length}`);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

  try {
    const result = await pool.query(
      `SELECT jobs.id, jobs.title, jobs.employment_type AS "employmentType",
              jobs.location, jobs.salary_range AS "salaryRange", jobs.category,
              jobs.posted_at AS "postedAt",
              companies.id AS "companyId", companies.name AS "companyName",
              companies.initial AS "companyInitial"
       FROM jobs
       JOIN companies ON companies.id = jobs.company_id
       ${whereClause}
       ORDER BY jobs.posted_at DESC`,
      values
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to load jobs" }, { status: 500 });
  }
}
