---
name: Project Structure
description: Directory layout and key files of the koba-cook codebase
type: project
---

# Project Structure

```
koba-cook/
├── src/
│   ├── routes/              # ファイルベースルーティング
│   │   ├── __root.tsx       # ルートレイアウト (Header/Footer/Providers)
│   │   ├── index.tsx        # / (トップページ)
│   │   ├── about.tsx        # /about
│   │   ├── mcp.ts           # MCP エンドポイント
│   │   └── demo/            # デモページ群（削除可能）
│   │       ├── api.mcp-todos.ts
│   │       ├── tanstack-query.tsx
│   │       ├── form.simple.tsx
│   │       ├── form.address.tsx
│   │       └── mcp-todos.tsx
│   ├── components/          # 共通コンポーネント
│   │   ├── ui/              # shadcn/ui コンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/               # カスタムフック
│   ├── integrations/        # TanStack Query プロバイダー等
│   ├── lib/                 # ユーティリティ (utils.ts = cn関数)
│   ├── utils/               # その他ユーティリティ
│   ├── env.ts               # T3Env 環境変数定義
│   ├── mcp-todos.ts         # MCP TODO サンプル実装
│   ├── router.tsx           # ルーター設定
│   ├── routeTree.gen.ts     # 自動生成（編集不可）
│   └── styles.css           # グローバルスタイル (Tailwind)
├── public/                  # 静的ファイル
├── package.json
├── vite.config.ts           # Vite + Cloudflare + TanStack Start 設定
├── tsconfig.json
├── biome.json               # Biome 設定
├── wrangler.jsonc           # Cloudflare Workers 設定
└── components.json          # shadcn/ui 設定
```

## Key Patterns
- **サーバー関数:** `createServerFn` を使ってサーバーサイドコードを記述
- **API ルート:** ルートファイル内の `server` プロパティでAPIエンドポイント定義
- **テーマ:** localStorage + CSS クラス (`light`/`dark`) でダークモード管理
- **MCP:** `@modelcontextprotocol/sdk` でMCPサーバー機能を内蔵
