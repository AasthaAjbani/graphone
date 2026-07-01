import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import companiesRouter from "./routes/companies";
import jobsRouter from "./routes/jobs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:3000").split(",");

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/companies", companiesRouter);
app.use("/api/jobs", jobsRouter);

app.listen(PORT, () => {
  console.log(`GraphOne API listening on port ${PORT}`);
});
