import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "業務自動化 時間節約シミュレーター | AI Agent Tools",
  description:
    "メール・資料作成・データ入力など業務カテゴリ別の週間時間を入力。AI導入後の削減時間・年間節約時間・人件費換算を可視化します。無料・登録不要。",
  openGraph: {
    title: "業務自動化 時間節約シミュレーター",
    description: "年間節約時間・人件費換算を可視化。無料・登録不要。",
    images: [{ url: "/ogp/tools/time-saving-simulator.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/tools/time-saving-simulator.png"],
  },
};

export default function TimeSavingSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
