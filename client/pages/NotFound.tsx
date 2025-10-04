import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#0d1b2a1a,transparent_75%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-secondary-foreground/80">
            404 • Not Found
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            This signal doesn\'t exist yet.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We couldn\'t locate the page you\'re seeking. Use the navigation to
            explore Echo Vision or return to the calm of the homepage.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition duration-200 hover:bg-accent hover:text-white"
            >
              Return Home
            </Link>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition duration-200 hover:text-foreground"
            >
              Explore the product
            </a>
          </div>
        </motion.div>
      </section>
    </AppLayout>
  );
};

export default NotFound;
