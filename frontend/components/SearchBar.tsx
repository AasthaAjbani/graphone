"use client";

import { Search, MapPin } from "lucide-react";
import { useState } from "react";

interface Props {
  onSearch: (job: string, location: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="glass-card mb-11 flex overflow-hidden rounded-2xl">
      <div className="flex flex-1 items-center gap-2 border-r border-black/5 px-5 py-4">
        <Search size={18} className="text-gray-400" />
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(job, location)}
          placeholder="Job title, company, or keyword"
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
        />
      </div>
      <div className="flex flex-1 items-center gap-2 px-5 py-4">
        <MapPin size={18} className="text-gray-400" />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(job, location)}
          placeholder="City, state, or remote"
          className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
        />
      </div>
      <button
        onClick={() => onSearch(job, location)}
        className="px-9 text-[15.5px] font-bold text-white bg-pink transition hover:bg-pink-dark"
      >
        Search
      </button>
    </div>
  );
}
