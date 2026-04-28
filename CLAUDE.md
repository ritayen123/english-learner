@AGENTS.md

# English Daily — 每日英文學習 PWA

## Tech Stack
- **Framework**: Next.js 16.2.4 (App Router, all pages "use client")
- **Build**: `npx next build --webpack` (必須加 --webpack)
- **DB**: Dexie v4 (IndexedDB), schema v2
- **Styling**: Tailwind CSS v4 + CSS variables (light/dark via `.dark` class)
- **PWA**: next-pwa, service worker at /public/sw.js
- **TTS**: Web Speech API via `src/hooks/useSpeech.ts`
- **SRS**: SM-2 algorithm in `src/lib/srs.ts`
- **Deploy**: GitHub → Vercel auto-deploy (https://english-learner-theta.vercel.app)
- **Repo**: https://github.com/ritayen123/english-learner

## Content Overview
- **6000 字** across 5 domains (business/daily/academic/travel/colloquial)
- **120 篇文章** (business 30, daily 30, academic 30, travel 15, colloquial 15)
- **30 情境對話** (airport 6, hotel 6, restaurant 6, advanced 12)
- **28K 字典** at /public/dict.json

## Project Structure
```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Dashboard (ProgressRing, DailyPhrase, QuickActions)
│   ├── learn/page.tsx      # Flashcard learning (new words)
│   ├── review/page.tsx     # SRS spaced repetition review
│   ├── read/page.tsx       # Article list (filter tabs)
│   ├── read/[id]/page.tsx  # Article reader (word lookup, quiz)
│   ├── words/page.tsx      # Word browser (search, filter, custom add)
│   ├── me/page.tsx         # Stats, charts, export
│   ├── settings/page.tsx   # User preferences
│   └── travel/
│       └── scenarios/      # Dialogue practice list + [id] player
├── components/ui/          # Flashcard, BottomNav, ProgressRing, Icons, etc.
├── components/providers/   # ClientProviders (ErrorBoundary + Toast + AppContext)
├── data/                   # Static data (words, articles, scenarios)
│   ├── words.ts            # Combines all word sources → wordsData export
│   ├── words-advanced.ts   # b701-b1400, a701-a1400 (2000 words)
│   ├── words-daily-advanced.ts  # d601-d1400 (800 words)
│   ├── words-travel.ts     # t001-t500 (500 words)
│   ├── words-travel-advanced.ts # t501-t700 (200 words)
│   ├── words-colloquial.ts # c001-c500 (500 words)
│   ├── articles.ts + articles-extra.ts  # 120 articles
│   ├── scenarios.ts        # 18 base dialogues + merge
│   └── scenarios-advanced.ts # 12 advanced dialogues (s19-s30)
├── hooks/                  # useSpeech, useSwipe, useStudySession, useToast
└── lib/
    ├── db/index.ts         # Dexie schema (words, userWords, articles, etc.)
    ├── context/AppContext.tsx  # Global state (settings, stats, dark mode sync)
    ├── services/           # word, article, srs, stats, scenario, settings
    ├── srs.ts              # SM-2 algorithm
    ├── dict-cache.ts       # dict.json singleton cache
    └── daily-phrase.ts     # Daily travel phrase selector
```

## Word ID Conventions
| Domain | Base | Advanced | Total |
|--------|------|----------|-------|
| Business | b001-b700 | b701-b1400 | 1400 |
| Daily | d001-d600 | d601-d1400 | 1400 |
| Academic | a001-a700 | a701-a1400 | 1400 |
| Travel | t001-t500 | t501-t700 | 700 |
| Colloquial | c001-c500 | — | 500 |

## Key Patterns
- Services use **dynamic import** for data files (lazy load in init())
- Dark mode: inline `<script>` in layout.tsx reads localStorage before hydration
- Filter pages use **URL searchParams** to persist state
- All Chinese text is **Traditional Chinese** (zh-TW)
- Difficulty: words 1-5, articles/scenarios 1-3
- Settings stored in localStorage key `"english_learner_settings"`
