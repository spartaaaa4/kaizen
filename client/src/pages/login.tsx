import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Captions,
  Check,
  Clapperboard,
  FileImage,
  Film,
  Images,
  Layers3,
  Megaphone,
  MousePointerClick,
  Palette,
  Play,
  Sparkles,
  Upload,
  WandSparkles,
} from "lucide-react";
import ParticleBackground from "@/components/particle-background";
import KaizenMark from "@/components/KaizenMark";

const inputs = [
  { label: "Website", icon: MousePointerClick },
  { label: "Catalog", icon: Layers3 },
  { label: "Product photos", icon: Images },
  { label: "Reels & ads", icon: Film },
  { label: "Logo & colors", icon: Palette },
  { label: "PDFs & notes", icon: Upload },
];

const outputs = [
  { label: "Video ads", detail: "6s, 10s, 15s, 30s", icon: Clapperboard },
  { label: "Posters", detail: "Feed, story, square", icon: FileImage },
  { label: "Captions", detail: "Launch-ready copy", icon: Captions },
  { label: "Meta copy", detail: "Primary text, headline, CTA", icon: Megaphone },
];

const steps = [
  "Kaizen learns your brand and product line.",
  "Mac creates one sample creative first.",
  "You give feedback. Kaizen remembers the taste.",
  "Generate the full batch for Meta, reels, and catalogs.",
];

const audiences = ["D2C", "Ecommerce", "Restaurants", "Clinics", "Salons", "Local SMEs"];

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
}

export default function Login() {
  return (
    <main className="min-h-dvh outer-frame overflow-hidden text-foreground">
      <ParticleBackground />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
              <KaizenMark className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-base font-bold leading-none">Kaizen</p>
              <p className="mt-1 text-xs text-muted-foreground">AI creative team for brands</p>
            </div>
          </div>

          <a
            href="/auth/google"
            className="hidden min-h-11 items-center gap-2 rounded-xl border border-border bg-secondary/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-secondary sm:inline-flex"
          >
            Sign in
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              First creative sample before the full batch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="font-heading text-5xl font-bold leading-[0.96] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
            >
              Your brand assets go in.
              <span className="block text-primary">Ad-ready videos come out.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.4 }}
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Upload your website, catalog, product photos, logo, existing ads, or just chat. Kaizen builds your Brand Memory, maps your product line, generates one sample, learns from your feedback, then creates Meta-ready videos, posters, captions, and ad copy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="/auth/google"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                <GoogleMark />
                Generate my first ad
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/40 hover:bg-secondary"
              >
                <Play className="h-4 w-4" />
                See the workflow
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border bg-surface-elevated/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  {audience}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
            className="relative"
            aria-label="Kaizen creative generation preview"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-[hsl(var(--surface-inner))] p-4 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                  <span className="h-2.5 w-2.5 rounded-full bg-glow-amber" />
                  <span className="h-2.5 w-2.5 rounded-full bg-glow-emerald" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Mac is generating</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
                <div className="space-y-3">
                  <div className="rounded-2xl border border-border bg-background/70 p-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Brand memory</p>
                    <div className="space-y-3">
                      {["Premium skincare", "Warm expert tone", "Clean terracotta palette"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                          <BadgeCheck className="h-4 w-4 text-glow-emerald" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/70 p-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Inputs</p>
                    <div className="grid grid-cols-2 gap-2">
                      {inputs.slice(0, 4).map(({ label, icon: Icon }) => (
                        <div key={label} className="flex items-center gap-2 rounded-xl bg-secondary/70 p-2 text-xs font-semibold text-muted-foreground">
                          <Icon className="h-3.5 w-3.5 text-primary" />
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-primary/30 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.32),transparent_42%),linear-gradient(160deg,hsl(0_0%_12%),hsl(217_40%_16%),hsl(0_0%_5%))]">
                    <img
                      src="/kaizen logo.jpg"
                      alt="Kaizen brand mark"
                      className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-3xl object-cover opacity-90"
                    />
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/10">
                        <WandSparkles className="h-3.5 w-3.5 text-primary" />
                        15s Reel sample
                      </div>
                      <div className="rounded-2xl bg-black/45 p-4 ring-1 ring-white/10 backdrop-blur">
                        <p className="font-heading text-2xl font-bold leading-tight text-white">Glow in 15 seconds.</p>
                        <p className="mt-2 text-sm leading-6 text-white/72">Hook, product closeup, benefit, proof, CTA.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {outputs.slice(1, 3).map(({ label, detail, icon: Icon }) => (
                      <div key={label} className="rounded-2xl border border-border bg-background/70 p-3">
                        <Icon className="mb-2 h-4 w-4 text-primary" />
                        <p className="text-sm font-bold">{label}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="how-it-works" className="border-t border-border py-14">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-normal sm:text-4xl">No blank prompt box. No random output.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Kaizen turns messy brand material into a structured creative brief, then uses feedback before scaling generation.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-border bg-[hsl(var(--surface-inner))] p-5">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-sm font-bold text-primary ring-1 ring-primary/25">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-6">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 border-t border-border py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Input anything useful</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-normal sm:text-4xl">Your existing brand material is enough to start.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {inputs.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-border bg-[hsl(var(--surface-inner))] p-4">
                <Icon className="mb-3 h-5 w-5 text-primary" />
                <p className="text-sm font-bold">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 border-t border-border py-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Outputs</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-normal sm:text-4xl">Everything your campaign needs, not just a prompt.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outputs.map(({ label, detail, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-border bg-[hsl(var(--surface-inner))] p-5">
                <Icon className="mb-4 h-5 w-5 text-primary" />
                <p className="font-heading text-xl font-bold">{label}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-14">
          <div className="rounded-[28px] border border-primary/25 bg-primary/10 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                <Check className="h-4 w-4" />
                Ads first. Catalog shoots next. Context forever.
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-normal sm:text-4xl">Give Kaizen your brand. Get the first sample.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                Start with Meta creatives today. The same Brand Memory can power catalog visuals, social calendars, onboarding, GTM, and future org agents.
              </p>
            </div>
            <a
              href="/auth/google"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90 lg:mt-0"
            >
              Start with Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
