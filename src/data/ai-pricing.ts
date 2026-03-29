// AI Tool Pricing Data — 2026年3月時点
// 定期的な更新が必要です

export interface Plan {
  name: string;
  monthlyJPY: number; // 月額円（1USD=150円換算）
  features: string[];
  maxUsers?: number;
  requestsPerMonth?: number | "unlimited";
}

export interface AITool {
  id: string;
  name: string;
  emoji: string;
  color: string;
  plans: Plan[];
  strengths: string[];
}

export const AI_TOOLS: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    emoji: "🟢",
    color: "#10a37f",
    plans: [
      {
        name: "Free",
        monthlyJPY: 0,
        features: ["GPT-4o-mini", "制限付きGPT-4o", "DALL-E", "データ分析(制限)"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "Plus",
        monthlyJPY: 3000,
        features: ["GPT-4o", "o1 / o3-mini", "DALL-E 3", "データ分析", "画像解析", "カスタムGPT"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "Team",
        monthlyJPY: 3750,
        features: ["Plusの全機能", "チーム管理", "データ非学習", "管理者コンソール"],
        maxUsers: 1,
      },
      {
        name: "Enterprise",
        monthlyJPY: 0, // 要問い合わせ
        features: ["Team全機能", "SSO", "高度なセキュリティ", "カスタム利用上限"],
        requestsPerMonth: "unlimited",
      },
    ],
    strengths: ["テキスト生成", "コード生成", "画像生成", "データ分析"],
  },
  {
    id: "claude",
    name: "Claude",
    emoji: "🟠",
    color: "#d4730a",
    plans: [
      {
        name: "Free",
        monthlyJPY: 0,
        features: ["Claude 3.5 Haiku", "制限付き利用", "プロジェクト機能"],
        requestsPerMonth: 50,
      },
      {
        name: "Pro",
        monthlyJPY: 3000,
        features: ["Claude claude-sonnet-4-6", "Claude Opus 4.6", "5倍の利用量", "プロジェクト", "アーティファクト"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "Team",
        monthlyJPY: 4500,
        features: ["Proの全機能", "チーム管理", "データ非学習", "管理者機能"],
        maxUsers: 1,
      },
      {
        name: "Enterprise",
        monthlyJPY: 0,
        features: ["Team全機能", "SSO", "カスタムモデル", "高度なセキュリティ"],
        requestsPerMonth: "unlimited",
      },
    ],
    strengths: ["テキスト生成", "コード生成", "長文処理", "推論・分析"],
  },
  {
    id: "gemini",
    name: "Gemini",
    emoji: "🔵",
    color: "#1a73e8",
    plans: [
      {
        name: "Free",
        monthlyJPY: 0,
        features: ["Gemini 2.0 Flash", "Google Workspace連携(基本)", "画像解析"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "Advanced",
        monthlyJPY: 2900,
        features: ["Gemini Ultra", "Workspace拡張機能", "2TBストレージ", "Deep Research"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "Business",
        monthlyJPY: 2900,
        features: ["Advancedの全機能", "企業向けセキュリティ", "管理コンソール", "データ非学習"],
        maxUsers: 1,
      },
    ],
    strengths: ["テキスト生成", "データ分析", "Google連携", "長文処理"],
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    emoji: "🟣",
    color: "#7c3aed",
    plans: [
      {
        name: "Free",
        monthlyJPY: 0,
        features: ["GPT-4", "画像生成(DALL-E)", "Webブラウジング"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "Pro",
        monthlyJPY: 3000,
        features: ["優先アクセス", "Office統合", "Copilot Studio", "Designer強化"],
        requestsPerMonth: "unlimited",
      },
      {
        name: "M365 Copilot",
        monthlyJPY: 4500,
        features: ["Word/Excel/PowerPoint/Teams統合", "会議要約", "メール下書き", "データ分析"],
        maxUsers: 1,
      },
    ],
    strengths: ["テキスト生成", "Office統合", "コード補完", "会議サポート"],
  },
];
