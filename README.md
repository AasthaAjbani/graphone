# GraphOne Jobs — Full-Stack

A full-stack recreation of the GraphOne AI Jobs page.

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, SWR
- **Backend:** Node.js, Express, TypeScript, PostgreSQL
- **Deployment target:** Render (backend + Postgres) and Vercel (frontend), or Render for both.

```
graphone-fullstack/
├── backend/     Express + PostgreSQL API
└── frontend/    Next.js app
```

## 1. Backend setup

```bash
cd backend
cp .env.example .env       # edit DATABASE_URL to point at your Postgres instance
npm install
npm run seed                # creates tables and inserts sample companies/jobs
npm run dev                 # runs on http://localhost:4000
```

Endpoints:
- `GET /api/health`
- `GET /api/companies`
- `GET /api/jobs?search=&location=&category=`

### Getting a free PostgreSQL database
Any of these work and give you a `DATABASE_URL` to paste into `.env`:
- [Render PostgreSQL](https://render.com) (free tier)
- [Supabase](https://supabase.com) (free tier)
- [Neon](https://neon.tech) (free tier)

Set `DATABASE_SSL=true` in `.env` for any hosted provider.

## 2. Frontend setup

```bash
cd frontend
cp .env.local.example .env.local   # point NEXT_PUBLIC_API_URL at your backend
npm install
npm run dev                        # runs on http://localhost:3000
```

## 3. Deploying

### Backend → Render
1. Push this repo to GitHub.
2. On [Render](https://dashboard.render.com/), click **New → Web Service**, connect the repo, set **Root Directory** to `backend`.
3. Build command: `npm install && npm run build`
4. Start command: `npm start`
5. Add environment variables (`DATABASE_URL`, `DATABASE_SSL=true`, `CLIENT_ORIGIN=<your vercel URL>`).
6. Also spin up a **Render PostgreSQL** instance (or use Supabase/Neon) and run `npm run seed` once, pointing `DATABASE_URL` at it locally, or add a one-off Render job.

### Frontend → Vercel
1. Go to [vercel.com/new](https://vercel.com/new), import the repo, set **Root Directory** to `frontend`.
2. Add environment variable `NEXT_PUBLIC_API_URL` = your deployed backend URL (e.g. `https://graphone-api.onrender.com`).
3. Deploy — Vercel auto-detects Next.js, no extra config needed.

## Notes
- The job/company dataset is seeded sample data, not scraped from any live source.
- Search, category filters, save/apply, and both signup forms are fully wired to real component state and (for jobs/companies) the live API — this is not a static mockup.
