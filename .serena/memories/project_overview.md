---
name: Project Overview
description: High-level summary of the koba-cook project purpose and tech stack
type: project
---

# koba-cook

## Purpose
TanStack Start × Cloudflare Workers のテンプレートプロジェクト。フルスタック React アプリのスターターキット。

**Why:** テンプレートとして作成されたもので、実際のアプリ機能はこれから追加される想定。

**How to apply:** 新機能追加時はこのテンプレート構成（ファイルベースルーティング、サーバー関数、TanStack エコシステム）に沿って実装する。

## Tech Stack
- **Framework:** TanStack Start (React 19) + TanStack Router (ファイルベースルーティング)
- **Runtime/Deploy:** Cloudflare Workers (`@cloudflare/vite-plugin`)
- **Styling:** Tailwind CSS v4 + shadcn/ui (Radix UI ベース)
- **Data Fetching:** TanStack Query
- **Forms:** TanStack Form
- **Type Safety:** TypeScript (strict mode), Zod, T3Env
- **Package Manager:** Bun (lockfile: bun.lock)
- **Linting/Formatting:** Biome
- **Testing:** Vitest + Testing Library
- **MCP:** @modelcontextprotocol/sdk (MCP サーバー機能あり)
- **Build:** Vite 7

## Path Aliases
- `#/*` → `./src/*`
- `@/*` → `./src/*`
