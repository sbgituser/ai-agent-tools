"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

interface ModelPricing {
  id: string;
  name: string;
  provider: string;
  emoji: string;
  color: string;
  inputPerMillion: number;  // USD per 1M tokens
  outputPerMillion: number; // USD per 1M tokens
  note?: string;
}

const USD_TO_JPY = 150;

const MODELS: ModelPricing[] = [
  {
    id: "gpt4o",
    name: "GPT-4o",
    provider: "OpenAI",
    emoji: "🟢",
    color: "#10a37f",
    inputPerMillion: 2.5,
    outputPerMillion: 10.0,
  },
  {
    id: "gpt4o-mini",
    name: "GPT-4o mini",
    provider: "OpenAI",
    emoji: "🟢",
    color: "#10a37f",
    inputPerMillion: 0.15,
    outputPerMillion: 0.6,
  },
  {
    id: "o1",
    name: "o1",
    provider: "OpenAI",
    emoji: "🟢",
    color: "#10a37f",
    inputPerMillion: 15.0,
    outputPerMillion: 60.0,
    note: "推論モデル",
  },
  {
    id: "claude-sonnet",
    name: "Claude claude-sonnet-4-6",
    provider: "Anthropic",
    emoji: "🟠",
    color: "#d4730a",
    inputPerMillion: 3.0,
    outputPerMillion: 15.0,
  },
  {
    id: "claude-haiku",
    name: "Claude Haiku 4.5",
    provider: "Anthropic",
    emoji: "🟠",
    color: "#d4730a",
    inputPerMillion: 0.8,
    outputPerMillion: 4.0,
  },
  {
    id: "claude-opus",
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    emoji: "🟠",
    color: "#d4730a",
    inputPerMillion: 15.0,
    outputPerMillion: 75.0,
    note: "最高性能モデル",
  },
  {
    id: "gemini-flash",
    name: "Gemini 2.0 Flash",
    provider: "Google",
    emoji: "🔵",
    color: "#1a73e8",
    inputPerMillion: 0.075,
    outputPerMillion: 0.3,
  },
  {
    id: "gemini-pro",
    name: "Gemini 2.0 Pro",
    provider: "Google",
    emoji: "🔵",
    color: "#1a73e8",
    inputPerMillion: 1.25,
    outputPerMillion: 5.0,
  },
  {
    id: "gemini-ultra",
    name: "Gemini Ultra",
    provider: "Google",
    emoji: "🔵",
    color: "#1a73e8",
    inputPerMillion: 7.0,
    outputPerMillion: 21.0,
  },
];

function calcMonthlyCost(model: ModelPricing, inputTokens: number, outputTokens: number, requestsPerMonth: number): number {
  const inputCostUSD = (inputTokens / 1_000_000) * model.inputPerMillion * requestsPerMonth;
  const outputCostUSD = (outputTokens / 1_000_000) * model.outputPerMillion * requestsPerMonth;
  return (inputCostUSD + outputCostUSD) * USD_TO_JPY;
}

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "プロンプトコスト計算機",
  url: "https://ai-agent-tools.kuras-plus.com/tools/prompt-cost-calculator",
  description:
    "モデル・入力/出力トークン数・月間利用回数を入力すると月間API費用を算出。GPT-4o/Claude/Geminiの費用比較とコスト最適化提案も。",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
};

