import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="h-1.5 bg-ink" />
      <div className="flex items-center gap-6 px-8 py-4">
        <div className="text-xl font-extrabold tracking-tight whitespace-nowrap">
          graph<span className="text-pink">ONE</span>
        </div>

        <nav className="hidden flex-1 gap-7 pl-4 text-sm font-medium text-gray-600 md:flex">
          <a className="pb-5 border-b-2 border-transparent hover:text-ink" href="#">Companies</a>
          <a className="pb-5 border-b-2 border-transparent hover:text-ink" href="#">Products</a>
          <a className="pb-5 border-b-2 border-transparent hover:text-ink" href="#">Investors</a>
          <a className="pb-5 border-b-2 border-transparent hover:text-ink" href="#">Funding</a>
          <a className="pb-5 border-b-2 border-pink font-semibold text-pink" href="#">Jobs</a>
          <a className="pb-5 border-b-2 border-transparent hover:text-ink" href="#">News</a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-black/10 bg-gray-50 px-3 py-2 text-sm text-gray-400 lg:flex w-64">
            <Search size={16} />
            <span>Search companies, founders...</span>
            <kbd className="ml-auto rounded border border-black/10 bg-white px-1.5 text-xs">/</kbd>
          </div>
          <a href="#" className="text-sm font-semibold hidden sm:block">Log in</a>
          <button className="rounded-lg bg-pink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-pink-dark">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
