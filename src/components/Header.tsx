import { Link } from "@tanstack/react-router";
import { ChefHat, Dices, PlusCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center gap-3 py-3 sm:py-3.5">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 flex items-center gap-2.5 no-underline group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--spice-soft)] to-[var(--spice)] flex items-center justify-center shadow-[0_3px_10px_rgba(194,68,12,0.3)] group-hover:shadow-[0_4px_14px_rgba(194,68,12,0.45)] transition-shadow">
            <ChefHat size={18} className="text-white" strokeWidth={2.2} />
          </div>
          <div>
            <span className="font-display text-[1.05rem] font-bold text-[var(--ink)] tracking-tight leading-none block">
              koba<span className="text-[var(--spice-soft)]">cook</span>
            </span>
            <span className="text-[0.6rem] font-semibold text-[var(--ink-muted)] tracking-widest uppercase leading-none block mt-0.5">
              Recipe Book
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-5 ml-6 text-sm font-semibold">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: "nav-link is-active" }}
          >
            レシピ一覧
          </Link>
          <Link
            to="/gacha"
            className="nav-link flex items-center gap-1"
            activeProps={{ className: "nav-link is-active" }}
          >
            <Dices size={14} />
            ガチャ
          </Link>
        </div>

        {/* Right side */}
        <div className="ml-auto">
          <Link
            to="/recipes/new"
            className="btn-primary text-sm py-2 px-4 no-underline"
          >
            <PlusCircle size={15} />
            <span>レシピ登録</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
