import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";

const tools = [
  {
    href: "/tools/roi-calculator",
    emoji: "💰",
    iconBg: "#ede9fe",
    label: "ROI Calculator",
    title: "AIエージェント導入ROI計算機",
    description:
      "自動化対象業務の時間・人件費・ツール費用を入力すると、月間コスト削減額・投資回収期間・年間ROI・3年累積効果を即座に算出します。",
    tags: ["投資回収期間", "年間ROI", "3年累積"],
  },
  {
    href: "/tools/cost-comparison",
    emoji: "⚖️",
    iconBg: "#fce7f3",
    label: "Cost Comparison",
    title: "AIツール月額費用比較ツール",
    description:
      "利用人数・月間利用回数・必要機能を選ぶと、ChatGPT・Claude・Gemini・Copilotの月額費用を比較表で表示。コスパランキング付き。",
    tags: ["ChatGPT", "Claude", "Gemini", "Copilot"],
  },
  {
    href: "/tools/time-saving-simulator",
    emoji: "⏱️",
    iconBg: "#d1fae5",
    label: "Time Saving Simulator",
    title: "業務自動化 時間節約シミュレーター",
    description:
      "メール・資料作成・データ入力など業務カテゴリ別の週間時間を入力。AI導入後の削減時間・年間節約時間・人件費換算を可視化します。",
    tags: ["業務カテゴリ別", "年間節約", "人件費換算"],
  },
  {
    href: "/tools/prompt-cost-calculator",
    emoji: "🔢",
    iconBg: "#fef3c7",
    label: "Prompt Cost Calculator",
    title: "プロンプトコスト計算機",
    description:
      "モデル・入力/出力トークン数・月間利用回数を入力すると月間API費用を算出。GPT-4/Claude/Geminiの費用比較とコスト最適化提案も。",
    tags: ["API費用", "モデル比較", "トークン計算"],
  },
];

const articles = [
  {
    href: "/articles/what-is-agentic-ai",
    emoji: "🤖",
    tag: "入門",
    title: "エージェンティックAIとは？2026年に知っておくべき新概念を解説",
    summary: "自律的に行動・判断するAIエージェントの仕組みと、2026年のビジネス活用最前線を解説。",
  },
  {
    href: "/articles/ai-tool-comparison-2026",
    emoji: "📊",
    tag: "比較",
    title: "ChatGPT vs Claude vs Gemini｜AIツール料金・性能比較【2026年最新】",
    summary: "主要AIツールの最新料金プランと性能を徹底比較。用途別おすすめ選定ガイド付き。",
  },
  {
    href: "/articles/ai-agent-automation-use-cases",
    emoji: "⚡",
    tag: "実践",
    title: "AIエージェントで業務を自動化する方法｜具体的な5つのユースケース",
    summary: "実際の企業事例をもとに、AIエージェントによる業務自動化の具体的な手順を解説。",
  },
  {
    href: "/articles/how-to-calculate-ai-roi",
    emoji: "💹",
    tag: "経営",
    title: "AI導入のROIを計算する方法｜経営者向けガイド",
    summary: "投資対効果の計算式から意思決定フレームワークまで、経営者向けに体系的に解説。",
  },
  {
    href: "/articles/prompt-engineering-guide",
    emoji: "✏️",
    tag: "技術",
    title: "プロンプトエンジニアリング入門｜AIを最大限活用するコツ",
    summary: "効果的なプロンプトの書き方から高度なテクニックまで、実例付きで徹底解説。",
  },
];

