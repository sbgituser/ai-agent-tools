import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://ai-agent-tools.kuras-plus.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolUrls = [
    "/tools/roi-calculator",
    "/tools/cost-comparison",
    "/tools/time-saving-simulator",
    "/tools/prompt-cost-calculator",
  ];

  const articleUrls = [
    "/articles",
    "/articles/what-is-agentic-ai",
    "/articles/ai-tool-comparison-2026",
    "/articles/ai-agent-automation-use-cases",
    "/articles/how-to-calculate-ai-roi",
    "/articles/prompt-engineering-guide",
  ];

  return [
    {
      url: BASE_URL,
      priority: 1.0,
      changeFrequency: "weekly",
    },
    ...toolUrls.map((path) => ({
      url: `${BASE_URL}${path}`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    })),
    ...articleUrls.map((path) => ({
      url: `${BASE_URL}${path}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];
}
