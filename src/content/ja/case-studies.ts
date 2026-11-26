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
    industry: "Jewelry",
    tags: ["Jewelry", "AI", "Custom Apps"],
    title:
      "ゼロから構築した4,000商品のジュエリーストア――データ作業はAIが担当",
    services: ["Development", "Catalogue", "AI", "Integrations"],
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
    industry: "Jewelry",
    tags: ["ジュエリー", "カスタムアプリ", "運営"],
    title: "月$10kのプラットフォームを置き換えたカスタム注文管理アプリ",
    services: ["注文管理", "Development", "Integrations"],
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
    industry: "Jewelry",
    tags: ["ジュエリー", "ラグジュアリー", "AI"],
    title: "閲覧者を予約客に変えるリングビルダー",
    services: ["Development", "AI", "CRO"],
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
    industry: "Jewelry",
    tags: ["ジュエリー", "AI", "運営"],
    title: "ベンダーAPI商品パイプラインつきモバイルファースト店頭",
    services: ["Development", "Catalogue", "Integrations", "AI"],
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
  {
    slug: "tropeaka",
    client: "Tropeaka",
    industry: "Health & Wellness",
    tags: ["Health", "CRO", "Theme"],
    title: "コンバージョン重視のヘルスブランドのためにFigmaからShopify 2.0へ",
    services: ["Design", "Development", "CRO"],
    platform: "Shopify 2.0",
    url: "https://tropeaka.com",
    image: "/images/work/tropeaka.jpg",
    imageAlt: "Tropeakaのヘルス＆ウェルネス商品撮影",
    heroMetric: "6%+",
    metrics: [
      { value: "6%+", label: "再構築したストアフロントのコンバージョン率" },
      { value: "2.0", label: "承認済みFigmaからのカスタムOnline Storeテーマ" },
      { value: "API", label: "高意図の商品フロー向けStorefront APIサーフェス" },
    ],
    challenge:
      "Tropeakaは、洗練されたFigmaシステムに見合い、大規模でもコンバートするヘルスブランドのストアフロントを必要としていました。以前のテーマでは、ブランドが求める視覚密度、商品ストーリー、CRO実験をプラットフォームと戦わずに実現できませんでした。",
    approach:
      "FigmaをLiquidとTailwindでカスタムShopify 2.0テーマに落とし込み、より速く意図的な商品発見が必要な箇所にStorefront APIサーフェスを配線。コンバージョン経路、PDP構造、ホームページの階層は装飾ではなく測定された購入行動を軸に設計しました。",
    built: [
      "FigmaからのカスタムShopify 2.0テーマ（Liquid + Tailwind）",
      "コンバージョン重視のホーム・コレクション・PDPテンプレート",
      "Storefront API駆動の商品・発見サーフェス",
      "CRO反復のためのパフォーマンス重視セクション設計",
    ],
    resultsNote:
      "デザインシステムそのままの見た目で、CROエンジンのように振る舞うストアフロントを出荷――コンバージョン率6%超を記録。",
    sample: false,
  },
  {
    slug: "wonderful-dental",
    client: "Wonderful Dental",
    industry: "Health & Medical",
    tags: ["B2B", "Performance", "Motion"],
    title: "速度を犠牲にしないB2BデンタルコマースのGSAPモーション",
    services: ["Design", "Development", "Performance"],
    platform: "Shopify 2.0",
    url: "https://wonderfuldental.com",
    image: "/images/work/wonderful-dental.jpg",
    imageAlt: "Wonderful DentalのB2Bストアフロントイメージ",
    heroMetric: "GSAP",
    metrics: [
      { value: "B2B", label: "クリニック向けデンタル用品カタログと購入フロー" },
      { value: "Motion", label: "パフォーマンスを守るGSAP駆動ストーリーテリング" },
      { value: "2.0", label: "没入感と速度を両立したShopify Online Storeテーマ" },
    ],
    challenge:
      "Wonderful Dentalは、パーツリストではなくプレミアムでアニメーションのあるB2Bストアフロントを求めつつ、忙しいクリニック購買者に耐える速度も必要でした。重いモーションは通常Core Web Vitalsを悪化させますが、そのトレードオフは許容できませんでした。",
    approach:
      "GSAPアニメーションがファーストペイントを妨げずブランドの存在感を担うShopify 2.0テーマを構築。モーションはスコープ化・遅延初期化し、軽量なLiquidテンプレートと組み合わせて、リピートB2B購入でもカタログが使いやすい状態を維持しました。",
    built: [
      "デンタル用品向けShopify 2.0 B2Bストアフロント",
      "パフォーマンス予算つきGSAPアニメーションシステム",
      "クリニック購買者向けカタログと購入UX",
      "没入感と読み込み速度を両立するテーマ設計",
    ],
    resultsNote:
      "まずブランド体験として読めるストアでありながら、クリニックが再注文に戻るときは速い卸売ツールとして振る舞います。",
    sample: false,
  },
  {
    slug: "sixthreezero",
    client: "Sixthreezero",
    industry: "Outdoor",
    tags: ["Hydrogen", "Custom Apps", "CRO"],
    title: "バイクブランドのAOVを高めるHydrogen上のガイド付き販売",
    services: ["Development", "Custom Apps", "CRO", "Integrations"],
    platform: "Shopify Hydrogen",
    url: "https://www.sixthreezero.com",
    image: "/images/work/sixthreezero.jpg",
    imageAlt: "Sixthreezeroのアウトドアバイクブランドストアフロント",
    heroMetric: "AOV",
    metrics: [
      { value: "Hydrogen", label: "パーソナライズされた購入フローのヘッドレスストア" },
      { value: "Functions", label: "カートとオファーロジックを形づくるShopify Functions" },
      { value: "Guided", label: "ライダーを最適なバイクに導く販売経路" },
    ],
    challenge:
      "Sixthreezeroは、平坦なカタロググリッドよりフィット感・用途・アップセルが重要なバイクとアクセサリーを販売しています。標準テーマでは、ガイド付き販売、メタフィールド駆動のパーソナライズ、平均注文額を高めるカスタムコマースロジックを表現できませんでした。",
    approach:
      "Shopify Functionsとメタフィールドがレコメンド・構成ロジックを駆動するHydrogenで構築。ガイド付き販売フローが購入者を意図から最適なバイクと関連商品へ導き、カスタムアプリサーフェスがマーチャンダイジングとパーソナライズをブランド管理下に保ちました。",
    built: [
      "パーソナライズされた購入体験のHydrogenストアフロント",
      "カート・オファー・コマースルールのためのShopify Functions",
      "メタフィールド駆動の商品データとガイド付き販売経路",
      "マーチャンダイジングとAOV向上のカスタムアプリサーフェス",
    ],
    resultsNote:
      "購入者は最適なバイクとアドオンに導かれ、ストアフロントのコマースロジックはコンバージョンに抗うのではなく働きます。",
    sample: false,
  },
  {
    slug: "origin-tea",
    client: "Origin Tea",
    industry: "Food & Beverage",
    tags: ["CRO", "Loyalty", "Lifecycle"],
    title: "ロイヤルティ・ライフサイクル・グローバル展開を備えたプレミアムティーコマース",
    services: ["CRO", "Integrations", "Development"],
    platform: "Shopify 2.0",
    url: "https://origintea.com",
    image: "/images/work/origin-tea.jpg",
    imageAlt: "Origin Teaのプレミアム茶とアイスシロップ商品",
    heroMetric: "800+",
    metrics: [
      { value: "800+", label: "商品の信頼を裏付けるカスタマーレビュー" },
      { value: "100+", label: "ストアフロント経由で到達した国" },
      { value: "Klaviyo", label: "Shopifyに接続されたライフサイクル・ロイヤルティ" },
    ],
    challenge:
      "Origin Teaはプレミアム茶とアイスシロップをグローバルに販売しています。きれいなPDPだけでは不十分で、リード獲得・ロイヤルティ・ライフサイクルメッセージが、汎用DTCスタックのようにならずに初回購入者をリピート注文へ導く必要がありました。",
    approach:
      "コンバージョンとリテンションを軸にShopify 2.0ストアフロントを構築し、Klaviyoとロイヤルティ機構を接続してレビュー・オファー・購入後フローがブランドを強化するようにしました。マーチャンダイジングと獲得ポイントは国内と同様に海外購入者にも最適化。",
    built: [
      "Shopify 2.0プレミアム茶・シロップストアフロント",
      "Klaviyoライフサイクルフローとリード獲得サーフェス",
      "購入ジャーニーに組み込まれたロイヤルティ機構",
      "リピート購入向けCRO重視のコレクション・PDPパターン",
    ],
    resultsNote:
      "大規模な社会的証明、戻ってくるロイヤルティ、100カ国以上の顧客向けに構築されたストアフロントで出荷。",
    sample: false,
  },
  {
    slug: "pryme",
    client: "Pryme",
    industry: "Food & Beverage",
    tags: ["Subscriptions"],
    title: "オーストラリア産和牛ジャーキーのサブスクファーストShopify",
    services: ["Development", "Subscriptions", "Design"],
    platform: "Shopify 2.0",
    url: "https://prymesnacks.com.au",
    image: "/images/work/pryme.jpg",
    imageAlt: "Pryme和牛ビーフジャーキーの商品撮影",
    heroMetric: "Sub",
    metrics: [
      { value: "Sub-first", label: "和牛ジャーキーの定期注文を軸に設計したストア" },
      { value: "2.0", label: "スナックブランドのストーリーに合わせたShopifyテーマ" },
      { value: "AU", label: "単発ではなく継続を目指すオーストラリアDTCブランド" },
    ],
    challenge:
      "Prymeはプレミアム和牛ビーフジャーキーを販売し、ビジネスモデルは一袋ではなく継続収益です。典型的な商品グリッドでは、サブスクオファーが主要購入経路ではなく後付けの存在になってしまいます。",
    approach:
      "サブスクを前面に出すShopify 2.0ストアフロントを設計・構築。プラン選択、フレーバーの継続性、定期モデルへの参加がPDPに埋もれたアップセルではなくデフォルトに感じられるブランドストーリーを実現しました。",
    built: [
      "サブスクファーストのShopify 2.0ストアフロント",
      "定期注文向けプラン・フレーバー選択フロー",
      "和牛ジャーキーのブランド主導PDP・ホームストーリー",
      "単発AOVより継続を重視したコマースパターン",
    ],
    resultsNote:
      "一袋のジャーキーではなくスナック習慣へのメンバーシップを売るストア――サブスクブランドが実際に成長する方法です。",
    sample: false,
  },
  {
    slug: "nice-rice",
    client: "Nice Rice",
    industry: "Food & Beverage",
    tags: ["Content", "CRO"],
    title: "コンテンツを再来店に変えるレシピハブ",
    services: ["Development", "CRO", "Catalogue"],
    platform: "Shopify 2.0",
    url: "https://nicerice.com.au",
    image: "/images/work/nice-rice.jpg",
    imageAlt: "Nice Riceのブランド米商品とパッケージ",
    heroMetric: "Recipes",
    metrics: [
      { value: "Hub", label: "再来訪を生むコミュニティレシピコンテンツ" },
      { value: "CRO", label: "レシピの発見から商品購入への経路" },
      { value: "2.0", label: "ブランド＋コンテンツコマース向けShopifyテーマ" },
    ],
    challenge:
      "Nice Riceはブランド化された主食であり、主食には戻ってくる理由が必要です。商品を毎週の料理の一部にするコンテンツがなければ、ストアは一回買って終わりのパントリー補充になりかねませんでした。",
    approach:
      "発見の中心にコミュニティレシピハブを据えたShopify 2.0ストアフロントを構築。レシピが購入者を呼び戻し、CRO経路がブランドの声を崩さずにインスピレーションから適切なSKUへ導きます。",
    built: [
      "Shopify 2.0ブランド米ストアフロント",
      "コンテンツコマースサーフェスとしてのコミュニティレシピハブ",
      "レシピから商品ページへのCRO経路",
      "ブランドの温かさと使いやすさを保つUGC対応レイアウト",
    ],
    resultsNote:
      "コンテンツはリテンションループになりました――料理し、戻り、補充する。ショップにボルト留めしたブログではなく。",
    sample: false,
  },
  {
    slug: "sip-coco",
    client: "Sip Coco",
    industry: "Food & Beverage",
    tags: ["UGC", "Branding"],
    title: "ココナッツウォーターブランドのフレーバーアイデンティティとUGC",
    services: ["Design", "Development", "CRO"],
    platform: "Shopify 2.0",
    url: "https://sipcoco.com.au",
    image: "/images/work/sip-coco.jpg",
    imageAlt: "Sip Cocoココナッツウォーターのフレーバーパッケージ",
    heroMetric: "UGC",
    metrics: [
      { value: "Flavor", label: "各SKUを個性的に見せるアイデンティティシステム" },
      { value: "UGC", label: "実際の顧客コンテンツを軸にしたホームストーリー" },
      { value: "2.0", label: "ブランドシステムをコマースに載せるShopifyテーマ" },
    ],
    challenge:
      "Sip Cocoは、棚でもオンラインでも見分けがつかないカテゴリーでココナッツウォーターを販売しています。強いフレーバーアイデンティティと社会的証明がなければ、ブランドはコレクションページの他の水分補給SKUに紛れてしまいます。",
    approach:
      "各フレーバーに明確な視覚的声を持たせ、UGCがホームを担うShopify 2.0ストアフロントを構築。ブランドシステム・パッケージの手がかり・顧客コンテンツが一体となり、購入者は必要なサイズではなく感じるフレーバーを選びます。",
    built: [
      "Shopify 2.0ココナッツウォーターストアフロント",
      "PDP・コレクションテンプレートのフレーバーアイデンティティシステム",
      "UGC重視のホームページと社会的証明モジュール",
      "テーマセクションとマーチャンダイジングに翻訳されたブランドシステム",
    ],
    resultsNote:
      "水分補給と同じくらいキャラクターを売るストア――購入者はフレーバーを認識し、実際に飲んでいる人を見て、迷わず購入します。",
    sample: false,
  },
  {
    slug: "prime-cuts-jerky",
    client: "Prime Cuts Jerky",
    industry: "Food & Beverage",
    tags: ["Subscriptions", "CRO"],
    title: "AOVとリテンションを高めるバンドルとマンスリークラブ",
    services: ["Development", "Subscriptions", "CRO"],
    platform: "Shopify",
    url: "https://primecutsjerky.com",
    image: "/images/work/prime-cuts-jerky.jpg",
    imageAlt: "Prime Cuts Jerkyの商品・パッケージ撮影",
    heroMetric: "Club",
    metrics: [
      { value: "Bundles", label: "平均注文額を高める複数パックオファー" },
      { value: "Monthly", label: "継続的なジャーキー収益のサブスククラブ" },
      { value: "CRO", label: "単品よりクラブ・バンドルを優先する購入経路" },
    ],
    challenge:
      "Prime Cuts Jerkyは継続収益と大きなカートを必要としていました。単発の一袋ではAOVが伸びず、明確なクラブやバンドル経路がなければ、購入者は最小の買い物に落ち着いてしまいます。",
    approach:
      "バンドルとマンスリーサブスククラブを中心にストアフロントを構造化。マーチャンダイジング・PDPオファー・CROパターンで高額経路を明確にし、購入者がお試しから定期注文へ進むようにしました。",
    built: [
      "バンドル販売と複数パック購入フロー",
      "定期ジャーキー注文のマンスリーサブスククラブ",
      "高AOVを優先するCRO志向のPDP・カートパターン",
      "リテンションとクラブ成長のためのShopifyストア設計",
    ],
    resultsNote:
      "クラブとバンドルを先に売るブランド――注文ごとにリセットされるのではなく、スナックコマースが積み上がる方法です。",
    sample: false,
  },
];;

