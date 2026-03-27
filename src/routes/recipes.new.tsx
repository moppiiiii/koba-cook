import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChefHat,
  ChevronDown,
  Clock,
  Info,
  Leaf,
  Lightbulb,
  Plus,
  Save,
  Trash2,
  Users,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import type { Category, Difficulty, Ingredient, Step } from "#/types/recipe";

let _nextId = 0;
const newId = () => ++_nextId;

type IngredientRow = Ingredient & { readonly _id: number };
type StepRow = Step & { readonly _id: number };
type TipRow = { readonly _id: number; value: string };

export const Route = createFileRoute("/recipes/new")({
  component: NewRecipePage,
});

const CATEGORIES: Category[] = [
  "和食",
  "洋食",
  "中華",
  "アジア料理",
  "デザート",
  "サラダ",
  "スープ",
  "その他",
];
const DIFFICULTIES: Difficulty[] = ["簡単", "普通", "難しい"];

interface FormState {
  title: string;
  description: string;
  category: Category;
  tags: string;
  servings: number;
  prepTime: number;
  cookingTime: number;
  difficulty: Difficulty;
  imageEmoji: string;
  ingredients: IngredientRow[];
  steps: StepRow[];
  tips: TipRow[];
  calPerServing: string;
  protein: string;
  fat: string;
  carbs: string;
  salt: string;
}

const initialForm: FormState = {
  title: "",
  description: "",
  category: "和食",
  tags: "",
  servings: 2,
  prepTime: 10,
  cookingTime: 20,
  difficulty: "普通",
  imageEmoji: "🍽️",
  ingredients: [{ _id: newId(), name: "", amount: "", unit: "", note: "" }],
  steps: [{ _id: newId(), order: 1, description: "", tip: "" }],
  tips: [{ _id: newId(), value: "" }],
  calPerServing: "",
  protein: "",
  fat: "",
  carbs: "",
  salt: "",
};

const EMOJI_OPTIONS = [
  "🍳",
  "🥩",
  "🐟",
  "🥗",
  "🍜",
  "🍛",
  "🍣",
  "🥘",
  "🍲",
  "🥞",
  "🍱",
  "🥚",
  "🌿",
  "🍰",
  "🍨",
  "🍔",
  "🌮",
  "🥗",
  "🍝",
  "🫕",
];

