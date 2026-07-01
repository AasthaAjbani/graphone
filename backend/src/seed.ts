import fs from "fs";
import path from "path";
import { pool } from "./db";

async function seed() {
  const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf-8");
  await pool.query(schema);

  await pool.query("DELETE FROM jobs");
  await pool.query("DELETE FROM companies");
  await pool.query("ALTER SEQUENCE companies_id_seq RESTART WITH 1");
  await pool.query("ALTER SEQUENCE jobs_id_seq RESTART WITH 1");

  const companies = [
    ["OpenAI", "O", true, "15,000+", 84, "Private", "https://openai.com/careers"],
    ["Anthropic", "A", true, "1,200+", 51, "Series B", "https://www.anthropic.com/careers"],
    ["Cursor", "C", true, "65+", 28, "Series A", "https://cursor.com/careers"],
    ["Mistral AI", "M", true, "250+", 20, "Series B", "https://mistral.ai/careers"],
  ];

  const companyIds: number[] = [];
  for (const c of companies) {
    const res = await pool.query(
      `INSERT INTO companies (name, initial, verified, people_count, jobs_count, stage, website_url)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`,
      c
    );
    companyIds.push(res.rows[0].id);
  }

  const jobs = [
    ["Principal Backend Engineer (Distributed Systems & Control Planes)", companyIds[0], "Remote", "United States", "$140K–$175K CAD", "Engineering"],
    ["Founding Software Engineer", companyIds[1], "In office", "Boston", "$100K–$150K", "Engineering"],
    ["Frontend Engineer (Boston)", companyIds[2], "In office", "Boston", "$150K–$225K", "Engineering"],
    ["Associate, BizOps & Analytics", companyIds[3], "Remote", "New York", "$85K–$130K", "Operations"],
    ["Senior Account Manager", companyIds[0], "Remote", "New York", "$120K–$130K", "Sales"],
    ["Product Designer", companyIds[1], "Remote", "San Francisco", "$130K–$170K", "Design"],
    ["Growth Marketing Lead", companyIds[2], "Hybrid", "Austin", "$110K–$140K", "Marketing"],
    ["Senior Product Manager", companyIds[3], "Remote", "Remote", "$150K–$190K", "Product"],
  ];

  for (const j of jobs) {
    await pool.query(
      `INSERT INTO jobs (title, company_id, employment_type, location, salary_range, category)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      j
    );
  }

  console.log(`Seeded ${companies.length} companies and ${jobs.length} jobs.`);
  await pool.end();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
