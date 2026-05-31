# PRD: Kaizen Marketing Agent MVP

## 1. Product Vision

Kaizen is a context operating system for organizations. It helps a company collect messy, multimodal business context, turn it into structured organizational memory, and deploy specialized agents that use that memory to do real work.

The first commercial wedge is the Kaizen Marketing Agent: an AI creative production workflow for D2C, ecommerce, and visual SME brands. A brand should be able to provide a website, uploads, product photos, existing campaigns, catalog images, chat answers, brand colors, and reference assets, then receive brand-consistent marketing creatives that are ready for Meta ads and other growth channels.

The long-term product is broader than ads. Marketing ads are the first workflow because they are urgent, visual, measurable, and easy for SMEs to understand. The underlying system should remain flexible enough to support catalog creation, onboarding, GTM, support, sales enablement, product education, and future organization-led agents.

## 2. Strategic Positioning

### End-State Positioning

Kaizen is the context layer and agent workspace for modern organizations.

Companies bring their knowledge, assets, catalog, brand rules, documents, and examples into Kaizen. Kaizen turns that into a living Brand and Organization Memory. Specialized agents then use that memory to create outputs, answer questions, automate workflows, and improve over time from feedback.

### Phase-One Positioning

Kaizen helps D2C and SME brands generate brand-consistent Meta-ready videos, posters, captions, and ad copy from their website, product assets, catalog, and existing marketing material.

### Core Promise

Give Kaizen what you already have. Kaizen learns your brand, creates one high-quality sample, improves from your feedback, then generates the full batch of videos, posters, captions, and ad copy you asked for.

## 3. Target Customers

### Primary ICP: D2C / Ecommerce Brands

Examples:
- Skincare and beauty brands
- Fashion and apparel brands
- Jewelry brands
- Supplements and wellness brands
- Food and beverage brands
- Home decor brands
- Pet product brands
- Fitness product brands
- Baby and kids brands

Why they are ideal:
- They need frequent creative refreshes.
- Their products are visual.
- They often run Meta ads.
- They already have product photos, catalog pages, social posts, and website copy.
- They feel the pain of slow creative production immediately.

### Secondary ICP: Visual SMEs

Examples:
- Restaurants and cafes
- Clinics and wellness businesses
- Salons and spas
- Gyms and fitness studios
- Agencies and professional service businesses
- Boutique hotels and local experience businesses
- Education centers and coaching businesses

These businesses also need visual marketing, but the creative logic differs by vertical. The product should support them through business-type-specific context extraction, questions, templates, and compliance guardrails.

### Later ICP: SaaS and Complex B2B

SaaS should be deferred. SaaS marketing requires more nuanced positioning, product demos, buyer journey mapping, objection handling, and often LinkedIn/Google-led distribution rather than Meta-first creative production.

## 4. User Problem

Small businesses need constant marketing creatives, but creative production is slow, expensive, inconsistent, and often disconnected from the actual brand context.

Common pain points:
- Agencies are expensive and slow.
- Freelancers need repeated explanation.
- Generic AI tools produce off-brand outputs.
- Brand context is scattered across websites, Instagram, PDFs, catalogs, WhatsApp, ad accounts, and old creative files.
- Most SMEs do not know how to write a detailed creative prompt.
- Generating many creatives before confirming direction wastes time and budget.
- Meta-ready campaigns require more than a video: they also need hooks, captions, primary text, headlines, CTA, format, duration, and audience framing.

## 5. Product Principle

Kaizen should never require perfect upfront input.

The system should infer as much as possible from partial information, show the inferred brand and product model back to the user, let the user correct or approve it, and then improve further through creative feedback.

The first creative generation should be sample-first:

1. Understand the brand.
2. Build Brand Memory and Product / Offer Catalog.
3. Generate one strong sample creative package.
4. Ask for feedback.
5. Update creative preferences and constraints.
6. Generate the requested full batch.

## 6. Core Concepts

### Organization

The top-level workspace for a company. Over time, it can contain multiple brands, products, teams, agents, assets, and workflows.

### Brand

The market-facing identity being promoted. In V1 this is the most important user-facing object. The brand may represent a D2C store, restaurant, clinic, agency, or other SME.

### Brand Memory

The structured memory of what the brand is, how it speaks, what it sells, what it looks like, who it serves, and what it should avoid.

Brand Memory should include:
- Brand name
- Category / vertical
- Description
- Website and social links
- Markets / locations
- Target customers
- Tone of voice
- Visual style
- Brand colors
- Logo and core assets
- Product/service positioning
- Proof points
- Offers
- Claims and compliance constraints
- Creative preferences
- Negative constraints / avoid list
- Approved examples
- Rejected examples and feedback

