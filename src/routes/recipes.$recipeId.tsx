import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChefHat,
  Clock,
  Edit,
  Flame,
  Leaf,
  Lightbulb,
  Users,
  Utensils,
} from "lucide-react";
import { getRecipeById } from "#/data/recipes";

export const Route = createFileRoute("/recipes/$recipeId")({
  loader: ({ params }) => {
    const recipe = getRecipeById(params.recipeId);
    if (!recipe) throw notFound();
    return recipe;
  },
  component: RecipeDetailPage,
  notFoundComponent: () => (
    <main className="page-wrap px-4 py-20 text-center">
      <div className="text-6xl mb-6">🍽️</div>
      <h1 className="display-title text-3xl font-bold text-[var(--ink)] mb-3">
        レシピが見つかりません
      </h1>
      <p className="text-[var(--ink-soft)] mb-6">
        このレシピは削除されたか、URLが間違っている可能性があります。
      </p>
      <Link to="/" className="btn-primary no-underline">
        レシピ一覧に戻る
      </Link>
    </main>
  ),
});

const DIFFICULTY_STYLE: Record<string, string> = {
  簡単: "diff-easy",
  普通: "diff-normal",
  難しい: "diff-hard",
};

function RecipeDetailPage() {
  const recipe = Route.useLoaderData();

  // Group ingredients
  const groupedIngredients = recipe.ingredients.reduce(
    (acc, ing) => {
      const g = ing.group ?? "その他";
      if (!acc[g]) acc[g] = [];
      acc[g].push(ing);
      return acc;
    },
    {} as Record<string, typeof recipe.ingredients>,
  );

  return (
    <main className="page-wrap px-4 pb-16 pt-8">
      {/* Back navigation */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink-soft)] no-underline hover:text-[var(--ink)] mb-7 transition"
      >
        <ArrowLeft size={15} />
        レシピ一覧に戻る
      </Link>

      {/* Hero */}
      <div className="grid lg:grid-cols-[1fr_380px] gap-8 mb-10">
        {/* Image */}
        <div
          className={`rise-in overflow-hidden bg-gradient-to-br ${recipe.imageGradient} aspect-video lg:aspect-auto lg:min-h-72 rounded-3xl flex items-center justify-center relative`}
        >
          <span className="text-8xl drop-shadow-md">{recipe.imageEmoji}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent rounded-3xl" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-3 py-1.5 rounded-full text-sm font-bold bg-white/90 text-[var(--ink)] shadow">
              {recipe.category}
            </span>
            <span
              className={`px-3 py-1.5 rounded-full text-sm font-bold border ${DIFFICULTY_STYLE[recipe.difficulty]} shadow`}
            >
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Info panel */}
        <div
          className="rise-in flex flex-col gap-5"
          style={{ animationDelay: "80ms" }}
        >
          <div>
            <p className="island-kicker mb-2">{recipe.category}</p>
            <h1 className="display-title text-3xl sm:text-4xl font-bold text-[var(--ink)] leading-tight mb-3">
              {recipe.title}
            </h1>
            <p className="text-[var(--ink-soft)] leading-relaxed text-sm sm:text-base">
              {recipe.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          {/* Quick stats */}
          <div className="island-shell rounded-2xl p-4 grid grid-cols-2 gap-3">
            {[
              {
                icon: <Clock size={18} className="text-[var(--spice-soft)]" />,
                label: "下準備",
                value: `${recipe.prepTime}分`,
              },
              {
                icon: <Flame size={18} className="text-orange-400" />,
                label: "調理時間",
                value: `${recipe.cookingTime}分`,
              },
              {
                icon: <Users size={18} className="text-[var(--herb-mid)]" />,
                label: "人数",
                value: `${recipe.servings}人前`,
              },
              {
                icon: <ChefHat size={18} className="text-[var(--spice)]" />,
                label: "難易度",
                value: recipe.difficulty,
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-[var(--surface)]"
              >
                {icon}
                <div>
                  <div className="text-[0.65rem] font-semibold text-[var(--ink-muted)] uppercase tracking-wide">
                    {label}
                  </div>
                  <div className="text-sm font-bold text-[var(--ink)]">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total time highlight */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-[var(--spice-pale)] to-transparent border border-[rgba(194,68,12,0.15)]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--spice-soft)] to-[var(--spice)] flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">
                合計時間
              </div>
              <div className="font-display text-2xl font-bold text-[var(--spice)]">
                {recipe.prepTime + recipe.cookingTime}分
              </div>
            </div>
          </div>

          {/* Edit button */}
          <Link
            to="/"
            className="btn-secondary no-underline text-sm justify-center"
          >
            <Edit size={15} />
            レシピを編集する
          </Link>
        </div>
      </div>

      {/* Nutrition */}
      {recipe.nutrition && (
        <section className="mb-10 rise-in" style={{ animationDelay: "120ms" }}>
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={18} className="text-[var(--herb-mid)]" />
            <h2 className="display-title text-xl font-bold text-[var(--ink)]">
              栄養情報
            </h2>
            <span className="text-xs text-[var(--ink-muted)]">
              （1人前あたり）
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              {
                label: "カロリー",
                value: recipe.nutrition.calories,
                unit: "kcal",
              },
              {
                label: "タンパク質",
                value: recipe.nutrition.protein,
                unit: "g",
              },
              { label: "脂質", value: recipe.nutrition.fat, unit: "g" },
              { label: "炭水化物", value: recipe.nutrition.carbs, unit: "g" },
              { label: "食塩相当量", value: recipe.nutrition.salt, unit: "g" },
              ...(recipe.nutrition.fiber
                ? [
                    {
                      label: "食物繊維",
                      value: recipe.nutrition.fiber,
                      unit: "g",
                    },
                  ]
                : []),
            ].map(({ label, value, unit }) => (
              <div key={label} className="nutrition-badge">
                <span className="value">{value}</span>
                <span className="text-[0.6rem] font-semibold text-[var(--spice-soft)] uppercase tracking-wide">
                  {unit}
                </span>
                <span className="label">{label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main content grid */}
      <div className="grid lg:grid-cols-[1fr_340px] gap-8">
        {/* Steps */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Utensils size={18} className="text-[var(--spice-soft)]" />
            <h2 className="display-title text-2xl font-bold text-[var(--ink)]">
              作り方
            </h2>
          </div>

          <ol className="space-y-5">
            {recipe.steps.map((step, i) => (
              <li
                key={step.order}
                className="rise-in"
                style={{ animationDelay: `${i * 60 + 150}ms` }}
              >
                <div className="island-shell rounded-2xl p-5">
                  <div className="flex gap-4">
                    <div className="step-number flex-shrink-0">
                      {step.order}
                    </div>
                    <div className="flex-1">
                      <p className="text-[var(--ink)] leading-relaxed m-0 text-sm sm:text-base">
                        {step.description}
                      </p>
                      {step.duration && (
                        <div className="mt-2 flex items-center gap-1 text-xs text-[var(--ink-muted)]">
                          <Clock size={11} />
                          目安：{step.duration}分
                        </div>
                      )}
                      {step.tip && (
                        <div className="mt-3 flex gap-2 p-2.5 rounded-xl bg-[var(--herb-pale)] border border-[rgba(74,124,47,0.18)]">
                          <Lightbulb
                            size={14}
                            className="text-[var(--herb-mid)] flex-shrink-0 mt-0.5"
                          />
                          <p className="text-xs text-[var(--herb)] m-0 leading-relaxed">
                            {step.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Right column: Ingredients + Tips */}
        <div className="flex flex-col gap-6">
          {/* Ingredients */}
          <section
            className="island-shell rounded-2xl p-5 rise-in"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--herb-mid)] to-[var(--herb)] flex items-center justify-center">
                <Leaf size={13} className="text-white" />
              </div>
              <h2 className="display-title text-lg font-bold text-[var(--ink)]">
                材料
              </h2>
              <span className="text-xs text-[var(--ink-muted)] ml-auto">
                （{recipe.servings}人前）
              </span>
            </div>

            <div className="space-y-4">
              {Object.entries(groupedIngredients).map(([group, ings]) => (
                <div key={group}>
                  {Object.keys(groupedIngredients).length > 1 && (
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--ink-muted)] mb-2 pb-1 border-b border-[var(--line)]">
                      {group}
                    </div>
                  )}
                  {ings.map((ing) => (
                    <div key={ing.name} className="ingredient-row">
                      <CheckCircle2
                        size={13}
                        className="text-[var(--herb-light)] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-[var(--ink)] flex-1 font-medium">
                        {ing.name}
                      </span>
                      <span className="text-sm font-bold text-[var(--spice)] text-right whitespace-nowrap">
                        {ing.amount}
                        {ing.unit}
                      </span>
                      {ing.note && (
                        <span className="text-[0.65rem] text-[var(--ink-muted)] whitespace-nowrap">
                          {ing.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Tips & Trivia */}
          {recipe.tips.length > 0 && (
            <section className="rise-in" style={{ animationDelay: "160ms" }}>
              <div className="flex items-center gap-2 mb-4 px-1">
                <Lightbulb size={18} className="text-amber-500" />
                <h2 className="display-title text-xl font-bold text-[var(--ink)]">
                  コツ・豆知識
                </h2>
              </div>
              <div className="space-y-3">
                {recipe.tips.map((tip, i) => (
                  <div
                    key={tip}
                    className="flex gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-50/80 to-orange-50/50 border border-amber-200/60"
                  >
                    <span className="font-display text-lg font-bold text-amber-400 flex-shrink-0 leading-none mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[var(--ink-soft)] m-0 leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Back CTA */}
      <div className="mt-14 text-center">
        <Link to="/" className="btn-secondary no-underline">
          <ArrowLeft size={15} />
          他のレシピを見る
        </Link>
      </div>
    </main>
  );
}
