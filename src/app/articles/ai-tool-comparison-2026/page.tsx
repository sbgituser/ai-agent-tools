import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude vs Gemini｜AIツール料金・性能比較【2026年最新】 | AI Agent Tools",
  description: "ChatGPT・Claude・Gemini・Copilotの2026年最新料金と性能を徹底比較。テキスト生成・コード・データ分析・画像生成の用途別おすすめを解説。",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ChatGPT vs Claude vs Gemini｜AIツール料金・性能比較【2026年最新】",
  description: "主要AIツールの最新料金プランと性能を徹底比較。用途別おすすめ選定ガイド付き。",
  author: { "@type": "Organization", name: "AI Agent Tools" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-29",
};

export default function AIToolComparisonPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:opacity-70">ホーム</Link>
          <span>›</span>
          <Link href="/articles" className="hover:opacity-70">記事</Link>
          <span>›</span>
          <span>AIツール比較2026</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fce7f3", color: "#9d174d" }}>比較</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約10分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            ChatGPT vs Claude vs Gemini<br className="sm:hidden" />｜AIツール料金・性能比較【2026年最新】
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            2026年現在、ChatGPT・Claude・Gemini・Microsoft Copilotの4強が激しく競争しています。料金・性能・用途別の選び方を徹底解説します。
          </p>
        </div>

        <article className="space-y-8">
          {/* 料金比較表 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>料金比較表（2026年3月時点）</h2>
            <div className="rounded-xl overflow-hidden border mb-4" style={{ borderColor: "var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "var(--primary)", color: "white" }}>
                    <th className="px-3 py-2 text-left font-semibold">サービス</th>
                    <th className="px-3 py-2 text-left font-semibold">無料</th>
                    <th className="px-3 py-2 text-left font-semibold">個人有料</th>
                    <th className="px-3 py-2 text-left font-semibold">チーム</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["🟢 ChatGPT", "あり（GPT-4o制限）", "Plus ¥3,000/月", "Team ¥3,750/月/人"],
                    ["🟠 Claude", "あり（Haiku制限）", "Pro ¥3,000/月", "Team ¥4,500/月/人"],
                    ["🔵 Gemini", "あり（Flash）", "Advanced ¥2,900/月", "Business ¥2,900/月/人"],
                    ["🟣 Copilot", "あり（GPT-4）", "Pro ¥3,000/月", "M365 ¥4,500/月/人"],
                  ].map(([service, free, personal, team], i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
                      <td className="px-3 py-2 font-medium" style={{ color: "var(--text)" }}>{service}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{free}</td>
                      <td className="px-3 py-2 text-xs font-semibold" style={{ color: "var(--text)" }}>{personal}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              ※ 料金は月払い。年払いで10〜20%割引あり。詳しくは
              <Link href="/tools/cost-comparison" className="underline ml-1" style={{ color: "var(--accent)" }}>
                費用比較ツール
              </Link>
              で人数・用途別に計算できます。
            </p>
          </section>

          {/* 性能比較 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>用途別おすすめランキング</h2>
            <div className="space-y-4">
              {[
                {
                  use: "テキスト生成・文章作成",
                  emoji: "✏️",
                  ranking: ["Claude（自然な日本語・長文）", "ChatGPT（汎用性）", "Gemini（Workspace連携）"],
                  notes: "Claudeは特に長文の一貫性と日本語の自然さで高評価。創作・ビジネス文書に強い。",
                },
                {
                  use: "コード生成・デバッグ",
                  emoji: "💻",
                  ranking: ["ChatGPT o3-mini（推論力）", "Claude（説明の丁寧さ）", "Gemini（Google連携）"],
                  notes: "複雑なアルゴリズムはo3-mini、コードレビューとリファクタリングはClaudeが優秀。",
                },
                {
                  use: "データ分析・数値処理",
                  emoji: "📊",
                  ranking: ["ChatGPT（Code Interpreter）", "Gemini（Sheets連携）", "Claude（説明力）"],
                  notes: "ChatGPTのCode Interpreterはファイルアップロード→自動分析が圧倒的に強い。",
                },
                {
                  use: "画像生成",
                  emoji: "🖼️",
                  ranking: ["ChatGPT（DALL-E 3）", "Copilot（Designer）", "Gemini（Imagen）"],
                  notes: "ClaudeはAPI経由の画像理解は得意だが、現在は画像生成機能を持たない（2026年3月時点）。",
                },
                {
                  use: "Microsoft Office連携",
                  emoji: "📁",
                  ranking: ["Microsoft Copilot（M365）", "ChatGPT（一部連携）", "Gemini（Drive連携）"],
                  notes: "M365 CopilotはWord・Excel・Teams・Outlookと深く統合。Office利用が多いなら断然おすすめ。",
                },
              ].map((item) => (
                <div key={item.use} className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.use}</h3>
                  </div>
                  <ol className="space-y-1 mb-3">
                    {item.ranking.map((r, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: i === 0 ? "var(--primary)" : "var(--border)", color: i === 0 ? "white" : "var(--text-muted)" }}
                        >
                          {i + 1}
                        </span>
                        <span style={{ color: i === 0 ? "var(--text)" : "var(--text-muted)", fontWeight: i === 0 ? "600" : "normal" }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 選定フローチャート */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>あなたに最適なAIツールは？</h2>
            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}
            >
              <div className="space-y-3 text-sm" style={{ color: "var(--text)" }}>
                {[
                  { q: "Microsoft 365を主に使っている", a: "→ Microsoft Copilot（M365プラン）" },
                  { q: "Googleのサービスを多用している", a: "→ Gemini（Advanced/Businessプラン）" },
                  { q: "コード開発が主な用途", a: "→ ChatGPT Plus（o3-mini）またはClaude Pro" },
                  { q: "長文ライティング・文書処理がメイン", a: "→ Claude Pro" },
                  { q: "API経由でシステムに組み込む", a: "→ Anthropic API（Claude）またはOpenAI API" },
                  { q: "コストを最小化したい", a: "→ Gemini Advanced（最安有料プラン）" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">
                      {["💼", "🌐", "💻", "✏️", "🔌", "💰"][i]}
                    </span>
                    <div>
                      <p style={{ color: "var(--text)" }}>{item.q}</p>
                      <p className="font-bold" style={{ color: "var(--primary)" }}>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
          >
            <p className="text-white font-bold text-lg mb-2">実際の費用をシミュレーションする</p>
            <p className="text-white/80 text-sm mb-4">利用人数と必要機能を選ぶだけで、各ツールの月額費用を比較できます。</p>
            <Link
              href="/tools/cost-comparison"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              ⚖️ 費用比較ツールを使う
            </Link>
          </div>
        </article>

        <section className="mt-10">
          <FAQ
            title="AIツール比較についてよくある質問"
            items={[
              {
                q: "ChatGPTとClaudeどちらを選べばいいですか？",
                a: "用途によります。コード生成・画像生成・データ分析にはChatGPT Plus、日本語の長文ライティング・文書要約・安全性重視の用途にはClaude Proがおすすめです。両方のFreeプランを試してみて、自分のワークフローに合う方を選ぶのが最善です。",
              },
              {
                q: "無料プランで業務に使えますか？",
                a: "軽い使い方ならGemini Free（Flash）やChatGPT Free（GPT-4o制限）で十分です。ただし有料プランと比べて利用上限・速度・機能に制限があります。重要な業務利用では有料プランを推奨します。",
              },
              {
                q: "AIツールの選定で失敗しない方法は？",
                a: "①まず無料プランで試す②1〜2ヶ月の試用期間を設ける③チームメンバーの実際の用途を事前にリストアップする④年払い前に月払いで検証する、の4ステップが有効です。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