### Product / Offer Catalog

The structured set of things the brand sells or promotes.

For D2C this means products, bundles, collections, and offers. For SMEs this can include services, packages, menus, events, appointments, consultations, seasonal offers, or lead magnets.

Each catalog item should include:
- Name
- Type: product, service, bundle, collection, offer, event, brand-level
- Description
- Category
- Price or price range, if known
- Images or reference assets
- Benefits
- Ingredients, materials, features, or inclusions
- Target customer
- Use cases
- Objections
- Differentiators
- Proof points
- Creative angles
- Status: inferred, confirmed, needs review

### Campaign Workspace

The workspace where a user defines what they want to create now.

Campaign focus options:
- Brand awareness creatives
- Single product campaign
- Multiple product campaign
- Collection launch
- Offer / sale campaign
- Seasonal campaign
- Retargeting campaign
- Local promotion
- Service promotion

### Creative Brief

The structured input that guides generation.

Creative Brief fields:
- Campaign focus
- Objective: awareness, traffic, leads, sales, retargeting, launch, offer
- Selected catalog item(s), if applicable
- Target audience
- Platform: Meta first
- Placement / aspect ratio: 9:16, 4:5, 1:1
- Number of videos
- Number of posters/images
- Video duration: 6s, 10s, 15s, 30s, custom
- Language
- Tone/style
- Offer
- CTA
- Required claims
- Claims to avoid
- Reference assets
- Deadline, optional

### Creative Asset

An individual output generated by Kaizen.

Creative Asset fields:
- Type: video, poster, image, caption, Meta ad copy
- Status: draft, generating, generated, failed, approved, rejected
- Concept
- Hook
- Script
- Scene sequence
- Visual prompt
- Negative prompt
- Duration seconds, for video
- Aspect ratio
- Generated asset URL
- Caption
- Meta primary text
- Meta headline
- CTA
- Feedback history
- Approval status

## 7. V1 User Journey

### Step 1: Create Brand Workspace

The user creates or selects a brand.

Required:
- Brand name
- Business type
- What the brand sells

Optional but encouraged:
- Website
- Instagram / TikTok / Meta page
- Country or market
- Existing asset upload

Business type options:
- D2C / ecommerce brand
- Restaurant / cafe
- Clinic / wellness business
- Local service business
- Agency / professional service
- Other SME

### Step 2: Add Context and Assets

The user can provide any mix of:
- Website URL
- Product catalog upload
- PDF
- Text file
- Brand deck
- Logo
- Product photos
- Existing campaign posters
- Existing ad videos / reels
- Images
- Uploaded videos
- Social links
- Chat answers

The product should guide the user instead of showing only an empty prompt box. The empty prompt can exist, but it should be paired with structured prompts and upload slots.

Recommended intake sections:
- Website or social link
- Upload logo and brand assets
- Upload product photos or catalog
- Upload existing ads or examples
- Tell us what you sell
- Tell us what kind of creatives you need

### Step 3: Build Brand Memory and Product / Offer Catalog

Kaizen processes the context and creates a first draft.

Outputs shown for review:
- Brand summary
- Target customers
- Tone of voice
- Visual style
- Brand colors
- Product / offer catalog
- Top products detected
- Existing creative patterns
- Missing information
- Confidence / review state

The user can approve, edit, or correct key fields.

### Step 4: Choose Campaign Focus

The user chooses what to create:
- Promote the overall brand
- Promote one product
- Promote multiple products
- Promote an offer or sale
- Promote a collection
- Promote a service
- Create a seasonal campaign

For V1, the system should support brand-level, single-product, and offer/sale campaigns first.

### Step 5: Define Creative Requirements

The user chooses:
- Number of videos
- Number of posters/images
- Video duration
- Aspect ratio
- Platform / placement
- Language
- Tone
- CTA
- Offer
- Any must-use or avoid instructions

Video duration must be a first-class input because it changes the ad structure.

Duration behavior:
- 6 seconds: instant hook, product/offer, CTA
- 10 seconds: hook, value proposition, CTA
- 15 seconds: hook, problem, product demo/benefit, CTA
- 30 seconds: story, problem, proof, product details, offer, CTA

### Step 6: Generate One Sample Creative Package

Kaizen generates one sample before producing the full batch.

The sample package should include:
- Campaign angle
- Video concept
- Video script
- Scene sequence
- Higgsfield prompt
- Generated video
- Poster/image concept, if requested
- Generated poster/image, if requested
- Caption
- Meta primary text
- Meta headline
- CTA
- Explanation of why this fits the brand

