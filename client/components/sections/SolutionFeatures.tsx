import { motion } from "framer-motion";
import { ReactNode } from "react";

const features: Array<{
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    title: "Know Your Surroundings",
    description:
      "Understand who's and what's nearby and the direction they're moving — know where you're headed and what to expect along your path.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-secondary" fill="none">
        <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" opacity="0.35" />
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2.5" opacity="0.55" />
        <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Feel Your Surroundings",
    description:
      "The app uses your phone's advanced sensors to detect people or large obstacles entering your bubble.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-accent" fill="none">
        <path
          d="M32 14c10.493 0 19 8.507 19 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M32 22c6.627 0 12 5.373 12 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle cx="32" cy="34" r="7" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="34" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Discreet Haptic Feedback",
    description:
      "Receive gentle, non-intrusive vibrations that vary in intensity, so you're aware without being alarmed.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-secondary" fill="none">
        <path
          d="M22 20h20a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.6"
        />
        <path
          d="M27 16v4M37 16v4M27 44v4M37 44v-4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <rect
          x="26"
          y="26"
          width="12"
          height="12"
          rx="6"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    ),
  },
];

const SolutionFeatures = () => {
  return (
    <section id="solution" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,#0d1b2a0f,transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How I.R.I.S Works
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Thoughtfully designed flows let you choose the boundaries you need,
            sense the world precisely, and feel feedback that keeps you calm and in
            control.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-3xl border border-secondary/20 bg-white/90 p-8 shadow-[0px_24px_48px_-30px_rgba(12,27,42,0.45)] backdrop-blur-[6px] transition duration-300 hover:shadow-glow dark:bg-background/80"
            >
              <div className="inline-flex items-center justify-center rounded-2xl bg-secondary/15 p-4 text-secondary transition duration-300 group-hover:bg-secondary/20">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatures;
