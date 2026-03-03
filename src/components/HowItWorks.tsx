import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Link Your Repo Now",
    description: "Connect GitHub, GitLab, or Bitbucket in seconds, with Zero configuration.",
  },
  {
    step: "02",
    title: "AI Analyzes Your Code",
    description: "Our engine scans your codebase, identifies patterns, and maps dependencies automatically.",
  },
  {
    step: "03",
    title: "Get Actionable Insights",
    description: "Receive real-time suggestions for bugs, performance improvements, and security.",
  },
  {
    step: "04",
    title: "Deploy With Full Confidence",
    description: "Deploy knowing every line has been reviewed by AI and your team's best practices.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-dot-pattern opacity-10 pointer-events-none" />

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">

        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                How it works
              </span>
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">
              How CodeForj Fits Into <span className="text-primary text-gradient">Your Workflow</span>
            </h2>

            <p className="text-muted-foreground text-md sm:text-md lg:text-md leading-relaxed font-body max-w-xl mx-auto px-4 opacity-90">
              Experience a smarter way to build, review, and ship code with four intelligent steps powered by AI
            </p>
          </motion.div>
        </div>

        {/* Process Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px_1fr] gap-6 lg:gap-10 items-center">

          {/* Left Steps (01 & 02) */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            {[steps[0], steps[1]].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                className="card-glow group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-start min-h-[200px] hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Step Number */}
                <div className="absolute top-2 right-4 text-primary/15 font-heading font-black text-9xl pointer-events-none select-none group-hover:text-primary/25 transition-all duration-700">
                  {s.step}
                </div>

                <div className="relative z-10">
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-[15px] leading-relaxed font-body">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* FAQ Style Accent border on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Central Vertical Image - Wider and Shorter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative h-[400px] lg:h-[550px] rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl order-1 lg:order-2 group/img"
          >
            <img
              src="/Four Steps to Better Code.png"
              alt="Four Steps to Better Code"
              className="w-full h-full object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
          </motion.div>

          {/* Right Steps (03 & 04) */}
          <div className="flex flex-col gap-6 lg:gap-8 order-3">
            {[steps[2], steps[3]].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.2, duration: 0.6, ease: "easeOut" }}
                className="card-glow group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-start min-h-[200px] hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Step Number */}
                <div className="absolute top-2 right-4 text-primary/15 font-heading font-black text-9xl pointer-events-none select-none group-hover:text-primary/25 transition-all duration-700">
                  {s.step}
                </div>

                <div className="relative z-10">
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-[15px] leading-relaxed font-body">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* FAQ Style Accent border on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
