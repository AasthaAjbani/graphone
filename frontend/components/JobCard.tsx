"use client";

import { motion } from "framer-motion";
import type { Job } from "@/types";

interface Props {
  job: Job;
  saved: boolean;
  onToggleSave: (id: number) => void;
  onApply: (job: Job) => void;
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return "today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

export default function JobCard({ job, saved, onToggleSave, onApply }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-4 border-b border-black/5 p-5 last:border-b-0 hover:bg-gray-50/60"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 font-extrabold">
        {job.companyInitial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 truncate font-bold">{job.title}</div>
        <div className="text-[13.5px] text-gray-500">
          {job.companyName} · {job.employmentType} · {job.location} · {job.salaryRange}
        </div>
      </div>
      <div className="w-20 shrink-0 text-right text-[13px] text-gray-400">{timeAgo(job.postedAt)}</div>
      <div className="flex shrink-0 gap-2">
        <button
          onClick={() => onToggleSave(job.id)}
          className="rounded-lg border border-black/10 px-4 py-2 text-[13.5px] font-semibold hover:border-pink/40"
        >
          {saved ? "★ Saved" : "Save"}
        </button>
        <button
          onClick={() => onApply(job)}
          className="rounded-lg bg-pink px-4 py-2 text-[13.5px] font-bold text-white hover:bg-pink-dark"
        >
          Apply
        </button>
      </div>
    </motion.div>
  );
}
