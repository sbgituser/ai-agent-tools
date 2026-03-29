"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";

interface Inputs {
  monthlyHours: number;
  hourlyWage: number;
  toolMonthlyFee: number;
  initialCost: number;
  automationRate: number;
}

interface Results {
  monthlySaving: number;
  monthlyNet: number;
  paybackMonths: number;
  annualROI: number;
  threeYearNet: number;
  threeYearGross: number;
}

function calcROI(inputs: Inputs): Results {
  const { monthlyHours, hourlyWage, toolMonthlyFee, initialCost, automationRate } = inputs;
  const automatedHours = monthlyHours * (automationRate / 100);
  const monthlySaving = automatedHours * hourlyWage;
  const monthlyNet = monthlySaving - toolMonthlyFee;
  const paybackMonths = monthlyNet > 0 ? initialCost / monthlyNet : Infinity;
  const annualNet = monthlyNet * 12 - initialCost;
  const annualROI = initialCost > 0 ? (annualNet / initialCost) * 100 : 0;
  const threeYearGross = monthlySaving * 36;
  const threeYearNet = monthlyNet * 36 - initialCost;
  return { monthlySaving, monthlyNet, paybackMonths, annualROI, threeYearNet, threeYearGross };
}

function fmt(n: number) {
  return Math.round(n).toLocaleString("ja-JP");
}

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>({
    monthlyHours: 80,
    hourlyWage: 2500,
    toolMonthlyFee: 20000,
    initialCost: 100000,
    automationRate: 60,
  });

  const results = calcROI(inputs);

  function handleChange(key: keyof Inputs, value: string) {
    setInputs((prev) => ({ ...prev, [key]: Math.max(0, Number(value) || 0) }));
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Header toolName="ROI計算機" toolEmoji="💰" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            AIエージェント導入ROI計算機
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            自動化対象業務の情報を入力すると、投資対効果を即座に計算します。
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                  自動化対象業務の月間時間（時間）
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={inputs.monthlyHours}
                  onChange={(e) => handleChange("monthlyHours", e.target.value)}
                  min={0}
                  step={1}
                />
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  例: メール処理20h + データ入力40h + 資料作成20h = 80h
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                  人件費時給（円）
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={inputs.hourlyWage}
                  onChange={(e) => handleChange("hourlyWage", e.target.value)}
                  min={0}
                  step={100}
                />
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  社会保険料込みの実態コスト。目安: 正社員2,000〜4,000円/h
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                  AIツール月額費用（円）
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={inputs.toolMonthlyFee}
                  onChange={(e) => handleChange("toolMonthlyFee", e.target.value)}
                  min={0}
                  step={1000}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                  導入初期費用（円）
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={inputs.initialCost}
                  onChange={(e) => handleChange("initialCost", e.target.value)}
                  min={0}
                  step={10000}
                />
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  設定・カスタマイズ・社員研修費用など
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text)" }}>
                  想定自動化率: <span style={{ color: "var(--accent)" }}>{inputs.automationRate}%</span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={100}
                  step={5}
                  value={inputs.automationRate}
                  onChange={(e) => handleChange("automationRate", e.target.value)}
                  className="w-full accent-violet-600"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  <span>10%（部分）</span>
                  <span>50%（半自動）</span>
                  <span>100%（完全）</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 計算結果 ── */}
          <div className="flex flex-col gap-4">
            {/* メイン結果カード */}
            <div className="result-card">
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wider mb-4">
                計算結果
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/60 mb-1">月間コスト削減額</p>
                  <p className="text-2xl font-bold">¥{fmt(results.monthlySaving)}</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">月間純節約（費用控除後）</p>
                  <p className="text-2xl font-bold" style={{ color: results.monthlyNet >= 0 ? "#86efac" : "#fca5a5" }}>
                    ¥{fmt(results.monthlyNet)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">投資回収期間</p>
                  <p className="text-2xl font-bold">
                    {results.paybackMonths === Infinity ? "∞" : `${results.paybackMonths.toFixed(1)}ヶ月`}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">年間ROI</p>
                  <p className="text-2xl font-bold">{results.annualROI.toFixed(0)}%</p>
                </div>
              </div>
            </div>

            {/* 3年累積効果 */}
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>
                3年間累積効果
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ backgroundColor: "var(--bg-soft)" }}
                >
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>総削減額（粗）</p>
                  <p className="text-lg font-bold" style={{ color: "var(--primary)" }}>
                    ¥{fmt(results.threeYearGross)}
                  </p>
                </div>
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ backgroundColor: results.threeYearNet >= 0 ? "#f0fdf4" : "#fef2f2" }}
                >
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>純利益（初期費込）</p>
                  <p
                    className="text-lg font-bold"
                    style={{ color: results.threeYearNet >= 0 ? "#16a34a" : "#dc2626" }}
                  >
                    ¥{fmt(results.threeYearNet)}
                  </p>
                </div>
              </div>
            </div>

            {/* 判定バッジ */}
            <div
              className="rounded-2xl border p-4 flex items-start gap-3"
              style={{
                backgroundColor: results.monthlyNet > 0 ? "#f0fdf4" : "#fef9c3",
                borderColor: results.monthlyNet > 0 ? "#86efac" : "#fde68a",
              }}
            >
              <span className="text-2xl">{results.monthlyNet > 0 ? "✅" : "⚠️"}</span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: "var(--text)" }}>
                  {results.monthlyNet > 0
                    ? "投資効果あり：導入を推奨"
                    : "要検討：コストが削減額を上回っています"}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {results.monthlyNet > 0
                    ? `月々¥${fmt(results.monthlyNet)}の純節約。${results.paybackMonths.toFixed(1)}ヶ月で初期費用を回収できます。`
                    : "ツール費用を下げるか、自動化率・対象業務範囲を見直してください。"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 関連書籍（Amazon Associate） ── */}
        <section className="mt-12">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📚 AI・ROI計算に関連する書籍
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                title: "AI導入の教科書",
                desc: "中小企業向けAI活用の実践ガイド。ROI計算事例付き。",
                keyword: "AI導入 ROI 計算 書籍",
              },
              {
                title: "ChatGPT・Claude活用術",
                desc: "業務自動化の具体的な実装方法を解説。",
                keyword: "ChatGPT Claude 業務 自動化",
              },
              {
                title: "経営者のためのDX入門",
                desc: "デジタル化投資の費用対効果を経営視点で解説。",
                keyword: "DX デジタル変革 経営 ROI",
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

        {/* ── FAQ ── */}
        <section className="mt-12">
          <FAQ
            title="ROI計算機についてよくある質問"
            items={[
              {
                q: "人件費時給はどう計算すればいいですか？",
                a: "月給 ÷ 月間労働時間で算出できます。例: 月給30万円 ÷ 160時間 = 1,875円/h。ただし社会保険料（約15%）を加算した実態コストで計算することをお勧めします。",
              },
              {
                q: "自動化率60%とはどういう意味ですか？",
                a: "対象業務の60%をAIが自動処理できるという想定です。完全自動化が難しい業務（最終確認・例外処理など）を考慮した現実的な数値として、60〜80%が一般的な目安です。",
              },
              {
                q: "計算結果はそのまま稟議に使えますか？",
                a: "計算結果は参考値です。実際の稟議書には、具体的なツール名・ベンダー見積もり・パイロット検証結果など、より詳細な情報を加えることをお勧めします。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