### Step 7: Feedback Loop

The user reviews the sample and gives feedback.

Feedback examples:
- Make it more premium.
- Make it more Gen Z.
- Use warmer colors.
- Less flashy.
- Shorter hook.
- More founder-led.
- More product closeups.
- Focus more on price.
- Avoid medical claims.
- Match this reference.
- Do not use this style again.

Kaizen should save feedback into Brand Memory and Creative Preferences.

### Step 8: Generate Full Batch

After sample approval, Kaizen generates the requested number of videos and posters/images.

The batch should maintain brand consistency while varying:
- Hook
- Angle
- Visual setup
- Script
- CTA
- Caption
- Ad copy

### Step 9: Export or Schedule

V1 export options:
- Download videos
- Download posters/images
- Copy captions
- Copy Meta primary text/headlines
- Export campaign package

Later:
- Connect Meta Ads account
- Create draft campaigns
- Schedule campaigns
- Publish campaigns
- Pull performance data back into Kaizen

## 8. Marketing Agent: Mac

The first specialized agent is Mac, the Marketing Agent.

Mac's job is not just to generate prompts. Mac should behave like an AI creative strategist and production operator.

Mac responsibilities:
1. Audit available brand context.
2. Identify missing information that materially affects creative quality.
3. Build or update Brand Memory.
4. Build or update Product / Offer Catalog.
5. Translate a campaign brief into creative strategy.
6. Generate one sample creative package.
7. Interpret user feedback.
8. Update creative preferences and constraints.
9. Generate the requested batch.
10. Prepare Meta-ready copy and export package.

Mac should ask questions only when necessary. If there is enough context to produce a useful sample, Mac should proceed and mark assumptions clearly.

## 9. Multimodal Understanding Requirements

Kaizen should support multimodal context intake over time.

V1 should prioritize:
- Website text extraction
- PDF/text extraction
- Image upload and visual analysis
- Logo and color extraction
- Product photo understanding
- Existing poster/ad analysis
- Existing short video/reel analysis where feasible
- Chat-based clarification

Later versions should improve:
- Full video understanding
- Audio transcription
- Scene-level video analysis
- Catalog image parsing
- Social media page ingestion
- Ecommerce catalog ingestion
- Ad account history ingestion

## 10. Generation Requirements

### Video Generation

Higgsfield should be the first video generation partner.

Kaizen should send structured generation inputs rather than a single unstructured prompt where possible.

Higgsfield-oriented input fields:
- Video prompt
- Duration seconds
- Aspect ratio
- Brand colors
- Product reference assets
- Style reference
- Scene sequence
- Motion style
- Camera style
- Negative prompt / avoid list

### Poster / Image Generation

V1 should support posters/images alongside video. The first implementation may use a separate image model or provider.

Poster generation should respect:
- Brand colors
- Logo usage
- Product image/reference
- Campaign angle
- Copy hierarchy
- Aspect ratio
- CTA
- Platform placement

### Meta-Ready Copy

Each generated creative package should include:
- Primary text
- Headline
- Description, optional
- Caption
- CTA
- Suggested audience angle
- Compliance notes, if relevant

## 11. Expansion Roadmap

### V1: Marketing Ads MVP

Goal: Generate brand-consistent Meta-ready videos, posters, captions, and ad copy.

Core workflows:
- Brand intake
- Brand Memory
- Product / Offer Catalog
- Campaign brief
- Sample-first generation
- Feedback loop
- Batch generation
- Export package

### V1.1: Catalog Creation

Goal: Generate product catalog visuals for websites, apps, and marketplaces.

Example:
The user uploads one flat product photo or existing catalog image. Kaizen generates catalog-ready visuals with a model wearing the product, holding it, using it, or showcasing it in a branded setting.

Use cases:
- Apparel model shots
- Jewelry model shots
- Skincare product lifestyle shots
- Food and beverage product staging
- Marketplace listing images
- Website collection banners
- App product cards

Required additions:
- Catalog-specific creative brief
- Product image cleanup and segmentation
- Model/style selection
- Background/style templates
- Output dimensions for website/app/marketplace
- Approval and regeneration loop

### V1.2: Social Content Studio

Goal: Generate organic social posts, reels, stories, and content calendars.

Use cases:
- 30-day content calendar
- Daily Instagram posts
- Reel scripts
- Founder-led content ideas
- Seasonal campaigns
- Influencer-style UGC briefs

### V1.3: Meta Ads Publishing

Goal: Move from export to execution.

Use cases:
- Connect Meta Ads account
- Create draft campaigns
- Upload creatives
- Generate ad sets
- Schedule campaigns
- Track creative performance
- Feed performance back into Brand Memory and Creative Preferences

