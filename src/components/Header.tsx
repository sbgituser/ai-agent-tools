import Link from "next/link";

interface HeaderProps {
  toolName?: string;
  toolEmoji?: string;
}

export default function Header({ toolName, toolEmoji }: HeaderProps) {
  return (
    <header
      className="w-full h-14 flex items-center px-5 flex-shrink-0 sticky top-0 z-50"
      style={{
        backgroundColor: "var(--primary)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity no-underline"
        >
          <span
            className="flex items-center justify-center w-7 h-7 rounded-lg text-base"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            🤖
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-white font-bold text-sm leading-tight tracking-tight">AI Agent Tools</span>
            <span className="text-white/40 font-normal text-xs hidden sm:inline">
              by kuras-plus
            </span>
          </div>
        </Link>

        {toolName && (
          <>
            <span className="text-white/30 text-sm mx-0.5">›</span>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-md truncate"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.85)" }}
            >
              {toolEmoji && <span className="mr-1">{toolEmoji}</span>}
              {toolName}
            </span>
          </>
        )}
      </div>

      <nav className="flex items-center gap-0.5">
        <Link
          href="/tools/roi-calculator"
          className="text-white/70 hover:text-white hover:bg-white/10 text-xs px-3 py-1.5 rounded-md transition-colors font-medium hidden sm:inline-flex"
        >
          ROI計算
        </Link>
        <Link
          href="/tools/cost-comparison"
          className="text-white/70 hover:text-white hover:bg-white/10 text-xs px-3 py-1.5 rounded-md transition-colors font-medium hidden sm:inline-flex"
        >
          費用比較
        </Link>
        <Link
          href="/articles"
          className="text-white/70 hover:text-white hover:bg-white/10 text-xs px-3 py-1.5 rounded-md transition-colors font-medium"
        >
          記事
        </Link>
        <Link
          href="/"
          className="text-white/70 hover:text-white hover:bg-white/10 text-xs px-3 py-1.5 rounded-md transition-colors font-medium"
        >
          ホーム
        </Link>
      </nav>
    </header>
  );
}
