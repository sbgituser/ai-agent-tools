import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プロンプトエンジニアリング入門｜AIを最大限活用するコツ | AI Agent Tools",
  description:
    "効果的なプロンプトの書き方から Chain of Thought・Few-shot・ReActなど2026年最新手法まで実例付きで解説。API利用者向けのコスト削減テクニックも。",
  openGraph: {
    title: "プロンプトエンジニアリング入門｜AIを最大限活用するコツ",
    description: "効果的なプロンプトの書き方から高度なテクニックまで、実例付きで徹底解説。",
    images: [{ url: "/ogp/articles/prompt-engineering-guide.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/articles/prompt-engineering-guide.png"],
  },
};

export default function PromptEngineeringGuidePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "記事", href: "/articles" },
            { label: "プロンプトエンジニアリング入門" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#f5f3ff", color: "#5b21b6" }}>技術</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約11分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            プロンプトエンジニアリング入門<br className="sm:hidden" />｜AIを最大限活用するコツ
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            同じAIモデルでも、プロンプトの書き方で出力品質は劇的に変わります。本記事では基本から高度なテクニックまで、実例付きで解説します。
          </p>
        </div>

        <article className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>プロンプトの基本構造</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              効果的なプロンプトは、以下の4要素で構成されます。すべてを含む必要はありませんが、複雑なタスクほど明示的に記述することで精度が上がります。
            </p>
            <div className="space-y-3">
              {[
                { label: "役割（Role）", desc: "AIに演じさせる専門家・人物像", example: "あなたは10年のキャリアを持つB2B営業のエキスパートです。" },
                { label: "コンテキスト（Context）", desc: "状況・背景情報", example: "弊社はSaaS製品を中小企業向けに販売しており、今月中に提案書を提出する必要があります。" },
                { label: "タスク（Task）", desc: "具体的にやってほしいこと", example: "製品の3つの主要メリットを、価格重視の購買担当者向けに説得力ある形でまとめてください。" },
                { label: "出力形式（Format）", desc: "アウトプットの形式・長さ", example: "箇条書き3点、各100文字以内、専門用語なしで記述してください。" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--bg-soft)", color: "var(--primary)" }}>
                      {item.label}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.desc}</span>
                  </div>
                  <div className="rounded-lg p-2 text-xs font-mono" style={{ backgroundColor: "var(--bg-section)", color: "var(--text)" }}>
                    例: {item.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>5つの高度なテクニック</h2>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Chain of Thought（思考の連鎖）",
                  desc: "複雑な問題を解く前に、ステップごとに考えさせることで精度が大幅に向上します。",
                  prompt: "以下の問題を解く前に、まず解き方の手順を日本語で説明してから、解答してください。\n\n問題: [ここに問題を入力]",
                  effect: "数学・論理問題・多段階推論で30〜50%精度向上",
                },
                {
                  num: "02",
                  title: "Few-shot（少数例学習）",
                  desc: "期待する出力形式の例を2〜5個見せることで、スタイルや形式を学習させます。",
                  prompt: "以下の例にならって、製品レビューのネガポジ分析をしてください。\n\n例1: レビュー「配送が遅い」→ ネガティブ\n例2: レビュー「使いやすい」→ ポジティブ\n\n対象: [ここにレビューを入力]",
                  effect: "特定フォーマット・スタイルの維持に効果大",
                },
                {
                  num: "03",
                  title: "ReAct（推論と行動の組み合わせ）",
                  desc: "「考える→行動する→観察する」を繰り返させることで、複雑な調査・作業の精度を向上させます。エージェントAI設計の基本パターン。",
                  prompt: "次のタスクを解決するために、以下の形式で思考してください。\nThought: [何を考えるか]\nAction: [何をするか（検索・計算など）]\nObservation: [結果]\n...（繰り返し）\nFinal Answer: [最終回答]",
                  effect: "複数ステップが必要なリサーチ・計算タスクに有効",
                },
                {
                  num: "04",
                  title: "自己批判プロンプト",
                  desc: "一度回答させた後に批判・改善を求めることで、出力品質を高めます。",
                  prompt: "まず[タスク]を実行してください。\n\n次に、上記の回答の弱点や改善点を3つ挙げ、それらを踏まえた改善版を作成してください。",
                  effect: "文章品質・論理的整合性の向上に効果大",
                },
                {
                  num: "05",
                  title: "XML/Markdown構造化プロンプト",
                  desc: "XMLタグやMarkdownで情報を構造化すると、AIが文脈を正確に解釈しやすくなります。特に長いシステムプロンプトで有効。",
                  prompt: "<instruction>\nあなたは日本語の文章校正の専門家です。\n</instruction>\n\n<rules>\n- 敬語の統一\n- 句読点の位置確認\n- 重複表現の削除\n</rules>\n\n<text_to_check>\n[ここに校正対象テキスト]\n</text_to_check>",
                  effect: "長文プロンプトでの精度維持・トークン効率化",
                },
              ].map((tech) => (
                <div key={tech.num} className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="px-5 py-4" style={{ backgroundColor: "var(--bg-card)" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "var(--primary)", color: "white" }}>
                        {tech.num}
                      </span>
                      <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>{tech.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>{tech.desc}</p>
                    <div className="rounded-lg p-3 text-xs font-mono whitespace-pre-wrap" style={{ backgroundColor: "#1e1b4b", color: "#c4b5fd" }}>
                      {tech.prompt}
                    </div>
                    <p className="text-xs mt-2" style={{ color: "var(--accent)" }}>
                      💡 効果: {tech.effect}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>API利用者向けコスト削減テクニック</h2>
            <div className="space-y-3">
              {[
                { title: "プロンプトキャッシング", saving: "最大90%削減", desc: "Claude APIはシステムプロンプトをキャッシュできます。同一のシステムプロンプトを繰り返し使う場合、キャッシュHit時の料金は通常の1/10。" },
                { title: "Batch API活用", saving: "50%削減", desc: "OpenAI/AnthropicともにBatch APIで50%割引。リアルタイム応答が不要な大量処理（文書分類・要約生成など）はバッチ処理を使う。" },
                { title: "モデルの使い分け", saving: "80〜90%削減", desc: "全タスクをGPT-4oで処理しない。分類・要約はHaiku/GPT-4o-miniで十分なことが多い。複雑な推論のみ高性能モデルを使う。" },
                { title: "トークン削減", saving: "20〜40%削減", desc: "不要な冗長表現を除去。JSONフォーマットより簡潔なテキスト形式、マークダウンの不要な記号の削除でトークン数を削減できる。" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="flex-shrink-0 text-center">
                    <p className="text-xs font-bold px-2 py-1 rounded-lg" style={{ backgroundColor: "#dcfce7", color: "#15803d" }}>
                      {item.saving}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
          >
            <p className="text-white font-bold text-lg mb-2">API費用をシミュレーションする</p>
            <p className="text-white/80 text-sm mb-4">モデル・トークン数・月間利用回数を入力して、月間API費用を計算。最安モデルへの切り替え効果も確認できます。</p>
            <Link
              href="/tools/prompt-cost-calculator"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              🔢 コスト計算機を使う
            </Link>
          </div>
        </article>

        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📚 プロンプトエンジニアリング関連書籍
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { title: "プロンプトエンジニアリング大全", keyword: "プロンプトエンジニアリング 入門 書籍 AI" },
              { title: "ChatGPT APIプログラミング", keyword: "ChatGPT API プログラミング Python" },
              { title: "LLMアプリ開発実践ガイド", keyword: "LLM アプリ開発 Langchain Anthropic" },
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

        {/* ── 関連ツール ── */}
        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            🔧 関連計算ツール
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                href: "/tools/prompt-cost-calculator",
                emoji: "🔢",
                title: "プロンプトコスト計算機",
                desc: "API費用をモデル別に比較計算",
              },
              {
                href: "/tools/cost-comparison",
                emoji: "⚖️",
                title: "AIツール月額費用比較ツール",
                desc: "ChatGPT・Claude・Geminiを比較",
              },
              {
                href: "/tools/roi-calculator",
                emoji: "💰",
                title: "AIエージェント導入ROI計算機",
                desc: "月間削減額・投資回収期間を即計算",
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
            title="プロンプトエンジニアリングについてよくある質問"
            items={[
              {
                q: "プロンプトを日本語と英語どちらで書くべきですか？",
                a: "日本語の出力が必要な場合は日本語で書くのが自然です。ただし技術的なプロンプト（Chain of ThoughtやFew-shot例）は英語の方が精度が出る場合があります。最終的には両方試して品質を比較することをお勧めします。",
              },
              {
                q: "プロンプトインジェクション攻撃とは何ですか？",
                a: "悪意のあるユーザーが「前の指示を無視して...」などのプロンプトを入力し、AIを意図しない動作させる攻撃です。エージェントAIやチャットボット開発者は、入力値のサニタイゼーションとシステムプロンプトの堅牢な設計が必要です。",
              },
              {
                q: "プロンプトテンプレートの管理に便利なツールはありますか？",
                a: "LangChain・LlamaIndex（プログラマー向け）、PromptLayer・Langfuse（プロンプト管理・バージョン管理専用）などが2026年時点で人気です。チームで共有する場合はPromptLayerのようなSaaS型が便利です。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
