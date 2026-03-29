import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "AI導入のROIを計算する方法｜経営者向けガイド | AI Agent Tools",
  description:
    "AI導入の投資対効果（ROI）計算式から意思決定フレームワークまで経営者向けに解説。正しいROI計算のポイントと稟議書作成のヒントも紹介。",
  openGraph: {
    title: "AI導入のROIを計算する方法｜経営者向けガイド",
    description: "投資対効果の計算式から意思決定フレームワークまで、経営者向けに体系的に解説。",
    images: [{ url: "/ogp/articles/how-to-calculate-ai-roi.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/articles/how-to-calculate-ai-roi.png"],
  },
};

export default function HowToCalculateAIROIPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "記事", href: "/articles" },
            { label: "AI導入ROI計算" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>経営</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>読了時間: 約9分 · 2026年3月更新</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ color: "var(--text)" }}>
            AI導入のROIを計算する方法<br className="sm:hidden" />｜経営者向けガイド
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            「AIを導入したいが投資効果が読めない」という経営者・管理職の方向けに、ROIの正しい計算方法と意思決定フレームワークを解説します。
          </p>
        </div>

        <article className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>ROI計算の基本公式</h2>
            <div className="rounded-xl p-5 border text-center" style={{ backgroundColor: "var(--bg-soft)", borderColor: "var(--primary)" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>年間ROI計算式</p>
              <div className="text-lg font-bold mb-2" style={{ color: "var(--primary)" }}>
                ROI（%）= （年間利益 ÷ 初期投資額） × 100
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                年間利益 = 年間コスト削減額 − 年間ツール費用 − 初期費用
              </p>
            </div>

            <div className="mt-4 rounded-xl p-5 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>計算例</p>
              <div className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>自動化業務の月間時間</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>80時間</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>人件費時給（社保込）</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>¥2,500</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>想定自動化率</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>60%</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>月間コスト削減額</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>¥120,000</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>AIツール月額費用</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>¥20,000</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>月間純節約</span>
                  <span className="font-semibold" style={{ color: "#15803d" }}>¥100,000</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>初期費用（設定・研修）</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>¥300,000</span>
                </div>
                <div className="flex justify-between py-1 border-b" style={{ borderColor: "var(--border)" }}>
                  <span>投資回収期間</span>
                  <span className="font-semibold" style={{ color: "var(--primary)" }}>3ヶ月</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>年間ROI</span>
                  <span className="font-bold text-lg" style={{ color: "var(--primary)" }}>300%</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>ROI計算でよくある3つの間違い</h2>
            <div className="space-y-3">
              {[
                {
                  emoji: "❌",
                  mistake: "社会保険料を含めない人件費計算",
                  correct: "月給÷160時間の時給に、社会保険料（約15〜20%）を加えた実態コストで計算する。月給30万円の場合、¥1,875/h ではなく ¥2,250〜¥2,300/h が正しい。",
                },
                {
                  emoji: "❌",
                  mistake: "自動化率を100%で計算",
                  correct: "実際には例外処理・確認作業が残るため、60〜80%が現実的な自動化率。100%で計算すると投資回収期間を過度に短く見積もるリスクがある。",
                },
                {
                  emoji: "❌",
                  mistake: "学習・移行期間のコストを無視",
                  correct: "導入後1〜3ヶ月は生産性が一時的に低下する。この「移行コスト」（社員の学習時間×人件費）をROI計算に含めることで、より正確な試算ができる。",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-sm font-bold mb-2" style={{ color: "#dc2626" }}>{item.emoji} よくある間違い: {item.mistake}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <strong style={{ color: "#15803d" }}>✅ 正しいアプローチ:</strong> {item.correct}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>経営者向け意思決定フレームワーク</h2>
            <div className="space-y-3">
              {[
                { step: "Step 1", title: "対象業務の棚卸し", desc: "繰り返し・時間消費・ミス発生の多い業務をリストアップし、月間時間と担当者コストを算出する。" },
                { step: "Step 2", title: "パイロット対象の選定", desc: "ROI見込みが高く、失敗しても影響が限定的な業務を1〜2つ選ぶ。最初から全社展開は避ける。" },
                { step: "Step 3", title: "3ヶ月パイロット実施", desc: "小規模で実際に動かし、想定ROIと実績ROIを比較。数値が想定の70%以上なら全社展開を検討。" },
                { step: "Step 4", title: "成果指標（KPI）の設定", desc: "処理時間・エラー率・顧客満足度など、定量測定できるKPIを事前に決める。「感覚で改善した」では経営判断に使えない。" },
                { step: "Step 5", title: "段階的な展開", desc: "成功したパイロットを横展開しながら、組織のAIリテラシーを高める研修も並行して実施する。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 rounded-xl p-4 border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div
                    className="w-16 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "var(--primary)", color: "white" }}
                  >
                    {item.step}
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
            <p className="text-white font-bold text-lg mb-2">ROI計算機で今すぐ試算する</p>
            <p className="text-white/80 text-sm mb-4">業務時間・人件費・ツール費用を入力するだけで、投資回収期間・年間ROIを自動計算します。</p>
            <Link
              href="/tools/roi-calculator"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              💰 ROI計算機を使う
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
                href: "/tools/roi-calculator",
                emoji: "💰",
                title: "AIエージェント導入ROI計算機",
                desc: "月間削減額・投資回収期間を即計算",
              },
              {
                href: "/tools/time-saving-simulator",
                emoji: "⏱️",
                title: "業務自動化 時間節約シミュレーター",
                desc: "年間節約時間・人件費換算を可視化",
              },
              {
                href: "/tools/prompt-cost-calculator",
                emoji: "🔢",
                title: "プロンプトコスト計算機",
                desc: "API費用をモデル別に比較計算",
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
            title="AI導入ROIについてよくある質問"
            items={[
              {
                q: "ROI300%はよくある数値ですか？",
                a: "Gartner・McKinseyの調査では、AI自動化に成功した企業のROI中央値は150〜400%とされています。ただしこれは「うまくいったケース」の数値であり、全導入案件の平均ではありません。パイロット段階での検証が重要です。",
              },
              {
                q: "稟議書にROI計算を入れるときのコツは？",
                a: "①楽観・現実的・保守的の3シナリオで試算する②数値の前提条件を明記する③競合他社の導入事例を添付する④リスクと対策を記載する、の4点が承認率を高めます。上司が「この数値はどこから?」と思わないよう根拠を明示することが重要です。",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
