import { motion } from "framer-motion";
import { ArrowRight, Captions, Clapperboard, Images, Layers3, Palette, Sparkles } from "lucide-react";
import KaizenMark from "@/components/KaizenMark";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/particle-background";
import { useMinimalMode } from "@/contexts/MinimalModeContext";

interface WelcomeProps {
  onGetStarted: () => void;
}

const outcomes = [
  {
    icon: Layers3,
    title: "Brand Memory",
    description: "Kaizen learns what you sell, who buys it, and how your brand should sound.",
  },
  {
    icon: Clapperboard,
    title: "Sample first",
    description: "Mac generates one creative sample, takes feedback, then scales the batch.",
  },
  {
    icon: Captions,
    title: "Meta-ready output",
    description: "Videos, posters, captions, primary text, headlines, and CTAs in one flow.",
  },
];

const Welcome = ({ onGetStarted }: WelcomeProps) => {
  const { minimal } = useMinimalMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center outer-frame overflow-auto"
    >
      {!minimal && <ParticleBackground />}

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Your creative workspace is ready
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-5xl font-bold leading-[0.98] tracking-normal text-foreground md:text-6xl"
          >
            Build your Brand Memory.
            <span className="block text-primary">Generate the first ad sample.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            Add your website, product catalog, logo, photos, reels, PDFs, or chat answers. Kaizen will learn your brand and help Mac create videos, posters, captions, and Meta-ready copy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-9"
          >
            <Button
              onClick={onGetStarted}
              className="h-12 gap-2 rounded-xl bg-primary px-7 text-base font-bold hover:bg-primary/90"
            >
              Set up my brand
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="rounded-[28px] border border-border bg-[hsl(var(--surface-inner))] p-5 shadow-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
              <KaizenMark className="h-6 w-6" />
            </div>
            <div>
              <p className="font-heading text-lg font-bold">Mac, Marketing Agent</p>
              <p className="text-xs text-muted-foreground">Sample-first creative generation</p>
            </div>
          </div>

          <div className="space-y-3">
            {outcomes.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border bg-background/70 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="text-sm font-bold">{title}</p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Logo", icon: Palette },
              { label: "Photos", icon: Images },
              { label: "Videos", icon: Clapperboard },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-border bg-secondary/50 p-3 text-center">
                <Icon className="mx-auto mb-2 h-4 w-4 text-primary" />
                <p className="text-xs font-bold text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Welcome;
