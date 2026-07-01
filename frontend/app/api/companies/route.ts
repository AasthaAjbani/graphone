import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await pool.query(
      `SELECT id, name, initial, verified, people_count AS "peopleCount",
              jobs_count AS "jobsCount", stage, website_url AS "websiteUrl"
       FROM companies
       ORDER BY jobs_count DESC`
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to load companies" }, { status: 500 });
  }
}
