import { motion } from "framer-motion";

const Challenge = () => {
  return (
    <section id="challenge" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0d1b2a0d,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#80bbaa1c,transparent_65%)] blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          For Crowded Spaces and Quiet Minds
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Navigating busy streets, packed lecture halls, or the subway shouldn\'t
          come at the cost of your calm. Echo Vision gently safeguards your
          personal space, reducing sensory overload so you can focus on what
          matters rather than constantly scanning your surroundings.
        </p>
        <div className="mt-10 h-48 overflow-hidden rounded-3xl border border-secondary/20 bg-gradient-to-br from-secondary/15 via-transparent to-transparent">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(128,187,170,0.3)_0%,rgba(253,253,255,0)_55%)] blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(13,27,42,0.25)_0%,rgba(13,27,42,0)_60%)] blur-2xl" />
            <div className="absolute inset-0 backdrop-blur-[30px]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(253,253,255,0.65)_0%,rgba(12,27,42,0.18)_40%,rgba(12,27,42,0.4)_70%)] mix-blend-luminosity" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Challenge;
