// Japanese UI strings — mirrors en.ts. Translate values only;
// keep keys, placeholders like {year}, and slug references intact.
import type { Messages } from "./en";
import type { ServiceGroup } from "@/lib/types";

export const ja: Messages = {
  meta: {
    titleDefault: "Denwebs | コマース & AI のShopifyエージェンシー",
    titleTemplate: "%s | Denwebs",
  },

  nav: {
    work: "実績",
    services: "サービス",
    insights: "インサイト",
    about: "会社について",
    getQuote: "お見積もり",
    freeAudit: "無料Shopify診断",
    megaTagline: "戦略 → AI。コマース全体を一社で。",
    viewAllServices: "全サービスを見る",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    homeLabel: "Denwebsホーム",
    primaryAria: "メイン",
    mobileAria: "モバイル",
    language: "言語",
  },

  footer: {
    contactEyebrow: "お問い合わせ",
    tagline: "1営業日以内に返信します。US / EU · リモートファースト。",
    copyright: "© {year} Denwebs.",
    bottomTagline: "Shopifyコマースを、戦略からAIまで一気通貫で。",
    navAria: "フッター",
    skipToContent: "本文へスキップ",
  },

  common: {
    getQuote: "お見積もり",
    seeOurWork: "実績を見る",
    allWork: "すべての実績",
    allInsights: "すべてのインサイト",
    allCaseStudies: "すべての事例",
    readCaseStudy: "事例を読む",
    learnMore: "詳しく見る",
    explore: "見る",
    sample: "サンプル",
    all: "すべて",
    loadingForm: "フォームを読み込み中…",
    bookDiscovery: "無料相談を予約",
    talkToExpert: "専門家に相談",
    freeAudit: "無料診断",
    seeCareers: "採用情報を見る",
    visitLiveStore: "ストアを見る",
    readTime: "{time}",
    storefrontAlt: "{client} のストアフロント",
  },

  cta: {
    eyebrow: "次のステップ",
    title: "あなたのストアについて話しましょう。",
    copy: "構築したいもの、移行したいもの、解決したい問題をお聞かせください。1営業日以内に返信します。",
    discovery: "無料相談を予約",
  },

  logos: {
    marqueeLabel: "クライアントのストアフロント（一部）",
    marqueeAria: "クライアントロゴ",
    moreClients: "…ほか代理店経由で80以上のShopifyプロジェクト",
    partnersLabel: "利用しているプラットフォームとパートナー",
  },

  stats: {
    items: [
      { value: "100+", label: "ポートフォリオのShopifyプロジェクト" },
      { value: "12", label: "公開URL付きの注目事例" },
      { value: "$10k/月", label: "あるクライアントで削減したプラットフォーム費" },
      { value: "2017", label: "年からコマースエンジニアリングに従事" },
    ],
  },

  home: {
    eyebrow: "Shopify Eコマースコンサルタント",
    h1a: "戦略・構築・",
    h1b: "成長",
    h1c: "をつなぐ",
    h1d: "Shopifyパートナー。",
    sub: "診断、テーマ構築、カタログ運営、CRO、ライフサイクル、AI可視性を担うシニア実務者。ローンチ後も売上が伸び、運営がきれいに回るストアへ。",
    heroServices: [
      "戦略 & 診断",
      "テーマ & カスタムアプリ",
      "カタログ & 在庫",
      "OMS & 統合",
      "CRO & ライフサイクル",
      "AI / AEO",
    ],
    snapshot: {
      title: "エンゲージメントスナップショット",
      proof: [
        { value: "100+", label: "Shopifyプロジェクト納品" },
        { value: "CRO + AI", label: "社内グロースプラクティス" },
        { value: "$10k/月", label: "あるクライアントで削減したOMS費" },
        { value: "シニア", label: "すべての案件にシニア実務者" },
      ],
      footnote:
        "コマースコンサルタンシーのように構築：まず診断し、積み上がるものを出荷し、運営レイヤーに寄り添う。",
    },
    work: {
      index: "01",
      eyebrow: "実績",
      title: "形容詞ではなく、証拠を。",
      copy: "すべてのプロジェクトは重要な指標で評価されます――維持されたランキング、削減された時間、負荷に耐えるシステム。",
    },
    pillarsSection: {
      index: "02",
      eyebrow: "事業内容",
      title: "コマースの全レイヤーを、一社で。",
      copy: "多くの代理店はデザインして終わります。私たちは計画し、構築し、運営します――純粋なデザイン会社が触れられない運営レイヤーまで。",
      pillars: [
        {
          title: "コンサルティング & 診断",
          copy: "投資の前の誠実な診断――戦略、プラットフォーム判断、優先順位づけされた修正リスト。",
          href: "/services/consulting",
        },
        {
          title: "デザイン & 開発",
          copy: "Online Store 2.0構築、カスタムセクション、要件が本当に合う場合のヘッドレス。",
          href: "/services/development",
        },
        {
          title: "カタログ & 在庫",
          copy: "インフラのように設計された商品データと在庫――清潔、統一、フィード対応。",
          href: "/services/catalogue",
        },
        {
          title: "注文管理 & 統合",
          copy: "注文ルーティング、ERP接続、システム照合。多くの代理店が省く運営レイヤー。",
          href: "/services/order-management",
        },
        {
          title: "成長 / CRO",
          copy: "積み上がる規律ある実験――ランダムなアプリ導入ではなく。",
          href: "/services/cro",
        },
        {
          title: "AI――AEO、エージェント、運営",
          copy: "AIに薦められるブランド、AIが売れるストア、AIが支える運営を。",
          href: "/services/ai",
        },
      ],
    },
    why: {
      index: "03",
      eyebrow: "Denwebsの強み",
      title: "コマースがひとつになる場所。",
      copy: "コンサルタント、監査人、ビルダー、運営者――システム全体に責任を持つ一つのチーム。AIは脚注ではなく中核のプラクティス。",
      points: [
        {
          title: "人が主導",
          body: "すべての案件にシニアな実務者が付きます。話すのは実際に仕事をする人――アカウント層ではなく。",
        },
        {
          title: "技術が裏付け",
          body: "推薦するシステムは自分たちで構築します：テーマ、統合、データパイプライン、監視付きAIツール。",
        },
        {
          title: "運営者の視点",
          body: "カタログ、在庫、注文フローを実際に運営してきました。ローンチ当日ではなく、その翌週の月曜を見据えて設計します。",
        },
        {
          title: "実証済みのプロセス",
          body: "構築前に整理。切り替え前にリハーサル。出荷後に測定。コマースはイベントではなく運営です。",
        },
      ],
    },
    process: {
      index: "04",
      eyebrow: "私たちの進め方",
      title: "整理する。構築する。運営する。",
      steps: [
        { title: "診断", body: "スタック、カタログ、データフロー、AI可視性を整理し、売上が漏れる場所を特定。" },
        { title: "計画", body: "工数・インパクト・依存関係で順序づけたロードマップ――構築前に合意。" },
        { title: "構築", body: "デザイン、開発、移行、統合――常にステージングプレビューを共有しながら実行。" },
        { title: "運営 & 最適化", body: "カタログ、在庫、OMS、CRO、AI可視性のリテイナー――積み上がる仕事。" },
      ],
    },
    ai: {
      index: "05",
      eyebrow: "AIプラクティス",
      h2a: "AIが",
      h2b: "薦める",
      h2c: "ブランドに――AIが売れるストアに。",
      copy: "AIアシスタントはすでに購入者の商品発見を形づくっています。カタログを機械可読に、コンテンツを引用可能に、運営をAI支援に――常に人が監視しながら。",
      ctaExplore: "AIサービスを見る",
      ctaAudit: "AI可視性診断",
      items: [
        {
          t: "AI検索最適化（AEO / GEO）",
          d: "ChatGPT、Perplexity、Gemini、AI Overviewsでの可視性――推測ではなく測定で。",
          href: "/services/ai/aeo",
        },
        {
          t: "エージェンティックコマース準備",
          d: "AIショッピングエージェントが商品を評価・販売できるよう、商品データとフィードを構造化。",
          href: "/services/ai/agentic-commerce",
        },
        {
          t: "店舗運営へのAI適用",
          d: "エンリッチメントパイプライン、予測支援、注文トリアージ――機械が下書き、人が承認。",
          href: "/services/ai/operations",
        },
      ],
    },
    statsSection: { index: "06", eyebrow: "数字で見る", title: "正直な帳簿。" },
    insightsSection: {
      index: "07",
      eyebrow: "インサイト",
      title: "運営者のノートから。",
    },
  },

  work: {
    metaTitle: "実績",
    metaDesc: "CRO、マーケティング、コンサルティング、AI、CRM、運営にわたる事例と公開ポートフォリオ。",
    eyebrow: "実績",
    h1a: "私たちが構築し",
    h1b: "出荷した",
    h1c: "ポートフォリオ。",
    copy: "CRO、マーケティング、コンサルティング、AI、CRM、運営にわたる{count}件の公開プロジェクト。サービスで絞り込むと、テーマ構築だけでない各プラクティスの深さが見えます。",
    filterAria: "事例とポートフォリオを絞り込む",
    empty: "このカテゴリーにはまだ何もありません。",
    caseStudiesLabel: "事例（{count}件）",
    portfolioLabel: "ポートフォリオ（{total}件中{visible}件）",
    cta: {
      title: "プロジェクトを始めましょう。",
      copy: "移行、再構築、運営、AI――変えるべきことをお聞かせください。何が必要か、正直にお答えします。",
    },
  },

  caseStudy: {
    crumbWork: "実績",
    sampleBadge: "サンプル事例",
    snapshotLabels: ["クライアント", "業界", "サービス", "プラットフォーム"],
    s01: "01 — 課題",
    s02: "02 — アプローチ",
    s03: "03 — 構築したもの",
    s04: "04 — 結果",
    sampleNote: "サンプル事例――検証済みのクライアント成果に差し替え予定。",
    realNote: "実案件――プロジェクト記録に基づく数値。",
    relatedTitle: "関連する実績",
    metaDesc: "{industry}・{platform}の事例：{title}",
  },

  servicesHub: {
    metaTitle: "Shopifyサービス",
    metaDesc: "コンサルティング、構築、運営、AIで、Shopifyストアをローンチ・運営・成長させる。",
    eyebrow: "サービス",
    h1a: "ローンチする。運営する。成長させる――",
    h1b: "AIをループに",
    copy: "Denwebsはコマースの全ライフサイクルをカバーします：戦略と診断、デザインと構築、カタログと運営、成長とAI。痛いレイヤーを選ぶか、システム全体をお任せください。",
    modes: {
      index: "01",
      eyebrow: "契約形態",
      title: "3つの協業方法。",
      items: [
        {
          name: "ローンチ",
          promise: "調査、デザイン、構築、移行。",
          copy: "新規ストア、リデザイン、リプラットフォーム――明確な終了を持つプロジェクトとしてスコープ化。動くストアと、それを運営できるチームが得られます。",
          items: ["Shopify構築・リデザイン", "プラットフォーム移行", "デザインシステム・UX", "統合アーキテクチャ"],
        },
        {
          name: "運営",
          promise: "カタログ、在庫、OMS、統合、サポート。",
          copy: "継続的な運営レイヤー――多くの代理店が置き去りにする仕事。商品データを清潔に、在庫を正確に、注文を流し続けるリテイナー。",
          items: ["カタログ・フィード管理", "在庫・割当ルール", "注文ルーティング・返品", "リリース管理・サポート"],
        },
        {
          name: "成長",
          promise: "CRO、ライフサイクル、AI可視性、リテイナー。",
          copy: "複利で効く最適化――実験、AI検索可視性、成果物ではなく売上で測る継続改善。",
          items: ["CROプログラム", "AI / AEO可視性", "分析・測定", "アドバイザリー・フラクショナル"],
        },
      ],
    },
    capabilities: {
      index: "02",
      eyebrow: "ケイパビリティ",
      title: "すべての業務を、成果で整理。",
      aiChildren: [
        { slug: "aeo", title: "AI検索最適化（AEO / GEO）", promise: "ChatGPT、Perplexity、Gemini、AI Overviewsで引用される。" },
        { slug: "agentic-commerce", title: "エージェンティックコマース準備", promise: "AIショッピングエージェントが販売できるよう商品データとフィードを構造化。" },
        { slug: "operations", title: "店舗運営へのAI適用", promise: "エンリッチメント、予測、トリアージへの監視付き自動化。" },
      ],
    },
    faq: {
      index: "03",
      eyebrow: "FAQ",
      title: "Denwebsとの協業について。",
      faqs: [
        {
          q: "プロジェクト、リテイナー、アドバイザリー――どれが必要？",
          a: "明確な成果はプロジェクト：移行、リデザイン、診断後の実装。継続的な運営・最適化はリテイナー。社内で実行しつつシニアな指針が欲しい場合はアドバイザリー。複数併用するクライアントも多く、必要をカバーする最軽量のモデルを提案します。",
        },
        {
          q: "プロジェクトのスコープと価格の決め方は？",
          a: "定義された構築は固定スコープ・固定価格。プロジェクトにオープンエンドの時間課金は使いません――契約前にコスト・期間・含まれる内容が分かります。",
        },
        {
          q: "運営リテイナーの範囲は？",
          a: "カタログ管理、在庫・注文運営、統合監視、リリース、サポート。SKU数・注文量・システムに応じて月次でスコープします。",
        },
        {
          q: "小さく始められますか？",
          a: "はい――最も多い入口は診断です。固定スコープで、お客様のものになる優先順位づけレポートが得られ、次に何をするか決める自然な土台になります。",
        },
        {
          q: "既存のパートナーと連携できますか？",
          a: "はい。ERP導入業者、ライフサイクル代理店、PR会社、社内チームと連携します。各部分を誰が触れても、コマースシステム全体が機能することが私たちの仕事です。",
        },
      ],
    },
  },

  aiHub: {
    metaTitle: "ShopifyブランドのためのAI",
    metaDesc: "Shopifyブランド向けのAEO、エージェンティックコマース準備、AI支援の店舗運営。",
    crumbServices: "サービス",
    crumbAi: "AI",
    eyebrow: "AIプラクティス",
    h1a: "AIが",
    h1b: "薦める",
    h1c: "ブランドに、AIが",
    h1d: "売れるストアに。",
    copy: "AI検索とAIショッピングが商品発見を再形成しています。構造化されていないカタログと薄いコンテンツは無視されます。DenwebsはShopifyブランドを機械に可視化し、機械とともに運営可能にします。",
    ctaAudit: "AI可視性診断を受ける",
    ctaFree: "無料AI診断",
    shift: {
      index: "01",
      eyebrow: "変化",
      title: "発見は回答へ移っている。",
      copy: "購入者はますますリストを検索する代わりにアシスタントに尋ねています。そのアシスタントは理解できるブランドを推薦し――解析できないブランドをスキップします。",
      pains: [
        "PDPは人間にはコンバージョンしても機械を混乱させる――不完全な属性、スキーマなし、曖昧なポリシー。",
        "データの清潔な競合が、あなたのカテゴリーのAI回答で引用される。",
        "AIエージェントが買い物客のために商品を評価できず、エージェント購入フローから不在に。",
        "一方で運営チームはAIが下書きできる商品の手動エンリッチメントと注文の手動トリアージを続けている。",
      ],
    },
    offerings: {
      index: "02",
      eyebrow: "事業内容",
      title: "3つのAIプラクティス、1つの基盤。",
      items: [
        {
          title: "AI検索最適化（AEO / GEO）",
          copy: "ChatGPT、Perplexity、Gemini、Google AI Overviewsで引用される。エンティティ明確化、構造化データ、回答先行型コンテンツ――定期的な可視性トラッキングで測定。",
          href: "/services/ai/aeo",
          items: ["AI可視性ベースライン & トラッキング", "エンティティ・スキーマ戦略", "回答先行型コンテンツプログラム"],
        },
        {
          title: "エージェンティックコマース準備",
          copy: "AIエージェントが購入者に代わってリサーチ・比較・取引を始めています。競合より先に、カタログを機械可読・機械販売可能に。",
          href: "/services/ai/agentic-commerce",
          items: ["機械解析のための商品データ", "AIショッピング面向けフィード", "エージェントプロトコルのロードマップ"],
        },
        {
          title: "運営へのAI適用",
          copy: "運営が実際に痛む箇所に適用――カタログエンリッチメント、在庫予測支援、注文トリアージ。機械が下書き、人が承認、監査証跡は永続。",
          href: "/services/ai/operations",
          items: ["監視付きエンリッチメントパイプライン", "予測支援", "注文トリアージ自動化"],
        },
      ],
    },
    deliverables: {
      index: "03",
      eyebrow: "成果物",
      title: "AIプロジェクトが生むもの。",
      items: [
        "ChatGPT、Perplexity、Gemini、AI OverviewsをまたぐAI可視性診断",
        "エンティティ・構造化データの修正（Organization、Product、FAQ、Review）",
        "購入者の質問を狙う回答先行型コンテンツプログラム",
        "AIショッピング面向けの商品フィード・属性準備",
        "監視付きAI運営パイプライン：エンリッチメント、予測、トリアージ",
        "定期測定――感覚ではなく引用トラッキング",
      ],
    },
    faq: {
      index: "04",
      eyebrow: "FAQ",
      title: "AIの質問に、率直な回答を。",
      faqs: [
        {
          q: "AEOとSEOの違いは？",
          a: "SEOは順位づけされたリンクを最適化し、AEOは引用される回答を最適化します。AIアシスタントは解析・信頼できるソースから回答を組み立てます――エンティティ明確化・構造化データ・回答型コンテンツがキーワード順位より重要です。",
        },
        {
          q: "AI検索は実際にトラフィックと売上を送っていますか？",
          a: "はい、そして成長中。AIアシスタントはすでに商品リサーチと比較を大規模に形づくり、エージェント主導決済は展開中です。測定するブランドはチャネルとして扱い、無視するブランドは拡大する発見の中で不可視になります。",
        },
        {
          q: "ChatGPTの回答に現れることを保証できますか？",
          a: "正直に保証できる者はいません。保証できるのは：測定されたベースライン、引用可能にする構造的修正、引用を獲得するコンテンツ、変化が見える定期トラッキングです。",
        },
        {
          q: "運営AIの安全性はどう保ちますか？",
          a: "顧客・金銭・カタログデータに触れるすべてのAI出力は人の承認を通ります。監視境界を意図的に設計し、監査ログを永続化します。",
        },
        {
          q: "どこから始めますか？",
          a: "AI可視性診断から――AIが今日ブランドと商品をどう説明しているかと、優先順位づけたギャップを示す固定スコープ案件。そこから多くのクライアントはスコープ化された実装またはリテイナーへ進みます。",
        },
      ],
    },
    related: {
      eyebrow: "関連記事",
      title: "ノートからのAIメモ。",
    },
    cta: {
      title: "AIにあなたのブランドがどう見えるか確認。",
      copy: "AI可視性診断は、ChatGPT、Perplexity、Gemini、AI Overviewsが今日あなたをどう説明・順位づけしているか、そして最初に何を直すべきかを正確に示します。",
    },
  },

  servicePage: {
    groupNames: {
      "Strategy & Advisory": "戦略 & アドバイザリー",
      "Design & Build": "デザイン & 開発",
      "Commerce Operations": "コマース運営",
      "Growth & AI": "成長 & AI",
    } satisfies Record<ServiceGroup, string>,
    crumbServices: "サービス",
    crumbAi: "AI",
    whoEyebrow: "対象となる方",
    deliverables: { index: "01", eyebrow: "提供内容", title: "成果物。" },
    process: { index: "02", eyebrow: "プロセス", title: "進め方。" },
    related: { index: "03", eyebrow: "関連する実績", title: "実践例。" },
    portfolio: {
      eyebrow: "ポートフォリオ",
      title: "このプラクティスで出荷したストア。",
      copy: "このサービスに紐づくポートフォリオ{count}件。",
    },
    faq: { index: "04", eyebrow: "FAQ", title: "よくある質問。" },
  },

  insights: {
    metaTitle: "インサイト",
    metaDesc: "Shopify、移行、コマース運営、CRO、AI検索についてのメモ――実務を行う運営者から。",
    eyebrow: "インサイト",
    h1a: "オペレーターの",
    h1b: "ノート",
    copy: "コマースシステムの運営で学んだこと――移行、カタログ、AIの変化。検索順位のためではなく、役に立つために書いています。",
    filterAria: "記事を絞り込む",
    empty: "このカテゴリーの記事はまだありません。",
    cadence: {
      eyebrow: "更新頻度",
      title: "月2〜4件の新着ノート。",
      copy: "Shopify · 移行 · 運営 · CRO · AI / AEO · ユニファイドコマース。",
    },
  },

  about: {
    metaTitle: "会社について",
    metaDesc: "Denwebsは運営者のように作られたShopifyエージェンシー――コンサルタント、ビルダー、コマース運営が一つの屋根の下に。",
    eyebrow: "会社について",
    h1a: "オペレーターのように作った",
    h1b: "エージェンシー",
    copy: "Denwebsはシンプルな観察から始まりました：多くのShopify代理店は美しいストアをデザインできますが、運営し続けることはできません。私たちはシステム全体――戦略、構築、その間の運営レイヤー――を中心に据えたエージェンシーを作り、AIを中核のプラクティスにしました。",
    principles: {
      index: "01",
      eyebrow: "私たちの働き方",
      title: "現実に耐える原則。",
      items: [
        {
          title: "処方の前に診断",
          body: "すべての案件は、実際に何が壊れているかの理解から始まります。起きるべきでない構築はお断りします。",
        },
        {
          title: "装飾者ではなく運営者",
          body: "カタログ、在庫、注文フローこそコマースが生きる場所。ローンチの翌週の月曜のために設計・構築します。",
        },
        {
          title: "正直なスコープ",
          body: "固定スコープのプロジェクト、測定されるリテイナー、率直な回答――『それは再構築しない方がいい』が正解のときも含めて。",
        },
        {
          title: "AIは監視付きで",
          body: "AIは複利で効く場所――エンリッチメント、予測、トリアージ――に使い、顧客や金銭に触れるものは人が承認します。",
        },
        {
          title: "成果に責任を持つ",
          body: "戦略・構築・運営をまたぐ責任は一つのチームに。計画する人と出荷する人の間に引き継ぎの隙間はありません。",
        },
      ],
    },
    numbers: {
      index: "02",
      eyebrow: "数字",
      title: "一目でわかるDenwebs。",
      copy: "文書化された実績――2017年以来、代理店・クライアント側で80以上のShopifyプロジェクト。",
    },
    careers: {
      title: "持続するコマースシステムを作りませんか。",
      copy: "実際に出荷できる運営者を採用しています――ストアを実際に運営したことのある開発者、デザイナー、コマース担当者。",
    },
  },

  partners: {
    metaTitle: "テクノロジーパートナー",
    metaDesc: "DenwebsがShopifyブランド向けに構築・統合するプラットフォームとツール――EC、ライフサイクル、検索、ERP、3PL。",
    eyebrow: "パートナー",
    h1: "私たちが使うスタック。",
    copy: "紹介料ではなく適合性でツールを推薦します。これが私たちが日々構築・統合・運営するエコシステムです――バッジではなくケイパビリティ。",
    groups: [
      {
        name: "コマースプラットフォーム",
        copy: "ShopifyとShopify Plusが拠点――Online Store 2.0、POS、B2B、Functions、そして要件が合う場合のHydrogen。",
        items: ["Shopify", "Shopify Plus", "Shopify POS", "Hydrogen"],
      },
      {
        name: "ライフサイクル & リテンション",
        copy: "メール、SMS、定期購買、ロイヤリティ、サポートツール――ライフサイクル専門家と連携して統合・最適化。",
        items: ["Klaviyo", "Recharge", "Gorgias", "Yotpo", "ロイヤリティプラットフォーム"],
      },
      {
        name: "発見 & マーチャンダイジング",
        copy: "検索、レビュー、マーチャンダイジングレイヤー――そしてAIサーフェスを供給する構造化データ。",
        items: ["Algolia", "Searchspring", "レビュープラットフォーム", "フィードツール"],
      },
      {
        name: "バックオフィス & 運営",
        copy: "ERP、PIM、フルフィルメント――明示的なデータ所有権と監視つきで統合、必要に応じ導入パートナーと連携。",
        items: ["NetSuite", "SAP", "Dynamics", "PIM", "3PL / ShipBob", "iPaaSミドルウェア"],
      },
    ],
    note: "注：掲載しているのは実際に使用するプラットフォームであり、認定の主張ではありません。パートナーティアの記載は検証された場合のみ追加します。",
    cta: {
      title: "珍しいものを統合したい？",
      copy: "カスタムERP、レガシーシステム、ニッチなツール――コマーススタックに関わるなら、もっと奇妙なものも接続してきました。",
    },
  },

  audit: {
    metaTitle: "無料Shopify & AI可視性診断",
    metaDesc: "ストアフロントまたはAI検索プレゼンスの集中診断をリクエスト。概要レベルの発見報告――義務なし。",
    eyebrow: "無料診断",
    h1a: "まず何を直すか",
    h1b: "無料",
    h1c: "で確認。",
    copy: "診断を選び、ストアURLを送るだけで概要レベルの発見報告を受けられます。無料の再構築ではなく、焦点を絞った確認です――完全な全体像が欲しければ詳細診断は有償のスコープ案件です。",
    tracks: [
      {
        track: "Shopifyストア診断",
        items: [
          "テンプレート、カート、チェックアウト導線のUX・コンバージョン阻害要因",
          "テーマ、パフォーマンス、Core Web Vitalsのスナップショット",
          "アプリ・統合構成のレビュー",
          "優先順位づけされた発見――願望リストではなく修正順序",
        ],
      },
      {
        track: "AI可視性診断",
        items: [
          "ChatGPT、Perplexity、Gemini、AI Overviewsが今日あなたのブランドをどう説明しているか",
          "商品の構造化データ・エンティティのギャップ",
          "あなたのカテゴリーでAIが使う引用ソース",
          "可視性を動かす最初の3つの手",
        ],
      },
    ],
    formTitle: "診断をリクエスト",
  },

  careers: {
    metaTitle: "採用情報",
    metaDesc: "Denwebsに参加――出荷できる運営者のためのShopifyエージェンシー。リモートファースト、US / EU。",
    eyebrow: "採用情報",
    h1a: "持続しなければならない",
    h1b: "コマース",
    copy: "Denwebsは運営者を採用します：ストアを運営し、システムを構築し、ローンチ当日が簡単な方だと知っている人。US・EUタイムゾーンのリモートファースト。",
    roles: {
      title: "募集職種",
      copy: "継続的ではなく意図的に採用します。下記に募集がなくてもご連絡ください――実際の仕事を示せる運営者には必ず返信します。",
      items: [
        { role: "シニアShopifyデベロッパー", type: "契約 / 正社員 · リモート" },
        { role: "コマース運営リード", type: "正社員 · リモート（US/EU）" },
      ],
    },
    cta: "自己紹介を送る",
  },

  contact: {
    metaTitle: "お見積もり",
    metaDesc: "Shopifyプロジェクトについてお聞かせください。または30分の無料相談をご予約ください。1営業日以内に返信します。",
    eyebrow: "お問い合わせ",
    h1a: "変えるべきことを",
    h1b: "聞かせてください",
    copy: "移行、再構築、運営、AI。メッセージを送るか、30分の無料相談で都合の良い時間をお選びください。",
    emailEyebrow: "メール",
    bookEyebrow: "電話を予約",
    bookLink: "30分の無料相談",
    responseEyebrow: "返信時間",
    responseValue: "1営業日以内に返信します",
    lighterEyebrow: "もっと気軽に始めたい？",
    lighterLink: "無料診断をリクエスト",
  },

  contactPanel: {
    tabAria: "お問い合わせ方法",
    tabBook: "電話を予約",
    tabMessage: "メッセージを送る",
    bookingCopy:
      "30分の無料相談をご予約ください。カレンダーページで枠を選べます。{email} のGoogleカレンダーと同期されます。",
    openCalendar: "予約カレンダーを開く",
    loadingCalendar: "カレンダーを読み込み中",
    iframeTitle: "30分の無料相談を予約",
  },

  form: {
    selectPlaceholder: "選択してください",
    honeypot: "このフィールドは空のままにしてください",
    firstName: "名 *",
    lastName: "姓 *",
    workEmail: "勤務先メール *",
    company: "会社名 *",
    websiteUrl: "ウェブサイトURL *",
    storeUrl: "ストアURL *",
    websitePlaceholder: "https://yourstore.com",
    auditType: "診断タイプ *",
    auditStore: "Shopifyストア診断",
    auditAi: "AI可視性診断",
    revenue: "月商レンジ",
    timeline: "希望時期",
    message: "どのようにお手伝いできますか？ *",
    messagePlaceholder: "プロジェクト、問題、うまくいっていないことについてお聞かせください。",
    messagePlaceholderDiscovery: "無料相談で何を話したいですか？",
    messageDefaultDiscovery: "無料相談を予約したいです。",
    messageDefaultAiAudit: "AI可視性診断を希望します。",
    hearAbout: "何を見て知りましたか？",
    sending: "送信中…",
    requestAudit: "診断をリクエスト",
    submitQuote: "お見積もりを依頼",
    errorGeneric: "問題が発生しました。",
    errorEmailSuffix: "{email} へ直接メールでもご連絡いただけます。",
    footnote: "1営業日以内に返信します。スパムもリスト登録もなし――入力内容は人間に届きます。",
    successEyebrow: "受付完了",
    successTitle: "ありがとうございます――受け取りました。",
    successCopy: "1営業日以内に返信します。お急ぎの場合はこちらまで：",
    errors: {
      invalidRequest: "無効なリクエストです。",
      missingField: "必須項目をすべて入力してください。",
      invalidEmail: "メールアドレスが無効です。",
      deliveryFailed: "送信に失敗しました。直接メールでご連絡ください。",
    },
  },

  privacy: {
    metaTitle: "プライバシーポリシー",
    metaDesc: "Denwebsが情報をどう収集・使用・保護するか。",
    legal: "法務",
    title: "プライバシーポリシー",
    placeholder: "プレースホルダー――ローンチ前に弁護士レビュー済みのポリシーに差し替えてください。",
    sections: [
      {
        h: "収集する情報",
        p: "フォーム経由で送信される情報（氏名、メール、会社名、ストアURL、プロジェクト詳細）と、分析が有効な場合の標準的な分析データ。このサイトでは決済情報を収集しません。",
      },
      {
        h: "利用方法",
        p: "お問い合わせへの返信、ご希望の会話の準備、サイトの改善のため。情報を販売したり、同意なくマーケティングリストに追加したりしません。",
      },
      {
        h: "保持期間とお客様の権利",
        p: "問い合わせデータは会話と正当な業務記録に必要な期間保持します。hello@denwebs.com からいつでもデータへのアクセス・訂正・削除をリクエストできます。",
      },
      {
        h: "お問い合わせ",
        p: "プライバシーに関する質問：hello@denwebs.com。このプレースホルダーポリシーはローンチ前に適用法（GDPR、CCPA等）との整合を確認する必要があります。",
      },
    ],
  },

  terms: {
    metaTitle: "利用規約",
    metaDesc: "Denwebsウェブサイトの利用に関する規約。",
    legal: "法務",
    title: "利用規約",
    placeholder: "プレースホルダー――ローンチ前に弁護士レビュー済みの規約に差し替えてください。",
    sections: [
      {
        h: "このウェブサイトについて",
        p: "このサイトのコンテンツは一般的な情報提供のためのものです。サンプルと記された事例は、検証済みクライアント実績に差し替わるまで参考例です。ここにあるいかなる内容も法的な申し出や専門的助言ではありません。",
      },
      {
        h: "案件について",
        p: "クライアント業務は個別の作業明細書と基本サービス契約によって規定され、このウェブサイトの内容によっては規定されません。サンプルコンテンツ中の数値や期間は参考例です。",
      },
      {
        h: "知的財産",
        p: "サイトのコンテンツ、コピー、デザインは、特記がない限りDenwebsの所有物です。「Shopify」およびパートナーの商標はそれぞれの所有者に帰属します。",
      },
      {
        h: "お問い合わせ",
        p: "本規約に関する質問：hello@denwebs.com。",
      },
    ],
  },

  notFound: {
    code: "404",
    title: "このページは在庫切れです。",
    copy: "URLが見つかりません――移動したか、存在しなかった可能性があります。存在するものへの道順はこちら。",
    home: "ホーム",
    services: "サービス",
    contact: "お問い合わせ",
  },
};
