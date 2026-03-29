import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "エージェンティックAIとは？2026年に知っておくべき新概念を解説 | AI Agent Tools",
  description: "自律的に行動・判断するエージェンティックAIの仕組みと2026年のビジネス活用を解説。従来のAIチャットとの違い、主要プラットフォーム比較、導入事例も紹介。",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エージェンティックAIとは？2026年に知っておくべき新概念を解説",
  description: "自律的に行動・判断するエージェンティックAIの仕組みと2026年のビジネス活用を解説。",
  author: { "@type": "Organization", name: "AI Agent Tools" },
  publisher: { "@type": "Organization", name: "kuras-plus" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-29",
};

export default function WhatIsAgenticAIPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        {/* パンくず */}
        <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:opacity-70">ホーム</Link>
          <span>›</span>
          <Link href="/articles" className="hover:opacity-70">記事</Link>
          <span>›</span>
          <span>エージェンティックAIとは</span>
        </nav>

        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
              入門
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約8分</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            エージェンティックAIとは？<br className="sm:hidden" />2026年に知っておくべき新概念を解説
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            2026年のAI業界で最もホットなキーワード「エージェンティックAI」。従来のAIチャットとは何が違うのか、ビジネスでどう活用できるのかを、具体例を交えてわかりやすく解説します。
          </p>
        </div>

        {/* 目次 */}
        <div className="rounded-xl border p-5 mb-8" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--border)" }}>
          <p className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>目次</p>
          <ol className="space-y-1 text-sm" style={{ color: "var(--accent)" }}>
            <li>1. エージェンティックAIの定義と従来AIとの違い</li>
            <li>2. エージェンティックAIの4つのコア能力</li>
            <li>3. 2026年主要プラットフォーム比較</li>
            <li>4. ビジネス活用の具体的なユースケース</li>
            <li>5. 導入時の注意点とリスク</li>
          </ol>
        </div>

        {/* 本文 */}
        <article className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              1. エージェンティックAIの定義と従来AIとの違い
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text)" }}>エージェンティックAI（Agentic AI）</strong>とは、人間が指示を出すたびに応答する「反応型AI」とは異なり、<strong style={{ color: "var(--text)" }}>目標を与えると自律的に計画・行動・判断を繰り返して業務を完遂するAIシステム</strong>です。
            </p>

            <div className="rounded-xl overflow-hidden border mb-4" style={{ borderColor: "var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "var(--primary)", color: "white" }}>
                    <th className="px-4 py-2 text-left font-semibold">項目</th>
                    <th className="px-4 py-2 text-left font-semibold">従来のAIチャット</th>
                    <th className="px-4 py-2 text-left font-semibold">エージェンティックAI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["動作モード", "人が指示→AIが応答", "目標を設定→AIが自律実行"],
                    ["計画立案", "なし（1回で完結）", "複数ステップを自動計画"],
                    ["ツール利用", "テキスト回答のみ", "Web検索・コード実行・API呼び出し"],
                    ["記憶・継続性", "会話内のみ", "長期記憶・プロジェクト管理"],
                    ["エラー対応", "ユーザーが再指示", "自律的に修正・再試行"],
                  ].map(([item, traditional, agentic], i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "var(--text)" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "var(--text-muted)" }}>{traditional}</td>
                      <td className="px-4 py-2" style={{ color: "var(--text)" }}><strong>{agentic}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              2. エージェンティックAIの4つのコア能力
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { emoji: "🧠", title: "自律的な計画立案", desc: "「市場調査レポートを作成して」という指示に対し、検索→データ収集→分析→執筆のステップを自動設計。" },
                { emoji: "🔧", title: "ツール利用（Tool Use）", desc: "Web検索・コード実行・メール送信・データベースアクセスなど外部ツールを自律的に使いこなす。" },
                { emoji: "💾", title: "長期記憶と文脈管理", desc: "過去のプロジェクト情報・ユーザー設定・業務ルールを記憶し、一貫したサポートを継続提供。" },
                { emoji: "🔄", title: "自己修正と反復改善", desc: "生成したコードのエラーを検知して自動修正、品質チェックを自律的に繰り返す。" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.title}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              3. 2026年主要プラットフォーム比較
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: "OpenAI Operator / Agents SDK",
                  emoji: "🟢",
                  strength: "汎用性・エコシステムの広さ",
                  useCase: "企業向け自動化・Webブラウジング・コーディング",
                  pricing: "従量課金（GPT-4oベース）",
                },
                {
                  name: "Anthropic Claude Agent SDK",
                  emoji: "🟠",
                  strength: "安全性・長文処理・倫理的AI設計",
                  useCase: "文書処理・カスタマーサポート・コード生成",
                  pricing: "従量課金（claude-sonnet-4-6/Opusベース）",
                },
                {
                  name: "Google Gemini + Vertex AI",
                  emoji: "🔵",
                  strength: "Google Workspace統合・マルチモーダル",
                  useCase: "データ分析・スプレッドシート自動化・検索連携",
                  pricing: "従量課金 + GCP統合",
                },
                {
                  name: "Microsoft AutoGen / Copilot Studio",
                  emoji: "🟣",
                  strength: "Microsoft 365との深い統合",
                  useCase: "会議自動化・Word/Excel操作・Teams連携",
                  pricing: "M365 Copilot（月額4,500円〜）",
                },
              ].map((platform) => (
                <div key={platform.name} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span>{platform.emoji}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{platform.name}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="font-semibold mb-0.5" style={{ color: "var(--accent)" }}>強み</p>
                      <p style={{ color: "var(--text-muted)" }}>{platform.strength}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5" style={{ color: "var(--accent)" }}>主な用途</p>
                      <p style={{ color: "var(--text-muted)" }}>{platform.useCase}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5" style={{ color: "var(--accent)" }}>料金</p>
                      <p style={{ color: "var(--text-muted)" }}>{platform.pricing}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              4. ビジネス活用の具体的なユースケース
            </h2>
            <div className="space-y-3">
              {[
                {
                  emoji: "📧",
                  title: "メール・コミュニケーション自動化",
                  detail: "受信メールを分類→優先度付け→定型回答の下書き→承認待ちキューへの振り分けまでを自動処理。1人のエグゼクティブが日に100通のメールを処理するケースで、対応時間を80%削減した事例あり。",
                },
                {
                  emoji: "📊",
                  title: "データ収集・レポート自動生成",
                  detail: "競合他社サイトの価格情報を定期収集→Excelに整形→変動レポートをSlackに自動投稿。従来は週2〜3時間かかっていた作業を完全自動化。",
                },
                {
                  emoji: "💻",
                  title: "コーディング・テスト自動化",
                  detail: "要件定義書からコード生成→ユニットテスト作成→CI失敗時の自動デバッグ→PRの作成まで一気通貫。開発速度を平均40%向上させた企業事例が増加。",
                },
              ].map((case_) => (
                <div key={case_.title} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{case_.emoji}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{case_.title}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{case_.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              5. 導入時の注意点とリスク
            </h2>
            <div className="rounded-xl p-5 border" style={{ backgroundColor: "#fef9c3", borderColor: "#fde68a" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "#92400e" }}>⚠️ 導入前に確認すべきリスク</p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <li>• <strong>ハルシネーション</strong>: 誤情報を正確な情報として生成するリスク。重要な意思決定前の人間によるレビューが必須。</li>
                <li>• <strong>無制限のコスト発生</strong>: エージェントが自律的に大量APIを呼び出すと予想外のコストが発生。利用上限の設定を忘れずに。</li>
                <li>• <strong>データプライバシー</strong>: 社内機密情報をAIに送信する前に利用規約・データ保管ポリシーを確認。</li>
                <li>• <strong>セキュリティ</strong>: ツール呼び出し機能を持つエージェントはプロンプトインジェクション攻撃のリスクあり。サンドボックス環境での動作が推奨。</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
          >
            <p className="text-white font-bold text-lg mb-2">AIエージェント導入のROIを計算してみる</p>
            <p className="text-white/80 text-sm mb-4">自動化対象業務の時間・人件費を入力するだけで、月間削減額・投資回収期間を即座に算出。</p>
            <Link
              href="/tools/roi-calculator"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              💰 ROI計算機を使う
            </Link>
          </div>
        </article>

        {/* 関連書籍 */}
        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📚 関連書籍
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { title: "エージェントAI 完全解説", keyword: "AIエージェント 自律AI 仕組み 書籍" },
              { title: "LLMエージェント開発実践", keyword: "LLM エージェント 開発 実践 Python" },
              { title: "ビジネスAI活用大全2026", keyword: "ビジネス AI活用 2026 実践" },
            ].map((book) => (
              <a
                key={book.title}
                href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(book.keyword)}&tag=kurasplus-22`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border p-4 flex flex-col gap-2 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xs font-bold px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: "#fff7ed", color: "#c2410c" }}>Amazon</span>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{book.title}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "var(--accent)" }}>Amazonで探す →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <FAQ
            title="エージェンティックAIについてよくある質問"
            items={[
              {
                q: "エージェンティックAIとRPA（ロボティックプロセスオートメーション）の違いは？",
                a: "RPAは事前に定義されたルールに従って決まった操作を繰り返す「硬直的な自動化」です。一方、エージェンティックAIは状況を理解して判断し、予期しない事態にも対応できる「柔軟な自動化」が可能です。例外処理が多い業務やナレッジワークの自動化はAIエージェントが得意です。",
              },
              {
                q: "エージェンティックAIはどんな企業規模に向いていますか？",
                a: "規模を問わず活用できます。中小企業でもClaude ProやChatGPT Plusのレベルで実用的なエージェント機能が使えます。大企業では専用インフラ（Vertex AI、Azure OpenAIなど）を使ったカスタム実装が一般的です。",
              },
              {
                q: "2026年時点でのエージェンティックAIの限界は何ですか？",
                a: "主な限界は①長時間・複雑タスクでの信頼性（エラーが累積しやすい）②高度な創造的判断の困難③リアルタイムの物理世界との連携④コスト（大量処理で高額になる場合）の4点です。これらは現在も急速に改善されています。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
