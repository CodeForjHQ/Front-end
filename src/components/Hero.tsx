import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaLink?: string;
  bgImage?: string;
}

const Hero = ({ title, subtitle, ctaLabel, ctaLink, bgImage }: HeroProps) => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[350px] md:min-h-[450px] pt-40 pb-10 md:pt-20 md:pb-10 overflow-hidden">
      {/* Background Image or Fallback Gradient */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <>
            <img
              src={bgImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-layer dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/20" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 hero-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />
          </>
        )}
      </div>

      {/* Decorative primary glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.2] tracking-tighter text-white mb-8 max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-4"
        >
          {title.split(" ").length > 2 && (
            <span>{title.split(" ").slice(0, -2).join(" ")}</span>
          )}
          <br className="sm:hidden" />
          <span className="inline-flex items-center gap-x-3 whitespace-nowrap">
            {title.split(" ").length > 1 && (
              <span>{title.split(" ").slice(-2, -1)[0]}</span>
            )}
            <span className="relative inline-block px-4 py-1 group">
              <span className="absolute inset-0 bg-primary skew-x-[-12deg] transform" />
              <span className="relative text-white z-10">
                {title.split(" ").slice(-1)}
              </span>
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-white/70 text-base sm:text-md lg:text-md max-w-2xl mx-auto leading-relaxed font-body mb-10"
        >
          {subtitle}
        </motion.p>

        {ctaLabel && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-white font-black text-base shadow-[0_0_24px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] hover:scale-105 transition-all duration-300 active:scale-95"
            >
              {ctaLabel}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
