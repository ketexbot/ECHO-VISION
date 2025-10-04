import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, useScroll, useTransform } from "framer-motion";

const demoVideoUrl =
  "https://cdn.coverr.co/videos/coverr-pedestrians-at-crosswalk-8259/1080p.mp4";
const sonarRingSizes = [320, 400, 480];

const Hero = () => {
  const { scrollY } = useScroll();
  const waveTranslate = useTransform(scrollY, (value) => value * 0.05);
  const phoneTranslate = useTransform(scrollY, (value) => value * 0.12);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#80bbaa1f,transparent_70%)]" />
      <div className="absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute right-[-6rem] bottom-[-6rem] -z-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-secondary-foreground/80">
            ECHO VISION • IOS 18
          </span>
          <h1 className="text-4xl font-heading font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Navigate the World, Comfortably.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Echo Vision creates a personal haptic bubble so you can stay aware,
            grounded, and calm—no matter how crowded the space becomes. Built on
            Apple\'s LiDAR and haptic engine for a sensory experience that feels
            intuitive and discreet.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition duration-200 hover:bg-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2"
                >
                  <span className="relative inline-flex overflow-hidden">
                    <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition duration-200 group-hover:translate-y-0" />
                    <span className="relative">Watch the Demo</span>
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition duration-200 group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.5 2.75L11.25 8L3.5 13.25V2.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl overflow-hidden rounded-3xl border border-border/80 bg-background/95 p-0 shadow-glow">
                <video
                  className="h-full w-full"
                  src={demoVideoUrl}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  poster="https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=1200&q=80"
                >
                  Your browser does not support the video tag.
                </video>
              </DialogContent>
            </Dialog>
            <div className="grid grid-cols-2 gap-6 text-left text-xs uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.7rem]">
              <div>
                <p className="text-foreground/80">Haptics</p>
                <p className="mt-1 text-sm font-semibold tracking-normal text-foreground">
                  Adaptive, layered feedback
                </p>
              </div>
              <div>
                <p className="text-foreground/80">Detection</p>
                <p className="mt-1 text-sm font-semibold tracking-normal text-foreground">
                  Centimeter-precise LiDAR
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            style={{ y: waveTranslate }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            {sonarRingSizes.map((size, index) => (
              <div
                key={`wave-${size}`}
                className="relative rounded-full border border-secondary/30"
                style={{ height: size, width: size }}
              >
                <div
                  className="absolute inset-0 animate-sonar rounded-full border border-secondary/35"
                  style={{ animationDelay: `${index * 1.8}s` }}
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            style={{ y: phoneTranslate }}
            className="relative z-10 w-full max-w-xs rounded-[3rem] border border-white/10 bg-gradient-to-br from-primary/95 to-primary/80 p-5 shadow-[0px_30px_60px_-30px_rgba(13,27,42,0.75)]"
          >
            <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20" />
            <div className="absolute left-8 top-[4.2rem] h-6 w-6 rounded-full border border-white/15" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#12263b] to-[#0d1b2a] p-6 text-primary-foreground">
              <div className="relative mx-auto grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-secondary/40 via-secondary/20 to-transparent">
                <div className="absolute h-40 w-40 animate-sonar rounded-full border border-secondary/30" />
                <div className="absolute h-28 w-28 animate-sonar rounded-full border border-secondary/40" style={{ animationDelay: "1.6s" }} />
                <div className="absolute h-16 w-16 rounded-full bg-accent/60 blur-xl" />
                <div className="relative h-16 w-16 rounded-full border border-accent/70 bg-primary/60 shadow-[0px_12px_28px_-12px_rgba(232,136,115,0.7)]" />
              </div>
              <div className="mt-8 space-y-3 text-xs uppercase tracking-[0.3em] text-secondary/70">
                <div className="flex items-center justify-between text-[0.65rem]">
                  <span className="text-muted-foreground/90">Bubble Radius</span>
                  <span className="font-semibold text-white">1.5m</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-accent" />
                </div>
                <div className="flex items-center justify-between text-[0.65rem]">
                  <span className="text-muted-foreground/90">Intensity</span>
                  <span className="font-semibold text-white">Comfort</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Quiet", "Balanced", "Alert"].map((mode) => (
                    <div
                      key={mode}
                      className="rounded-full border border-white/10 px-3 py-2 text-center text-[0.6rem] font-semibold tracking-[0.2em] text-white/70"
                    >
                      {mode}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
