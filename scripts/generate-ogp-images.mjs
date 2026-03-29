/**
 * OGP画像生成スクリプト
 * 使用方法: node scripts/generate-ogp-images.mjs
 * 依存: satori, @resvg/resvg-js, @fontsource/noto-sans-jp
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync, readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import React from 'react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;
const SITE_NAME = 'AIエージェントツール';
const SITE_URL = 'ai-agent-tools.kuras-plus.com';
const COLOR_PRIMARY = '#5b21b6';
const COLOR_ACCENT = '#7c3aed';

const pages = [
  {
    path: 'default-ogp.png',
    title: 'AIエージェント業務効率化ツール集',
    subtitle: 'ROI計算・費用比較・自動化シミュレーション',
  },
  {
    path: 'tools/roi-calculator.png',
    title: 'AIエージェント導入ROI計算機',
    subtitle: '月間削減額・ROI・投資回収期間を即計算',
  },
  {
    path: 'tools/cost-comparison.png',
    title: 'AIツール月額費用比較ツール',
    subtitle: 'ChatGPT・Claude・Gemini・Copilotを比較',
  },
  {
    path: 'tools/time-saving-simulator.png',
    title: '業務自動化 時間節約シミュレーター',
    subtitle: '年間節約時間・人件費換算を可視化',
  },
  {
    path: 'tools/prompt-cost-calculator.png',
    title: 'プロンプトコスト計算機',
    subtitle: 'API費用をモデル別に比較計算',
  },
  {
    path: 'articles/what-is-agentic-ai.png',
    title: 'エージェンティックAIとは？',
    subtitle: '2026年に知っておくべき新概念を解説',
  },
  {
    path: 'articles/ai-tool-comparison-2026.png',
    title: 'AIツール料金・性能比較【2026年最新】',
    subtitle: 'ChatGPT vs Claude vs Gemini vs Copilot',
  },
  {
    path: 'articles/ai-agent-automation-use-cases.png',
    title: 'AIエージェントで業務を自動化',
    subtitle: '具体的な5つのユースケースを解説',
  },
  {
    path: 'articles/how-to-calculate-ai-roi.png',
    title: 'AI導入のROIを計算する方法',
    subtitle: '経営者向け完全ガイド',
  },
  {
    path: 'articles/prompt-engineering-guide.png',
    title: 'プロンプトエンジニアリング入門',
    subtitle: 'AIを最大限活用するコツ',
  },
];

/** Google Fonts CSS API で woff1 フォントURLを取得 (satori は woff2 非対応) */
async function loadFontFromGoogleFonts(text) {
  const uniqueChars = [...new Set(text.split(''))].join('');
  const url =
    `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700` +
    `&text=${encodeURIComponent(uniqueChars)}&display=swap`;

  // IE系UA を使うと woff1 が返ってくる
  const cssRes = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
    },
  });
  const css = await cssRes.text();
  const matches = [...css.matchAll(/url\(([^)]+)\)/g)];
  if (matches.length === 0) throw new Error('Font URL not found in CSS');

  const fontBuffers = await Promise.all(
    matches.map(async ([, fontUrl]) => {
      const res = await fetch(fontUrl);
      return res.arrayBuffer();
    })
  );
  return fontBuffers.map((data) => ({
    name: 'Noto Sans JP',
    data,
    weight: 700,
    style: 'normal',
  }));
}

/**
 * @fontsource/noto-sans-jp のローカル .woff ファイルからフォントを読み込む
 * (satori は woff2 非対応のため .woff を使用)
 */
function loadFontFromLocal() {
  const fontDir = join(ROOT, 'node_modules/@fontsource/noto-sans-jp/files');
  const allFiles = readdirSync(fontDir).filter(
    (f) => f.endsWith('-700-normal.woff') && !f.endsWith('.woff2')
  );
  // 最初の40ファイル（よく使う文字範囲をカバー）
  const files = allFiles.slice(0, 40);
  console.log(`  ローカルフォント: ${files.length} ファイル使用`);
  return files.map((file) => {
    const buf = readFileSync(join(fontDir, file));
    // Node.js Buffer から正しく ArrayBuffer を取得
    const arrayBuf = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    return {
      name: 'Noto Sans JP',
      data: arrayBuf,
      weight: 700,
      style: 'normal',
    };
  });
}

async function loadFonts(allText) {
  try {
    console.log('  フォント取得中 (Google Fonts woff)...');
    return await loadFontFromGoogleFonts(allText);
  } catch (err) {
    console.warn('  Google Fonts 取得失敗、ローカルフォントを使用:', err.message);
    try {
      return loadFontFromLocal();
    } catch (localErr) {
      console.warn('  ローカルフォント読み込み失敗:', localErr.message);
      return null;
    }
  }
}

function makeOGPElement(title, subtitle) {
  const el = React.createElement;

  return el(
    'div',
    {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px',
        background: `linear-gradient(135deg, ${COLOR_PRIMARY} 0%, ${COLOR_ACCENT} 100%)`,
        fontFamily: '"Noto Sans JP"',
        position: 'relative',
      },
    },
    // ── ヘッダー（サイト名）──
    el(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
      el(
        'div',
        {
          style: {
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
          },
        },
        '🤖'
      ),
      el(
        'div',
        {
          style: {
            color: 'rgba(255,255,255,0.92)',
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.02em',
          },
        },
        SITE_NAME
      )
    ),
    // ── メインコンテンツ（タイトル + サブタイトル）──
    el(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '20px' } },
      el(
        'div',
        {
          style: {
            color: 'white',
            fontSize: title.length > 18 ? '44px' : '52px',
            fontWeight: 700,
            lineHeight: 1.25,
            maxWidth: '1000px',
          },
        },
        title
      ),
      el(
        'div',
        {
          style: {
            color: 'rgba(255,255,255,0.78)',
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.4,
          },
        },
        subtitle
      )
    ),
    // ── フッター（URL）──
    el(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '18px',
          fontWeight: 700,
        },
      },
      SITE_URL
    )
  );
}

async function main() {
  console.log('🎨 OGP画像を生成します...');

  // 全テキストを結合してフォント読み込みに使用
  const allText = [
    SITE_NAME,
    SITE_URL,
    ...pages.flatMap((p) => [p.title, p.subtitle]),
  ].join('');

  const fonts = await loadFonts(allText);
  if (!fonts) {
    console.warn('⚠ フォント読み込みに失敗しました。OGP画像の生成をスキップします。');
    process.exit(0);
  }

  let successCount = 0;
  for (const page of pages) {
    try {
      const outPath = join(ROOT, 'public', 'ogp', page.path);
      mkdirSync(dirname(outPath), { recursive: true });

      const element = makeOGPElement(page.title, page.subtitle);
      const svg = await satori(element, {
        width: WIDTH,
        height: HEIGHT,
        fonts,
      });

      const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } });
      const pngData = resvg.render().asPng();
      writeFileSync(outPath, pngData);
      console.log(`  ✓ public/ogp/${page.path}`);
      successCount++;
    } catch (err) {
      console.warn(`  ✗ ${page.path}: ${err.message}`);
    }
  }

  console.log(`\n✅ 完了: ${successCount}/${pages.length} 枚のOGP画像を生成しました。`);
}

main().catch((err) => {
  console.error('❌ OGP画像生成でエラーが発生しました:', err);
  process.exit(0); // ビルドを止めない
});
