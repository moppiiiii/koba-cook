---
name: Suggested Commands
description: Key development commands for the koba-cook project
type: project
---

# Suggested Commands

## Development
```bash
bun --bun run dev          # 開発サーバー起動 (port 3000)
bun --bun run build        # プロダクションビルド
bun --bun run preview      # ビルド結果のプレビュー
```

## Testing
```bash
bun --bun run test         # Vitest でテスト実行
```

## Linting & Formatting (Biome)
```bash
bun --bun run lint         # lint チェック
bun --bun run format       # コードフォーマット
bun --bun run check        # lint + format まとめてチェック
```

## Deploy
```bash
bun run deploy             # build → wrangler deploy (Cloudflare Workers)
bun run cf-typegen         # Cloudflare の型生成
```

## shadcn コンポーネント追加
```bash
pnpm dlx shadcn@latest add button
```

## Cloudflare
```bash
wrangler dev               # Cloudflare Workers ローカルエミュレーション
wrangler deploy            # デプロイ
```
