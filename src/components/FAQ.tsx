import { motion } from "framer-motion";

const faqData = [
  {
    q: "What is CodeForjHQ?",
    a: "CodeForjHQ is an AI-powered developer productivity and code management platform designed to help engineering teams ship better code, faster.",
  },
  {
    q: "How does analysis work?",
    a: "Our AI models analyze your codebase in real-time, identifying potential bugs, security vulnerabilities, and performance bottlenecks automatically.",
  },
  {
    q: "Is my code secure?",
    a: "Absolutely. We use end-to-end encryption, SOC 2 compliance, and isolated environments. Your code never leaves your designated region.",
  },
  {
    q: "Can I integrate my tools?",
    a: "Yes. Integrates with GitHub, GitLab, Bitbucket, Jira, Slack, and 50+ other developer tools out of the box.",
  },
  {
    q: "What support is offered?",
    a: "We offer community support for all tiers, priority email/chat for Pro plans, and dedicated account managers for Enterprise.",
  },
  {
    q: "How fast is onboarding?",
    a: "You can connect your repositories and see initial results in under 60 seconds with our zero-config approach.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Centered Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                Resources
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8">
              Wondering Something?  <span className="text-primary text-gradient"> Start Here</span>
            </h2>
            <p className="text-white/50 text-md sm:text-lg leading-relaxed font-body">
              Everything you need to know about getting started with CodeForjHQ and our AI ecosystem.
            </p>
          </motion.div>
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-glow group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-start min-h-[220px] hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-heading font-black text-xl">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white leading-snug">
                    {item.q}
                  </h3>
                  <p className="text-white/40 text-[15px] leading-relaxed font-body max-w-[90%]">
                    {item.a}
                  </p>
                </div>
              </div>

              {/* Accent border on hover (from Features design) */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