const trustItems = [
  { emoji: "🆓", label: "完全無料" },
  { emoji: "🔓", label: "登録不要" },
  { emoji: "🌐", label: "ブラウザだけ" },
  { emoji: "⚡", label: "即座に計算" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Agent Tools",
  url: "https://ai-agent-tools.kuras-plus.com",
  description: "AIエージェント導入のROI計算、ツール費用比較、業務自動化シミュレーション。エージェンティックAIで業務効率化を数値で可視化する無料ツール集。",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  featureList: [
    "AIエージェント導入ROI計算機",
    "AIツール月額費用比較ツール（ChatGPT/Claude/Gemini/Copilot）",
    "業務自動化 時間節約シミュレーター",
    "プロンプトコスト計算機",
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section
          className="px-6 py-16 sm:py-24 text-white relative overflow-hidden"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="max-w-5xl mx-auto relative">
            <div className="grid sm:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-5 opacity-50">
                  AI Agent Tools · kuras-plus
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                  AIエージェントの<br />
                  効果を数値で証明。
                </h1>
                <p className="text-base leading-relaxed opacity-75 mb-6 max-w-sm">
                  ROI計算・費用比較・業務自動化シミュレーション。<br className="hidden sm:block" />
                  エージェンティックAI導入の意思決定をデータで支援します。
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {trustItems.map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.80)" }}
                    >
                      <span>{t.emoji}</span>
                      {t.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/tools/roi-calculator"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    💰 ROI計算を始める
                  </Link>
                  <Link
                    href="/tools/cost-comparison"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-white/25 text-white/80 hover:text-white hover:border-white/50 transition-colors"
                  >
                    ⚖️ ツール費用を比較する
                  </Link>
                </div>
              </div>

              {/* Right: decorative mock result cards */}
              <div className="hidden sm:flex flex-col gap-3 select-none" aria-hidden="true">
                <div
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                  >
                    💰
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">月間コスト削減額</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">¥182,000</span>
                      <span className="text-xs text-white/50">/ 月</span>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                  >
                    📈
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">年間ROI</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">342%</span>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                  >
                    ⏱️
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">年間節約時間</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold">624h</span>
                      <span className="text-xs text-white/50">/ 年</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ツールから探す ──────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
              計算ツール
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              すべて無料・登録不要。ブラウザだけで使えます
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="relative rounded-2xl p-5 flex flex-col gap-3 border tool-card-hover"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="w-11 h-11 flex items-center justify-center text-2xl rounded-xl flex-shrink-0"
                    style={{ backgroundColor: tool.iconBg }}
                  >
                    {tool.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {tool.label}
                    </p>
                    <h3 className="text-base font-bold leading-tight" style={{ color: "var(--text)" }}>
                      {tool.title}
                    </h3>
                  </div>
                  <span
                    className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "var(--bg-soft)", color: "var(--primary)" }}
                  >
                    無料
                  </span>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "var(--bg-soft)", color: "var(--accent)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-1">
                  <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                    計算してみる →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SEO記事 ─────────────────────────────────────────────────────── */}
        <section
          className="border-t border-b py-12"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                  AIエージェント解説記事
                </h2>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  エージェンティックAIの基礎から実践まで
                </p>
              </div>
              <Link
                href="/articles"
                className="text-xs font-medium flex-shrink-0 ml-4 hidden sm:block transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                すべて見る →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="relative rounded-xl p-4 flex flex-col gap-2 border transition-all hover:shadow-md"
                  style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{article.emoji}</span>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "var(--bg-soft)", color: "var(--accent)" }}
                    >
                      {article.tag}
                    </span>
                  </div>
                  <p className="text-sm font-bold leading-snug" style={{ color: "var(--text)" }}>
                    {article.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {article.summary}
                  </p>
                  <span className="text-xs font-semibold mt-auto" style={{ color: "var(--primary)" }}>
                    記事を読む →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── よくある質問 ───────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <FAQ
            items={[
              {
                q: "このツールは無料で使えますか？",
                a: "はい、すべての計算ツールを完全無料でご利用いただけます。ユーザー登録も不要で、ブラウザがあればすぐに使えます。",
              },
              {
                q: "エージェンティックAIとは何ですか？",
                a: "エージェンティックAIとは、人間が指示を出すたびに応答する従来のAIとは異なり、目標を与えると自律的に計画・行動・判断を繰り返して業務を完遂するAIシステムです。2026年現在、企業の業務自動化で急速に普及しています。",
              },
              {
                q: "ROI計算の結果はどのくらい信頼できますか？",
                a: "計算結果は入力値をもとにした推計値です。実際の効果は導入するツール・業務内容・チームのスキルによって異なります。意思決定の参考資料としてご活用ください。",
              },
              {
                q: "AIツールの費用データはいつ更新されますか？",
                a: "AIツールの料金は頻繁に変更されます。本サイトのデータは2026年3月時点のものです。最新情報は各サービスの公式サイトでご確認ください。",
              },
              {
                q: "Amazonアソシエイトリンクについて",
                a: "本サイトの一部リンクはAmazonアソシエイトリンクです。リンク経由でご購入いただくと、サイト運営費の一部に充てられます。リンクの有無は掲載内容の選定に影響しません。",
              },
            ]}
            title="よくある質問"
            description="AI Agent Toolsへのご質問にお答えします"
          />
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer
        className="border-t pt-10 pb-6"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-base"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  🤖
                </span>
                <span className="font-bold text-sm" style={{ color: "var(--text)" }}>
                  AI Agent Tools
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                AIエージェント導入の意思決定を数値で支援する無料ツール集。完全無料・登録不要。
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                計算ツール
              </p>
              <div className="space-y-1.5">
                {tools.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="block text-xs transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.emoji} {t.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                記事
              </p>
              <div className="space-y-1.5">
                {articles.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block text-xs transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {a.emoji} {a.title.slice(0, 28)}…
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 text-center text-xs space-y-1.5"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            <p>© {new Date().getFullYear()} kuras-plus · AI Agent Tools</p>
            <p>
              本サイトはAmazonアソシエイト・プログラムの参加者です。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
