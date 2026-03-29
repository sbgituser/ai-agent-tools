import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AIエージェント解説記事一覧 | AI Agent Tools",
  description: "エージェンティックAIの基礎解説から実践活用、ROI計算、プロンプトエンジニアリングまで。AI導入を検討する方向けの実用記事集。",
};

const articles = [
  {
    href: "/articles/what-is-agentic-ai",
    emoji: "🤖",
    tag: "入門",
    tagColor: "#dbeafe",
    tagText: "#1d4ed8",
    title: "エージェンティックAIとは？2026年に知っておくべき新概念を解説",
    summary: "自律的に行動・判断するAIエージェントの仕組みと、2026年のビジネス活用最前線を解説。従来のAIとの違い、主要プラットフォーム比較も。",
    readTime: "8分",
  },
  {
    href: "/articles/ai-tool-comparison-2026",
    emoji: "📊",
    tag: "比較",
    tagColor: "#fce7f3",
    tagText: "#9d174d",
    title: "ChatGPT vs Claude vs Gemini｜AIツール料金・性能比較【2026年最新】",
    summary: "主要AIツールの最新料金プランと性能を徹底比較。用途別（テキスト/コード/分析/画像）おすすめ選定ガイド付き。",
    readTime: "10分",
  },
  {
    href: "/articles/ai-agent-automation-use-cases",
    emoji: "⚡",
    tag: "実践",
    tagColor: "#dcfce7",
    tagText: "#15803d",
    title: "AIエージェントで業務を自動化する方法｜具体的な5つのユースケース",
    summary: "実際の企業事例をもとに、AIエージェントによる業務自動化の具体的な手順を解説。メール・資料作成・データ処理・リサーチ・顧客対応の5分野。",
    readTime: "12分",
  },
  {
    href: "/articles/how-to-calculate-ai-roi",
    emoji: "💹",
    tag: "経営",
    tagColor: "#fef3c7",
    tagText: "#92400e",
    title: "AI導入のROIを計算する方法｜経営者向けガイド",
    summary: "投資対効果の計算式から意思決定フレームワークまで、経営者向けに体系的に解説。ROI計算のよくある間違いと正しい測定方法も紹介。",
    readTime: "9分",
  },
  {
    href: "/articles/prompt-engineering-guide",
    emoji: "✏️",
    tag: "技術",
    tagColor: "#f5f3ff",
    tagText: "#5b21b6",
    title: "プロンプトエンジニアリング入門｜AIを最大限活用するコツ",
    summary: "効果的なプロンプトの書き方から高度なテクニックまで、実例付きで徹底解説。Chain of Thought・Few-shot・ReActなど2026年最新手法も網羅。",
    readTime: "11分",
  },
];

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            AIエージェント解説記事
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            エージェンティックAIの基礎から実践活用まで。AI導入を検討する方向けの実用記事集。
          </p>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="flex gap-4 p-5 rounded-2xl border transition-all hover:shadow-md"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl flex-shrink-0 mt-1">{article.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: article.tagColor, color: article.tagText }}
                  >
                    {article.tag}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    読了時間: 約{article.readTime}
                  </span>
                </div>
                <h2 className="text-base font-bold leading-snug mb-2" style={{ color: "var(--text)" }}>
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {article.summary}
                </p>
                <span className="text-xs font-semibold mt-2 block" style={{ color: "var(--primary)" }}>
                  記事を読む →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
