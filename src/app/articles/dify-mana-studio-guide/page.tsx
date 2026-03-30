import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dify・MANA Studioで業務用AIエージェントを作る方法【2026年版】 | AI Agent Tools",
  description:
    "DifyのセットアップからRAGチャットボット作成まで、MANA Studioの自然言語エージェント構築まで実践的に解説。AIエージェント作り方の完全ガイド2026年版。",
  openGraph: {
    title: "Dify・MANA Studioで業務用AIエージェントを作る方法【2026年版】",
    description: "Dify使い方・MANA Studioの特徴・実践的なAIエージェント構築例をステップ別に解説。",
    images: [{ url: "/ogp/articles/dify-mana-studio-guide.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/articles/dify-mana-studio-guide.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dify・MANA Studioで業務用AIエージェントを作る方法【2026年版】",
  description: "Dify使い方・MANA Studioの特徴・実践的なAIエージェント構築例をステップ別に解説。",
  author: { "@type": "Organization", name: "AI Agent Tools" },
  publisher: { "@type": "Organization", name: "kuras-plus" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
};

export default function DifyManaStudioGuidePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "記事", href: "/articles" },
            { label: "Dify・MANA Studioガイド" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#15803d" }}>実践</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約15分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            Dify・MANA Studioで<br className="sm:hidden" />業務用AIエージェントを作る方法【2026年版】
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            「AIエージェントを作りたいけど何から始めればいい？」という方向けに、代表的な2ツール・DifyとMANA Studioの特徴と具体的な構築手順をわかりやすく解説します。どちらもプログラミング経験が浅くても使えるツールです。
          </p>
        </div>

        <article className="space-y-10">

          {/* 目次 */}
          <section className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>📋 目次</h2>
            <ol className="space-y-1 text-sm" style={{ color: "var(--primary)" }}>
              {[
                "DifyとMANA Studioの違いを理解する",
                "Dify入門：アカウント作成とセットアップ",
                "Difyで社内FAQチャットボットを作る（ステップ別）",
                "Dify活用の実践Tips",
                "MANA Studio：自然言語でエージェントを作る",
                "MANA Studioの実践例：営業支援エージェント",
                "どちらを選ぶべきか",
                "よくある質問（FAQ）",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: "var(--text-muted)" }}>{i + 1}.</span>
                  <span className="underline">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* セクション1: 違いの比較 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>1. DifyとMANA Studioの違いを理解する</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              どちらも「エンジニアでなくても業務用AIエージェントを構築できる」ことを目指したツールですが、アプローチと強みが異なります。まず違いを把握してから、自社に合うほうを選びましょう。
            </p>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "var(--primary)", color: "white" }}>
                    <th className="px-3 py-2 text-left font-semibold">項目</th>
                    <th className="px-3 py-2 text-left font-semibold">🟢 Dify</th>
                    <th className="px-3 py-2 text-left font-semibold">🇯🇵 MANA Studio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["提供形態", "OSSクラウド＋セルフホスト", "国産クラウドSaaS"],
                    ["構築方法", "ビジュアルフロービルダー", "自然言語（日本語）で指示"],
                    ["技術要件", "IT知識あると◎・なくても可", "不要（ノーコード）"],
                    ["日本語対応", "UI英語/コミュニティ有", "完全日本語UI・サポート"],
                    ["価格", "無料〜¥4,160/月（クラウド）", "要問い合わせ"],
                    ["データ管理", "セルフホストでオンプレ可", "国内データセンター"],
                    ["得意な用途", "RAG・ワークフロー自動化", "業務エージェント・会話型AI"],
                  ].map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
                      <td className="px-3 py-2 text-xs font-semibold" style={{ color: "var(--text)" }}>{row[0]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[1]}</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Difyセットアップ */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>2. Dify入門：アカウント作成とセットアップ</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Difyは公式サイト（dify.ai）からクラウド版に無料登録できます。月200メッセージまで無料で利用可能です。以下の手順でセットアップを進めましょう。
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "アカウント登録",
                  content: "dify.aiにアクセスし、GitHubアカウントまたはメールアドレスで無料登録します。メール認証後すぐに使い始められます。",
                  note: "💡 企業利用の場合は後述のセルフホスト版も検討してください（データが自社サーバーに保存されます）。",
                },
                {
                  step: "STEP 2",
                  title: "LLMプロバイダーの設定",
                  content: "「設定」→「モデルプロバイダー」でOpenAI API KeyまたはAnthropic API Keyを入力します。Difyはモデルの中継役なので、利用したいAIのAPIキーが別途必要です。",
                  note: "💡 OpenAI APIキーは platform.openai.com、AnthropicキーはAnthropicのコンソールから取得できます。従量課金なので最初は上限設定を推奨。",
                },
                {
                  step: "STEP 3",
                  title: "ナレッジベース（社内文書）の登録",
                  content: "「ナレッジ」→「ナレッジを作成」でPDF・Word・テキストファイルをアップロードします。自動でベクター化されRAG検索が使えるようになります。",
                  note: "💡 まずは社内FAQ・マニュアル・製品資料など50〜100ページ程度のドキュメントから始めると効果が出やすいです。",
                },
                {
                  step: "STEP 4",
                  title: "アプリケーションの作成",
                  content: "「アプリを作成」→アプリ種別を選択します。チャットボットなら「チャットbot」、定型処理なら「テキスト生成」、複雑なワークフローなら「エージェント」を選択。",
                  note: "💡 初めてなら「チャットbot」がシンプルで始めやすいです。ナレッジベースを連携すれば社内FAQ botが5分で完成します。",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="px-4 py-2 flex items-center gap-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "var(--primary)" }}>{item.step}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{item.title}</p>
                  </div>
                  <div className="p-4 space-y-2" style={{ backgroundColor: "var(--bg-card)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.content}</p>
                    <p className="text-xs leading-relaxed rounded-lg px-3 py-2" style={{ backgroundColor: "var(--bg-soft)", color: "var(--text-muted)" }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dify FAQ bot作成 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>3. Difyで社内FAQチャットボットを作る（ステップ別）</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              最も手軽な活用例として、社内規定・製品マニュアルを読み込んだFAQチャットボットの構築手順を解説します。作業時間の目安は約30分です。
            </p>

            <div className="rounded-xl p-5 border mb-6" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>📌 完成イメージ</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                社員が「有給の申請方法は？」と質問すると、社内規定PDFを参照して「就業規則第15条によると、有給申請は申請フォームから3日前までに…（出典：就業規則p.23）」と正確に回答するチャットボット。
              </p>
            </div>

            <ol className="space-y-3">
              {[
                "社内規定・マニュアルのPDFをナレッジに登録（前項STEP 3参照）",
                "「アプリを作成」→「チャットbot」を選択",
                "「ナレッジを追加」で登録したドキュメントを選択",
                "システムプロンプトに「あなたは○○社の社内規定に詳しいアシスタントです。提供された文書のみに基づいて回答してください。文書に記載がない場合は「社内規定に記載がありません」と答えてください。」と入力",
                "「公開」→「埋め込む」でURLを取得し社内ポータルやSlackに共有",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm items-start">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white" style={{ backgroundColor: "var(--primary)" }}>{i + 1}</span>
                  <span style={{ color: "var(--text-muted)" }}>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Dify Tips */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>4. Dify活用の実践Tips</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🔍",
                  title: "検索精度を上げるコツ",
                  tips: [
                    "チャンクサイズは500〜800文字が標準",
                    "目次・索引ページは除外する",
                    "Top-K（返却件数）は3〜5件が適切",
                    "Reranking（再ランキング）を有効化する",
                  ],
                },
                {
                  icon: "⚡",
                  title: "ワークフロー活用例",
                  tips: [
                    "メール受信→分類→担当者振り分け",
                    "問い合わせ→FAQチェック→エスカレーション",
                    "データ入力→バリデーション→DB登録",
                    "議事録PDF→要約→Slack送信",
                  ],
                },
                {
                  icon: "🔌",
                  title: "外部連携のポイント",
                  tips: [
                    "HTTPリクエストブロックで社内APIと連携可能",
                    "Google検索ツールを追加してリアルタイム情報取得",
                    "Slackボット統合でチャット内から利用",
                    "Webhook経由でn8n・Zapierとも連携できる",
                  ],
                },
                {
                  icon: "🔒",
                  title: "セキュリティ設定",
                  tips: [
                    "APIキーは環境変数で管理する",
                    "Sensitive Mode設定で会話ログを残さない",
                    "セルフホスト版はDockerでオンプレ運用",
                    "ユーザー認証はSSO連携が推奨",
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{section.icon}</span>
                    <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{section.title}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="text-xs flex gap-2" style={{ color: "var(--text-muted)" }}>
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* MANA Studio */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>5. MANA Studio：自然言語でエージェントを作る</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              MANA Studioは「自然言語でAIエージェントを定義する」という革新的なアプローチを採用した国産プラットフォームです。フロー図を描くのではなく、「あなたはXX業務を担当するエージェントです。Yのときは○○し、Zのときは△△してください」という日本語の指示文だけでエージェントの振る舞いを定義できます。
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>🌟 MANA Studioならではの特徴</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "自然言語エージェント定義",
                      desc: "フローチャートやコードなしに、日本語の指示文だけでエージェントの判断基準・行動ルール・トーン・制約を設定できます。人材採用時の「職務記述書」のような感覚でエージェントを定義できるのが特徴です。",
                    },
                    {
                      title: "マルチモーダル対応",
                      desc: "テキストだけでなく、画像・PDFを組み合わせたタスクにも対応。見積書の画像を読み込んで情報抽出するエージェントなども構築可能です。",
                    },
                    {
                      title: "ヒューマン・イン・ザ・ループ",
                      desc: "重要な判断は人間の確認を挟む「承認フロー」を簡単に設定できます。全自動化はリスクが高い業務でも、AIによる下処理＋人間の最終判断という運用が可能です。",
                    },
                    {
                      title: "国内データセンター・コンプライアンス",
                      desc: "データは国内のサーバーに保管され、医療・金融・法律など厳格なコンプライアンスが求められる業界でも利用しやすい設計です。",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✅</span>
                      <div>
                        <p className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>{item.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* MANA Studio実践例 */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>6. MANA Studioの実践例：営業支援エージェント</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              MANA Studioで「商談後フォローアップメール生成エージェント」を構築する例を紹介します。通常30〜40分かかる商談後メール作成を5分以内に短縮できます。
            </p>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
              <div className="px-5 py-3" style={{ backgroundColor: "var(--bg-soft)" }}>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>📝 エージェント定義の例（指示文イメージ）</p>
              </div>
              <div className="p-5" style={{ backgroundColor: "var(--bg-card)" }}>
                <div className="rounded-lg p-4 font-mono text-xs leading-relaxed" style={{ backgroundColor: "var(--bg)", color: "var(--text-muted)", borderLeft: "3px solid var(--primary)" }}>
                  <p>あなたは営業サポートエージェントです。</p>
                  <br />
                  <p>【役割】</p>
                  <p>商談後のフォローアップメールを作成します。</p>
                  <br />
                  <p>【入力情報の処理】</p>
                  <p>- 相手の会社名・担当者名・役職を必ず使用</p>
                  <p>- 商談内容から主要な関心事・課題を抽出</p>
                  <p>- 次のアクション（提案書送付・デモ設定など）を明記</p>
                  <br />
                  <p>【トーン・スタイル】</p>
                  <p>- 丁寧で温かみのあるビジネス敬語</p>
                  <p>- 400文字以内に収める</p>
                  <p>- 箇条書きは使わず、自然な文章で</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {[
                { icon: "⏱️", title: "作業時間", before: "30〜40分", after: "3〜5分" },
                { icon: "📧", title: "メール品質", before: "担当者次第でばらつき", after: "一定品質で統一" },
                { icon: "📈", title: "月間削減時間", before: "商談20件の場合", after: "約10時間削減" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-4 border text-center" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="text-xs font-bold mb-2" style={{ color: "var(--text)" }}>{item.title}</p>
                  <p className="text-xs line-through mb-1" style={{ color: "var(--text-muted)" }}>{item.before}</p>
                  <p className="text-sm font-bold" style={{ color: "var(--primary)" }}>{item.after}</p>
                </div>
              ))}
            </div>
          </section>

          {/* どちらを選ぶべきか */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>7. DifyとMANA Studio、どちらを選ぶべきか</h2>
            <div className="space-y-3">
              {[
                {
                  condition: "Difyを選ぶ場合",
                  color: "#065f46",
                  bgColor: "#ecfdf5",
                  reasons: [
                    "エンジニアかIT知識のある人材がいる",
                    "コストを最小化したい（無料枠やセルフホストを活用）",
                    "データを社外に出したくない（セルフホストでオンプレ運用）",
                    "複雑なRAGワークフローや外部API連携が必要",
                    "多彩なLLMを使い分けたい",
                  ],
                },
                {
                  condition: "MANA Studioを選ぶ場合",
                  color: "#6b21a8",
                  bgColor: "#faf5ff",
                  reasons: [
                    "IT非専門部門が主体でノーコード必須",
                    "日本語UIとサポートが絶対条件",
                    "医療・金融・法律などコンプライアンスが厳しい業界",
                    "国内データセンターへのデータ保管が必要",
                    "早期に業務部門が自立して運用できるようにしたい",
                  ],
                },
              ].map((item) => (
                <div key={item.condition} className="rounded-xl border overflow-hidden" style={{ borderColor: item.color }}>
                  <div className="px-4 py-2.5" style={{ backgroundColor: item.color, color: "white" }}>
                    <p className="text-sm font-bold">{item.condition}</p>
                  </div>
                  <ul className="p-4 space-y-1.5" style={{ backgroundColor: "var(--bg-card)" }}>
                    {item.reasons.map((reason, i) => (
                      <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text-muted)" }}>
                        <span style={{ color: item.color }}>✓</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              ※ 迷う場合は、まずDifyのクラウド無料版でPoCを実施し、本番化の段階でMANA Studioへの移行やDifyセルフホストを検討するハイブリッドアプローチも有効です。
            </p>
          </section>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
          >
            <p className="text-white font-bold text-lg mb-2">AIエージェント導入で削減できる業務時間を試算する</p>
            <p className="text-white/80 text-sm mb-4">メール処理・資料作成・データ入力など業務別の削減時間を自動計算します。</p>
            <Link
              href="/tools/time-saving-simulator"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              ⏱️ 時間削減シミュレーターを使う
            </Link>
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
              { href: "/tools/time-saving-simulator", emoji: "⏱️", title: "業務時間削減シミュレーター", desc: "AI導入で削減できる月間時間を試算" },
              { href: "/tools/roi-calculator", emoji: "💰", title: "AIエージェント導入ROI計算機", desc: "月間削減額・投資回収期間を即計算" },
              { href: "/tools/prompt-cost-calculator", emoji: "🔢", title: "プロンプトコスト計算機", desc: "API費用をモデル別に比較計算" },
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
            title="Dify・MANA Studioについてよくある質問"
            items={[
              {
                q: "DifyとChatGPTは何が違いますか？",
                a: "ChatGPTはOpenAIが提供する完成品のAIチャットサービスですが、DifyはAIアプリを自作するためのプラットフォームです。DifyはChatGPTのAPIを内部で利用しながら、自社データとの連携・カスタムワークフロー・複数LLMの切り替えなど、ChatGPTには無い業務特化機能を実現できます。",
              },
              {
                q: "Difyのセルフホストは難しいですか？",
                a: "DockerとDocker Composeの基本知識があれば、公式ドキュメントに従って数時間で構築できます。AWS EC2やさくらのクラウドなどのVPS環境が必要です。IT部門がある企業なら対応可能なレベルです。不安な場合はまずクラウド版から始めることを推奨します。",
              },
              {
                q: "MANA Studioの料金はどれくらいですか？",
                a: "MANA Studioの料金は公式サイトから問い合わせが必要です（2026年3月時点では公式の価格表は非公開）。企業規模・利用ユーザー数・APIコール数などによってカスタム見積もりとなることが多いです。まずは公式サイトからトライアルまたは問い合わせすることをおすすめします。",
              },
              {
                q: "社内の機密情報をDifyに入れても安全ですか？",
                a: "クラウド版の場合、データはDifyのサーバー（AWS）に保存されます。機密性が高いデータを扱う場合は、セルフホスト版（自社サーバー上に構築）をおすすめします。セルフホスト版は完全に自社管理でき、クラウドへのデータ送信は使用するLLM APIへのプロンプトのみとなります。",
              },
              {
                q: "DifyでSlackボットを作れますか？",
                a: "はい、可能です。Difyで構築したアプリケーションはAPIエンドポイントとして公開でき、そのエンドポイントをSlackのSlash Commandsやイベント通知と接続することでSlackボットとして利用できます。Zapierとの連携で、さらにノーコードでSlack統合を実現することもできます。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
