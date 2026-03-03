import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/layout/Layout";
import { ArrowRight, Cpu, Brain, Zap, Shield, Code2, GitBranch, Activity, Box } from "lucide-react";

// Feature cards data
const featureCards = [
  {
    icon: Code2,
    title: "Intelligent Code Review",
    description: "AI models trained on millions of code patterns identify issues before they reach production.",
    tags: ["Pattern recognition", "Syntax validation", "Security auditing", "Semantic analysis"],
    highlight: true,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Zero-trust architecture with SOC 2 compliance and end-to-end encryption.",
    tags: ["SOC 2 Type II", "Encryption-at-rest", "Identity (SSO)"],
  },
  {
    icon: Zap,
    title: "Automated Refactoring",
    description: "Transform legacy code into modern architecture while maintaining correctness.",
    tags: ["Clean code injection", "Complexity reduction"],
  },
  {
    icon: Box,
    title: "Pipeline Orchestration",
    description: "Visual workflow builder with conditional logic and parallel execution.",
    tags: ["Visual designer", "Parallel jobs", "Error recovery", "State tracking"],
  },
  {
    icon: Activity,
    title: "Performance Optimization",
    description: "Real-time bottleneck detection and auto-scaling recommendations.",
    tags: ["Load balancing", "Memory profiling", "CPU thresholding"],
  },
  {
    icon: GitBranch,
    title: "Smart Merge Resolution",
    description: "ML-powered conflict detection that understands semantic meaning.",
    tags: ["Contextual diffing", "Auto-solving"],
  },
];

// Technology stack data
const techStack = [
  {
    title: "NVIDIA NeMo Framework",
    useCase: "Intelligent Code Review, Automated Refactoring & Smart Merge",
    description: "Custom AI Code Architect LLM fine-tuned on proprietary code corpus for semantic understanding.",
    color: "from-pink-500/20 to-red-500/20",
  },
  {
    title: "NVIDIA Morpheus",
    useCase: "Real-time Monitoring & Performance Optimization",
    description: "High-performance real-time pipeline for anomaly detection and AIOps integration.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "NVIDIA RAPIDS",
    useCase: "Predictive Analytics & Data Processing",
    description: "GPU-accelerated data science suite for training models and historical analysis.",
    color: "from-purple-500/20 to-indigo-500/20",
  },
];

const ProductEngine = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative w-full flex items-center justify-center min-h-screen overflow-hidden bg-black">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 hero-grid opacity-10" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        </div>

        {/* Glowing border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-bold tracking-widest">
              AI DEVELOPER PRODUCTIVITY PLATFORM
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.15] tracking-tighter text-white mb-6 max-w-5xl"
          >
            CodeForj <span className="relative inline-block px-4 py-1 group">
              <span className="absolute inset-0 bg-primary skew-x-[-12deg] transform" />
              <span className="relative text-white z-10">Engine</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-body"
          >
            The intelligent platform that reduces friction, increases velocity, and helps teams ship great software. AI-powered code intelligence meets production-grade reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://app.codeforjhq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] active:scale-95"
            >
              <span>Launch Dashboard</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              Explore Features
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-4xl"
          >
            <div className="text-center">
              <p className="text-3xl font-black text-primary mb-1">99.9%</p>
              <p className="text-sm text-white/50 font-body">Uptime Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-primary mb-1">~2.4s</p>
              <p className="text-sm text-white/50 font-body">Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-primary mb-1">Millions</p>
              <p className="text-sm text-white/50 font-body">Code Patterns Trained</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-primary mb-1">Enterprise</p>
              <p className="text-sm text-white/50 font-body">Grade Security</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="relative bg-black py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid opacity-5" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto">
              Powerful Features That <span className="text-primary">Make a Difference</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-body">
              Comprehensive AI-powered tools designed to eliminate bottlenecks and accelerate your development workflow.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className={`group relative rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "bg-primary/10 border-primary/50 md:col-span-2 lg:col-span-2"
                      : card.highlight
                      ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${card.highlight ? "bg-primary/30" : "bg-white/10"}`}>
                        <Icon size={24} className={card.highlight ? "text-primary" : "text-white"} />
                      </div>
                      {card.highlight && (
                        <div className="px-3 py-1 rounded-full bg-primary/30 text-primary text-xs font-bold">
                          Featured
                        </div>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                      {card.title}
                    </h3>

                    <p className="text-white/60 text-sm md:text-base font-body leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            card.highlight
                              ? "bg-primary/20 text-primary"
                              : "bg-white/10 text-white/70"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.div
                        exit={{ opacity: 0 }}
                        className="absolute bottom-4 right-4 text-white/40 group-hover:text-white/60 transition-colors"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className="relative bg-black py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid opacity-5" />
          <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto">
              Powered by <span className="text-primary">NVIDIA AI</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-body">
              Enterprise-grade AI infrastructure built on the world's most advanced GPU-accelerated frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-2xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300 p-8 bg-gradient-to-br ${tech.color}`}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain size={28} className="text-primary" />
                    <h3 className="font-heading font-bold text-xl text-white">
                      {tech.title}
                    </h3>
                  </div>

                  <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">
                    {tech.useCase}
                  </p>

                  <p className="text-white/60 font-body leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 -z-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY METRICS SECTION */}
      <section className="relative bg-black py-20 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-grid opacity-5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">
              Built for <span className="text-primary">Production</span>
            </h2>
            <p className="text-white/50 text-lg font-body">
              Enterprise-grade reliability and performance that scales with your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Zero-Trust Architecture", icon: Shield },
              { label: "SOC 2 Type II Certified", icon: Cpu },
              { label: "End-to-End Encryption", icon: Code2 },
              { label: "99.9% Uptime SLA", icon: Activity },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
                >
                  <Icon className="text-primary" size={32} />
                  <p className="font-heading font-bold text-white">{metric.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 35%, hsl(340 97% 22% / 0.85) 70%, hsl(340 97% 35% / 0.95) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at bottom center, hsl(340 97% 49% / 0.45) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white max-w-3xl">
              Ready to <span className="text-primary">ship smarter?</span>
            </h2>

            <p className="text-white/50 text-base sm:text-lg leading-relaxed font-body max-w-xl">
              Join engineering teams shipping faster with CodeForj Engine. Access the full power of AI-driven development productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://app.codeforjhq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-6 pl-6 pr-1.5 py-1.5 rounded-full bg-white text-black font-bold text-sm font-heading hover:scale-[1.02] transition-all duration-300 shadow-xl active:scale-95"
              >
                <span>Launch Dashboard</span>
                <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductEngine;
