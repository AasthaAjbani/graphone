"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { AnimatePresence } from "framer-motion";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import CompanyCard from "@/components/CompanyCard";
import FilterPills from "@/components/FilterPills";
import JobCard from "@/components/JobCard";
import ApplyModal from "@/components/ApplyModal";
import RightRail from "@/components/RightRail";
import Toast from "@/components/Toast";
import { fetcher, API_URL } from "@/lib/api";
import type { Company, Job, Category } from "@/types";

export default function JobsPage() {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const { data: companies } = useSWR<Company[]>(`${API_URL}/api/companies`, fetcher);

  const jobsUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (jobQuery) params.set("search", jobQuery);
    if (locationQuery) params.set("location", locationQuery);
    if (category !== "All") params.set("category", category);
    return `${API_URL}/api/jobs?${params.toString()}`;
  }, [jobQuery, locationQuery, category]);

  const { data: jobs, isLoading } = useSWR<Job[]>(jobsUrl, fetcher);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  }

  function toggleSave(id: number) {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast("Removed from saved jobs");
      } else {
        next.add(id);
        showToast("Job saved");
      }
      return next;
    });
  }

  return (
    <>
      <Header />
      <div className="flex items-start">
        <Sidebar />

        <main className="mx-auto max-w-[980px] flex-1 px-10 py-8">
          <Hero onSearch={(job, loc) => { setJobQuery(job); setLocationQuery(loc); }} />

          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-[21px] font-extrabold">Trending startups hiring now</h2>
            <a href="#" className="text-sm font-semibold text-pink">View all companies ›</a>
          </div>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {(companies ?? []).map((c) => (
              <CompanyCard key={c.id} company={c} />
            ))}
          </div>

          <FilterPills active={category} onChange={setCategory} />

          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-[21px] font-extrabold">Trending Startup Jobs</h2>
            <a href="#" className="text-sm font-semibold text-pink">View all trending jobs ›</a>
          </div>

          <div className="glass-card overflow-hidden rounded-2xl">
            <AnimatePresence>
              {!isLoading && jobs?.length === 0 && (
                <p className="p-6 text-gray-500">
                  No jobs match your search. Try a different keyword or location.
                </p>
              )}
              {(jobs ?? []).map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  saved={savedIds.has(job.id)}
                  onToggleSave={toggleSave}
                  onApply={setActiveJob}
                />
              ))}
            </AnimatePresence>
          </div>
        </main>

        <RightRail onToast={showToast} />
      </div>

      <ApplyModal
        job={activeJob}
        onClose={() => setActiveJob(null)}
        onSubmitted={(companyName) => {
          setActiveJob(null);
          showToast(`Application sent to ${companyName}`);
        }}
      />
      <Toast message={toast} />
    </>
  );
}
