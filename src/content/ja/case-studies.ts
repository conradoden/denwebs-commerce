// ============================================
// TODO: TRANSLATE - 日本語翻訳済み
// ============================================
// ⚠️ このファイルは日本語に翻訳済みです。
// en/case-studies.ts と構造が一致していることを確認してください。
// slug とクライアント名は変更しないでください。
// ============================================
import type { CaseStudy } from "@/lib/types";

// Case studies drawn from real Shopify work history.
// Sources: Conrado CV projects (Useryze engagements + TheJewelleryRoom).
// Keep claims to what's documented — don't inflate metrics.
export const caseStudies: CaseStudy[] = [
  {
    slug: "marc-robinson-jewelers",
    client: "Marc Robinson Jewelers",
    industry: "ジュエリー",
    tags: ["ジュエリー", "AI", "カスタムアプリ"],
    title:
      "ゼロから構築した4,000商品のジュエリーストア――データ作業はAIが担当",
    services: ["開発", "カタログ", "AI", "統合"],
    platform: "Shopify",
    url: "https://marcrobinsonjewelers.com",
    image: "/images/work/marc-robinson-watch.jpg",
    imageAlt: "Marc Robinson Jewelersのカタログから中古高級時計",
    gallery: [
      { src: "/images/work/marc-robinson-bracelet.jpg", alt: "ダイヤモンドブレスレットの商品撮影" },
    ],
    heroMetric: "4,000+",
    metrics: [
      { value: "4,000+", label: "ローンチ時の商品数――ファインジュエリーから中古高級時計まで" },
      { value: "AI", label: "全カタログをカバーする商品コンテンツ・画像パイプライン" },
      { value: "カスタム", label: "セミマウント・カスタムリング向けリングビルダー" },
    ],
    challenge:
      "数千SKU――ファインジュエリー、中古高級時計、カスタムリング――を扱うファインジュエラーには、パンフレットサイトではなく本物のオンラインストアが必要でした。商品データはベンダーシステム内にあり、4,000ページを手書きする選択肢はありませんでした。",
    approach:
      "カタログを中心にShopifyストアをゼロから構築：ライブ在庫を供給するベンダーAPI商品パイプライン、商品コンテンツと画像を生成する監視付きAI、セミマウント・オーダーメイド向けカスタムリングビルダー。マルチロケーション在庫とストアロケーターで実店舗とサイトを接続。",
    built: [
      "ゼロから構築したShopifyストアフロント（Online Store 2.0）",
      "ライブ在庫同期つきベンダーAPI統合",
      "監視付きAI商品コンテンツ・画像パイプライン",
      "セミマウント・カスタムリング向けリングビルダー",
      "ファインジュエリー + 中古時計のコレクション設計",
      "マルチロケーションストアロケーター",
    ],
    resultsNote:
      "数ヶ月かかったはずのカタログ作成がフィード対応状態でローンチ――リングビルダーはカスタムオーダー問い合わせをセルフサービスフローに変えました。",
    sample: false,
  },
  {
    slug: "thejewelleryroom",
    client: "TheJewelleryRoom",
    industry: "ジュエリー",
    tags: ["ジュエリー", "カスタムアプリ", "運営"],
    title: "月$10kのプラットフォームを置き換えたカスタム注文管理アプリ",
    services: ["注文管理", "開発", "統合"],
    platform: "Shopify + カスタムアプリ（Laravel）",
    url: "https://thejewelleryroom.com",
    image: "/images/work/thejewelleryroom-flatlay.jpg",
    imageAlt: "TheJewelleryRoomの商品撮影――ファインジュエリーのギフトボックス",
    gallery: [
      { src: "/images/work/thejewelleryroom-model.jpg", alt: "TheJewelleryRoomのエディトリアルジュエリー撮影" },
    ],
    heroMetric: "$10k",
    metrics: [
      { value: "$10k/月", label: "Jetti Onport置き換えで削減したプラットフォーム費" },
      { value: "50+", label: "1つのOMSで処理する独立系ジュエリーデザイナー数" },
      { value: "DKK M+", label: "ストア経由で管理する月商規模" },
    ],
    challenge:
      "TheJewelleryRoomはコペンハーゲンのデザイナーマーケットプレイスをShopifyで運営――50以上の独立系ジュエリーデザイナーが1つのストアフロントから出荷。Jetti Onportが月約$10kでドロップシップ注文をルーティングしていましたが、マーケットプレイスの実際の運営に合いませんでした。",
    approach:
      "リード開発者として、マーケットプレイスのドロップシップフローに正確に合わせたカスタム注文管理Shopifyアプリ（Heroku上のLaravel）を設計・構築：注文分割、デザイナールーティング、Shopifyへのフルフィルメント状況同期。運営を曲げるのではなく、サードパーティプラットフォームを完全に置き換え。",
    built: [
      "カスタム埋め込み型Shopify注文管理アプリ（Laravel / Heroku）",
      "50以上のデザイナーアカウントへのドロップシップ注文ルーティング",
      "Shopifyへのフルフィルメント・注文状況同期",
      "Jetti Onportを置き換えたマーケットプレイス運営ツール",
    ],
    resultsNote:
      "月5桁のプラットフォーム費用がゼロになり、ドロップシップ運営はスムーズに。マーケットプレイスは実際のフロー専用のツールで動くようになりました――逆ではなく。",
    sample: false,
  },
  {
    slug: "m-robinson-fine-jewelers",
    client: "M Robinson Fine Jewelers",
    industry: "ジュエリー",
    tags: ["ジュエリー", "ラグジュアリー", "AI"],
    title: "閲覧者を予約客に変えるリングビルダー",
    services: ["開発", "AI", "CRO"],
    platform: "Shopify",
    url: "https://mrobinsonjewelers.com",
    image: "/images/work/m-robinson-watch.webp",
    imageAlt: "M Robinson Fine Jewelersが販売する高級複雑時計",
    gallery: [
      { src: "/images/work/m-robinson-storefront.jpg", alt: "テキサス州オースティンのM Robinson Fine Jewelers店舗" },
    ],
    heroMetric: "100%",
    metrics: [
      { value: "100%", label: "監視付きAIパイプラインが下書きしたカタログコンテンツ" },
      { value: "カスタム", label: "リングビルダー――セミマウントから完全オーダーメイドまで" },
      { value: "リード", label: "ストアフロントに組み込まれた獲得・予約フロー" },
    ],
    challenge:
      "ブティックファインジュエラーが扱うのは熟考型商品――エンゲージリング、タイムピース、カスタムワーク――で、ウェブサイトの役割はクリックではなく予約の獲得。ストアフロントにはラグジュアリー感、実際に使えるリング構成ツール、小規模チームが維持できるコンテンツパイプラインが必要でした。",
    approach:
      "セミマウント・オーダーメイド構成のカスタムリングビルダー、人員なしでカタログを鮮度維持するベンダー+AIコンテンツパイプライン、Edge在庫同期、ファインジュエリーの実際の売り方に合わせた予約・リード獲得フローを備えたブティックShopifyストアフロントを構築。",
    built: [
      "ブティックラグジュアリーShopifyストアフロント",
      "セミマウント・オーダーメイドリング向けカスタムリングビルダー",
      "ベンダー + AI商品コンテンツパイプライン",
      "Edge在庫同期",
      "予約・リード獲得フロー",
    ],
    resultsNote:
      "ショールーム訪問が担っていた仕事をストアが先にこなす――顧客は構成し、比較し、予約する。コンテンツチームなしでカタログは最新のままです。",
    sample: false,
  },
  {
    slug: "treasures-jeweler",
    client: "Treasures Jeweler",
    industry: "ジュエリー",
    tags: ["ジュエリー", "AI", "運営"],
    title: "ベンダーAPI商品パイプラインつきモバイルファースト店頭",
    services: ["開発", "カタログ", "統合", "AI"],
    platform: "Shopify",
    url: "https://treasuresjeweler.com",
    image: "/images/work/treasures-editorial.png",
    imageAlt: "Treasures Jewelerのエディトリアルブランド撮影",
    gallery: [
      { src: "/images/work/treasures-chain.jpg", alt: "ゴールドチェーンの商品撮影" },
    ],
    heroMetric: "3",
    metrics: [
      { value: "3", label: "統合されたシステム――店頭、ベンダーAPI、AIコンテンツパイプライン" },
      { value: "ライブ", label: "ベンダー在庫とのEdge在庫同期" },
      { value: "モバイル", label: "ファースト店頭――購入者の実際の閲覧方法に設計" },
    ],
    challenge:
      "オースティンのジュエラーには存在しなかったオンライン店頭が必要でしたが、より困難なのは運営面でした：ベンダーAPI経由の商品入荷、日々変動する在庫、商品コンテンツを書く・維持する社内チームの不在。",
    approach:
      "ベンダーの商品APIに直結したモバイルファーストShopifyストアを構築。監視付きAIが商品コンテンツと画像をパイプライン規模で生成し、Edge在庫同期が在庫状況を正直に保つ。管理型オンラインファネルがトラフィックを問い合わせ・販売へ導きます。",
    built: [
      "モバイルファーストShopifyストアフロント",
      "ベンダーAPI商品パイプライン（カタログ + メディア）",
      "監視付きAI商品コンテンツ・画像",
      "Edge在庫同期",
      "管理型オンラインファネル――トラフィックから問い合わせへ",
    ],
    resultsNote:
      "手動のカタログ作業なしで、ストアは品揃え・説明・正確性を維持――パイプラインがチームになかった仕事をこなします。",
    sample: false,
  },
];

