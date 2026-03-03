import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";

const Pinterest = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.965 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem("codeforj-newsletter-subscribed");
    if (subscribed === "true") {
      setIsSubscribed(true);
    }
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <footer className="bg-background border-t border-border overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Top: Let's Talk + Email ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-16 md:py-24 border-b border-border items-end">
          {/* Left */}
          <motion.h2
            {...fadeUp(0)}
            className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground"
          >
            Let's Talk
          </motion.h2>

          {/* Right – Email */}
          <motion.a
            href="mailto:team@codeforjhq.com"
            {...fadeUp(0.12)}
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary hover:opacity-75 transition-opacity duration-300 break-all md:text-right group"
          >
            <span className="underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary transition-all duration-300">
              team@codeforjhq.com
            </span>
          </motion.a>
        </div>

        {/* ── Middle: Links + Social + Newsletter ──────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-border">
          {/* Pages */}
          <motion.div {...fadeUp(0)}>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-foreground mb-5">Pages</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Features", path: "/features" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((l, i) => (
                <motion.li key={l.label} {...fadeUp(i * 0.05)}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-200 inline-block">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeUp(0.08)}>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", path: "/#how-it-works" },
                { label: "Pricing", path: "/#pricing" },
                { label: "Customer Reviews", path: "/#customer-reviews" },
                { label: "CodeForj Engine", path: "/features" },
              ].map((l, i) => (
                <motion.li key={l.label} {...fadeUp(0.08 + i * 0.05)}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-200 inline-block">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div {...fadeUp(0.16)}>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-foreground mb-5">Social Media</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/CodeforjHQ" },
                { label: "Twitter", icon: Twitter, href: "https://x.com/CodeforjHQ" },
                { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/@CodeforjHQ" },
                { label: "Pinterest", icon: Pinterest, href: "http://pinterest.com/CodeforjHQ/" },
                { label: "LinkedIn", icon: Linkedin, href: "#" },
              ].map(({ label, icon: Icon, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(0.16 + i * 0.06)}
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-200">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </span>
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div {...fadeUp(0.24)}>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-foreground mb-5">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              {isSubscribed
                ? "You've successfully joined our inner circle. Prepare for engineering excellence in your inbox."
                : "Get the latest updates on features, releases, and insights — straight to your inbox."}
            </p>

            {!isSubscribed ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email || isSubmitting) return;
                  setIsSubmitting(true);

                  try {
                    const response = await fetch("https://formspree.io/f/xeeldogr", {
                      method: "POST",
                      headers: { "Content-Type": "application/json", "Accept": "application/json" },
                      body: JSON.stringify({ email })
                    });
                    if (response.ok) {
                      setIsSubscribed(true);
                      localStorage.setItem("codeforj-newsletter-subscribed", "true");
                      setEmail("");
                    }
                  } catch (err) {
                    console.error("Newsletter error:", err);
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="flex items-center border border-border rounded-full overflow-hidden bg-zinc-900/50 focus-within:border-primary/60 transition-all duration-300 shadow-sm pr-1"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                  disabled={isSubmitting}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shrink-0 hover:opacity-90 transition-all shadow-[0_0_15px_rgba(218,7,109,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? "..." : "Join"}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(218,7,109,0.3)] border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* ── Bottom: Watermark + Copyright ────────────────── */}
        <div className="relative pt-6 pb-0 flex items-end justify-between">
          {/* Copyright */}
          <motion.p
            {...fadeUp(0)}
            className="relative z-10 text-xs text-muted-foreground pb-6"
          >
            © {new Date().getFullYear()} CodeForjHQ. All rights reserved.
          </motion.p>
          <motion.p
            {...fadeUp(0.08)}
            className="relative z-10 text-xs text-muted-foreground pb-6 text-right"
          >
            Built for developers who ship fast.
          </motion.p>
        </div>

        {/* Giant watermark — full width, clipped at bottom edge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden -mb-1"
        >
          <p
            className="font-heading font-black leading-none tracking-tighter select-none pointer-events-none text-center w-full"
            style={{
              fontSize: "clamp(52px, 14vw, 160px)",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CODEFORJHQ
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
