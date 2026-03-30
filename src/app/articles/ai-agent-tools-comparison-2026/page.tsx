import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "AIエージェントツール比較2026年版10選｜おすすめランキング | AI Agent Tools",
  description:
    "2026年最新のAIエージェントツール10選を徹底比較。Microsoft 365 Copilot・Dify・MANA Studio・Google Vertex AI・Salesforce Agentforceなど価格・機能・日本語対応を解説。",
  openGraph: {
    title: "AIエージェントツール比較2026年版10選｜おすすめランキング",
    description: "2026年急増するAIエージェントツールを価格・カスタマイズ性・ノーコード対応・日本語対応で徹底比較。用途別おすすめ選定ガイド付き。",
    images: [{ url: "/ogp/articles/ai-agent-tools-comparison-2026.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/articles/ai-agent-tools-comparison-2026.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AIエージェントツール比較2026年版10選｜おすすめランキング",
  description: "2026年急増するAIエージェントツールを価格・カスタマイズ性・ノーコード対応・日本語対応で徹底比較。用途別おすすめ選定ガイド付き。",
  author: { "@type": "Organization", name: "AI Agent Tools" },
  publisher: { "@type": "Organization", name: "kuras-plus" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
};

export default function AIAgentToolsComparisonPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "記事", href: "/articles" },
            { label: "AIエージェントツール比較2026" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fce7f3", color: "#9d174d" }}>比較</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約14分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            AIエージェントツール比較2026年版10選<br className="sm:hidden" />｜おすすめランキング
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            2026年はAIエージェント元年。Dify・MANA Studio・Microsoft 365 Copilot・Google Vertex AI Agent Builderなど多数のツールが登場し、選定に迷う企業が急増しています。本記事では、価格・カスタマイズ性・ノーコード対応・日本語対応の4軸で代表的な10ツールを徹底比較します。
          </p>
        </div>

        <article className="space-y-10">

          {/* 目次 */}
          <section className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>📋 目次</h2>
            <ol className="space-y-1 text-sm" style={{ color: "var(--primary)" }}>
              {[
                "AIエージェントツールとは？市場動向",
                "比較軸の解説（価格・カスタマイズ性・ノーコード・日本語対応）",
                "総合型：Microsoft 365 Copilot / Google Vertex AI Agent Builder",
                "国産・オープンソース：Dify / MANA Studio",
                "特化型：Salesforce Agentforce / ServiceNow / Zapier Central",
                "開発者向け：LangChain / AutoGen / CrewAI",
                "ツール選定チェックリスト",
                "よくある質問（FAQ）",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: "var(--text-muted)" }}>{i + 1}.</span>
                  <span className="underline">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* セクション1: 市場動向 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>1. AIエージェントツールとは？2026年の市場動向</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              AIエージェントとは、自律的に目標を設定し、計画を立て、必要なツールを呼び出しながら複数ステップのタスクを遂行するAIシステムです。単なる質問応答（チャットボット）と異なり、「メール確認→スケジュール調整→返信送信」といった連続した業務フローを自動実行できます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              2025年後半から2026年にかけて、国内外でAIエージェントツールの数が急増しています。Gartnerの予測では、2026年末までにフォーチュン500企業の40%以上が何らかのAIエージェントを業務に導入するとされています。「AIエージェント ツール 比較」「AIエージェント おすすめ」といった検索も急拡大中です。
            </p>
            <div className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>🔑 AIエージェントが注目される3つの理由</p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <li>✅ <strong>人手不足対策</strong>：単純繰り返し業務を24時間自動実行、人的リソースを高付加価値業務へ集中</li>
                <li>✅ <strong>LLM性能の向上</strong>：GPT-4o・Claude 3.5など高性能モデルが手頃な価格で利用可能に</li>
                <li>✅ <strong>ノーコード化の進展</strong>：MANA Studioのように自然言語だけでエージェントを構築できるツールが登場</li>
              </ul>
            </div>
          </section>

          {/* セクション2: 比較軸 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>2. 比較軸の解説</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              AIエージェントツールを選ぶ際は、以下の4軸で評価することをおすすめします。ツールごとに強みが異なるため、自社のニーズを先に整理してから比較しましょう。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "💰", title: "価格", desc: "月額固定費・従量課金・無料枠の有無。チーム規模やユースケースによって最適な課金モデルが異なる。" },
                { icon: "🔧", title: "カスタマイズ性", desc: "社内システム・APIとの連携、プロンプトのカスタマイズ、ワークフロー編集の自由度。" },
                { icon: "🖱️", title: "ノーコード対応", desc: "IT知識なしで設定・運用できるか。ビジネスユーザーが主体的に使えるかが重要。" },
                { icon: "🇯🇵", title: "日本語対応", desc: "UIの日本語化、日本語プロンプトの精度、日本企業向けサポート・コンプライアンス対応。" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.title}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* セクション3: 比較表 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>3〜6. AIエージェントツール10選 比較表</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              代表的な10ツールを4軸（価格・カスタマイズ・ノーコード・日本語対応）で評価しました。★の数は5段階評価です。
            </p>
            <div className="rounded-xl overflow-x-auto border mb-2" style={{ borderColor: "var(--border)" }}>
              <table className="w-full text-sm" style={{ minWidth: "600px" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--primary)", color: "white" }}>
                    <th className="px-3 py-2 text-left font-semibold">ツール</th>
                    <th className="px-3 py-2 text-left font-semibold">カテゴリ</th>
                    <th className="px-3 py-2 text-left font-semibold">価格</th>
                    <th className="px-3 py-2 text-left font-semibold">カスタマイズ</th>
                    <th className="px-3 py-2 text-left font-semibold">ノーコード</th>
                    <th className="px-3 py-2 text-left font-semibold">日本語</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Microsoft 365 Copilot", "総合型", "¥4,497/月/人", "★★★", "★★★★★", "★★★★★"],
                    ["Google Vertex AI Agent", "総合型", "従量課金", "★★★★★", "★★★", "★★★★"],
                    ["Dify", "OSS/クラウド", "無料〜¥4,160/月", "★★★★★", "★★★★", "★★★★"],
                    ["MANA Studio", "国産ノーコード", "要問い合わせ", "★★★★", "★★★★★", "★★★★★"],
                    ["Salesforce Agentforce", "CRM特化", "¥25/会話〜", "★★★★", "★★★★", "★★★★"],
                    ["ServiceNow AI Agents", "ITSM特化", "エンタープライズ", "★★★", "★★★", "★★★★"],
                    ["Zapier Central", "自動化特化", "$19.99/月〜", "★★★", "★★★★★", "★★★"],
                    ["LangChain", "開発者向け", "無料（OSSコア）", "★★★★★", "★", "★★★"],
                    ["AutoGen (Microsoft)", "マルチエージェント", "無料（OSSコア）", "★★★★★", "★", "★★★"],
                    ["CrewAI", "マルチエージェント", "無料〜$49/月", "★★★★★", "★★", "★★★"],
                  ].map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
                      <td className="px-3 py-2 font-semibold text-xs" style={{ color: "var(--text)" }}>{row[0]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[1]}</td>
                      <td className="px-3 py-2 text-xs font-medium" style={{ color: "var(--text)" }}>{row[2]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[3]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[4]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>※ 価格は2026年3月時点の公式情報。為替レートにより変動あり。</p>
          </section>

          {/* 各ツール詳細 */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>各ツールの詳細解説</h2>
            <div className="space-y-6">

              {/* Microsoft 365 Copilot */}
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="px-5 py-3" style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", color: "white" }}>
                  <p className="font-bold">🏢 Microsoft 365 Copilot — 総合型の王道</p>
                </div>
                <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Word・Excel・Teams・Outlook・PowerPointに深く統合されたAIアシスタント。会議の自動要約、メール下書き、データ分析、プレゼン自動生成など、Officeを日常的に使う企業なら最も即効性が高いツールです。
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--text)" }}>✅ 強み</p>
                      <ul className="space-y-1" style={{ color: "var(--text-muted)" }}>
                        <li>• M365との完全統合</li>
                        <li>• 日本語サポート充実</li>
                        <li>• 企業向けセキュリティ</li>
                        <li>• ノーコードで即利用</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--text)" }}>⚠️ 注意点</p>
                      <ul className="space-y-1" style={{ color: "var(--text-muted)" }}>
                        <li>• M365契約が前提</li>
                        <li>• カスタムワークフローは限定的</li>
                        <li>• コスト高め（¥4,497/人/月）</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs font-bold" style={{ color: "var(--primary)" }}>
                    こんな企業におすすめ：Officeヘビーユーザーが多い、IT部門なしでも導入したい
                  </p>
                </div>
              </div>

              {/* Dify */}
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="px-5 py-3" style={{ backgroundColor: "#065f46", color: "white" }}>
                  <p className="font-bold">🟢 Dify — オープンソースの本命</p>
                </div>
                <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    GitHubで6万以上のスターを獲得するオープンソースAIアプリ開発プラットフォーム。ビジュアルなフロービルダーでRAG（社内ドキュメント検索）付きチャットボット、AIエージェント、ワークフローを構築できます。クラウド版とセルフホスト版の両方が利用可能です。
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--text)" }}>✅ 強み</p>
                      <ul className="space-y-1" style={{ color: "var(--text-muted)" }}>
                        <li>• 無料枠あり（クラウド版）</li>
                        <li>• セルフホストでデータ保護</li>
                        <li>• 多彩なLLM対応</li>
                        <li>• 活発なコミュニティ</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--text)" }}>⚠️ 注意点</p>
                      <ul className="space-y-1" style={{ color: "var(--text-muted)" }}>
                        <li>• セルフホストはインフラ知識必要</li>
                        <li>• 公式日本語サポートは限定的</li>
                        <li>• 大規模運用は要チューニング</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs font-bold" style={{ color: "var(--primary)" }}>
                    こんな企業におすすめ：エンジニアがいる・コストを抑えたい・データを社内保管したい
                  </p>
                </div>
              </div>

              {/* MANA Studio */}
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="px-5 py-3" style={{ backgroundColor: "#7c3aed", color: "white" }}>
                  <p className="font-bold">🇯🇵 MANA Studio — 国産ノーコードの注目株</p>
                </div>
                <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    「自然言語でエージェントを作る」をコンセプトとした国産AIエージェント構築プラットフォーム。プログラミング不要で、日本語の指示文を入力するだけで業務エージェントを構築できます。日本語UIと日本企業向けコンプライアンス対応が強みです。
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--text)" }}>✅ 強み</p>
                      <ul className="space-y-1" style={{ color: "var(--text-muted)" }}>
                        <li>• 完全日本語対応UI</li>
                        <li>• ノーコードで最短構築</li>
                        <li>• 国内法規制・コンプライアンス対応</li>
                        <li>• 日本語サポート充実</li>
                      </ul>
                    </div>
                    <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--text)" }}>⚠️ 注意点</p>
                      <ul className="space-y-1" style={{ color: "var(--text-muted)" }}>
                        <li>• 価格は要問い合わせ</li>
                        <li>• グローバル展開には不向き</li>
                        <li>• 海外OSS比でコミュニティ規模小</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs font-bold" style={{ color: "var(--primary)" }}>
                    こんな企業におすすめ：IT非専門部門・国内向け業務・日本語サポートが必要
                  </p>
                </div>
              </div>

              {/* Google Vertex AI */}
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="px-5 py-3" style={{ backgroundColor: "#1a73e8", color: "white" }}>
                  <p className="font-bold">🔵 Google Vertex AI Agent Builder — エンタープライズ向けGCP基盤</p>
                </div>
                <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Google Cloud上でAIエージェントを構築・デプロイするためのフルマネージドサービス。Gemini 2.0をベースにRAG、Tool use、マルチエージェント連携などエンタープライズグレードの機能を提供。既存のGoogle Workspaceやデータ基盤（BigQuery、Cloud Storage等）との連携が容易です。
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    <strong>料金：</strong>テキスト生成（Gemini 1.5 Flash）入力$0.075/1Mトークン、出力$0.30/1Mトークン〜。Datastore検索は別途$2.00/1,000クエリ〜。
                  </p>
                  <p className="text-xs font-bold" style={{ color: "var(--primary)" }}>
                    こんな企業におすすめ：GCPユーザー・大規模エンタープライズ・データエンジニアリングチームあり
                  </p>
                </div>
              </div>

              {/* Salesforce Agentforce */}
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="px-5 py-3" style={{ backgroundColor: "#0176d3", color: "white" }}>
                  <p className="font-bold">☁️ Salesforce Agentforce — CRM × AIエージェントの融合</p>
                </div>
                <div className="p-5 space-y-3" style={{ backgroundColor: "var(--bg-card)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Salesforce CRM上で動くAIエージェント。営業支援（リード優先度付け、商談サマリ生成）、顧客対応（問い合わせ自動分類・回答）、マーケティング自動化などCRM業務に特化。既存のSalesforceデータを活用したパーソナライズ対応が強みです。料金は¥25/会話（2026年3月時点）と従量課金モデル。
                  </p>
                  <p className="text-xs font-bold" style={{ color: "var(--primary)" }}>
                    こんな企業におすすめ：Salesforce既存ユーザー・営業・カスタマーサポート部門
                  </p>
                </div>
              </div>

              {/* 開発者向け */}
              <div className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                <h3 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>👨‍💻 開発者向けフレームワーク（LangChain / AutoGen / CrewAI）</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  プログラミングスキルがある開発チーム向けのOSSフレームワーク。ノーコードツールより自由度が高く、複雑なマルチエージェントシステムを構築できますが、実装コストがかかります。
                </p>
                <div className="space-y-3 text-xs" style={{ color: "var(--text-muted)" }}>
                  <div className="flex gap-3">
                    <span className="font-bold min-w-[90px]" style={{ color: "var(--text)" }}>LangChain</span>
                    <span>最も広く使われるLLMアプリ開発フレームワーク。豊富なインテグレーションと巨大コミュニティ。PythonとJavaScript対応。</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold min-w-[90px]" style={{ color: "var(--text)" }}>AutoGen</span>
                    <span>Microsoftが開発するマルチエージェントフレームワーク。複数のエージェントが会話しながら協調してタスクを解決する「エージェントチャット」が特徴。</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold min-w-[90px]" style={{ color: "var(--text)" }}>CrewAI</span>
                    <span>役割分担（クルー）を持つ複数エージェントの協調に特化。$49/月のクラウドサービスも提供しており、OSSよりも手軽に始められる。</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 選定チェックリスト */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>7. ツール選定チェックリスト</h2>
            <div className="rounded-xl p-5 border space-y-3" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}>
              <p className="text-sm font-bold" style={{ color: "var(--text)" }}>以下の質問に答えて、最適なカテゴリを絞り込みましょう。</p>
              {[
                { q: "主にMicrosoft Office / M365を使っている", a: "→ Microsoft 365 Copilot" },
                { q: "Google Workspace / GCPを使っている", a: "→ Google Vertex AI Agent Builder" },
                { q: "コストを抑えてカスタマイズしたい（エンジニアあり）", a: "→ Dify（セルフホスト）またはLangChain" },
                { q: "ノーコードで日本語UIで使いたい", a: "→ MANA Studio" },
                { q: "Salesforce CRMユーザー", a: "→ Salesforce Agentforce" },
                { q: "複数エージェントが協調するシステムを作りたい", a: "→ AutoGen / CrewAI" },
                { q: "まず無料で試したい", a: "→ Dify（クラウド版無料枠）またはCrewAI（OSS）" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-base flex-shrink-0">{"🔲"}</span>
                  <div>
                    <p style={{ color: "var(--text)" }}>{item.q}</p>
                    <p className="font-bold" style={{ color: "var(--primary)" }}>{item.a}</p>
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
            <p className="text-white font-bold text-lg mb-2">AIエージェント導入のROIを試算する</p>
            <p className="text-white/80 text-sm mb-4">月間の業務削減時間と人件費から、投資回収期間を自動計算します。</p>
            <Link
              href="/tools/roi-calculator"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              💰 ROI計算機を使う
            </Link>
          </div>
        </article>

        {/* 関連記事 */}
        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>📄 関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "/articles/dify-mana-studio-guide",
                emoji: "🛠️",
                title: "Dify/MANA Studioで業務用AIエージェントを作る方法",
                desc: "Difyのセットアップ手順とMANA Studioの活用例を実践的に解説",
              },
              {
                href: "/articles/ai-agent-introduction-guide",
                emoji: "🚀",
                title: "業務自動化AIエージェント導入完全ガイド",
                desc: "課題整理→PoC→本番導入のステップと成功事例・失敗パターン",
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
              { href: "/tools/cost-comparison", emoji: "⚖️", title: "AIツール月額費用比較ツール", desc: "利用人数・機能で費用をリアルタイム比較" },
              { href: "/tools/time-saving-simulator", emoji: "⏱️", title: "業務時間削減シミュレーター", desc: "AI導入で削減できる月間時間を試算" },
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
            title="AIエージェントツール比較についてよくある質問"
            items={[
              {
                q: "AIエージェントとチャットボットの違いは何ですか？",
                a: "チャットボットは単発の質問に答えるだけですが、AIエージェントは自律的に複数ステップのタスクを実行します。例えばチャットボットは「会議の予定を教えて」に答えますが、AIエージェントは「来週の会議を調整して」という指示を受け、カレンダー確認・候補提示・招待送信まで一連の作業を自動実行します。",
              },
              {
                q: "中小企業でもAIエージェントツールを使えますか？",
                a: "はい、使えます。DifyのクラウドFreeプラン（月200回まで無料）やMicrosoft Copilot（M365 Business契約があればオプション追加）など、中小企業向けのプランも充実しています。まずは1部門・1業務から小さく試すPoC（概念実証）から始めることをおすすめします。",
              },
              {
                q: "ノーコードとコードありではどちらがいいですか？",
                a: "IT専任チームがない場合はノーコード（MANA Studio・Dify・Zapier Central）、エンジニアがいて高いカスタマイズが必要な場合はLangChain・AutoGen等の開発者向けフレームワークが適しています。ノーコードでPoCを作り、本番化の際に必要なら開発者向けに移行するハイブリッドアプローチも有効です。",
              },
              {
                q: "AIエージェントツールの費用対効果をどう評価すればいいですか？",
                a: "削減される工数（時間×時給）からツール費用を引いた純削減額で評価します。例えば月20時間の業務削減（時給3,000円換算で6万円）に対してツール費用が月1万円なら、純削減額5万円で投資回収は即座です。当サイトのROI計算機で簡単に試算できます。",
              },
              {
                q: "セキュリティ・データ保護はどのように考えればいいですか？",
                a: "重要なのは①データが学習に使われないか②ログの保存場所（クラウドか自社か）③SOC2/ISO27001などのコンプライアンス認証④日本語でのサポートと契約の4点です。機密情報を扱う場合はDifyのセルフホストやMANA Studioの国内データセンター利用を検討してください。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