export const industryFilters = [
  "すべて",
  "ジュエリー",
  "ラグジュアリー",
  "AI",
  "カスタムアプリ",
  "運営",
];

// Maps service slugs to the case studies that best demonstrate them.
export const relatedWorkByService: Record<string, string[]> = {
  consulting: ["marc-robinson-jewelers", "thejewelleryroom"],
  audits: ["thejewelleryroom", "marc-robinson-jewelers"],
  design: ["m-robinson-fine-jewelers", "treasures-jeweler"],
  development: ["marc-robinson-jewelers", "m-robinson-fine-jewelers", "thejewelleryroom"],
  migrations: ["treasures-jeweler", "marc-robinson-jewelers"],
  catalogue: ["marc-robinson-jewelers", "treasures-jeweler"],
  inventory: ["treasures-jeweler", "marc-robinson-jewelers"],
  "order-management": ["thejewelleryroom"],
  integrations: ["thejewelleryroom", "marc-robinson-jewelers", "treasures-jeweler"],
  cro: ["m-robinson-fine-jewelers", "treasures-jeweler"],
  aeo: ["m-robinson-fine-jewelers", "treasures-jeweler"],
  "agentic-commerce": ["marc-robinson-jewelers", "treasures-jeweler"],
  operations: ["treasures-jeweler", "thejewelleryroom"],
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
