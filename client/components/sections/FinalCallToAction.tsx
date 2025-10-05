import { motion } from "framer-motion";

const FinalCallToAction = () => {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#0d1b2a1c,transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-to-br from-[#102235] via-[#152b40] to-[#0d1b2a] px-8 py-16 text-center text-primary-foreground shadow-[0px_32px_80px_-40px_rgba(12,27,42,0.8)] sm:px-16"
      >
        <div className="absolute left-[-10%] top-[-20%] h-56 w-56 rounded-full bg-secondary/40 blur-3xl" />
        <div className="absolute right-[-15%] bottom-[-25%] h-64 w-64 rounded-full bg-accent/35 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            Experience a New Kind of Vision.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
            Download I.R.I.S (Interactive Reality Interpretation System) to create
            your own haptic sanctuary. Set your comfort radius, exhale, and move
            through the world with quiet confidence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3 text-base font-semibold text-white shadow-[0px_28px_56px_-30px_rgba(232,136,115,0.7)] transition duration-200 hover:shadow-[0px_35px_70px_-28px_rgba(232,136,115,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.365 1.43c.044 1.043-.385 2.066-1.104 2.808-.756.75-1.876 1.33-2.936 1.252-.132-1.007.41-2.076 1.138-2.79.774-.762 2.07-1.34 2.902-1.27zM21.414 17.577c-.815 1.186-1.205 1.713-2.25 2.77-1.454 1.481-3.135 3.33-5.17 3.343-2.028.014-2.563-1.083-5.119-1.07-2.555.012-3.135 1.085-5.165 1.071-2.035-.014-3.593-1.683-5.047-3.163C-.164 17.66-.58 12.734 1.51 9.579c1.312-2.001 3.644-3.25 5.744-3.25 2.145 0 3.493 1.112 5.27 1.112 1.731 0 2.79-1.112 5.31-1.112 1.824 0 3.75.999 5.103 2.719-4.479 2.497-3.753 9.007.477 11.529z" />
              </svg>
              View on the App Store
            </a>
            <p className="text-sm uppercase tracking-[0.32em] text-white/60">
              Built for iPhone 15 Pro &amp; LiDAR devices
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCallToAction;
