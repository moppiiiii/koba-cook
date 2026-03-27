import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Clock, RotateCcw, Users } from "lucide-react";
import { useState } from "react";
import { RECIPES, searchRecipes } from "#/data/recipes";
import type { Recipe } from "#/types/recipe";

export const Route = createFileRoute("/gacha")({ component: GachaPage });

type GachaState = "idle" | "spinning" | "dropped" | "opened";

const CAPSULE_COLORS = [
  { bg: "#ef4444", light: "#fca5a5", shadow: "rgba(239,68,68,0.5)" },
  { bg: "#f97316", light: "#fdba74", shadow: "rgba(249,115,22,0.5)" },
  { bg: "#eab308", light: "#fde047", shadow: "rgba(234,179,8,0.5)" },
  { bg: "#22c55e", light: "#86efac", shadow: "rgba(34,197,94,0.5)" },
  { bg: "#3b82f6", light: "#93c5fd", shadow: "rgba(59,130,246,0.5)" },
  { bg: "#a855f7", light: "#d8b4fe", shadow: "rgba(168,85,247,0.5)" },
  { bg: "#ec4899", light: "#f9a8d4", shadow: "rgba(236,72,153,0.5)" },
];

const DOME_CAPSULES = [
  { x: 10, y: 22, color: "#ef4444", s: 36 },
  { x: 36, y: 8, color: "#3b82f6", s: 32 },
  { x: 62, y: 18, color: "#22c55e", s: 38 },
  { x: 80, y: 38, color: "#a855f7", s: 30 },
  { x: 20, y: 54, color: "#eab308", s: 34 },
  { x: 52, y: 56, color: "#ec4899", s: 32 },
  { x: 76, y: 60, color: "#f97316", s: 36 },
];

// ── Capsule SVG ────────────────────────────────────────────────────
function Capsule({
  color,
  size = 56,
  className = "",
  onClick,
}: {
  color: (typeof CAPSULE_COLORS)[number];
  size?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: role="button" is conditionally applied when onClick is provided
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        cursor: onClick ? "pointer" : "default",
        background: `radial-gradient(circle at 38% 30%, ${color.light} 0%, ${color.bg} 50%, color-mix(in oklab, ${color.bg}, black 25%) 100%)`,
        boxShadow: `0 4px 16px ${color.shadow}, inset 0 -4px 8px rgba(0,0,0,0.25), inset 3px 3px 8px rgba(255,255,255,0.35)`,
      }}
    />
  );
}

// ── Screw decoration ────────────────────────────────────────────────
function Screw() {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, #e4e4e7, #71717a)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          width: 6,
          height: 1.5,
          borderRadius: 1,
          background: "rgba(0,0,0,0.35)",
          margin: "4px auto 0",
          transform: "rotate(45deg)",
        }}
      />
    </div>
  );
}

