---
name: Code Style and Conventions
description: Coding conventions, formatting rules, and TypeScript settings for koba-cook
type: project
---

# Code Style and Conventions

## Formatter (Biome)
- **Indent:** Tab (スペースではなくタブ)
- **Quote Style:** ダブルクォート (`"`)
- **Import Organize:** 自動 (`organizeImports: on`)
- **対象ファイル:** `src/**/*`, `vite.config.ts`, `.vscode/**/*`
- **除外:** `src/routeTree.gen.ts`, `src/styles.css`

## TypeScript
- **Strict mode:** ON (strict: true)
- `noUnusedLocals`, `noUnusedParameters`: ON
- `noFallthroughCasesInSwitch`: ON
- `verbatimModuleSyntax`: ON (型インポートは `import type` を使う)
- Target: ES2022

## Naming Conventions
- コンポーネントファイル: PascalCase (例: `Header.tsx`, `ThemeToggle.tsx`)
- ルートファイル: ドット区切りの小文字 (例: `form.simple.tsx`, `api.mcp-todos.ts`)
- `demo.` プレフィックス: デモ用ファイル（削除可能）
- hooks: `use` プレフィックス (例: `demo.form.ts`)
- ユーティリティ: camelCase

## Routing
- `src/routes/` 配下にファイルを置くだけで自動ルーティング
- `__root.tsx`: ルートレイアウト
- `routeTree.gen.ts`: 自動生成ファイル（手動編集不可）

## Import Aliases
- `#/` または `@/` で `src/` を指す
