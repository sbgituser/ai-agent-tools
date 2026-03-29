"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";

interface Category {
  id: string;
  emoji: string;
  label: string;
  automationRate: number; // AIによる削減率 (%)
  description: string;
}

const CATEGORIES: Category[] = [
  { id: "email", emoji: "📧", label: "メール処理・返信", automationRate: 70, description: "分類・定型返信・要約" },
  { id: "docs", emoji: "📝", label: "資料・レポート作成", automationRate: 55, description: "下書き・フォーマット整形・要約" },
  { id: "data", emoji: "📊", label: "データ入力・集計", automationRate: 80, description: "OCR・転記・集計・可視化" },
  { id: "research", emoji: "🔍", label: "リサーチ・情報収集", automationRate: 65, description: "Web検索・要約・比較表作成" },
  { id: "schedule", emoji: "📅", label: "スケジュール・会議調整", automationRate: 50, description: "候補日提案・議事録・リマインド" },
  { id: "customer", emoji: "💬", label: "顧客対応・サポート", automationRate: 60, description: "FAQ回答・チケット分類・エスカレーション" },
];

export default function TimeSavingSimulatorPage() {
  const [weeklyHours, setWeeklyHours] = useState<Record<string, number>>({
    email: 5,
    docs: 8,
    data: 6,
    research: 4,
    schedule: 3,
    customer: 0,
  });
  const [hourlyWage, setHourlyWage] = useState(2500);

  function handleHours(id: string, value: string) {
    setWeeklyHours((prev) => ({ ...prev, [id]: Math.max(0, Math.min(40, Number(value) || 0)) }));
  }

  const totalWeekly = CATEGORIES.reduce((sum, c) => sum + (weeklyHours[c.id] ?? 0), 0);
  const savings = CATEGORIES.map((c) => {
    const hours = weeklyHours[c.id] ?? 0;
    const saved = hours * (c.automationRate / 100);
    return { ...c, hours, savedWeekly: saved };
  });
  const totalSavedWeekly = savings.reduce((sum, s) => sum + s.savedWeekly, 0);
  const totalSavedMonthly = totalSavedWeekly * 4.33;
  const totalSavedAnnual = totalSavedWeekly * 52;
  const annualCostSaving = totalSavedAnnual * hourlyWage;
  const monthlyCostSaving = totalSavedMonthly * hourlyWage;

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Header toolName="時間節約シミュレーター" toolEmoji="⏱️" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            業務自動化 時間節約シミュレーター
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            業務カテゴリ別の週間時間を入力。AI導入後の削減時間と人件費換算を計算します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── 入力フォーム ── */}
          <div>
            <div
              className="rounded-2xl border p-6 mb-4"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>
                  業務カテゴリ別・週間時間
                </h2>
                <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  合計: {totalWeekly}h/週
                </span>
              </div>

              <div className="space-y-4">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{cat.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                          {cat.label}
                        </p>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {cat.description} · AI削減率目安: {cat.automationRate}%
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          className="input-field w-16 text-center"
                          value={weeklyHours[cat.id] ?? 0}
                          onChange={(e) => handleHours(cat.id, e.target.value)}
                          min={0}
                          max={40}
                          step={0.5}
                        />
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>h</span>
                      </div>
                    </div>
                    {/* ビジュアル: 削減バー */}
                    {(weeklyHours[cat.id] ?? 0) > 0 && (
                      <div className="ml-9 mt-1">
                        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${cat.automationRate}%`,
                              background: "linear-gradient(90deg, var(--primary), var(--accent))",
                            }}
                          />
                        </div>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                          約{((weeklyHours[cat.id] ?? 0) * cat.automationRate / 100).toFixed(1)}h削減可能
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text)" }}>
                人件費時給（円）
              </label>
              <input
                type="number"
                className="input-field"
                value={hourlyWage}
                onChange={(e) => setHourlyWage(Math.max(0, Number(e.target.value) || 0))}
                min={0}
                step={100}
              />
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                社会保険料込みの実態コスト目安: 2,000〜4,000円/h
              </p>
            </div>
          </div>

          {/* ── 計算結果 ── */}
          <div className="flex flex-col gap-4">
            <div className="result-card">
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wider mb-4">
                推定削減効果
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/60 mb-1">週間削減時間</p>
                  <p className="text-2xl font-bold">{totalSavedWeekly.toFixed(1)}h</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">月間削減時間</p>
                  <p className="text-2xl font-bold">{totalSavedMonthly.toFixed(1)}h</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">年間節約時間</p>
                  <p className="text-2xl font-bold">{Math.round(totalSavedAnnual)}h</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">年間コスト削減</p>
                  <p className="text-2xl font-bold">¥{Math.round(annualCostSaving / 10000)}万</p>
                </div>
              </div>
            </div>

            {/* 業務カテゴリ別内訳 */}
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>
                カテゴリ別内訳（月間）
              </p>
              <div className="space-y-2">
                {savings
                  .filter((s) => s.hours > 0)
                  .sort((a, b) => b.savedWeekly - a.savedWeekly)
                  .map((s) => (
                    <div key={s.id} className="flex items-center gap-2">
                      <span>{s.emoji}</span>
                      <span className="text-xs flex-1" style={{ color: "var(--text)" }}>{s.label}</span>
                      <span className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                        -{(s.savedWeekly * 4.33).toFixed(1)}h
                      </span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        ¥{Math.round(s.savedWeekly * 4.33 * hourlyWage).toLocaleString()}
                      </span>
                    </div>
                  ))}
                {savings.filter((s) => s.hours > 0).length === 0 && (
                  <p className="text-sm text-center py-4" style={{ color: "var(--text-muted)" }}>
                    業務時間を入力してください
                  </p>
                )}
              </div>
            </div>

            {/* 換算サマリー */}
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}
            >
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>
                💡 月間削減効果のまとめ
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                月間約<strong style={{ color: "var(--primary)" }}>{totalSavedMonthly.toFixed(0)}時間</strong>を
                節約でき、人件費換算で<strong style={{ color: "var(--primary)" }}>¥{Math.round(monthlyCostSaving).toLocaleString()}</strong>相当です。
                これは1日8時間換算で約<strong style={{ color: "var(--primary)" }}>{(totalSavedMonthly / 8).toFixed(1)}日分</strong>に相当します。
              </p>
            </div>
          </div>
        </div>

        {/* ── 関連書籍 ── */}
        <section className="mt-12">
          <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>
            📚 業務効率化に関連する書籍
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              {
                title: "AIで業務を10倍効率化する方法",
                desc: "実践的な業務自動化の手順とツール選定ガイド。",
                keyword: "AI 業務効率化 自動化 実践",
              },
              {
                title: "タスク管理×AI活用術",
                desc: "AIツールを使ったタスク管理と時間節約の方法。",
                keyword: "タスク管理 AI 仕事術 効率化",
              },
              {
                title: "ノーコードAI自動化入門",
                desc: "プログラミング不要でできる業務自動化の完全ガイド。",
                keyword: "ノーコード AI 自動化 RPA",
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

        <section className="mt-10">
          <FAQ
            title="時間節約シミュレーターについてよくある質問"
            items={[
              {
                q: "AI削減率の数値はどこから来ていますか？",
                a: "各カテゴリのAI削減率は、McKinsey・Gartner・IDCなどの調査レポートと企業導入事例をもとにした目安値です。実際の削減率は業務の複雑さ・ツール・チームスキルによって大きく変わります。",
              },
              {
                q: "週40時間を超える場合はどうすればいいですか？",
                a: "入力フィールドには0〜40hの範囲を推奨していますが、複数人分のチーム全体の時間を入力する場合は人数分を合算してご入力ください。その場合、人件費時給も1人分に調整してください。",
              },
              {
                q: "完全自動化が難しい業務はどれですか？",
                a: "最終的な意思決定・高度な交渉・クリエイティブな戦略立案は現状のAIでは完全自動化が難しいです。本ツールの削減率はこれらの限界を考慮した保守的な数値を使用しています。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