function SectionTitle({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--spice-soft)] to-[var(--spice)] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(194,68,12,0.2)]">
        {icon}
      </div>
      <div>
        <h2 className="display-title text-lg font-bold text-[var(--ink)] leading-none">
          {title}
        </h2>
        {sub && <p className="text-xs text-[var(--ink-muted)] mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function NewRecipePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // Ingredient helpers
  function addIngredient() {
    setField("ingredients", [
      ...form.ingredients,
      { _id: newId(), name: "", amount: "", unit: "", note: "" },
    ]);
  }
  function removeIngredient(i: number) {
    setField(
      "ingredients",
      form.ingredients.filter((_, idx) => idx !== i),
    );
  }
  function updateIngredient(i: number, patch: Partial<Ingredient>) {
    setField(
      "ingredients",
      form.ingredients.map((ing, idx) =>
        idx === i ? { ...ing, ...patch } : ing,
      ),
    );
  }

  // Step helpers
  function addStep() {
    setField("steps", [
      ...form.steps,
      { _id: newId(), order: form.steps.length + 1, description: "", tip: "" },
    ]);
  }
  function removeStep(i: number) {
    setField(
      "steps",
      form.steps
        .filter((_, idx) => idx !== i)
        .map((s, idx) => ({ ...s, order: idx + 1 })),
    );
  }
  function updateStep(i: number, patch: Partial<Step>) {
    setField(
      "steps",
      form.steps.map((s, idx) => (idx === i ? { ...s, ...patch } : s)),
    );
  }

  // Tip helpers
  function addTip() {
    setField("tips", [...form.tips, { _id: newId(), value: "" }]);
  }
  function removeTip(i: number) {
    setField(
      "tips",
      form.tips.filter((_, idx) => idx !== i),
    );
  }
  function updateTip(i: number, value: string) {
    setField(
      "tips",
      form.tips.map((t, idx) => (idx === i ? { ...t, value } : t)),
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would send to an API / Supabase
    setSubmitted(true);
    setTimeout(() => navigate({ to: "/" }), 2000);
  }

  if (submitted) {
    return (
      <main className="page-wrap px-4 py-24 text-center">
        <div className="text-7xl mb-6 animate-bounce">🎉</div>
        <h1 className="display-title text-3xl font-bold text-[var(--ink)] mb-3">
          レシピを登録しました！
        </h1>
        <p className="text-[var(--ink-soft)]">レシピ一覧に戻ります...</p>
      </main>
    );
  }

  return (
    <main className="page-wrap px-4 pb-16 pt-8">
      {/* Header */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink-soft)] no-underline hover:text-[var(--ink)] mb-7 transition"
      >
        <ArrowLeft size={15} />
        レシピ一覧に戻る
      </Link>

      <div className="rise-in island-shell rounded-3xl px-6 py-8 sm:px-10 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--spice-soft)] to-[var(--spice)] flex items-center justify-center shadow-[0_3px_12px_rgba(194,68,12,0.3)]">
            <ChefHat size={20} className="text-white" strokeWidth={2} />
          </div>
          <div>
            <p className="island-kicker">新しいレシピ</p>
            <h1 className="display-title text-2xl sm:text-3xl font-bold text-[var(--ink)] leading-none">
              レシピを登録する
            </h1>
          </div>
        </div>
        <p className="text-sm text-[var(--ink-muted)] mt-4 leading-relaxed">
          材料・手順・栄養情報まで詳しく記録できます。必須項目だけでもOKです。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ── 基本情報 ─────────────────────────── */}
        <section
          className="form-section rise-in"
          style={{ animationDelay: "60ms" }}
        >
          <SectionTitle
            icon={<Info size={16} className="text-white" />}
            title="基本情報"
          />

          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="form-label" htmlFor="title">
                レシピ名 <span className="text-[var(--spice)]">*</span>
              </label>
              <input
                id="title"
                type="text"
                required
                placeholder="例：豚の角煮"
                value={form.title}
                onChange={(e) => setField("title", e.target.value)}
                className="form-input"
              />
            </div>

            {/* Description */}
            <div>
              <label className="form-label" htmlFor="description">
                レシピの説明
              </label>
              <textarea
                id="description"
                rows={3}
                placeholder="このレシピの魅力や特徴を書いてください..."
                value={form.description}
                onChange={(e) => setField("description", e.target.value)}
                className="form-input resize-none"
              />
            </div>

            {/* Category + Difficulty */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="category">
                  カテゴリ
                </label>
                <div className="relative">
                  <select
                    id="category"
                    value={form.category}
                    onChange={(e) =>
                      setField("category", e.target.value as Category)
                    }
                    className="form-input pr-9 appearance-auto"
                    style={{ paddingRight: "2.25rem" }}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]"
                  />
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="difficulty">
                  難易度
                </label>
                <div className="flex gap-2">
                  {DIFFICULTIES.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setField("difficulty", d)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                        form.difficulty === d
                          ? d === "簡単"
                            ? "bg-[var(--herb-pale)] text-[var(--herb-mid)] border-[rgba(74,124,47,0.35)]"
                            : d === "普通"
                              ? "bg-yellow-50 text-yellow-700 border-yellow-300"
                              : "bg-[var(--spice-pale)] text-[var(--spice)] border-[rgba(194,68,12,0.35)]"
                          : "bg-[var(--surface-strong)] text-[var(--ink-soft)] border-[var(--line)] hover:border-[var(--spice-soft)]"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Times + Servings */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="form-label" htmlFor="prepTime">
                  <Clock
                    size={13}
                    className="inline mr-1 text-[var(--spice-soft)]"
                  />
                  下準備（分）
                </label>
                <input
                  id="prepTime"
                  type="number"
                  min={0}
                  value={form.prepTime}
                  onChange={(e) => setField("prepTime", Number(e.target.value))}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="cookingTime">
                  <Clock size={13} className="inline mr-1 text-orange-400" />
                  調理時間（分）
                </label>
                <input
                  id="cookingTime"
                  type="number"
                  min={0}
                  value={form.cookingTime}
                  onChange={(e) =>
                    setField("cookingTime", Number(e.target.value))
                  }
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="servings">
                  <Users
                    size={13}
                    className="inline mr-1 text-[var(--herb-mid)]"
                  />
                  人数（人前）
                </label>
                <input
                  id="servings"
                  type="number"
                  min={1}
                  value={form.servings}
                  onChange={(e) => setField("servings", Number(e.target.value))}
                  className="form-input"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="form-label" htmlFor="tags">
                タグ
                <span className="ml-1 text-xs font-normal text-[var(--ink-muted)]">
                  （カンマ区切りで入力）
                </span>
              </label>
              <input
                id="tags"
                type="text"
                placeholder="例：ヘルシー, 時短, おもてなし"
                value={form.tags}
                onChange={(e) => setField("tags", e.target.value)}
                className="form-input"
              />
            </div>

            {/* Emoji picker */}
            <div>
              <p className="form-label">レシピのアイコン絵文字</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {EMOJI_OPTIONS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setField("imageEmoji", emoji)}
                    className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center border-2 transition cursor-pointer ${
                      form.imageEmoji === emoji
                        ? "border-[var(--spice-soft)] bg-[var(--spice-pale)] scale-110"
                        : "border-[var(--line)] hover:border-[var(--spice-soft)] bg-[var(--surface-strong)]"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 材料 ─────────────────────────────── */}
        <section
          className="form-section rise-in"
          style={{ animationDelay: "100ms" }}
        >
          <SectionTitle
            icon={<Leaf size={16} className="text-white" />}
            title="材料"
            sub={`${form.servings}人前の分量で入力してください`}
          />

          <div className="space-y-3">
            {form.ingredients.map((ing, i) => (
              <div
                key={ing._id}
                className="p-3 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] space-y-2"
              >
                {/* Row 1: name + amount + unit */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="食材名（例：鶏もも肉）"
                    value={ing.name}
                    onChange={(e) =>
                      updateIngredient(i, { name: e.target.value })
                    }
                    className="form-input text-sm flex-1 min-w-0"
                  />
                  <input
                    type="text"
                    placeholder="量"
                    value={ing.amount}
                    onChange={(e) =>
                      updateIngredient(i, { amount: e.target.value })
                    }
                    className="form-input text-sm w-20 flex-shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="単位"
                    value={ing.unit}
                    onChange={(e) =>
                      updateIngredient(i, { unit: e.target.value })
                    }
                    className="form-input text-sm w-16 flex-shrink-0"
                  />
                </div>
                {/* Row 2: note + delete */}
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="備考（任意）"
                    value={ing.note ?? ""}
                    onChange={(e) =>
                      updateIngredient(i, { note: e.target.value })
                    }
                    className="form-input text-sm flex-1 min-w-0"
                  />
                  {form.ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(i)}
                      className="p-2 rounded-xl text-[var(--ink-muted)] hover:text-red-500 hover:bg-red-50 transition flex-shrink-0 cursor-pointer"
                      aria-label="この食材を削除"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addIngredient}
            className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--spice-soft)] hover:text-[var(--spice)] transition cursor-pointer"
          >
            <Plus size={16} />
            食材を追加
          </button>
        </section>

        {/* ── 作り方 ───────────────────────────── */}
        <section
          className="form-section rise-in"
          style={{ animationDelay: "140ms" }}
        >
          <SectionTitle
            icon={<Utensils size={16} className="text-white" />}
            title="作り方"
            sub="手順を順番に入力してください"
          />

          <div className="space-y-4">
            {form.steps.map((step, i) => (
              <div key={step._id} className="flex gap-3">
                <div className="step-number flex-shrink-0 mt-1">
                  {step.order}
                </div>
                <div className="flex-1 space-y-2">
                  <textarea
                    rows={2}
                    placeholder={`手順 ${step.order}（例：フライパンに油を熱し、鶏肉を炒める）`}
                    value={step.description}
                    onChange={(e) =>
                      updateStep(i, { description: e.target.value })
                    }
                    className="form-input resize-none text-sm"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="ポイント・コツ（任意）"
                      value={step.tip ?? ""}
                      onChange={(e) => updateStep(i, { tip: e.target.value })}
                      className="form-input text-sm flex-1"
                    />
                    <input
                      type="number"
                      placeholder="時間(分)"
                      min={0}
                      value={step.duration ?? ""}
                      onChange={(e) =>
                        updateStep(i, {
                          duration: e.target.value
                            ? Number(e.target.value)
                            : undefined,
                        })
                      }
                      className="form-input text-sm w-24 flex-shrink-0"
                    />
                  </div>
                </div>
                {form.steps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStep(i)}
                    className="p-2.5 rounded-xl text-[var(--ink-muted)] hover:text-red-500 hover:bg-red-50 transition flex-shrink-0 self-start mt-1 cursor-pointer"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addStep}
            className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--spice-soft)] hover:text-[var(--spice)] transition cursor-pointer"
          >
            <Plus size={16} />
            手順を追加
          </button>
        </section>

        {/* ── コツ・豆知識 ──────────────────────── */}
        <section
          className="form-section rise-in"
          style={{ animationDelay: "180ms" }}
        >
          <SectionTitle
            icon={<Lightbulb size={16} className="text-white" />}
            title="コツ・豆知識"
            sub="料理をより美味しく作るためのヒント"
          />

          <div className="space-y-2.5">
            {form.tips.map((tip, i) => (
              <div key={tip._id} className="flex gap-2 items-center">
                <span className="font-display text-lg font-bold text-amber-400 flex-shrink-0 w-6 text-center">
                  {i + 1}
                </span>
                <input
                  type="text"
                  placeholder="例：二度揚げすることでカリッとした食感になります"
                  value={tip.value}
                  onChange={(e) => updateTip(i, e.target.value)}
                  className="form-input text-sm flex-1"
                />
                {form.tips.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTip(i)}
                    className="p-2.5 rounded-xl text-[var(--ink-muted)] hover:text-red-500 hover:bg-red-50 transition flex-shrink-0 cursor-pointer"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addTip}
            className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--spice-soft)] hover:text-[var(--spice)] transition cursor-pointer"
          >
            <Plus size={16} />
            豆知識を追加
          </button>
        </section>

        {/* ── 栄養情報（任意） ──────────────────── */}
        <section
          className="form-section rise-in"
          style={{ animationDelay: "220ms" }}
        >
          <SectionTitle
            icon={<Leaf size={16} className="text-white" />}
            title="栄養情報（任意）"
            sub="1人前あたりの栄養素"
          />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              {
                key: "calPerServing" as const,
                label: "カロリー",
                unit: "kcal",
                placeholder: "例：480",
              },
              {
                key: "protein" as const,
                label: "タンパク質",
                unit: "g",
                placeholder: "例：28",
              },
              {
                key: "fat" as const,
                label: "脂質",
                unit: "g",
                placeholder: "例：22",
              },
              {
                key: "carbs" as const,
                label: "炭水化物",
                unit: "g",
                placeholder: "例：35",
              },
              {
                key: "salt" as const,
                label: "食塩",
                unit: "g",
                placeholder: "例：1.8",
              },
            ].map(({ key, label, unit, placeholder }) => (
              <div key={key}>
                <label
                  htmlFor={`nutrition-${key}`}
                  className="form-label text-xs"
                >
                  {label}
                  <span className="ml-1 text-[var(--ink-muted)] font-normal">
                    ({unit})
                  </span>
                </label>
                <input
                  id={`nutrition-${key}`}
                  type="number"
                  min={0}
                  step="0.1"
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setField(key, e.target.value)}
                  className="form-input text-sm"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Submit ───────────────────────────── */}
        <div className="flex gap-3 justify-end pt-2">
          <Link to="/" className="btn-secondary no-underline">
            <ArrowLeft size={15} />
            キャンセル
          </Link>
          <button type="submit" className="btn-primary text-base px-6 py-2.5">
            <Save size={17} />
            レシピを保存する
          </button>
        </div>
      </form>
    </main>
  );
}
