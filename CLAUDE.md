# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Behavioral Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## Current status 
We are preparing the app for public deployment. We are doing this in phases. 

**5 phases:**

Auth — Google OAuth, login screen, wire user_id to all routes
Message persistence — add messages table, save/load chat history
Database migration — move to Supabase (cloud Postgres)
File storage — move PKB + uploads off local disk
Deploy to Railway + rate limiting

## Project Overview

**Orchestral-AI** is an AI-powered product knowledge platform (PKB/PKC system). An Organisation is the top-level container (the "Central Intelligence") — it holds a shared org PKB inherited by all products inside it. Each product has its own PKB, personas, documents, and inbox. Chat sessions are personal per user but draw from both the shared org PKB and the product PKB.

---

## Build & Development Commands
```bash
npm run dev      # Development server with hot reload (port 5000)
npm run build    # Production build (esbuild + Vite)
npm start        # Run production build
npm run check    # TypeScript type checking
npm run db:push  # Push Drizzle schema to PostgreSQL
```

## Environment Setup

Copy `.env.example` to `.env` and configure:
- `OPENAI_API_KEY` - Your OpenAI API key
- `DATABASE_URL` - PostgreSQL connection string (Docker: `orchestral-ai` database, port **5431** not 5432)
- `PORT` - Server port (default: 5000)

**Critical:** `import 'dotenv/config'` must be the **first line** of `server/index.ts`.

---

## Architecture

### Tech Stack
- **Frontend:** React 18, Vite, Wouter, TanStack Query, Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Express 5.x, TypeScript ES modules
- **Database:** PostgreSQL via Drizzle ORM
- **PKB Storage:** File-based JSON with snapshots (not in database)
- **AI:** OpenAI GPT-4o

---

## Frontend Design System (Canonical — V5)

All new UI work must follow these rules. Do not deviate without explicit instruction.

