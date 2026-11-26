// ============================================
// TODO: TRANSLATE - 日本語翻訳済み
// ============================================
// ⚠️ このファイルは日本語に翻訳済みです。
// en/site.ts と構造が一致していることを確認してください。
// href と slug は変更しないでください。
// ============================================
export const site = {
  name: "Denwebs",
  url: "https://www.denwebs.com",
  email: "hello@denwebs.com",
  phone: "", // TBD — hidden until real number is confirmed
  description:
    "野心的なShopifyブランドのための戦略、デザイン、開発、カタログ、在庫、OMS、AI最適化。",
};

// Mega-menu structure — every link must resolve to a real route.
export const megaMenu = [
  {
    title: "戦略 & アドバイザリー",
    links: [
      { label: "コマースコンサルティング", href: "/services/consulting", desc: "プラットフォーム判断とロードマップ" },
      { label: "Shopify診断", href: "/services/audits", desc: "優先順位づけした詳細な発見" },
    ],
  },
  {
    title: "デザイン & 開発",
    links: [
      { label: "UX / UIデザイン", href: "/services/design", desc: "Shopify向けデザインシステム" },
      { label: "テーマ・カスタム開発", href: "/services/development", desc: "OS 2.0、セクション、Functions" },
      { label: "Shopifyへの移行", href: "/services/migrations", desc: "損失なしのリプラットフォーム" },
    ],
  },
  {
    title: "コマース運営",
    links: [
      { label: "カタログ管理", href: "/services/catalogue", desc: "フィード対応の商品データ" },
      { label: "在庫システム", href: "/services/inventory", desc: "在庫の唯一の正しいソース" },
      { label: "注文管理（OMS）", href: "/services/order-management", desc: "ルーティング、3PL、返品" },
      { label: "統合（ERP / PIM / 3PL）", href: "/services/integrations", desc: "コネクタ + カスタム" },
    ],
  },
  {
    title: "成長 & AI",
    links: [
      { label: "CRO・パフォーマンス", href: "/services/cro", desc: "積み上がる実験" },
      { label: "AIサービス概要", href: "/services/ai", desc: "AEO · エージェント · 運営AI" },
      { label: "AI検索最適化（AEO）", href: "/services/ai/aeo", desc: "AIアシスタントに引用される" },
      { label: "エージェンティックコマース準備", href: "/services/ai/agentic-commerce", desc: "機械販売可能なカタログ" },
      { label: "店舗運営へのAI適用", href: "/services/ai/operations", desc: "監視付き自動化" },
    ],
  },
];

export const footerNav = [
  {
    title: "会社情報",
    links: [
      { label: "会社について", href: "/about" },
      { label: "採用情報", href: "/careers" },
      { label: "パートナー", href: "/partners" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    title: "サービス",
    links: [
      { label: "全サービス", href: "/services" },
      { label: "移行", href: "/services/migrations" },
      { label: "カタログ・運営", href: "/services/catalogue" },
      { label: "AI / AEO", href: "/services/ai" },
    ],
  },
  {
    title: "実績",
    links: [
      { label: "事例紹介", href: "/work" },
      { label: "インサイト", href: "/insights" },
      { label: "無料Shopify診断", href: "/audit" },
    ],
  },
  {
    title: "法務",
    links: [
      { label: "プライバシー", href: "/privacy" },
      { label: "利用規約", href: "/terms" },
    ],
  },
];

export const projectTypes = [
  "コンサルティング",
  "診断",
  "リデザイン",
  "新規構築",
  "移行",
  "カタログ / 在庫 / OMS",
  "統合",
  "AI / AEO",
  "CRO",
  "リテイナー",
  "その他",
];

export const revenueRanges = [
  "月商 $50k未満",
  "月商 $50k–250k",
  "月商 $250k–1M",
  "月商 $1M以上",
  "回答しない",
];

export const timelines = ["最優先", "1〜3ヶ月", "3〜6ヶ月", "検討中"];

export const hearAbout = [
  "検索",
  "AI（ChatGPT等）",
  "SNS",
  "紹介",
  "イベント",
  "その他",
];
