CREATE TABLE IF NOT EXISTS companies (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  initial       TEXT NOT NULL,
  verified      BOOLEAN NOT NULL DEFAULT FALSE,
  people_count  TEXT NOT NULL,
  jobs_count    INTEGER NOT NULL DEFAULT 0,
  stage         TEXT NOT NULL,
  website_url   TEXT
);

CREATE TABLE IF NOT EXISTS jobs (
  id            SERIAL PRIMARY KEY,
  title         TEXT NOT NULL,
  company_id    INTEGER REFERENCES companies(id) ON DELETE CASCADE,
  employment_type TEXT NOT NULL,       -- Remote / In office / Hybrid
  location      TEXT NOT NULL,
  salary_range  TEXT NOT NULL,
  category      TEXT NOT NULL,         -- Engineering / Product / Design / Sales / Marketing / Operations
  posted_at     TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_jobs_category ON jobs(category);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
