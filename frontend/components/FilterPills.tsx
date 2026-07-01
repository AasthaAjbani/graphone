"use client";

import { CATEGORIES, type Category } from "@/types";

interface Props {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function FilterPills({ active, onChange }: Props) {
  return (
    <div className="mb-5 flex flex-wrap gap-2.5">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full border px-4 py-2 text-[13.5px] font-semibold transition ${
            active === cat
              ? "border-ink bg-ink text-white"
              : "border-black/10 text-gray-700 hover:border-pink/40 hover:text-pink"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