// ── Gacha Machine ──────────────────────────────────────────────────
function GachaMachine({
  state,
  capsuleColor,
  onSpin,
  onOpen,
}: {
  state: GachaState;
  capsuleColor: (typeof CAPSULE_COLORS)[number];
  onSpin: () => void;
  onOpen: () => void;
}) {
  const spinning = state === "spinning";
  const dropped = state === "dropped";
  const disabled = state !== "idle";

  return (
    <div style={{ width: 280, userSelect: "none" }}>
      {/* ── DOME ──────────────────────────────── */}
      <div
        style={{
          width: 220,
          height: 220,
          margin: "0 auto",
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
          background: [
            "radial-gradient(circle at 36% 26%, rgba(255,255,255,0.55) 0%, rgba(210,235,255,0.22) 30%, transparent 58%)",
            "radial-gradient(circle at 70% 70%, rgba(100,140,200,0.08) 0%, transparent 60%)",
            "linear-gradient(145deg, rgba(220,235,255,0.12), rgba(180,210,240,0.06))",
          ].join(", "),
          border: "6px solid",
          borderColor: "rgba(180, 196, 215, 0.75)",
          boxShadow: [
            "0 8px 32px rgba(0,0,0,0.18)",
            "inset 0 2px 12px rgba(200,220,255,0.15)",
            "inset 0 -4px 12px rgba(0,0,0,0.06)",
          ].join(", "),
        }}
      >
        {/* Capsules inside dome */}
        {DOME_CAPSULES.map((c) => (
          <div
            key={c.color}
            style={{
              position: "absolute",
              left: `${c.x}%`,
              top: `${c.y}%`,
              width: c.s,
              height: c.s,
              borderRadius: "50%",
              background: `radial-gradient(circle at 36% 28%, color-mix(in oklab, ${c.color}, white 40%) 0%, ${c.color} 50%, color-mix(in oklab, ${c.color}, black 20%) 100%)`,
              boxShadow: `0 3px 10px ${c.color}55, inset 0 -3px 6px rgba(0,0,0,0.22), inset 3px 3px 6px rgba(255,255,255,0.28)`,
              transition: "opacity 300ms",
              opacity: spinning ? 0.5 : 1,
            }}
          />
        ))}
        {/* Primary glass reflection */}
        <div
          style={{
            position: "absolute",
            top: "7%",
            left: "10%",
            width: "34%",
            height: "46%",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.38) 0%, transparent 68%)",
            transform: "rotate(-22deg)",
            pointerEvents: "none",
          }}
        />
        {/* Secondary subtle reflection */}
        <div
          style={{
            position: "absolute",
            bottom: "12%",
            right: "8%",
            width: "18%",
            height: "24%",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── CHROME RING ───────────────────────── */}
      <div
        style={{
          width: 248,
          height: 24,
          margin: "0 auto",
          background:
            "linear-gradient(180deg, #e4e4e7 0%, #a1a1aa 45%, #d4d4d8 100%)",
          borderRadius: "0 0 5px 5px",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        {/* Ring groove */}
        <div
          style={{
            height: 3,
            marginTop: 10,
            background: "rgba(0,0,0,0.12)",
            borderRadius: 2,
          }}
        />
      </div>

      {/* ── BODY ──────────────────────────────── */}
      <div
        style={{
          width: 280,
          background:
            "linear-gradient(162deg, #fb923c 0%, #ea670a 45%, #c2440c 100%)",
          borderRadius: "0 0 20px 20px",
          padding: "16px 18px 20px",
          position: "relative",
          boxShadow: [
            "0 14px 36px rgba(194,68,12,0.45)",
            "0 4px 10px rgba(0,0,0,0.2)",
            "inset -6px 0 18px rgba(0,0,0,0.12)",
            "inset 0 2px 0 rgba(255,255,255,0.18)",
          ].join(", "),
        }}
      >
        {/* Corner screws */}
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <Screw />
        </div>
        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <Screw />
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 12 }}>
          <Screw />
        </div>
        <div style={{ position: "absolute", bottom: 16, right: 12 }}>
          <Screw />
        </div>

        {/* Label sticker */}
        <div
          style={{
            background: "rgba(255,255,255,0.13)",
            border: "1.5px solid rgba(255,255,255,0.22)",
            borderRadius: 10,
            padding: "8px 10px",
            marginBottom: 14,
            textAlign: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.96)",
              fontSize: 17,
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontFamily: '"Shippori Mincho B1", serif',
            }}
          >
            レシピガチャ
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.2em",
              marginTop: 2,
            }}
          >
            RECIPE GACHA — FREE
          </div>
        </div>

        {/* Coin slot + handle row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Left: coin slot block */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                marginBottom: 5,
              }}
            >
              ▼ コインをどうぞ
            </div>
            {/* Coin slot */}
            <div
              style={{
                height: 7,
                background: "rgba(0,0,0,0.55)",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.5)",
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          {/* Handle arm */}
          <div
            style={{
              width: 28,
              height: 7,
              background: "linear-gradient(180deg, #e4e4e7, #a1a1aa)",
              borderRadius: 4,
              boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}
          />

          {/* Handle knob */}
          <button
            type="button"
            onClick={onSpin}
            disabled={disabled}
            className={spinning ? "gacha-handle-spin" : ""}
            style={{
              width: 68,
              height: 68,
              borderRadius: "50%",
              flexShrink: 0,
              cursor: disabled ? "not-allowed" : "pointer",
              border: "4px solid rgba(0,0,0,0.18)",
              background: disabled
                ? "linear-gradient(135deg, #d4d4d8, #a1a1aa)"
                : "linear-gradient(135deg, #fde68a 0%, #fbbf24 45%, #d97706 100%)",
              boxShadow: disabled
                ? "0 2px 8px rgba(0,0,0,0.2)"
                : "0 6px 18px rgba(0,0,0,0.32), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.15)",
              transition: "box-shadow 150ms, background 150ms",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            aria-label="ガチャを回す"
          >
            {/* Knob center dot */}
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: disabled
                  ? "rgba(0,0,0,0.15)"
                  : "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.6), rgba(180,120,0,0.4))",
                boxShadow: disabled
                  ? "none"
                  : "inset 0 1px 3px rgba(0,0,0,0.25)",
              }}
            />
            {/* Arrow mark */}
            {!disabled && (
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderBottom: "8px solid rgba(120,70,0,0.35)",
                }}
              />
            )}
          </button>
        </div>
      </div>

      {/* ── DISPENSING CHUTE ──────────────────── */}
      <div
        style={{
          width: 110,
          margin: "0 auto",
          background: "linear-gradient(180deg, #a1a1aa 0%, #71717a 100%)",
          borderRadius: "0 0 14px 14px",
          padding: "8px 8px 10px",
          minHeight: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.24)",
          position: "relative",
        }}
      >
        {/* Flap shadow at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 7,
            background: "rgba(0,0,0,0.28)",
          }}
        />
        {/* Inner tray shadow */}
        <div
          style={{
            position: "absolute",
            inset: "7px 5px 5px",
            borderRadius: "0 0 10px 10px",
            background: "rgba(0,0,0,0.15)",
            boxShadow: "inset 0 3px 8px rgba(0,0,0,0.2)",
          }}
        />
        {dropped && (
          <Capsule
            color={capsuleColor}
            size={60}
            className="capsule-drop-in capsule-pulse relative z-10"
            onClick={onOpen}
          />
        )}
      </div>

      {/* ── LEGS ──────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 30px",
        }}
      >
        {[0, 1].map((leg) => (
          <div
            key={leg}
            style={{
              width: 18,
              height: 28,
              background: "linear-gradient(180deg, #71717a, #52525b)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                height: 4,
                marginTop: 6,
                background: "rgba(255,255,255,0.12)",
                borderRadius: 2,
                margin: "8px 3px 0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Recipe Result Card ─────────────────────────────────────────────
function RecipeResult({ recipe }: { recipe: Recipe }) {
  const diff: Record<string, string> = {
    簡単: "diff-easy",
    普通: "diff-normal",
    難しい: "diff-hard",
  };
  return (
    <div className="recipe-reveal island-shell rounded-2xl overflow-hidden">
      {/* Image */}
      <div
        className={`bg-gradient-to-br ${recipe.imageGradient} h-32 flex items-center justify-center relative`}
      >
        <span className="text-6xl drop-shadow-sm">{recipe.imageEmoji}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-[var(--ink)]">
            {recipe.category}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold border ${diff[recipe.difficulty]}`}
          >
            {recipe.difficulty}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="display-title text-xl font-bold text-[var(--ink)] mb-2 leading-tight">
          {recipe.title}
        </h3>
        <p className="text-xs text-[var(--ink-muted)] leading-relaxed mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-[var(--ink-soft)] mb-4">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-[var(--spice-soft)]" />
            {recipe.prepTime + recipe.cookingTime}分
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} className="text-[var(--herb-mid)]" />
            {recipe.servings}人前
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {recipe.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>

        <Link
          to="/recipes/$recipeId"
          params={{ recipeId: recipe.id }}
          className="btn-primary no-underline w-full justify-center text-sm"
        >
          レシピを見る
          <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────
function GachaPage() {
  const [ingredients, setIngredients] = useState("");
  const [gState, setGState] = useState<GachaState>("idle");
  const [result, setResult] = useState<Recipe | null>(null);
  const [capsuleColor, setCapsuleColor] = useState(CAPSULE_COLORS[0]);
  const [noMatch, setNoMatch] = useState(false);

  function spin() {
    if (gState !== "idle") return;
    setNoMatch(false);

    const pool = ingredients.trim()
      ? searchRecipes(ingredients.trim())
      : RECIPES;
    if (pool.length === 0) {
      setNoMatch(true);
      return;
    }

    const picked = pool[Math.floor(Math.random() * pool.length)];
    const color =
      CAPSULE_COLORS[Math.floor(Math.random() * CAPSULE_COLORS.length)];
    setResult(picked);
    setCapsuleColor(color);
    setGState("spinning");
    setTimeout(() => setGState("dropped"), 2200);
  }

  function open() {
    if (gState === "dropped") setGState("opened");
  }

  function reset() {
    setGState("idle");
    setResult(null);
    setNoMatch(false);
  }

  return (
    <main className="page-wrap px-4 pb-16 pt-8">
      {/* Back nav */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink-soft)] no-underline hover:text-[var(--ink)] mb-8 transition"
      >
        <ArrowLeft size={15} />
        レシピ一覧に戻る
      </Link>

      {/* Title */}
      <div className="rise-in mb-10 text-center">
        <h1 className="display-title text-3xl sm:text-4xl font-bold text-[var(--ink)] mb-2">
          レシピガチャ
        </h1>
        <p className="text-sm text-[var(--ink-muted)]">
          食材を入力してガチャを回すと、ランダムにレシピが登場！
        </p>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-center">
        {/* ── Gacha Machine ── */}
        <div
          className="flex-shrink-0 rise-in"
          style={{ animationDelay: "80ms" }}
        >
          <GachaMachine
            state={gState}
            capsuleColor={capsuleColor}
            onSpin={spin}
            onOpen={open}
          />

          {/* Handle hint */}
          <p className="text-center text-xs text-[var(--ink-muted)] mt-4 font-medium">
            {gState === "idle" && "ハンドルを回してね！"}
            {gState === "spinning" && "回ってる...！"}
            {gState === "dropped" && "カプセルをタップして開けよう！"}
            {gState === "opened" && "レシピが出た！"}
          </p>
        </div>

        {/* ── Right: controls + result ── */}
        <div
          className="w-full max-w-sm rise-in"
          style={{ animationDelay: "140ms" }}
        >
          {/* Ingredient filter */}
          <div className="island-shell rounded-2xl p-5 mb-5">
            <label className="form-label" htmlFor="gacha-ingredient">
              食材で絞り込む
              <span className="ml-1 text-xs font-normal text-[var(--ink-muted)]">
                （任意）
              </span>
            </label>
            <input
              id="gacha-ingredient"
              type="text"
              placeholder="例：鶏肉、じゃがいも、卵..."
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && spin()}
              disabled={gState !== "idle"}
              className="form-input mb-3"
            />

            {noMatch && (
              <p className="text-xs text-[var(--spice)] font-medium mb-3">
                「{ingredients}
                」を使ったレシピが見つかりませんでした。食材を変えて試してみて。
              </p>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={spin}
                disabled={gState !== "idle"}
                className="btn-primary flex-1 justify-center"
              >
                ガチャを回す！
              </button>
              {gState !== "idle" && (
                <button
                  type="button"
                  onClick={reset}
                  className="btn-secondary px-3"
                  aria-label="もう一度"
                >
                  <RotateCcw size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Recipe result */}
          {gState === "opened" && result && <RecipeResult recipe={result} />}
        </div>
      </div>
    </main>
  );
}
