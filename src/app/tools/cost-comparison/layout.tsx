import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIツール月額費用比較ツール | AI Agent Tools",
  description:
    "利用人数・必要機能を選ぶと、ChatGPT・Claude・Gemini・Copilotの月額費用を比較表で表示。コスパランキング付き。無料・登録不要。",
  openGraph: {
    title: "AIツール月額費用比較ツール",
    description: "ChatGPT・Claude・Gemini・Copilotを徹底比較。無料・登録不要。",
    images: [{ url: "/ogp/tools/cost-comparison.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/tools/cost-comparison.png"],
  },
};

export default function CostComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
