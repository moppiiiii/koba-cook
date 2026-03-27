---
name: Task Completion Checklist
description: What to do after completing a task in koba-cook
type: project
---

# Task Completion Checklist

タスク完了後に以下を実行すること:

1. **Lint & Format チェック**
   ```bash
   bun --bun run check
   ```
   問題があれば修正する。

2. **TypeScript エラー確認**
   Biome check で型エラーは検出されないので、IDE の診断か `tsc --noEmit` で確認。

3. **テスト実行**
   ```bash
   bun --bun run test
   ```

4. **ルートツリー確認**
   新しいルートを追加した場合、`src/routeTree.gen.ts` が自動更新されているか確認（開発サーバー起動時に自動生成）。

5. **デモファイルの扱い**
   `demo.` プレフィックスのファイルは削除可能なサンプル。本番コードと混在しないよう注意。
