import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "業務自動化AIエージェント導入完全ガイド2026｜ステップ・ROI・事例 | AI Agent Tools",
  description:
    "AIエージェントとは何か、チャットボットとの違い、導入ステップ（課題整理→PoC→本番）、ROI試算、成功事例・失敗パターンまで業務自動化AI導入の完全ガイド。",
  openGraph: {
    title: "業務自動化AIエージェント導入完全ガイド2026｜ステップ・ROI・事例",
    description: "AIエージェント導入の全体像を解説。課題整理からPoC・本番導入まで、成功率を高めるロードマップ。",
    images: [{ url: "/ogp/articles/ai-agent-introduction-guide.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/articles/ai-agent-introduction-guide.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "業務自動化AIエージェント導入完全ガイド2026｜ステップ・ROI・事例",
  description: "AIエージェント導入の全体像を解説。課題整理からPoC・本番導入まで、成功率を高めるロードマップ。",
  author: { "@type": "Organization", name: "AI Agent Tools" },
  publisher: { "@type": "Organization", name: "kuras-plus" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
};

export default function AIAgentIntroductionGuidePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "記事", href: "/articles" },
            { label: "AIエージェント導入ガイド" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>経営</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約16分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            業務自動化AIエージェント<br className="sm:hidden" />導入完全ガイド2026
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            「AIエージェントを導入したいが、何から始めればいいかわからない」という経営者・IT責任者向けに、AIエージェントの基礎知識から導入ロードマップ、ROI試算、成功事例・失敗パターンまでを体系的に解説します。
          </p>
        </div>

        <article className="space-y-10">

          {/* 目次 */}
          <section className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>📋 目次</h2>
            <ol className="space-y-1 text-sm" style={{ color: "var(--primary)" }}>
              {[
                "AIエージェントとは？従来チャットボットとの違い",
                "なぜ今2026年に導入が加速しているのか",
                "業務自動化AIエージェントの主なユースケース",
                "導入ステップ：課題整理→PoC→本番導入",
                "ROI試算の方法と計算例",
                "成功事例3選",
                "失敗パターンと対策",
                "よくある質問（FAQ）",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: "var(--text-muted)" }}>{i + 1}.</span>
                  <span className="underline">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* セクション1: AIエージェントとは */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>1. AIエージェントとは？従来チャットボットとの違い</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              AIエージェントとは、目標を与えられると自律的に計画を立て、必要なツールやシステムを使いながら複数ステップのタスクを実行するAIシステムです。単純な質問応答にとどまる「チャットボット」とは根本的に異なります。
            </p>

            <div className="rounded-xl overflow-hidden border mb-6" style={{ borderColor: "var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "var(--primary)", color: "white" }}>
                    <th className="px-3 py-2 text-left font-semibold">項目</th>
                    <th className="px-3 py-2 text-left font-semibold">従来チャットボット</th>
                    <th className="px-3 py-2 text-left font-semibold">AIエージェント</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["動作方式", "質問→回答（1往復）", "目標→計画→実行→確認（多ステップ）"],
                    ["自律性", "低（定型シナリオ）", "高（状況に応じて自律判断）"],
                    ["ツール利用", "なし", "検索・API・DB・外部システムを自動利用"],
                    ["適用業務", "FAQ・問い合わせ対応", "複合業務・プロセス全体の自動化"],
                    ["設定難易度", "低（シナリオ定義）", "中〜高（ゴール設計・ツール連携）"],
                  ].map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
                      <td className="px-3 py-2 text-xs font-semibold" style={{ color: "var(--text)" }}>{row[0]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[1]}</td>
                      <td className="px-3 py-2 text-xs font-medium" style={{ color: "var(--text)" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>🔑 具体的なイメージ：旅費精算業務の場合</p>
              <div className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <p><strong>チャットボット：</strong>「旅費精算の方法は？」→「申請フォームはこちらです（リンク）」で終了。</p>
                <p><strong>AIエージェント：</strong>「今月の出張分を精算して」→①出張スケジュール確認②領収書画像から金額抽出③規定に照らして確認④申請フォームに入力⑤上長メール通知まで自動実行。</p>
              </div>
            </div>
          </section>

          {/* セクション2: なぜ今か */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>2. なぜ今2026年に導入が加速しているのか</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              2026年はAIエージェント元年と呼ばれています。技術・コスト・ツールの3つが同時に成熟したことで、大企業だけでなく中小企業でも実用的な導入が現実的になりました。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🧠",
                  title: "LLM性能の飛躍",
                  desc: "GPT-4o・Claude 3.5・Gemini 2.0など、複雑な推論・マルチステップタスクに対応できるモデルが低価格で利用可能になりました。",
                },
                {
                  icon: "💸",
                  title: "コストの急低下",
                  desc: "AIモデルのAPI費用は2023年比で90%以上低下。月1,000円未満の予算でも業務用AIエージェントを運用できる水準に。",
                },
                {
                  icon: "🛠️",
                  title: "ノーコードツールの成熟",
                  desc: "Dify・MANA StudioなどIT部門なしでも使えるプラットフォームが登場し、現場主導でのAI活用が加速しています。",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-4 border text-center" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* セクション3: ユースケース */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>3. 業務自動化AIエージェントの主なユースケース</h2>
            <div className="space-y-4">
              {[
                {
                  emoji: "📧",
                  title: "メール・コミュニケーション自動化",
                  saving: "月20〜30時間削減",
                  examples: [
                    "問い合わせメールの自動分類・優先度付け・下書き生成",
                    "社内通知・週次レポートの自動作成・送信",
                    "議事録の自動作成とToDoリスト抽出",
                  ],
                },
                {
                  emoji: "📊",
                  title: "データ収集・分析・レポート",
                  saving: "月15〜25時間削減",
                  examples: [
                    "競合他社情報の定期収集・サマリ作成",
                    "売上データ取り込み→グラフ作成→経営会議用資料生成",
                    "Googleアナリティクス・広告データの週次レポート自動化",
                  ],
                },
                {
                  emoji: "🎯",
                  title: "営業・マーケティング支援",
                  saving: "月10〜20時間削減",
                  examples: [
                    "リード情報の収集・スコアリング・CRM入力",
                    "商談後フォローアップメール・提案書の自動生成",
                    "SNS投稿・メルマガコンテンツの下書き作成",
                  ],
                },
                {
                  emoji: "🛎️",
                  title: "カスタマーサポート自動化",
                  saving: "一次対応の60〜80%自動化",
                  examples: [
                    "社内ナレッジを参照した一次回答の自動生成",
                    "問い合わせ分類→担当部門への自動エスカレーション",
                    "FAQ自動更新（よく来る質問を学習・追加）",
                  ],
                },
                {
                  emoji: "📋",
                  title: "バックオフィス・管理業務",
                  saving: "月10〜15時間削減",
                  examples: [
                    "勤怠・経費データの確認・承認フロー自動化",
                    "請求書・発注書のデータ抽出・照合",
                    "採用候補者の書類スクリーニング・サマリ作成",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.emoji}</span>
                      <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.title}</h3>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#15803d" }}>{item.saving}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.examples.map((ex, i) => (
                      <li key={i} className="text-xs flex gap-2" style={{ color: "var(--text-muted)" }}>
                        <span>▸</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* セクション4: 導入ステップ */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>4. 導入ステップ：課題整理→PoC→本番導入</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              AIエージェント導入を成功させるには、段階的なアプローチが重要です。いきなり全社展開せず、スモールスタートで成功体験を作ることが成功の鍵です。
            </p>
            <div className="space-y-4">
              {[
                {
                  phase: "Phase 1",
                  title: "課題整理・ターゲット業務の選定",
                  duration: "2〜4週間",
                  color: "#1d4ed8",
                  tasks: [
                    "各部門の繰り返し業務をリストアップ（月間工数×担当者数で優先順位付け）",
                    "自動化に向く業務の3条件を確認：①手順が明確②繰り返し頻度が高い③デジタルデータとして扱える",
                    "最初のターゲット業務を1〜2件に絞る（スコープを狭くするほど成功確率が上がる）",
                    "KPI・成功基準の設定（例：処理時間を70%削減、エラー率を50%低下など）",
                  ],
                  tip: "💡 最初は「1部門・1業務・1ヶ月」の小さなPoCを目指してください。",
                },
                {
                  phase: "Phase 2",
                  title: "PoC（概念実証）の実施",
                  duration: "4〜8週間",
                  color: "#7c3aed",
                  tasks: [
                    "ツール選定（Difyなど無料/低コストで始められるツールを推奨）",
                    "プロトタイプ構築：最小限の機能で動くものを2週間以内に作る",
                    "実際の業務データでテスト・精度検証",
                    "パイロットユーザー（5〜10人）による試用と改善フィードバック収集",
                    "KPIに対する達成度の測定・GO/NO-GOの判断",
                  ],
                  tip: "💡 PoCでの失敗は「貴重な学習」です。うまくいかなくても別の業務・ツールで再挑戦できます。",
                },
                {
                  phase: "Phase 3",
                  title: "本番導入・展開",
                  duration: "2〜4ヶ月",
                  color: "#065f46",
                  tasks: [
                    "セキュリティ・コンプライアンスレビュー（情報漏洩リスク、個人情報取扱い）",
                    "既存システム（CRM・ERP・社内ポータル）との統合",
                    "ユーザートレーニング・マニュアル整備",
                    "段階的ロールアウト（部門→全社）",
                    "モニタリング体制の構築（精度・コスト・利用率の定期レビュー）",
                  ],
                  tip: "💡 本番導入後も継続的な改善が重要です。月次でKPIをレビューし、プロンプトやワークフローを最適化してください。",
                },
              ].map((phase) => (
                <div key={phase.phase} className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundColor: phase.color, color: "white" }}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/20">{phase.phase}</span>
                      <p className="font-bold text-sm">{phase.title}</p>
                    </div>
                    <span className="text-xs opacity-80">目安：{phase.duration}</span>
                  </div>
                  <div className="p-5" style={{ backgroundColor: "var(--bg-card)" }}>
                    <ul className="space-y-2 mb-3">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text-muted)" }}>
                          <span className="w-4 h-4 rounded flex items-center justify-center text-xs flex-shrink-0 text-white" style={{ backgroundColor: phase.color }}>{i + 1}</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs rounded-lg px-3 py-2" style={{ backgroundColor: "var(--bg-soft)", color: "var(--text-muted)" }}>{phase.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* セクション5: ROI試算 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>5. ROI試算の方法と計算例</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              AIエージェント導入のROI（投資対効果）は、削減される人件費コストからシステム費用を引いた「純削減額」で評価します。以下の計算式を使います。
            </p>

            <div className="rounded-xl p-5 border mb-6" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}>
              <p className="text-sm font-bold mb-3 text-center" style={{ color: "var(--text)" }}>📐 ROI計算式</p>
              <div className="text-center font-mono text-sm mb-3" style={{ color: "var(--text)" }}>
                <p>月間純削減額 = 削減工数（時間）× 時給単価 − AI月額費用</p>
                <br />
                <p>投資回収期間（ヶ月）= 初期投資額 ÷ 月間純削減額</p>
              </div>
            </div>

            <div className="rounded-xl border overflow-hidden mb-4" style={{ borderColor: "var(--border)" }}>
              <div className="px-5 py-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>📊 計算例：5人チームの問い合わせ対応自動化</p>
              </div>
              <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                {[
                  { label: "現状：問い合わせ対応時間", value: "5人 × 月30時間 = 月150時間" },
                  { label: "自動化後：削減率60%", value: "月90時間削減" },
                  { label: "人件費単価（時給換算）", value: "3,000円/時" },
                  { label: "月間削減人件費", value: "90時間 × 3,000円 = 27万円" },
                  { label: "AIエージェント月額費用", value: "約2〜5万円（Dify + LLM API）" },
                  { label: "月間純削減額", value: "22〜25万円" },
                  { label: "初期構築費用（内製の場合）", value: "30〜50万円" },
                  { label: "投資回収期間", value: "約2〜3ヶ月" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b pb-2" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                    <span>{item.label}</span>
                    <span className="font-bold" style={{ color: i >= 5 ? "var(--primary)" : "var(--text)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              より詳細なROI試算は
              <Link href="/tools/roi-calculator" className="underline mx-1" style={{ color: "var(--accent)" }}>
                ROI計算機
              </Link>
              をご利用ください。業種・規模・業務内容に合わせて自動計算できます。
            </p>
          </section>

          {/* セクション6: 成功事例 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>6. 成功事例3選</h2>
            <div className="space-y-4">
              {[
                {
                  industry: "製造業（従業員500人）",
                  emoji: "🏭",
                  challenge: "設備メンテナンスに関する問い合わせが月1,000件超。専門知識を持つベテラン社員が1日2〜3時間を回答対応に費やしていた。",
                  solution: "Difyで設備マニュアル・過去修理記録をRAG化。社内チャットと連携したAIエージェントが一次回答を自動生成。",
                  result: "一次回答の75%を自動化。ベテラン社員の対応時間を月60時間削減。若手社員の習熟速度も30%向上。",
                },
                {
                  industry: "IT企業（従業員80人）",
                  emoji: "💻",
                  challenge: "マーケティングチーム3名で月40本のSNS投稿・ブログ記事・メルマガを担当。コンテンツ作成に時間が取られ戦略立案が後回しに。",
                  solution: "MANA Studioでコンテンツ生成エージェントを構築。トレンド調査→構成案作成→下書き生成のワークフローを自動化。",
                  result: "コンテンツ作成時間を65%削減。チームの時間を戦略・分析に再配分し、3ヶ月でWebサイト流入150%増。",
                },
                {
                  industry: "不動産会社（従業員30人）",
                  emoji: "🏢",
                  challenge: "物件問い合わせへの初期対応に担当者が毎日2〜3時間。夜間・週末の問い合わせは翌営業日対応で機会損失が発生。",
                  solution: "物件データベース連携のAIエージェントを導入。24時間365日、条件に合う物件提案・内見予約まで自動対応。",
                  result: "夜間・週末の問い合わせ対応を100%自動化。内見設定率が23%向上。担当者は商談・成約業務に集中できるように。",
                },
              ].map((item) => (
                <div key={item.industry} className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="px-5 py-3 flex items-center gap-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.industry}</p>
                  </div>
                  <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                    <div>
                      <p className="text-xs font-bold mb-1" style={{ color: "var(--text-muted)" }}>【課題】</p>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-1" style={{ color: "var(--text-muted)" }}>【解決策】</p>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.solution}</p>
                    </div>
                    <div className="rounded-lg p-3" style={{ backgroundColor: "#dcfce7" }}>
                      <p className="text-xs font-bold mb-1" style={{ color: "#15803d" }}>【結果】</p>
                      <p className="text-sm font-medium" style={{ color: "#166534" }}>{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* セクション7: 失敗パターン */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>7. 失敗パターンと対策</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              AIエージェント導入の失敗事例を分析すると、共通するパターンが見えてきます。事前に把握しておくことで、同じ落とし穴を避けられます。
            </p>
            <div className="space-y-4">
              {[
                {
                  pattern: "スコープが広すぎる",
                  icon: "⚠️",
                  description: "「全社の業務をAIで自動化する」という壮大な目標を立てたが、要件が複雑すぎてPoCが完成しないまま予算を使い切った。",
                  solution: "最初のスコープは「1部門・1業務・1ゴール」に絞る。成功したら横展開する戦略を取る。",
                },
                {
                  pattern: "現場の協力を得られない",
                  icon: "👥",
                  description: "経営層主導でツール導入を決定したが、現場担当者に「AIに仕事を取られる」という不安が広がり、実際には使われなかった。",
                  solution: "PoCから現場担当者を巻き込む。「AIは補助ツール」「削減された時間を高付加価値業務に使う」という位置付けを明確に。",
                },
                {
                  pattern: "データ品質の問題",
                  icon: "📂",
                  description: "社内文書をRAGに登録したが、古い情報・矛盾する記載・フォーマットがバラバラで、AIの回答精度が低く実用に至らなかった。",
                  solution: "導入前にデータクレンジングと文書整備を先行実施。最新・正確・構造化されたドキュメントからスタートする。",
                },
                {
                  pattern: "過度な自動化",
                  icon: "🤖",
                  description: "人間のチェックなしで外部への回答を全自動化したが、AIが不正確な情報を回答するインシデントが発生し、顧客クレームにつながった。",
                  solution: "重要な判断は「ヒューマン・イン・ザ・ループ（人間が最終確認）」の設計を入れる。完全自動化は内部業務から始める。",
                },
                {
                  pattern: "継続的な改善をしない",
                  icon: "📉",
                  description: "本番導入後に放置した結果、業務フローの変更に対応できなくなり、半年後には使われなくなった。",
                  solution: "月次レビューを必須化。精度・コスト・利用率を定期的に計測し、プロンプトやワークフローを更新し続ける体制を作る。",
                },
              ].map((item) => (
                <div key={item.pattern} className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="px-5 py-3 flex items-center gap-2" style={{ backgroundColor: "#fef3c7" }}>
                    <span>{item.icon}</span>
                    <p className="text-sm font-bold" style={{ color: "#92400e" }}>失敗パターン：{item.pattern}</p>
                  </div>
                  <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                    <div className="flex gap-2">
                      <span className="text-green-500 flex-shrink-0">✅</span>
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>対策：{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
          >
            <p className="text-white font-bold text-lg mb-2">自社の導入ROIを今すぐ試算する</p>
            <p className="text-white/80 text-sm mb-4">業務内容・チーム規模・時給を入力するだけで、AIエージェント導入の費用対効果を自動計算します。</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "white", color: "var(--primary)" }}
              >
                💰 ROI計算機を使う
              </Link>
              <Link
                href="/tools/time-saving-simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                ⏱️ 時間削減シミュレーター
              </Link>
            </div>
          </div>
        </article>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>📄 関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "/articles/ai-agent-tools-comparison-2026",
                emoji: "📊",
                title: "AIエージェントツール比較2026年版10選",
                desc: "主要ツールを価格・カスタマイズ性・日本語対応で徹底比較",
              },
              {
                href: "/articles/dify-mana-studio-guide",
                emoji: "🛠️",
                title: "Dify・MANA Studioで業務用AIエージェントを作る方法",
                desc: "セットアップ手順から実践的な構築例まで解説",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-xl border p-4 flex flex-col gap-2 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xl">{article.emoji}</span>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{article.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{article.desc}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "var(--primary)" }}>記事を読む →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 関連ツール */}
        <section className="mt-8">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>🔧 関連計算ツール</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { href: "/tools/roi-calculator", emoji: "💰", title: "AIエージェント導入ROI計算機", desc: "月間削減額・投資回収期間を即計算" },
              { href: "/tools/time-saving-simulator", emoji: "⏱️", title: "業務時間削減シミュレーター", desc: "AI導入で削減できる月間時間を試算" },
              { href: "/tools/cost-comparison", emoji: "⚖️", title: "AIツール月額費用比較ツール", desc: "利用人数・機能で費用をリアルタイム比較" },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl border p-4 flex flex-col gap-2 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xl">{tool.emoji}</span>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{tool.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{tool.desc}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "var(--primary)" }}>無料で計算する →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <FAQ
            title="AIエージェント導入についてよくある質問"
            items={[
              {
                q: "AIエージェントとは何ですか？わかりやすく教えてください。",
                a: "AIエージェントとは、「目標を伝えると、計画を立てて自律的にタスクを実行してくれるAI」です。例えば「今月の売上レポートを作って」と指示すると、売上データを収集・集計・グラフ化・メールで送信まで一連の作業を自動でこなします。単なる質問に答えるだけのチャットボットとは異なり、複数ステップの業務を自律実行できる点が特徴です。",
              },
              {
                q: "AIエージェント導入に必要な予算はどれくらいですか？",
                a: "小規模なPoCなら月5〜20万円程度から始められます（ツール費用1〜5万円＋構築コスト）。本番導入では初期費用30〜200万円、月額費用5〜50万円が目安です。Difyのセルフホスト＋OSS活用で内製できればコストを大幅に抑えられます。当サイトのROI計算機で自社規模に合わせた費用対効果を試算してみてください。",
              },
              {
                q: "AIエージェントの導入期間はどれくらいかかりますか？",
                a: "PoCは2〜8週間、本番導入は2〜4ヶ月が目安です。ただし業務の複雑さ・既存システムとの連携要件・社内承認プロセスによって大きく変わります。最短で「1ヶ月以内に動くPoC」を目指すことを推奨します。スコープを絞れば短期間で成果を出せます。",
              },
              {
                q: "どの部署・業務から始めるべきですか？",
                a: "①繰り返し頻度が高い②手順が明確で属人化していない③デジタルデータとして処理できる、の3条件を満たす業務から始めるのが最も成功確率が高いです。具体的には「問い合わせメールへの一次回答」「定期レポート作成」「社内FAQ対応」が入門として最適です。",
              },
              {
                q: "社内のIT部門なしでAIエージェントを導入できますか？",
                a: "はい、MANA Studioのようなノーコードツールを使えばIT専門知識なしでも構築できます。ただし、既存システム（CRM・ERPなど）との連携や、セキュリティ・コンプライアンス要件が高い場合はIT部門または外部ベンダーのサポートを推奨します。まずは連携不要なスタンドアロンの業務（文書作成・レポート生成など）から始めると導入ハードルが低いです。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
