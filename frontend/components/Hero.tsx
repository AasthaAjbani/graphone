"use client";

import SearchBar from "./SearchBar";

interface Props {
  onSearch: (job: string, location: string) => void;
}

export default function Hero({ onSearch }: Props) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-[13px] font-bold tracking-wide text-pink">
        <span className="h-2 w-2 animate-pulse rounded-full bg-pink" />
        LIVE AI INTELLIGENCE
      </div>
      <h1 className="mb-3 text-[44px] font-extrabold leading-[1.1] tracking-tight">
        Find what&apos;s <span className="text-pink">next.</span>
      </h1>
      <p className="mb-7 text-[17px] text-gray-600">
        Discover the best AI startups and find your next career opportunity.
      </p>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
