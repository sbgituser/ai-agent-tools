"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import { AI_TOOLS, DATA_UPDATED_AT } from "@/data/ai-pricing";

const FEATURES = [
  { id: "text", label: "テキスト生成", emoji: "✏️" },
  { id: "image", label: "画像生成", emoji: "🖼️" },
  { id: "code", label: "コード生成", emoji: "💻" },
  { id: "data", label: "データ分析", emoji: "📊" },
];

function getBestPlanCost(toolId: string, users: number): { planName: string; total: number; perUser: number } {
  const tool = AI_TOOLS.find((t) => t.id === toolId);
  if (!tool) return { planName: "-", total: 0, perUser: 0 };

  // Enterprise plan (price unknown) を除外して最安プランを判定
  const paid = tool.plans.filter((p) => p.monthlyJPY > 0);
  if (paid.length === 0) return { planName: "Free", total: 0, perUser: 0 };

  // チームプランがある場合: 2人以上ならチームプランを使う
  const teamPlan = paid.find((p) => p.name.includes("Team") || p.name.includes("Business") || p.name.includes("M365"));
  const individualPlan = paid.find((p) => p.name === "Plus" || p.name === "Pro" || p.name === "Advanced");

  let chosen = individualPlan ?? paid[0];

  const total = chosen.monthlyJPY * users;
  return { planName: chosen.name, total, perUser: chosen.monthlyJPY };
}

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AIツール月額費用比較ツール",
  url: "https://ai-agent-tools.kuras-plus.com/tools/cost-comparison",
  description:
    "利用人数・月間利用回数・必要機能を選ぶと、ChatGPT・Claude・Gemini・Copilotの月額費用を比較表で表示。コスパランキング付き。",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
};

