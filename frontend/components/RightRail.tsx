"use client";

import { Search, DollarSign, Target, Star, Mail } from "lucide-react";
import { useState } from "react";

interface Props {
  onToast: (msg: string) => void;
}

const features = [
  { icon: Search, label: "Unique jobs in niche industries" },
  { icon: DollarSign, label: "Set salary & equity upfront" },
  { icon: Target, label: "Personalized job filters" },
  { icon: Star, label: "Showcase skills beyond a resume" },
  { icon: Mail, label: "Let founders and recruiters reach out to you" },
];

export default function RightRail({ onToast }: Props) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <aside className="hidden w-[300px] shrink-0 space-y-5 border-l border-black/5 p-6 xl:block">
      <div className="glass-card rounded-2xl p-5.5">
        <h3 className="mb-1.5 text-[17px] font-extrabold">Get new jobs in your inbox</h3>
        <p className="mb-4 text-[13.5px] text-gray-500">
          Join 50K+ professionals getting AI jobs handpicked daily.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
            onToast(`You're on the list — we'll email ${email}`);
            setEmail("");
          }}
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="mb-3 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-pink"
          />
          <button className="mb-3.5 w-full rounded-lg bg-pink py-2.5 text-[14.5px] font-bold text-white hover:bg-pink-dark">
            Sign up
          </button>
        </form>
        {subscribed && (
          <p className="mb-3 text-[13px] font-medium text-emerald-600">Subscribed to job alerts ✓</p>
        )}
        <div className="relative mb-3.5 text-center text-xs text-gray-400 before:absolute before:left-0 before:top-1/2 before:h-px before:w-[42%] before:bg-black/10 after:absolute after:right-0 after:top-1/2 after:h-px after:w-[42%] after:bg-black/10">
          or
        </div>
        <button
          onClick={() => onToast("Google sign-up would open here")}
          className="mb-3.5 w-full rounded-lg border border-black/10 py-2.5 text-sm font-semibold hover:bg-gray-50"
        >
          Sign up with Google
        </button>
        <p className="text-center text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
      </div>

      <div className="glass-card rounded-2xl p-5.5">
        <h3 className="mb-3 text-[17px] font-extrabold">Level up your job search</h3>
        <ul className="mb-3 space-y-2.5">
          {features.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-start gap-2.5 text-[13.5px] text-gray-700">
              <Icon size={15} className="mt-0.5 shrink-0 text-pink" />
              {label}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onToast("Sign-up flow would open here")}
          className="w-full rounded-lg bg-ink py-2.5 text-[14.5px] font-bold text-white hover:bg-black"
        >
          Sign up & search
        </button>
      </div>

      <div className="glass-card rounded-2xl p-5.5">
        <h3 className="mb-1.5 text-[17px] font-extrabold">Know your worth</h3>
        <p className="text-[13.5px] text-gray-500">
          Filter by industry, job title, location & more.
        </p>
      </div>
    </aside>
  );
}
