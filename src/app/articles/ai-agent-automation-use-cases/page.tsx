import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "AIエージェントで業務を自動化する方法｜具体的な5つのユースケース | AI Agent Tools",
  description:
    "AIエージェントによる業務自動化の具体的な5つのユースケースを企業事例付きで解説。メール・資料作成・データ処理・リサーチ・顧客対応の自動化手順。",
  openGraph: {
    title: "AIエージェントで業務を自動化する方法｜具体的な5つのユースケース",
    description: "実際の企業事例をもとに、AIエージェントによる業務自動化の具体的な手順を解説。",
    images: [{ url: "/ogp/articles/ai-agent-automation-use-cases.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/articles/ai-agent-automation-use-cases.png"],
  },
};

export default function AIAgentUseCasesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "記事", href: "/articles" },
            { label: "業務自動化ユースケース" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#15803d" }}>実践</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約12分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            AIエージェントで業務を自動化する方法<br className="sm:hidden" />｜具体的な5つのユースケース
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            「AIを使いたいけど何から始めればいいか分からない」という声をよく聞きます。本記事では、導入効果の高い5つの業務カテゴリについて、具体的な自動化手順と実際の効果を解説します。
          </p>
        </div>

        <article className="space-y-8">
          {[
            {
              num: 1,
              emoji: "📧",
              title: "メール処理・コミュニケーション自動化",
              timeSaving: "月間20〜30時間削減",
              difficulty: "★★☆（中）",
              detail: [
                "AIエージェントにメールボックスへのアクセス権限を与えると、受信メールを自動分類し、定型的な問い合わせには下書きを作成、緊急度の高いメールを優先キューに移動します。",
                "Gmail + Claudeの組み合わせでは、1日100通の受信メールを処理する営業担当が、対応時間を従来の3時間から40分に短縮した事例があります。",
              ],
              steps: [
                "対応パターンをカテゴリ化（問い合わせ/苦情/見積もり依頼/社内連絡等）",
                "各カテゴリの標準返信テンプレートを作成",
                "AIに分類ルールと返信トーンを指示するシステムプロンプトを設定",
                "最初の2週間は全返信を人間がレビューして精度を確認",
                "問題なければ定型返信を自動送信に移行",
              ],
              tools: ["Gmail + Zapier + Claude API", "Microsoft Outlook + Copilot", "ChatGPT Custom GPT"],
            },
            {
              num: 2,
              emoji: "📝",
              title: "資料・レポート作成自動化",
              timeSaving: "月間15〜25時間削減",
              difficulty: "★★☆（中）",
              detail: [
                "週次レポート・議事録・提案書の下書き作成はAIが最も得意とするタスクです。テンプレートとデータを与えるだけで、80%以上の品質の文書を数秒で生成できます。",
                "コンサルティング会社での事例では、週次クライアントレポート（平均4時間/本）の作成時間を45分に短縮。人間の作業は確認・微調整のみになっています。",
              ],
              steps: [
                "繰り返し作成している資料の共通構造を洗い出す",
                "テンプレート化できる部分とデータ入力が必要な部分を分ける",
                "AIへの指示テンプレート（プロンプト）を作成・保存",
                "Notionデータベース等のデータソースと連携設定",
                "生成→レビュー→修正のフローを確立",
              ],
              tools: ["Claude + Notion", "ChatGPT + Google Docs", "Copilot + Word"],
            },
            {
              num: 3,
              emoji: "📊",
              title: "データ入力・集計・分析自動化",
              timeSaving: "月間25〜40時間削減",
              difficulty: "★★★（高）",
              detail: [
                "Excelやスプレッドシートへの手入力、PDFからのデータ転記、複数シートの集計は、AIと組み合わせることで大幅に自動化できます。",
                "小売業での事例: 各店舗の日次売上データ（PDF・Excel混在）を毎日手動で集計していた業務を、Google Sheetsとフォームの組み合わせで完全自動化。月間40時間の作業をゼロにしました。",
              ],
              steps: [
                "データソースの種類と形式を整理（PDF/Excel/CSV/手書き等）",
                "OCR・データ抽出の精度テストを実施",
                "例外データ（エラー値・異常値）の処理ルールを決定",
                "自動化パイプラインを構築（Make/Zapierなど）",
                "月次でデータ品質の監査プロセスを設定",
              ],
              tools: ["ChatGPT Code Interpreter", "Gemini + Google Sheets", "Claude + Make.com"],
            },
            {
              num: 4,
              emoji: "🔍",
              title: "リサーチ・情報収集自動化",
              timeSaving: "月間10〜20時間削減",
              difficulty: "★☆☆（低）",
              detail: [
                "競合分析・市場調査・業界ニュースの収集は、AIエージェントのWeb検索機能で大幅に効率化できます。「毎朝、競合5社の最新ニュースを要約してSlackに投稿」といった定期タスクに特に効果的です。",
                "PR会社での事例: クライアント10社の業界ニュースモニタリングを、毎日2時間かけて手動実施→AIエージェントによる自動収集・要約・配信で15分のレビューのみに短縮。",
              ],
              steps: [
                "収集すべき情報の種類・ソース・頻度を定義",
                "重要度の判断基準をAIに指示できる形で文書化",
                "アウトプット形式（要約の長さ・フォーマット）を決定",
                "Slack/Teams/メールへの自動配信を設定",
                "定期的に収集漏れ・誤検知がないかチェック",
              ],
              tools: ["Perplexity API", "ChatGPT + Browse", "Claude + Tavily"],
            },
            {
              num: 5,
              emoji: "💬",
              title: "顧客対応・サポート自動化",
              timeSaving: "月間30〜50時間削減",
              difficulty: "★★★（高）",
              detail: [
                "カスタマーサポートの一次対応をAIエージェントに担わせることで、問い合わせ対応時間を大幅に削減できます。ただし、最終的な判断や感情対応は人間が担うハイブリッド体制が重要です。",
                "ECサイトでの事例: 「注文状況・返品・キャンセル」の問い合わせ全体の70%をAIが自動解決。月間500件の問い合わせのうち150件だけ人間が対応する体制を実現。",
              ],
              steps: [
                "よくある質問TOP20をリストアップし回答を整備",
                "AIが対応可能なケースと人間にエスカレーションするケースを定義",
                "トーン・言葉遣いのガイドラインをプロンプトに組み込む",
                "チャットボット or メール自動返信のどちらで実装するか決定",
                "月次でCS品質スコアをモニタリングし継続改善",
              ],
              tools: ["Claude API + Zendesk", "ChatGPT + Intercom", "Copilot + Microsoft Teams"],
            },
          ].map((useCase) => (
            <section key={useCase.num}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <span className="text-white font-bold text-sm">{useCase.num}</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                    {useCase.emoji} {useCase.title}
                  </h2>
                  <div className="flex gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>節約効果: <strong style={{ color: "#15803d" }}>{useCase.timeSaving}</strong></span>
                    <span>難易度: {useCase.difficulty}</span>
                  </div>
                </div>
              </div>

              {useCase.detail.map((d, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>{d}</p>
              ))}

              <div className="rounded-xl p-4 border mb-3" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--border)" }}>
                <p className="text-xs font-bold mb-2" style={{ color: "var(--text)" }}>🚀 導入ステップ</p>
                <ol className="space-y-1">
                  {useCase.steps.map((step, i) => (
                    <li key={i} className="flex gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: "var(--primary)" }}>{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>推奨ツール:</span>
                {useCase.tools.map((tool) => (
                  <span key={tool} className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          ))}

          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
          >
            <p className="text-white font-bold text-lg mb-2">自分の業務で何時間節約できる？</p>
            <p className="text-white/80 text-sm mb-4">業務カテゴリ別の週間時間を入力するだけで、AI導入後の削減時間を計算できます。</p>
            <Link
              href="/tools/time-saving-simulator"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              ⏱️ 時間節約シミュレーターを使う
            </Link>
          </div>
        </article>

        {/* ── 関連ツール ── */}
        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            🔧 関連計算ツール
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                href: "/tools/time-saving-simulator",
                emoji: "⏱️",
                title: "業務自動化 時間節約シミュレーター",
                desc: "年間節約時間・人件費換算を可視化",
              },
              {
                href: "/tools/roi-calculator",
                emoji: "💰",
                title: "AIエージェント導入ROI計算機",
                desc: "月間削減額・投資回収期間を即計算",
              },
              {
                href: "/tools/cost-comparison",
                emoji: "⚖️",
                title: "AIツール月額費用比較ツール",
                desc: "ChatGPT・Claude・Geminiを比較",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl border p-4 flex flex-col gap-2 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xl">{tool.emoji}</span>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>
                  {tool.title}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{tool.desc}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "var(--primary)" }}>
                  無料で計算する →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <FAQ
            title="AIエージェント業務自動化についてよくある質問"
            items={[
              {
                q: "どのユースケースから始めるのが最も効果的ですか？",
                a: "「繰り返しが多い・構造化されている・失敗しても影響が小さい」業務から始めるのがおすすめです。メール定型返信やレポート下書きは、この3条件を満たしているため導入効果が出やすく、リスクも低いです。",
              },
              {
                q: "プログラミング知識がなくても自動化できますか？",
                a: "はい。Zapier・Make・Microsoft Power Automateなどのノーコードツールと組み合わせることで、プログラミング不要で多くの自動化が実現できます。特にメール処理・Slack投稿・スプレッドシート連携はノーコードが得意な領域です。",
              },
              {
                q: "自動化した後、品質管理はどうすればいいですか？",
                a: "最初の1〜2ヶ月は全出力を人間がレビューする「監督期間」を設けることを強く推奨します。品質が安定してきたら、サンプリング監査（10%抜き取りチェック）に移行し、月次でKPIを確認するサイクルを確立してください。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
