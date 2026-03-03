import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-6xl">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`backdrop-blur-xl border flex items-center justify-between shadow-2xl transition-all duration-500 rounded-full px-6 py-2.5 ${scrolled
          ? "bg-card/90 border-primary/30 shadow-primary/10 py-2"
          : "bg-card/40 border-white/10"
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center active:scale-95">
          <img
            src="/logo.svg"
            alt="CodeForjHQ Logo"
            className="w-36 h-12 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1.5" onMouseLeave={() => setHoveredPath(null)}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                className={`relative px-5 py-2 rounded-full text-sm font-bold font-body transition-all duration-300 ${isActive
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span className="relative z-10">{link.label}</span>

                {/* Hover Effect Pill */}
                <AnimatePresence>
                  {hoveredPath === link.path && !isActive && (
                    <motion.div
                      layoutId="hover-nav"
                      className="absolute inset-0 bg-white/10 border border-white/5 rounded-full z-0"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-50" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/codeforj-engine"
          className="group relative hidden lg:inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-foreground text-background text-sm font-bold font-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-xl overflow-hidden active:scale-95"
        >
          <span className="relative z-10 transition-colors duration-300">CodeForj Engine</span>
          <div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:scale-110 z-10">
            <ArrowRight size={18} className="text-white fill-none stroke-[3] transition-all duration-500 group-hover:translate-x-0.5 group-hover:scale-110" />
          </div>
          <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-12 h-12 flex items-center justify-center text-foreground hover:bg-white/5 rounded-full transition-colors active:scale-90 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 w-full h-[2px] bg-foreground rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-foreground rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground rounded-full"
            />
          </div>
        </button>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Full screen backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] lg:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="lg:hidden mt-4 bg-card/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl flex flex-col gap-4"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-4 rounded-2xl text-xl font-bold font-heading transition-all duration-300 ${location.pathname === link.path
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  to="/codeforj-engine"
                  onClick={() => setMobileOpen(false)}
                  className="group relative flex items-center justify-between pl-8 pr-2 py-2 rounded-full bg-foreground text-background text-lg font-black font-heading hover:bg-primary hover:text-white transition-all duration-500 shadow-xl overflow-hidden active:scale-95"
                >
                  <span className="relative z-10 transition-colors duration-300">CodeForj Engine</span>
                  <div className="relative w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:scale-110 z-10">
                    <ArrowRight size={24} className="text-white fill-none stroke-[3] transition-all duration-500 group-hover:translate-x-0.5" />
                  </div>
                  <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
