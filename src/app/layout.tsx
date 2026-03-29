import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://ai-agent-tools.kuras-plus.com";

export const metadata: Metadata = {
  title: "AI Agent Tools | AIエージェント業務効率化ツール集",
  description:
    "AIエージェント導入のROI計算、ツール月額費用比較、業務自動化シミュレーター、プロンプトコスト計算機。エージェンティックAIで業務効率化を数値で可視化。",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "AI Agent Tools",
    images: [{ url: "/ogp/default-ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp/default-ogp.png"],
  },
};

const GA_ID = "G-9PDRJZPH17";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