### V1.4: Performance Learning Loop

Goal: Improve creative generation using real campaign results.

Use cases:
- Identify winning hooks
- Identify top-performing products/offers
- Detect audience resonance
- Suggest new variations
- Archive underperforming styles
- Build a brand-specific creative playbook

### V2: Organization Onboarding Agent

Goal: Help new employees understand the company, brand, products, customers, and workflows.

Use cases:
- Ask questions about company history
- Understand products and offers
- Learn tone of voice and brand rules
- Access approved positioning
- Summarize campaign history
- Explain customer personas

### V2: GTM Agent

Goal: Help teams plan go-to-market campaigns using organization context.

Use cases:
- Launch planning
- Channel strategy
- Campaign calendar
- Messaging strategy
- Persona-specific GTM plans
- Offer packaging

### V2: Sales / Support Enablement Agent

Goal: Use the same organization memory to answer customer-facing and sales-facing questions.

Use cases:
- Sales battlecards
- Product FAQs
- Objection handling
- Customer support answers
- Training scripts
- Internal enablement material

## 12. MVP Scope

### Must Have

- Brand workspace creation
- Guided brand intake
- Website or upload-based ingestion
- Logo, brand asset, product image upload
- Brand Memory draft
- Product / Offer Catalog draft
- Review and edit of inferred context
- Creative brief form
- Video count and poster/image count selection
- Video duration selection
- Aspect ratio / placement selection
- Sample-first generation
- Feedback capture
- Creative preference update
- Full batch generation after approval
- Higgsfield video generation
- Poster/image generation
- Captions and Meta-ready copy
- Export/download package

### Should Have

- Business-type-specific intake
- Top products detection
- Existing campaign analysis
- Reference creative upload
- Multiple creative styles
- Regeneration controls
- Approval states
- Basic asset library

### Could Have

- Shopify/WooCommerce catalog import
- Instagram/TikTok page ingestion
- Brand color auto-detection from logo
- Social content calendar
- Meta draft campaign creation
- Team comments

### Not V1

- Full Meta publishing
- Budget optimization
- Performance analytics ingestion
- SaaS/B2B-specific workflows
- Multi-agent marketplace
- Complex role-based permissions
- Advanced catalog generation at scale

## 13. Success Metrics

Activation:
- Percentage of users who complete brand intake
- Percentage of users who approve or edit Brand Memory
- Percentage of users who generate first sample

Creative quality:
- Sample approval rate
- Average feedback rounds before approval
- Batch generation completion rate
- Regeneration rate

Business value:
- Time from signup to first generated video
- Number of exported creative packages
- Number of paid conversions
- Repeat campaign creation rate

Expansion:
- Number of catalog items detected and confirmed
- Number of approved creative preferences stored
- Number of brands returning for another campaign

## 14. Architecture Implications

The current Kaizen architecture already has useful foundations:
- Organization
- Product
- PKB
- Document ingestion
- URL ingestion
- Conversations
- Messages
- Learner / Explainer agent separation
- Synthesizer
- Confidence and gaps

To support the new direction, the product should evolve toward:

```text
Organization
  ├── Brands
  │     ├── Brand Memory
  │     ├── Product / Offer Catalog
  │     ├── Asset Library
  │     ├── Creative Preferences
  │     └── Campaigns
  └── Agents
        ├── Mac: Marketing Agent
        ├── Onboarding Agent
        ├── GTM Agent
        └── Future agents
```

Recommended implementation approach:
- Keep the current PKB infrastructure in the short term.
- Add marketing-specific schema sections for Brand Memory, Offer Catalog, Creative Briefs, Campaigns, and Creative Assets.
- Reframe the frontend around Brand Setup, Campaign Brief, Sample Review, Generated Assets, and Brand Memory.
- Keep the old Knowledge surface available internally, but avoid making "PKB management" the main user-facing experience for the marketing MVP.
- Preserve the architecture's long-term ability to support non-marketing agents.

## 15. Open Questions

- Should V1 use "Brand" as a new first-class database object, or adapt existing `products` into brand workspaces first?
- Which generation provider should handle posters/images?
- What exact Higgsfield API fields are available for duration, aspect ratio, references, and prompts?
- Should users pay per generated creative, per campaign, or subscription?
- Should sample generation consume credits?
- How much editing should happen before generation versus after feedback?
- What is the minimum asset quality needed for reliable product-specific creatives?

## 16. Working Name

Agent name:
- Mac, the Marketing Agent

Product wedge:
- Kaizen Marketing Agent

Long-term platform:
- Kaizen Context OS