### Primary Accent Color
- **#DE7356** (terracotta orange). This replaces the previous red primary entirely.
- CSS variable: `--primary: 14 65% 60%` (approximate HSL for #DE7356)
- Used for: CTAs, active states, focus rings, progress fills, brand marks.
- **Never** used for confidence indicators or status signals.

### Typography
- **Space Grotesk** — headings, labels, product names, numerical displays (`font-heading`)
- **Inter** — all body text, UI copy, inputs, descriptions (`font-sans`, default)
- Manrope and DM Sans are removed. Do not import or reference them.

### Semantic Color System
All status and state colors are semantically anchored. Do not use these colors for decoration.

| Color | Semantic meaning | Examples |
|-------|-----------------|---------|
| **Emerald** (`hsl(160 84% 44%)`) | Confirmed / healthy / high confidence | High confidence badge, "Active" state, evidenced facts |
| **Amber** (`hsl(38 92% 60%)`) | Warning / inferred / medium confidence | Medium confidence badge, onboarding state, inferred facts, stale PKB fields |
| **Red** (`hsl(0 72% 51%)`) | Conflict / disputed / low confidence | Low confidence badge, conflicts badge, disputed facts |
| **Blue** (`hsl(217 91% 60%)`) | Informational / neutral data | Source counts, "New" state, general informational pills |
| **Orange (#DE7356)** | Primary action only | Buttons, active tabs, brand |

### Confidence Indicators (three-tier)
- **High confidence (≥70%):** emerald — `text-glow-emerald`, `bg-glow-emerald`
- **Medium confidence (40–69%):** amber — `text-glow-amber`, `bg-glow-amber`
- **Low confidence (<40%):** red — `text-destructive`, `bg-destructive`
- The primary orange (`#DE7356`) is **never** used for confidence bars or badges.
- This three-tier system applies everywhere: product header badge, KnowledgeTab summary badge, confidence bar fill, circular SVG strokes.

### Theme Modes
- **Dark** (default): near-black background (`hsl(0 0% 4%)`), full particle background, semantic glow colors active.
- **Light**: inverted palette, same semantic color system, particles adapt.
- **Minimal mode** — High-contrast monochrome view, strips decorative elements, clean icons, content-focused.

### Surface Layering (preserve exactly)
```
--surface-outer:    0 0% 2%    ← page background
--surface-inner:    0 0% 7%    ← inner panels / workspace container
--surface-elevated: 0 0% 10%   ← cards
--surface-hover:    0 0% 13%   ← card hover state
```
Utility classes: `.outer-frame`, `.inner-panel`, `.surface-card` — use these, do not inline equivalent bg colors.

### Removed from Prototype (do not implement)
- Four-font system — reduced to Space Grotesk + Inter.
- Hardcoded emoji-per-product-name map (`productEmojis`).
- Conversation count progress bar widget in chat sidebar.
- Decorative glow orbs may be kept only if very subtle (opacity < 0.15).

---

## Directory Structure
```
client/src/           # React frontend
  components/         # UI components
  lib/                # queryClient, utils
server/               # Express backend
  agents/             # AI agents — see V5 agent structure below
  services/           # pkb-storage, pkc-curator, ingestion-service
  routes.ts           # API endpoints
shared/               # Isomorphic types and Zod schemas
  schema.ts           # Database tables + validation
pkb_store/            # File-based PKB JSON (per product)
uploads/              # Uploaded documents (per product)
```

---

## Core Mental Model
```
Organisation (Central Intelligence)
  ├── Org PKB → pkb_store/org_{orgId}/pkb.json (shared, read by all products)
  ├── Org inbox (conflict queue only)
  ├── Central Intelligence chat (cross-product, on dashboard)
  └── Products[]
        ├── Product PKB → pkb_store/product_{productId}/pkb.json
        ├── Personas + ICP (shared across team)
        ├── Documents (shared across team)
        ├── Product inbox
        └── Conversations[] (personal per user)
              └── Messages[]
```

## Navigation Flow
```
Landing Page
  → Organisation Setup (one-time form)
      → Dashboard (hero + central intelligence chat + product grid)
          → Product Workspace
                ├── Chat tab (default)
                ├── Knowledge tab
                ├── Personas tab
                └── Documents tab
                + Inbox overlay (bell icon)
```

## Dashboard Tutorial (V1)

- The first-run dashboard tutorial is frontend-only and intentionally does **not** persist through the backend.
- Seen-state is currently stored in org-scoped browser `localStorage` using the pattern `kaizen.dashboardTutorialSeen.org_<orgId>`.
- Mark the tutorial as seen on either `Skip` or `Done`.
- This is a temporary implementation choice for speed and scope control. If cross-device or account-level memory is needed later, migrate this state to server-side persistence instead of extending the localStorage approach.

---

## V5 Agent Architecture (Current — Complete)

V5 consolidated 6 agents into 2 real agents + 1 utility function + 1 post-processing function. This is the current architecture. Do not reference or restore old agent files.

### Agent Structure

| File | Type | Purpose |
|------|------|---------|
| `base-agent.ts` | Shared utilities | `callLLM()`, `streamLLM()`, `parseJSONResponse()`, `buildAgentContext()`, `computeLearnerMode()` |
| `product-interviewer.ts` | Learner Agent | Conversational KB builder — 6-state behavioral model |
| `product-explainer.ts` | Explainer Agent | Answers questions — 3 surfaces, tiered by KB confidence |
| `information-extractor.ts` | Utility function | Parses documents/URLs into structured facts. No conversational logic. |
| `synthesizer-function.ts` | Post-processing function | Runs after every KB write — produces brief, personas, confidence score, gaps, suggested questions |

**Retired in V5 (deleted — do not restore):**
- `gap-identifier.ts` — absorbed into Synthesizer
- `persona-extractor.ts` — absorbed into Synthesizer
- `product-synthesizer.ts` — replaced by Synthesizer Function
- `persona-synthesizer.ts` — wrapped the retired persona-extractor, also deleted

### Data Flow (V5)
```
User uploads doc/URL
  ↓
Ingestion Service extracts text
  ↓
Information Extractor identifies facts
  ↓
PKC Curator validates and writes to PKB
  ↓
/process SSE pipeline runs
  ↓
Synthesizer Function fires (debounced 3s after last KB write)
  ↓
Synthesizer writes: brief, personas, gaps, confidence score,
kb_health_narrative, kb_stage, suggested_questions to PKB + DB
  ↓
Frontend refetches PKB — chat injects ingestion_complete message
```

---

## Agent Context (V5)

Every agent call is enriched by `buildAgentContext()` in `base-agent.ts` after `loadCombinedContext()` loads the PKB.

`formatPKBForContext()` in `product-explainer.ts` dynamically walks the PKB instead of reading hardcoded paths. All facts are visible to the synthesizer and explainer regardless of field path. It recursively renders `pkb.facts`, `pkb.extensions`, and `pkb.derived_insights`, skipping metadata keys (sources, evidence, quality_tag, etc.) and only showing actual values.
```typescript
EnrichedAgentContext {
  // Pass-through
  orgId, productId, productType, primaryMode

  // Names (from DB join)
  productName: string
  orgName: string

  // KB health (computed from PKB)
  kb: {
    confidenceScore: number
    stage: "empty" | "building" | "established"
    criticalGapsCount: number
    totalGapsCount: number
    hasIngested: boolean
    factCount: number
  }

  // Session (scaffolded — userRole hardcoded "owner" until auth)
  session: {
    isFirstProductSession: boolean
    userRole: "owner" | "member"
    triggeredBy: "founder" | "teammate"
  }
}
```

`computeLearnerMode(kb, session)` returns one of 6 states — see Learner section below.

---

## Learner Agent (product-interviewer.ts)

### Behavioral model — 6 states

| Mode | Trigger | Behaviour |
|------|---------|-----------|
| `first_session_empty_kb` | First session + no ingestion + stage=empty | Warm intro, ask for doc/URL |
| `first_session_has_docs` | First session + docs already ingested | Acknowledge captured content, surface gaps |
| `returning_building` | Returning + stage=building | Brief progress recap, stay available |
| `returning_gap_fill` | Returning + confidence ≥ 50 | "Almost there", direct to gaps |
| `established_maintenance` | Stage=established + owner | Offer to update or review, no interview |
| `wrong_door` | Stage=established + teammate | Redirect to Explainer tab |

### Key behaviours
- Never asks gap questions in chat — directs founder to GapFillDialog instead
- Never re-asks anything already in `existingFacts`
- `[SESSION_START]` trigger: empty message → route normalises to `[SESSION_START]` → Learner generates opening message
- Session ends cleanly when `criticalGapsCount` reaches 0
- `chatSchema.message` accepts empty string (`.min(0)`) to support SESSION_START
- Conversation history (last 20 messages, token-budgeted) is passed to the LLM for multi-turn context
- Learner chat triggers `scheduleSynthesizer()` after extracting facts (debounced 3s). No trigger if no facts extracted.

---

## Explainer Agent (product-explainer.ts)

### Three surfaces

**`product_chat`** — inside product workspace
- Tiered answer mode by `confidenceScore`:
  - < 40% (`funnel_to_learner`): answer briefly + one-time tip to use Learner
  - 40–69% (`answer_with_caveat`): answer fully + one caveat max if area missing: "I don't have detail on that yet — it hasn't been captured in the knowledge base"
  - ≥ 70% (`answer_clean`): answer cleanly, no hedging
- First use wow moment: renders 3 suggested questions as clickable chips when `isFirstExplainerUse === true`
- `isFirstExplainerUse` checked against conversations table (mode=explainer, productId, userId)

**`dashboard_chat`** — Central Intelligence
- Answers across all product PKBs, attributes to specific product
- Missing data: "[Product name] — this hasn't been captured yet" — never skipped silently
- No tiering, no funneling — query surface only
- Fixed to `answer_clean` regardless of individual product confidence

**`app_guide`** — default CI mode on load
- Static app knowledge injected, no PKB loaded
- Answers "how do I use this app" questions
- Two-segment pill toggle in CI chat bar: Guide (default) / Knowledge
- Tooltips on toggle segments explain each mode
- Switching modes clears conversation

### Suggested questions rendering
- LLM wraps suggested questions in `<suggested_questions>...</suggested_questions>` block
- Frontend parser in `ChatTab.tsx` detects block, strips it from prose, renders as clickable pill chips
- Chips auto-send the question text when clicked
- Conversation history (last 20 messages, token-budgeted) is passed to the LLM for multi-turn context

---

## Synthesizer Function (synthesizer-function.ts)

Fires after every KB write via per-productId debounce (3s delay, resets on new write).

### Triggered after
- `POST /process` — synchronously before `done` SSE event
- `POST /fill-gaps` — debounced 3s after answers written
- `POST /recheck-gaps` — immediate (delayMs=0, explicit user action)
- **Learner chat** — debounced 3s after any facts are extracted from conversation (not triggered on zero extractions)

### Confidence scoring — deterministic formula (no LLM)
```
confidenceScore = fieldCoverage(70) + qualityModifier(20) + sourceDiversity(10)
```

**Field coverage (70pts):** weighted sum of populated fields / total field weights. B2B and B2C use different field weight maps. Hybrid gets both.

**Quality modifier (20pts):** average lifecycle_status quality across populated facts:
- `evidenced` → 1.0, `asserted` → 0.8, `inferred` → 0.5, `disputed`/`stale` → 0.0, missing → 0.6

**Source diversity (10pts):** 3+ source types=10, 2=6, 1=3, 0=0

Same PKB always returns same score. Fully deterministic and auditable.

### Stage thresholds
- `empty`: score = 0
- `building`: score 1–69
- `established`: score ≥ 70

### LLM produces (one call)
`productBrief`, `who_its_for`, `why_it_wins`, `key_message_pillars[]`, `confidenceReasoning`, `personas[]` (max 3), `suggestedQuestions[]` (exactly 3 or empty), `gapAnalysis.critical[]`, `gapAnalysis.standard[]`

### Writes to PKB
`pkb.meta.product_brief`, `pkb.meta.kb_health_narrative`, `pkb.meta.kb_stage`, `pkb.meta.suggested_questions`, `pkb.meta.confidence_score`, `pkb.personas`, `pkb.gaps.current`, `pkb.derived_insights.product_brief.who_its_for`, `pkb.derived_insights.product_brief.why_it_wins`, `pkb.derived_insights.product_brief.key_message_pillars`

### Gap handling during re-synthesis
- Old `gaps.current` is archived to `gaps.history` (capped at 50 entries) before replacement
- `do_not_ask: true` markings survive re-synthesis — carried forward by field_path matching
- Skipped field_paths are passed to the synthesizer LLM prompt ("do NOT generate gaps for these") to discourage regeneration

### Writes to DB
`products.confidence_score`, `products.updated_at`

---

## Gap Filling Flow (V5 + Phase 4)
```
/process completes
  ↓
ingestion_complete message injected into chat
("I've processed your content — N gaps found. [Fill gaps →]")
  ↓
User clicks "Fill gaps →" button in chat
OR clicks gap card in Knowledge tab → Gaps sub-tab
  ↓
GapFillDialog opens (two-column stepped form)
  Left: gap list sidebar (severity badges, answered/skipped state)
  Right: active gap (question, rationale, field_path, textarea)
  ↓
User fills gaps, clicks Done
  ↓
POST /fill-gaps with all answers at once: { answers: [{ field_path, answer }] }
  ↓
Answers written directly to PKB via modifyPKB (no LLM reinterpretation)
  - Field paths normalized from display format to dot-notation
    (e.g. "Pricing.Model" → "pricing.model")
  - Each answer stored as a FactField at the gap's target field_path
  - No processFounderResponse call — answers go exactly where the gap points
  ↓
scheduleSynthesizer() fires (3s debounce)
```

### GapFillDialog
- Two-column stepped form — all gaps in one session
- Auto-advances to next unanswered gap after saving
- Auto-saves draft when navigating sidebar
- Cmd/Ctrl+Enter submits textarea
- Completion state when all gaps answered
- `answeredInSession`, `skippedInSession`, `activeGapPath`, `currentAnswer` — local state, resets on open

---

## KB Health Narrative (kb_health_narrative)

Written by Synthesizer to `pkb.meta.kb_health_narrative`. Displayed in two places:
- **Product header** — tooltip on hover over confidence score badge (only shown if non-empty)
- **Knowledge tab Summary sub-tab** — below product brief, muted text, "Knowledge health" section (only shown if non-empty)

---

## Ingestion Pipeline (V5 + Phase 2 fixes)

`/process` is called automatically after every upload — no manual trigger needed.

- **DocumentsTab** — calls `/process` after `/upload` succeeds and after `/fetch-url` succeeds
- **ChatTab** — detects URL-only messages, calls `/fetch-url` then `/process`. Verifies fetch success before triggering process; shows error message to user on failure.
- **URL text caching** — `/fetch-url` stores extracted text in Supabase uploads bucket. `/process` loads stored text first, falls back to live re-fetch only if missing.
- **SSE events** from `/process`: `status`, `confidence`, `product_name`, `content`, `summary`, `done`, `error`
- `done` event: `{ has_gaps: boolean, confidence: string, urls_failed: number }`
- URL fetch failures during `/process` emit individual `error` SSE events (not silently swallowed)
- Gap count read from PKB after refetch (not from SSE payload)
- `ProcessingOverlay` wired to `processingState.isProcessing`

### Extraction tuning (Phase 2)
- **Chunk size:** 16,000 chars (up from 4,000). Most documents fit in 1 chunk.
- **Extractor prompt:** Optimised for thoroughness. Typical extraction yields 25-35 facts from a content-rich document.
- **Cross-chunk context:** Chunk 2+ receives list of previously extracted field paths to avoid duplication and encourage extending array fields.
- **Deduplication:** Array fields (features, use_cases, pricing.tiers, etc.) are merged across chunks. Scalar fields keep the longer value.
- **Empty-value filter:** Proposed updates with empty arrays `[]` or empty evidence are filtered out before reaching the PKC curator.
- **All PKB writes** use `modifyPKB()` (per-product async mutex). `batchApplyUpdates()` applies all extracted facts in a single lock acquisition.

---

## Central Intelligence Chat

Lives on the dashboard. Powered by Explainer Agent.

- Default mode on load: `app_guide` — answers app usage questions, no PKB loaded
- Toggle to `dashboard_chat` — answers product knowledge questions across all products
- Toggle is a pill with two segments (Guide / Knowledge), tooltips on each
- Switching modes clears conversation
- `/api/organisations/:orgId/chat` route handles both surfaces via `surface` param

---

## Storage Architecture

- **PKB:** JSON files in Supabase Storage (`pkb-store` bucket) at `product_{id}/pkb.json` with timestamped snapshots. All PKB writes go through `modifyPKB()` which acquires a per-product async mutex, loads the PKB, runs a mutator, and saves. Never call `savePKB` directly — always use `modifyPKB`.
- **PKB Downloads:** Use signed URLs with `Cache-Control: no-cache` to bypass Supabase CDN caching. The `downloadJSON` helper handles this automatically.
- **URL text cache:** Fetched URL content is stored in the `uploads` bucket at `product_{id}/url_{slug}.txt` so `/process` doesn't need to re-fetch from the internet.
- **Conversations:** PostgreSQL, linked to both `product_id` and `user_id`
- **Database:** PostgreSQL for users, products, product_members, conversations, messages

---

## PKB Schema (Product-Type Aware)

**Core sections:** `product_identity`, `value_proposition`, `target_users`, `use_cases[]`, `features[]`, `pricing`, `differentiation`, `proof_assets`, `constraints_assumptions`

- **B2B** gets enterprise fields (sales cycles, decision-makers, procurement)
- **B2C** gets consumer fields (user acquisition, retention, viral loops)
- **Hybrid** gets both

**Per-fact fields:** `source_type`, `source_ref`, `evidence`, `captured_at`, quality tags (`strong`/`ok`/`weak`), `lifecycle_status`, `sensitive`, `approved`, `locked`, `do_not_ask`, `last_verified`, `audit_trail`

**Top-level PKB additions:** `personas[]`, `icps[]`, `mappings`, `review_inbox[]`

**Synthesizer-written meta fields** (cast as `any` in TypeScript — PKBMeta schema not yet updated):
`pkb.meta.product_brief`, `pkb.meta.kb_health_narrative`, `pkb.meta.kb_stage`, `pkb.meta.suggested_questions`, `pkb.meta.confidence_score`

---

## Product State Machine

`product_type_selection` → `onboarding` → `learning` → `ready`

State is product-level, not session-level. New chat sessions always start in `learning` or `ready`.

**Chat modes:** Learner (builds KB) | Explainer (answers from KB)

---

## Database Schema

### Tables

**`organisations`**
- `id` serial PK, `name` text, `owner_id` varchar → users.id, `description`, `industry`, `founded_year`, `num_products`, `locations` text[], `competitors` text[], `business_model` (b2b/b2c/both), `website_url`, `created_at`, `updated_at`

**`organisation_members`**
- `id` serial PK, `org_id` → organisations.id, `user_id` → users.id, `org_role` default 'admin' (admin/member/global_member), `joined_at`

**`products`**
- `id` serial PK, `name` text, `owner_id` varchar → users.id, `org_id` → organisations.id, `product_type` (b2b/b2c/hybrid), `state` default 'product_type_selection', `confidence_score` integer default 0, `created_at`, `updated_at`

**`product_members`**
- `id` serial PK, `product_id` → products.id, `user_id` → users.id, `role` default 'member' (owner/member), `joined_at`

**`conversations`**
- `id` serial PK, `product_id` → products.id, `user_id` → users.id, `title` nullable, `mode` default 'learner', `created_at`, `updated_at`

> `owner_id` and `user_id` are `varchar` not `integer` — `users.id` is a UUID.

---

## API Routes

Old `/api/sessions/` routes exist in `routes.ts` but are deprecated — marked `DEPRECATED V1 SESSION ROUTES — DO NOT USE`. Safe to delete.

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/products` | List products (optional `?orgId=` filter) |
| `POST` | `/api/products` | Create product |
| `GET` | `/api/products/:productId` | Get product |
| `POST` | `/api/products/:productId/type` | Set product type |
| `POST` | `/api/products/:productId/upload` | Upload document |
| `POST` | `/api/products/:productId/fetch-url` | Fetch URL |
| `POST` | `/api/products/:productId/process` | Run ingestion pipeline (SSE) |
| `GET` | `/api/products/:productId/conversations` | List conversations (user-scoped) |
| `POST` | `/api/products/:productId/conversations` | Create conversation |
| `POST` | `/api/products/:productId/conversations/:conversationId/chat` | Learner chat (SSE) |
| `POST` | `/api/products/:productId/conversations/:conversationId/explain` | Explainer chat (SSE) |
| `POST` | `/api/products/:productId/recheck-gaps` | Re-run Synthesizer immediately |
| `POST` | `/api/products/:productId/fill-gaps` | Submit gap answers array |
| `GET` | `/api/products/:productId/inbox` | Get product inbox |
| `POST` | `/api/products/:productId/inbox/:itemId/resolve` | Resolve inbox item |
| `GET` | `/api/organisations` | Get current user's org |
| `POST` | `/api/organisations` | Create organisation |
| `GET` | `/api/organisations/:orgId` | Get org by ID |
| `PATCH` | `/api/organisations/:orgId` | Update org fields |
| `POST` | `/api/organisations/:orgId/extract` | Constrained org doc extraction |
| `POST` | `/api/organisations/:orgId/chat` | Central Intelligence chat |
| `GET` | `/api/organisations/:orgId/inbox` | Get org conflict queue |
| `POST` | `/api/organisations/:orgId/inbox/:itemId/resolve` | Resolve org conflict |

---

## Frontend Component Map

### Pages
- `dashboard.tsx` — org gate, hero section, CI chat bar with Guide/Knowledge toggle, product grid
- `product-workspace.tsx` — tabbed container, processingState, gapDialog state (lifted), pendingIngestionMessage

### Key Components
- `product-header.tsx` — name, three-tier confidence badge (emerald/amber/red), kb_health_narrative tooltip on hover, inbox bell, new chat button
- `knowledge-tab.tsx` — Summary (product brief + kb_health_narrative section) / Facts / Gaps sub-tabs
- `chat-tab.tsx` — personal chat, ingestion_complete message rendering, suggested question chips, SESSION_START trigger on new conversation
- `personas-tab.tsx` — shared personas + ICP view
- `documents-tab.tsx` — shared documents list, triggers /process after upload
- `review-inbox.tsx` — overlay panel
- `gap-fill-dialog.tsx` — two-column stepped gap form (lifted to ProductWorkspace level)
- `confidence-bar.tsx` — reusable confidence bar

### Deprecated / Unused (safe to delete)
- `home.tsx` — old V1 home page, no longer routed
- `session-sidebar.tsx`, `session-store.ts`, `session-naming-dialog.tsx` — referenced only by home.tsx

---

## Key Patterns

### PKB Write Safety
All PKB mutations must go through `modifyPKB(productId, mutator)` which acquires a per-product async mutex, loads→mutates→saves atomically. Never call `savePKB` directly from routes or agents. For batch fact writes, use `batchApplyUpdates()` which calls `modifyPKB` once for all updates.

### Agent JSON Responses
Use `parseJSONResponse()` from `base-agent.ts` for all agent responses.

### Source Tracking
Every fact links back to its origin with evidence quotes and timestamps.

### Refusal Handling
Tracks declined fields in `pkb.meta.inputs.declined_fields` — Learner will not surface them again.

### Confidence Write-back
`confidence_score` on the `products` table is updated by `runSynthesizer()` after every KB write. Do not update it manually elsewhere.

### Conversation History
The `/chat`, `/explain`, and CI chat routes load the last 20 messages (token-budgeted to ~3000 tokens) from the `messages` table and pass them as `conversationHistory` to `callLLM`/`streamLLM`. System signals (`[SESSION_START]`, `[INGESTION_COMPLETE:*]`) are filtered out. History is inserted between the system prompt and the current user message. The `buildConversationHistory()` utility in `base-agent.ts` handles filtering and budget trimming. CI chat currently has no conversation table so history defaults to empty.

### PKB Meta Fields
Synthesizer-written fields (`product_brief`, `kb_health_narrative`, `kb_stage`, `suggested_questions`, `confidence_score`) are cast as `any` in TypeScript since `PKBMeta` type hasn't been updated yet. See debt list.

---

## V1 Governance Rules (Complete — Do Not Modify)

### Sensitive Fields (Hard Gate)
pricing, customer_names, security_claims, roadmap — can be extracted and proposed, NEVER auto-committed, NEVER exposed without approval.

### Lifecycle State Transitions
- `asserted` → `evidenced`: second source confirms same claim
- `any` → `disputed`: new source contradicts existing claim
- `any` → `stale`: `last_verified` exceeds staleness threshold
- `disputed` → `asserted/evidenced`: team member resolves
- `stale` → `asserted`: team member re-confirms

> **"Evidenced" rule:** assigned only when a second source confirms — NOT at ingestion time based on source type alone.

### Staleness Thresholds (days)
pricing: 30, roadmap: 30, competitor_names: 60, security_claims: 90, positioning: 90, customer_names: 180

### Persona Rules
Max 3 active personas. Founder/team confirms or demotes — never creates manually. Every persona must match one of 5 bounded types. Ranked by: evidence strength → decision power → frequency.

### V0 Migration (Lazy Upgrade)
Existing V0 PKB files upgraded on first access — missing lifecycle_status, sensitivity flags, and approved flags get safe defaults.

---

## Roles

Scaffolded now, enforced later. Single user treated as admin everywhere.

| Role | Access |
|------|--------|
| Admin | Full — Learner + Explainer, inbox, uploads, org PKB editing, member management |
| Member | Explainer only — query, view documents, view personas. No ingestion, no inbox, no sensitive fields |
| Global Member | Member-level access across all products automatically |

`role` in `product_members`, `org_role` in `organisation_members` — both scaffolded, not enforced.

---

## Known Technical Debt

### Must clean up (dead code audit pending)
- `currentGaps` parameter in `processFounderResponse` — unused since V5, remove
- `overrideEnabled` parameter in `streamExplainProduct`/`explainProduct` — unused since V5, remove
- `gap_id` references — migrated to `field_path` in fill-gaps, audit any remaining references
- `generateInitialSummary` / `INITIAL_SUMMARY_PROMPT` — still called in /process for initial chat message, NOT dead code — do not remove
- Deprecated `/api/sessions/` routes in `routes.ts` — safe to delete
- `home.tsx`, `session-sidebar.tsx`, `session-store.ts`, `session-naming-dialog.tsx` — safe to delete
- `PKBMeta` TypeScript type — does not declare Synthesizer-written fields (`product_brief`, `kb_health_narrative`, `kb_stage`, `suggested_questions`, `confidence_score`). Currently cast as `any`. Needs proper type declaration.

### Minor inefficiencies
- 5 AgentContext construction sites in `routes.ts` each do an extra DB query for `org_id` — should derive from already-loaded product record
- `returning_gap_fill` threshold set at confidence ≥ 50 — may need tuning after real usage

### Deferred workstreams (do not attempt without explicit planning session)
- **PKB quality improvement** — gap questions are currently flat with no priority tiers, dependency chains, or question framing. Major workstream requiring richer PKB gap schema.
- **Dead code audit + staleness detection** — automated stale fact detection UI
- **Role enforcement** — auth middleware, role-gated routes
- **Org conflict detection tuning** — field path mismatch between extractor output and conflict watcher may cause silent misses

---

## Onboarding Flow (Complete)

First-time users see a two-screen flow before the dashboard. Trigger: `GET /api/organisations` returns `{ organisation: null }`.

- **Screen 1 — WelcomeScreen:** static starfield, badge, headline, feature cards, orange CTA
- **Screen 2 — OrgSetup:** wrapped with OnboardingLayout header, step badge, collapsible "why" callout
- **Step indicator:** fixed top bar, 3 pill segments, disappears once org exists
- **Managed by:** `Dashboard` component `onboardingStep` state

---

## V2 Deferred — Not Yet Built

Do not implement without explicit instruction.

## V2 Deferred — Not Yet Built

These items were planned for V2 but intentionally deferred. Do not implement without explicit instruction.

### Role-Based Inbox Permissions
- Owner vs member distinction for inbox resolution
- Currently all team members can resolve all items
- Deferred: out of scope for V2

### Real-Time Collaboration / Presence
- Live cursors, presence indicators, concurrent editing awareness
- Deferred: infrastructure complexity

### PKC Query API (Phase 4 from V1)
- Structured query interface for agents to retrieve PKB facts programmatically
- Deferred: still pending design

### Dead Code Audit + Staleness Detection
- Automated detection of stale PKB facts based on `last_verified` + thresholds
- UI surface for surfacing stale items proactively (beyond inbox)
- Deferred from V1, still unbuilt

### Mixed Chat Model for Gap Filling
- Remaining gap-filling flows that blend Learner and Explainer modes
- Currently handled as separate modes; mixed model not yet designed or built

### Parallel Chat Threads
- Multiple simultaneous conversations per user per product
- Currently: one active conversation at a time
- Deferred: UX complexity

### Richer Knowledge Tab
- Visualizations, knowledge graph view, fact timeline
- Currently: text-based Summary / Facts / Gaps
- Deferred: post-redesign consideration

### `pkb.meta.session_id` Field Rename
- Rename stored field from `session_id` to `product_id` in PKB JSON
- Cosmetic/hygiene only, deferred