export default function PromptCostCalculatorPage() {
  const [selectedModelId, setSelectedModelId] = useState("claude-sonnet");
  const [inputTokens, setInputTokens] = useState(1000);
  const [outputTokens, setOutputTokens] = useState(500);
  const [requestsPerMonth, setRequestsPerMonth] = useState(1000);

  const selectedModel = MODELS.find((m) => m.id === selectedModelId) ?? MODELS[0];
  const myCost = calcMonthlyCost(selectedModel, inputTokens, outputTokens, requestsPerMonth);

  // 全モデル比較
  const allCosts = MODELS.map((m) => ({
    ...m,
    monthlyCost: calcMonthlyCost(m, inputTokens, outputTokens, requestsPerMonth),
  })).sort((a, b) => a.monthlyCost - b.monthlyCost);

  const cheapest = allCosts[0];
  const savingVsCheapest = myCost - cheapest.monthlyCost;

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <Header toolName="プロンプトコスト計算機" toolEmoji="🔢" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "プロンプトコスト計算機" },
          ]}
        />
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            プロンプトコスト計算機
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            使用モデルとトークン数を入力すると月間API費用を計算し、モデル間で比較します。
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            ※ データ更新: 2026年3月時点、1USD=150円換算。実際のレートをご確認ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── 入力フォーム ── */}
          <div
            className="rounded-2xl border p-6"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <h2 className="text-base font-bold mb-5" style={{ color: "var(--text)" }}>
              入力項目
            </h2>

            <div className="space-y-5">
              {/* モデル選択 */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                  使用モデル
                </label>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {MODELS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModelId(m.id)}
                      className="w-full text-left px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all"
                      style={
                        selectedModelId === m.id
                          ? { backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }
                          : { backgroundColor: "var(--bg)", borderColor: "var(--border)" }
                      }
                    >
                      <span>{m.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium" style={{ color: "var(--text)" }}>{m.name}</span>
                        <span className="text-xs ml-1" style={{ color: "var(--text-muted)" }}>{m.provider}</span>
                        {m.note && (
                          <span className="text-xs ml-1 px-1 rounded" style={{ backgroundColor: "var(--bg-soft)", color: "var(--accent)" }}>
                            {m.note}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-right" style={{ color: "var(--text-muted)" }}>
                        <div>入力 ${m.inputPerMillion}/1M</div>
                        <div>出力 ${m.outputPerMillion}/1M</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* トークン数 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                    平均入力トークン数
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    value={inputTokens}
                    onChange={(e) => setInputTokens(Math.max(1, Number(e.target.value) || 1))}
                    min={1}
                    step={100}
                  />
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    日本語1文字≒1.5トークン
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                    平均出力トークン数
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    value={outputTokens}
                    onChange={(e) => setOutputTokens(Math.max(1, Number(e.target.value) || 1))}
                    min={1}
                    step={100}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                  月間利用回数（リクエスト数）
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={requestsPerMonth}
                  onChange={(e) => setRequestsPerMonth(Math.max(1, Number(e.target.value) || 1))}
                  min={1}
                  step={100}
                />
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  1日あたり: {Math.round(requestsPerMonth / 30)}回
                </p>
              </div>
            </div>
          </div>

          {/* ── 計算結果 ── */}
          <div className="flex flex-col gap-4">
            <div className="result-card">
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wider mb-2">
                {selectedModel.name} の月間費用
              </p>
              <p className="text-4xl font-bold mb-1">
                ¥{Math.round(myCost).toLocaleString()}
              </p>
              <p className="text-sm text-white/70">/ 月（{requestsPerMonth.toLocaleString()}リクエスト）</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg p-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs text-white/60 mb-1">入力コスト</p>
                  <p className="font-bold">
                    ¥{Math.round((inputTokens / 1_000_000) * selectedModel.inputPerMillion * requestsPerMonth * USD_TO_JPY).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs text-white/60 mb-1">出力コスト</p>
                  <p className="font-bold">
                    ¥{Math.round((outputTokens / 1_000_000) * selectedModel.outputPerMillion * requestsPerMonth * USD_TO_JPY).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs text-white/60 mb-1">1リクエストあたり</p>
                  <p className="font-bold">
                    ¥{(myCost / requestsPerMonth).toFixed(2)}
                  </p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs text-white/60 mb-1">年間推計</p>
                  <p className="font-bold">¥{Math.round(myCost * 12).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* コスト最適化提案 */}
            {savingVsCheapest > 100 && (
              <div
                className="rounded-2xl border p-4"
                style={{ backgroundColor: "#f0fdf4", borderColor: "#86efac" }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: "#15803d" }}>
                  💡 コスト最適化提案
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <strong>{cheapest.name}</strong>に切り替えると月間約
                  <strong style={{ color: "#15803d" }}>¥{Math.round(savingVsCheapest).toLocaleString()}</strong>
                  節約できます。用途が合う場合は検討してみてください。
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── 全モデル比較 ── */}
        <div
          className="rounded-2xl border p-6 mt-6"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            モデル別費用比較（月間・同条件）
          </h2>
          <div className="space-y-2">
            {allCosts.map((m, index) => {
              const maxCost = allCosts[allCosts.length - 1].monthlyCost;
              const pct = maxCost > 0 ? Math.max(3, (m.monthlyCost / maxCost) * 100) : 3;
              const isSelected = m.id === selectedModelId;
              return (
                <div
                  key={m.id}
                  className="flex items-center gap-3 p-2 rounded-lg transition-all"
                  style={{ backgroundColor: isSelected ? "var(--bg-soft)" : "transparent" }}
                >
                  <span className="text-xs w-4 text-center font-bold" style={{ color: "var(--text-muted)" }}>
                    {index + 1}
                  </span>
                  <div className="w-36 flex-shrink-0">
                    <p className="text-xs font-medium truncate" style={{ color: "var(--text)" }}>
                      {m.emoji} {m.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{m.provider}</p>
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, backgroundColor: m.color }}
                    />
                  </div>
                  <span
                    className="text-sm font-bold w-28 text-right"
                    style={{ color: isSelected ? "var(--primary)" : "var(--text)" }}
                  >
                    ¥{Math.round(m.monthlyCost).toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 関連書籍 ── */}
        <section className="mt-10">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📚 プロンプトエンジニアリングに関連する書籍
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                title: "プロンプトエンジニアリング大全",
                desc: "GPT-4・Claude・Geminiを最大活用するプロンプト設計の教科書。",
                keyword: "プロンプトエンジニアリング ChatGPT Claude 書籍",
              },
              {
                title: "API活用 LLMアプリ開発入門",
                desc: "OpenAI・Anthropic APIを使ったアプリ開発の実践ガイド。",
                keyword: "OpenAI API LLM アプリ開発 Python",
              },
              {
                title: "生成AI コスト最適化ガイド",
                desc: "企業向けAIコスト管理とトークン削減テクニック集。",
                keyword: "生成AI コスト 最適化 企業 活用",
              },
            ].map((book) => (
              <a
                key={book.title}
                href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(book.keyword)}&tag=kurasplus-22`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border p-4 flex flex-col gap-2 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xs font-bold px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: "#fff7ed", color: "#c2410c" }}>
                  Amazon
                </span>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{book.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{book.desc}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "var(--accent)" }}>
                  Amazonで探す →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <FAQ
            title="プロンプトコスト計算機についてよくある質問"
            items={[
              {
                q: "トークン数の目安はどのくらいですか？",
                a: "英語は1単語≒1トークン、日本語は1文字≒1.5〜2トークンが目安です。例: 日本語500文字≒750〜1000トークン。OpenAI Tokenizerなどのツールで正確に計測できます。",
              },
              {
                q: "バッチ処理（Batch API）はどうなりますか？",
                a: "OpenAIとAnthropicはバッチAPIで50%割引が適用されます。リアルタイム応答が不要な用途（大量文書処理など）ではバッチAPIを使うとコストを半減できます。",
              },
              {
                q: "キャッシュ（プロンプトキャッシング）の効果は？",
                a: "AnthropicのPrompt Cachingを使うと、繰り返し使うシステムプロンプトのコストを最大90%削減できます。長いシステムプロンプトを持つアプリケーションでは大きな効果があります。",
              },
            ]}
          />
        </section>

        {/* ── 関連記事 ── */}
        <section className="mt-12">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📖 関連記事
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                href: "/articles/prompt-engineering-guide",
                emoji: "✏️",
                title: "プロンプトエンジニアリング入門",
                desc: "APIコスト削減テクニックも詳しく解説",
              },
              {
                href: "/articles/ai-tool-comparison-2026",
                emoji: "📊",
                title: "AIツール料金・性能比較【2026年最新】",
                desc: "ChatGPT vs Claude vs Gemini vs Copilot",
              },
              {
                href: "/articles/what-is-agentic-ai",
                emoji: "🤖",
                title: "エージェンティックAIとは？",
                desc: "2026年に知っておくべき新概念を解説",
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="rounded-xl border p-4 flex flex-col gap-2 transition-all hover:shadow-md"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <span className="text-xl">{article.emoji}</span>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>
                  {article.title}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{article.desc}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "var(--primary)" }}>
                  記事を読む →
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
