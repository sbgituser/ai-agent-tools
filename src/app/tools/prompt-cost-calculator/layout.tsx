import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロンプトコスト計算機 | AI Agent Tools",
  description:
    "モデル・入力/出力トークン数・月間利用回数を入力すると月間API費用を算出。GPT-4o/Claude/Geminiの費用比較とコスト最適化提案も。無料・登録不要。",
  openGraph: {
    title: "プロンプトコスト計算機",
    description: "API費用をモデル別に比較計算。無料・登録不要。",
    images: [{ url: "/ogp/tools/prompt-cost-calculator.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/tools/prompt-cost-calculator.png"],
  },
};

export default function PromptCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
