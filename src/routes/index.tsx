import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Flame, Leaf, Search, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { ALL_CATEGORIES, RECIPES, searchRecipes } from "#/data/recipes";
import type { Recipe } from "#/types/recipe";

export const Route = createFileRoute("/")({ component: HomePage });

const DIFFICULTY_COLORS: Record<string, string> = {
  簡単: "diff-easy",
  普通: "diff-normal",
  難しい: "diff-hard",
};

function RecipeCard({ recipe, delay = 0 }: { recipe: Recipe; delay?: number }) {
  return (
    <Link
      to="/recipes/$recipeId"
      params={{ recipeId: recipe.id }}
      className="no-underline block"
    >
      <article
        className="recipe-card rounded-2xl overflow-hidden cursor-pointer rise-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Image area */}
        <div
          className={`relative recipe-image-placeholder bg-gradient-to-br ${recipe.imageGradient} overflow-hidden`}
        >
          <span className="text-5xl drop-shadow-sm">{recipe.imageEmoji}</span>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-[0.68rem] font-bold bg-white/90 text-[var(--ink)] shadow-sm">
              {recipe.category}
            </span>
          </div>
          {/* Difficulty badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[0.68rem] font-bold border ${DIFFICULTY_COLORS[recipe.difficulty]} shadow-sm`}
            >
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-base font-bold text-[var(--ink)] mb-1.5 leading-snug">
            {recipe.title}
          </h3>
          <p className="text-xs text-[var(--ink-muted)] leading-relaxed mb-3 line-clamp-2">
            {recipe.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-[var(--ink-soft)] mb-3">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-[var(--spice-soft)]" />
              {recipe.prepTime + recipe.cookingTime}分
            </span>
            <span className="flex items-center gap-1">
              <Users size={12} className="text-[var(--herb-mid)]" />
              {recipe.servings}人前
            </span>
            {recipe.nutrition && (
              <span className="flex items-center gap-1">
                <Flame size={12} className="text-orange-400" />
                {recipe.nutrition.calories}kcal
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {recipe.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = useMemo(
    () => searchRecipes(query, activeCategory),
    [query, activeCategory],
  );

  return (
    <main className="page-wrap px-4 pb-16 pt-10">
      {/* Page Header */}
      <div className="rise-in flex items-center justify-between mb-8">
        <div>
          <h1 className="display-title text-2xl sm:text-3xl font-bold text-[var(--ink)]">
            レシピ一覧
          </h1>
          <p className="text-sm text-[var(--ink-muted)] mt-1">
            {RECIPES.length}品 &middot;{" "}
            {[...new Set(RECIPES.map((r) => r.category))].length}カテゴリ
          </p>
        </div>
        <Link to="/recipes/new" className="btn-primary no-underline">
          <Sparkles size={15} />
          <span className="hidden sm:inline">レシピを登録</span>
          <span className="sm:hidden">登録</span>
        </Link>
      </div>

      {/* Search & Filter */}
      <section id="recipes">
        {/* Search bar */}
        <div className="island-shell rounded-2xl p-5 mb-5">
          <div className="relative mb-4">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]"
            />
            <input
              type="text"
              placeholder="レシピ名、食材名で検索..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-input pl-11 text-sm"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[var(--spice-soft)] to-[var(--spice)] text-white border-transparent shadow-[0_2px_8px_rgba(194,68,12,0.3)]"
                    : "bg-[var(--surface-strong)] text-[var(--ink-soft)] border-[var(--line)] hover:border-[var(--spice-soft)] hover:text-[var(--ink)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Leaf size={16} className="text-[var(--herb-mid)]" />
            <span className="text-sm font-semibold text-[var(--ink-soft)]">
              {filtered.length}件のレシピ
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((recipe, i) => (
              <RecipeCard key={recipe.id} recipe={recipe} delay={i * 50} />
            ))}
          </div>
        ) : (
          <div className="island-shell rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-[var(--ink-soft)] font-semibold mb-1">
              レシピが見つかりませんでした
            </p>
            <p className="text-sm text-[var(--ink-muted)]">
              別のキーワードやカテゴリで試してみてください
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
