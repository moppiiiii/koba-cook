export type Difficulty = "簡単" | "普通" | "難しい";
export type Category =
  | "和食"
  | "洋食"
  | "中華"
  | "アジア料理"
  | "デザート"
  | "サラダ"
  | "スープ"
  | "その他";

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
  note?: string;
  group?: string;
}

export interface Step {
  order: number;
  description: string;
  tip?: string;
  duration?: number;
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  salt: number;
  fiber?: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
  servings: number;
  cookingTime: number;
  prepTime: number;
  difficulty: Difficulty;
  image: string;
  imageGradient: string;
  imageEmoji: string;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[];
  nutrition?: Nutrition;
  author: string;
  createdAt: string;
  updatedAt: string;
  isFavorite?: boolean;
}

export interface RecipeFormData {
  title: string;
  description: string;
  category: Category;
  tags: string;
  servings: number;
  cookingTime: number;
  prepTime: number;
  difficulty: Difficulty;
  image: string;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[];
  nutrition?: Partial<Nutrition>;
}
