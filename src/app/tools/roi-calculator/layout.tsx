import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIエージェント導入ROI計算機 | AI Agent Tools",
  description:
    "自動化対象業務の時間・人件費・ツール費用を入力すると、月間コスト削減額・投資回収期間・年間ROI・3年累積効果を即座に算出します。無料・登録不要。",
  openGraph: {
    title: "AIエージェント導入ROI計算機",
    description: "月間削減額・ROI・投資回収期間を即計算。無料・登録不要。",
    images: [{ url: "/ogp/tools/roi-calculator.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/tools/roi-calculator.png"],
  },
};

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
