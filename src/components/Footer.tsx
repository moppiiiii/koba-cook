import { Link } from "@tanstack/react-router";
import { ChefHat } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-20 px-4 pb-12 pt-10 text-[var(--ink-soft)]">
      <div className="page-wrap">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 no-underline w-fit">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--spice-soft)] to-[var(--spice)] flex items-center justify-center">
                <ChefHat size={15} className="text-white" strokeWidth={2.2} />
              </div>
              <span className="font-display text-base font-bold text-[var(--ink)]">
                koba<span className="text-[var(--spice-soft)]">cook</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--ink-muted)] max-w-s leading-relaxed">
              大切な人に作りたい料理を、丁寧に記録する場所。
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--ink-muted)]">
          <p className="m-0">&copy; {year} koba-cook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
