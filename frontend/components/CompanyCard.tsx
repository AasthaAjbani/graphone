import { Users, Briefcase, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Company } from "@/types";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <motion.a
      href={company.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="glass-card block rounded-2xl p-5"
    >
      <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg font-extrabold">
        {company.initial}
      </div>
      <div className="mb-2 flex items-center gap-1.5 font-bold">
        {company.name}
        {company.verified && (
          <span className="flex items-center gap-0.5 text-xs font-bold text-pink">
            <BadgeCheck size={13} /> verified
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-3.5 text-[13px] text-gray-500">
        <span className="flex items-center gap-1"><Users size={13} /> {company.peopleCount}</span>
        <span className="flex items-center gap-1"><Briefcase size={13} /> {company.jobsCount} jobs</span>
        <span>● {company.stage}</span>
      </div>
    </motion.a>
  );
}
