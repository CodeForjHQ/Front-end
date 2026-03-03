import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title?: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}

const CTA = ({
  title = (
    <>
      <span className="text-white/60 font-semibold">Build smarter code</span>{" "}
      <span className="text-white">and ship with</span>{" "}
      <span className="text-white">confidence.</span>
    </>
  ),
  subtitle = "Use CodeForjHQ's intelligent building blocks to review, optimize, and deploy flawless engineering workflows.",
  ctaLabel = "Get started",
  ctaLink = "/contact",
  secondaryLabel = "Try for free",
  secondaryLink = "/contact",
}: CTAProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background: dark top → primary at bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 35%, hsl(340 97% 22% / 0.85) 70%, hsl(340 97% 35% / 0.95) 100%)",
        }}
      />
      {/* Subtle radial bloom at the bottom center */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, hsl(340 97% 49% / 0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 sm:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Headline — mixed weight like the reference */}
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed font-body max-w-xl">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Solid white pill */}
            <Link
              to={ctaLink}
              className="group inline-flex items-center gap-6 pl-6 pr-1.5 py-1.5 rounded-full bg-white text-black font-bold text-sm font-heading hover:scale-[1.02] transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>{ctaLabel}</span>
              <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
