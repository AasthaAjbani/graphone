"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Job } from "@/types";

interface Props {
  job: Job | null;
  onClose: () => void;
  onSubmitted: (companyName: string) => void;
}

export default function ApplyModal({ job, onClose, onSubmitted }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"
        >
          <h3 className="mb-1 text-lg font-extrabold">Apply to {job.companyName}</h3>
          <p className="mb-5 text-sm text-gray-500">{job.title}</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="mb-2.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-pink"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="mb-4 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-pink"
          />
          <div className="flex gap-2.5">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg border border-black/10 py-2.5 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSubmitted(job.companyName);
                setName("");
                setEmail("");
              }}
              className="flex-1 rounded-lg bg-pink py-2.5 font-bold text-white hover:bg-pink-dark"
            >
              Submit application
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