export const industryFilters = [
  "All",
  "Jewelry",
  "Health & Wellness",
  "Health & Medical",
  "Outdoor",
  "Food & Beverage",
  "AI",
  "Custom Apps",
  "Operations",
  "CRO",
  "Subscriptions",
  "Performance",
];

// Maps service slugs to the case studies that best demonstrate them.
export const relatedWorkByService: Record<string, string[]> = {
  consulting: ["tropeaka", "sixthreezero", "origin-tea", "marc-robinson-jewelers", "thejewelleryroom"],
  audits: ["tropeaka", "wonderful-dental", "origin-tea", "thejewelleryroom", "marc-robinson-jewelers"],
  design: ["tropeaka", "wonderful-dental", "sip-coco", "nice-rice", "m-robinson-fine-jewelers", "pryme"],
  development: ["tropeaka", "sixthreezero", "wonderful-dental", "marc-robinson-jewelers", "m-robinson-fine-jewelers", "thejewelleryroom"],
  migrations: ["tropeaka", "sixthreezero", "treasures-jeweler", "marc-robinson-jewelers", "wonderful-dental"],
  catalogue: ["marc-robinson-jewelers", "treasures-jeweler", "nice-rice", "origin-tea", "sip-coco"],
  inventory: ["treasures-jeweler", "marc-robinson-jewelers", "sixthreezero", "thejewelleryroom"],
  "order-management": ["thejewelleryroom", "pryme", "prime-cuts-jerky", "sixthreezero"],
  integrations: ["sixthreezero", "origin-tea", "thejewelleryroom", "marc-robinson-jewelers", "treasures-jeweler"],
  cro: ["tropeaka", "origin-tea", "sixthreezero", "prime-cuts-jerky", "nice-rice", "m-robinson-fine-jewelers"],
  aeo: ["nice-rice", "origin-tea", "sip-coco", "m-robinson-fine-jewelers", "treasures-jeweler"],
  "agentic-commerce": ["sixthreezero", "marc-robinson-jewelers", "treasures-jeweler", "m-robinson-fine-jewelers"],
  operations: ["thejewelleryroom", "pryme", "prime-cuts-jerky", "origin-tea", "treasures-jeweler"],
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
