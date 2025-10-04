import { motion } from "framer-motion";

const TechnologyShowcase = () => {
  return (
    <section id="technology" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#0d1b2a14,transparent_80%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Powered by Precision
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Echo Vision leverages Apple\'s ARKit and LiDAR scanner to build a
            centimeter-accurate map of your surroundings—all processed on-device
            to keep every signal private and immediate. Millisecond haptic
            responses ensure you feel the world around you before it ever feels
            overwhelming.
          </p>
          <ul className="mt-8 space-y-5 text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
              On-device LiDAR sampling refreshes your personal bubble in real
              time, even in low-light spaces.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
              Spatial audio cues layer with haptics for optional multi-sensory
              grounding when you need deeper assurance.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
              Adaptive machine learning refines the bubble radius for each
              environment you visit most.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-primary/40 bg-gradient-to-br from-[#14283d] via-[#0d1b2a] to-[#060b12] p-10 text-primary-foreground shadow-[0px_40px_80px_-45px_rgba(12,27,42,0.8)]"
        >
          <div className="absolute inset-6 rounded-[2rem] border border-white/5" />
          <div className="relative h-[360px] overflow-hidden rounded-[1.8rem] border border-white/5 bg-[#0a1726]/60">
            <div className="absolute inset-0 grid grid-cols-8 text-white/5">
              {[...Array(8)].map((_, idx) => (
                <span key={`col-${idx}`} className="border-l border-white/5" />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-8 text-white/5">
              {[...Array(8)].map((_, idx) => (
                <span key={`row-${idx}`} className="border-t border-white/5" />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 animate-scan bg-[linear-gradient(120deg,rgba(128,187,170,0)_0%,rgba(128,187,170,0.3)_45%,rgba(128,187,170,0)_75%)]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/50" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/60" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-2xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/30"
            />
            <div className="absolute bottom-6 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur">
              <span>LiDAR LOCKED</span>
              <span>HAPTICS SYNCED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
