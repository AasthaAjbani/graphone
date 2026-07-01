import { Home, Zap, Package, TrendingUp, Briefcase, Newspaper, Plus } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Zap, label: "AI Startups" },
  { icon: Package, label: "AI Products" },
  { icon: TrendingUp, label: "Investors" },
  { icon: Briefcase, label: "Jobs", active: true },
  { icon: Newspaper, label: "News" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-[220px] shrink-0 border-r border-black/5 p-4 lg:block">
      {navItems.map(({ icon: Icon, label, active }) => (
        <a
          key={label}
          href="#"
          className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition ${
            active ? "bg-pink/10 font-bold text-pink" : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Icon size={18} />
          {label}
        </a>
      ))}

      <div className="mb-2 mt-7 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
        Contribute
      </div>
      <a href="#" className="mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-gray-50">
        <Plus size={18} /> Submit Startup
      </a>
      <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-gray-50">
        <Plus size={18} /> Submit Product
      </a>
    </aside>
  );
}