export default function CostComparisonPage() {
  const [users, setUsers] = useState(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["text", "code"]);

  function toggleFeature(id: string) {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  // フィルタリング: 選択した機能をサポートしているツールを優先表示
  const toolsWithCost = AI_TOOLS.map((tool) => {
    const { planName, total, perUser } = getBestPlanCost(tool.id, users);
    const matchedFeatures = FEATURES.filter(
      (f) => selectedFeatures.includes(f.id) && tool.strengths.some((s) => s.includes(f.label))
    );
    return { ...tool, planName, totalCost: total, perUserCost: perUser, matchedFeatures };
  });

  // コスト昇順でランキング
  const ranked = [...toolsWithCost].sort((a, b) => a.totalCost - b.totalCost);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <Header toolName="費用比較" toolEmoji="⚖️" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "費用比較ツール" },
          ]}
        />
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            AIツール月額費用比較ツール
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            利用人数と必要機能を選ぶと、主要AIツールの月額費用を比較します。
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            ※ データ更新: {DATA_UPDATED_AT}時点。最新情報は各公式サイトをご確認ください。
          </p>
        </div>

        {/* ── 入力 ── */}
        <div
          className="rounded-2xl border p-6 mb-6"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                利用人数: <span style={{ color: "var(--accent)" }}>{users}人</span>
              </label>
              <input
                type="range"
                min={1}
                max={50}
                step={1}
                value={users}
                onChange={(e) => setUsers(Number(e.target.value))}
                className="w-full accent-violet-600"
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                <span>1人</span>
                <span>25人</span>
                <span>50人</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                必要な機能
              </p>
              <div className="flex flex-wrap gap-2">
                {FEATURES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => toggleFeature(f.id)}
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border font-medium transition-all"
                    style={
                      selectedFeatures.includes(f.id)
                        ? { backgroundColor: "var(--primary)", color: "white", borderColor: "var(--primary)" }
                        : { backgroundColor: "var(--bg)", color: "var(--text-muted)", borderColor: "var(--border)" }
                    }
                  >
                    <span>{f.emoji}</span>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 比較表 ── */}
        <div className="space-y-3 mb-8">
          {ranked.map((tool, index) => (
            <div
              key={tool.id}
              className="rounded-2xl border p-5"
              style={{
                backgroundColor: index === 0 ? "var(--bg-soft)" : "var(--bg-card)",
                borderColor: index === 0 ? "var(--primary)" : "var(--border)",
              }}
            >
              <div className="flex items-start gap-4">
                {/* ランク */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    backgroundColor: index === 0 ? "var(--primary)" : "var(--border)",
                    color: index === 0 ? "white" : "var(--text-muted)",
                  }}
                >
                  {index + 1}
                </div>

                {/* ツール情報 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{tool.emoji}</span>
                    <span className="font-bold text-sm" style={{ color: "var(--text)" }}>
                      {tool.name}
                    </span>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "var(--border)", color: "var(--text-muted)" }}
                    >
                      {tool.planName}プラン
                    </span>
                    {index === 0 && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-bold"
                        style={{ backgroundColor: "var(--primary)", color: "white" }}
                      >
                        最安
                      </span>
                    )}
                  </div>

                  {/* 対応機能 */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {FEATURES.map((f) => {
                      const supported = tool.strengths.some((s) => s.includes(f.label));
                      const required = selectedFeatures.includes(f.id);
                      if (!supported) return null;
                      return (
                        <span
                          key={f.id}
                          className="text-xs px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: required ? "#dcfce7" : "var(--border)",
                            color: required ? "#15803d" : "var(--text-muted)",
                          }}
                        >
                          {f.emoji} {f.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* プラン機能 */}
                  <div className="flex flex-wrap gap-1">
                    {(AI_TOOLS.find((t) => t.id === tool.id)?.plans.find((p) => p.name === tool.planName)?.features ?? [])
                      .slice(0, 4)
                      .map((feat) => (
                        <span
                          key={feat}
                          className="text-xs px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: "var(--bg-section)", color: "var(--text-muted)" }}
                        >
                          {feat}
                        </span>
                      ))}
                  </div>
                </div>

                {/* 費用 */}
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {tool.totalCost === 0 ? "無料" : `¥${tool.totalCost.toLocaleString()}`}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    / 月 ({users}人)
                  </p>
                  {users > 1 && tool.perUserCost > 0 && (
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      ¥{tool.perUserCost.toLocaleString()}/人
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 費用比較グラフ ── */}
        <div
          className="rounded-2xl border p-6 mb-8"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            費用比較グラフ（月額・{users}人）
          </h2>
          <div className="space-y-3">
            {ranked.map((tool) => {
              const max = Math.max(...ranked.map((t) => t.totalCost), 1);
              const pct = tool.totalCost === 0 ? 5 : (tool.totalCost / max) * 100;
              return (
                <div key={tool.id} className="flex items-center gap-3">
                  <span className="text-sm w-32 flex-shrink-0 font-medium" style={{ color: "var(--text)" }}>
                    {tool.emoji} {tool.name}
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: tool.color }}
                    />
                  </div>
                  <span className="text-sm font-bold w-24 text-right" style={{ color: "var(--text)" }}>
                    {tool.totalCost === 0 ? "無料" : `¥${tool.totalCost.toLocaleString()}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 関連書籍 ── */}
        <section className="mt-8">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📚 AI活用に関連する書籍
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                title: "ChatGPT活用大全",
                desc: "業務でのChatGPT活用を網羅した実践書。",
                keyword: "ChatGPT 活用 業務効率化",
              },
              {
                title: "Claude vs ChatGPT 使い分け術",
                desc: "目的別にAIツールを選ぶための比較ガイド。",
                keyword: "Claude ChatGPT 比較 使い分け",
              },
              {
                title: "Copilot仕事術",
                desc: "Microsoft 365とCopilotを連携した業務効率化。",
                keyword: "Microsoft Copilot 仕事術 M365",
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
            title="費用比較ツールについてよくある質問"
            items={[
              {
                q: "料金はいつ更新されますか？",
                a: "当サイトの料金データは2026年3月時点のものです。AIツールの料金は頻繁に変更されるため、実際の契約前には各公式サイトで最新情報をご確認ください。",
              },
              {
                q: "Enterprise（要問い合わせ）のプランはどう扱っていますか？",
                a: "Enterprise/Business プランは企業規模によって価格が大きく異なるため、本ツールでは比較対象外としています。50人以上の大規模導入の場合は各社に見積もり依頼をお勧めします。",
              },
              {
                q: "年払いと月払いどちらの料金ですか？",
                a: "月払いの料金を表示しています。多くのサービスは年払いで割引（10〜20%）があるため、長期利用を検討している場合は年払いプランを確認してください。",
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
                href: "/articles/ai-tool-comparison-2026",
                emoji: "📊",
                title: "AIツール料金・性能比較【2026年最新】",
                desc: "ChatGPT vs Claude vs Gemini vs Copilot 徹底比較",
              },
              {
                href: "/articles/how-to-calculate-ai-roi",
                emoji: "💹",
                title: "AI導入のROIを計算する方法",
                desc: "経営者向けROI計算式と意思決定フレームワーク",
              },
              {
                href: "/articles/prompt-engineering-guide",
                emoji: "✏️",
                title: "プロンプトエンジニアリング入門",
                desc: "APIコスト削減テクニックも解説",
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
