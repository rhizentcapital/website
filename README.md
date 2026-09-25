# Rhizent — Website

Rhizent のコーポレートサイト（英語 / オランダ語 / ドイツ語）。[Next.js](https://nextjs.org)（App Router） + TypeScript + Tailwind CSS で構築。

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認してください。`/` は Accept-Language に応じて `/en` `/nl` `/de` へリダイレクトされます。

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- TypeScript
- Tailwind CSS 4

## Deploy

Vercel へのデプロイを想定。

## 構成

- `src/app/[lang]/` — トップ（1ページ構成）と `/privacy`。`lang` は `en` / `nl` / `de`
- `src/i18n/` — 文言辞書。`en.ts` が型の正本で、`nl.ts` `de.ts` は同じ形に揃える
- `src/config/site.ts` — メールアドレス・法人表記・経営陣（LinkedIn）・Rhizent Ventures の URL など変わりやすい値
- `src/proxy.ts` — ロケール未指定のアクセスを言語リダイレクト
