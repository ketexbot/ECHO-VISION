import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ui/theme-toggle";

const navigation = [
  { label: "Experience", href: "#hero" },
  { label: "Challenge", href: "#challenge" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
];

const currentYear = new Date().getFullYear();

const AppLayout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  const handleHomeClick = (e: any) => {
    // If we're already on the home route, prevent navigation and scroll to top
    if (location.pathname === "/") {
      e.preventDefault();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (e: any, href: string) => {
    // Smooth scroll to in-page anchors like #hero, #solution
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        try {
          // update the hash without jumping
          history.replaceState(null, "", `#${id}`);
        } catch {}
      }
    }
  };
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#80bbaa1c,transparent_68%)]" />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" aria-label="IRIS home" className="group flex items-center gap-3" onClick={handleHomeClick}>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80">
                I.R.I.S
              </span>
              <span className="text-xs text-muted-foreground">
                Interactive Reality Interpretation System
              </span>
            </span>
          </Link>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="transition duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#download"
              className="hidden items-center gap-2 rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition duration-200 hover:bg-accent hover:text-white md:inline-flex"
            >
            <svg
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.438 6.186c.948-1.114 1.597-2.678 1.421-4.186-1.37.096-2.996.96-3.954 2.074-.865 1.01-1.63 2.614-1.433 4.147 1.518.119 3.02-.774 3.966-2.035zM19.625 16.875c-.553 1.266-.816 1.803-1.523 2.907-.99 1.512-2.384 3.4-4.097 3.413-1.531.014-1.929-.988-4.011-.977-2.081.01-2.523.995-4.054.981-1.713-.013-3.029-1.717-4.02-3.228-2.756-4.211-3.043-9.154-1.346-11.778 1.205-1.868 3.112-3.007 4.898-3.007 1.834 0 2.991 1.004 4.503 1.004 1.472 0 2.369-1.005 4.484-1.005 1.602 0 3.296.879 4.49 2.397-3.944 2.196-3.302 7.916.677 9.293z" />
            </svg>
            View on the App Store
            </a>

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#download"
              className="rounded-full border border-accent px-4 py-2 text-xs font-semibold text-accent transition duration-200 hover:bg-accent hover:text-white"
            >
              Get I.R.I.S
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/60 bg-background/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} I.R.I.S. Designed for HackHarvard by a team that
            believes in beautiful futures.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={`footer-${item.href}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="transition duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://codexgu.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-foreground"
            >
              https://codexgu.dev/
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
