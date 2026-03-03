import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import {
  Play,
  X,
} from "lucide-react";

const coreCapabilities = [
  {
    title: "Intelligent Code Review",
    description: "AI models trained on millions of code patterns identify issues before they reach production. Our deep analysis engine understands intent, not just syntax.",
    image: "/Intelligent Code Review.png",
    size: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    features: ["Pattern recognition", "Syntax validation", "Security auditing", "Semantic analysis"],
    bgColor: "bg-zinc-900"
  },
  {
    title: "Enterprise Security",
    description: "Zero-trust architecture with SOC 2 compliance and end-to-end encryption for your most sensitive assets.",
    image: "/Enterprise Security.png",
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    features: ["SOC 2 Type II", "Encryption-at-rest", "Identity (SSO)"],
    bgColor: "bg-zinc-900"
  },
  {
    title: "Automated Refactoring",
    description: "Apply improvements that maintain correctness while improving readability. Transform legacy code into modern architecture.",
    image: "/Automated Refactoring.png",
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    features: ["Clean code injection", "Complexity reduction"],
    bgColor: "bg-zinc-900"
  },
  {
    title: "Pipeline Orchestration",
    description: "Visual workflow builder with conditional logic, parallel execution, and retry mechanisms for industrial-scale deployment cycles.",
    image: "/Pipeline Orchestration.png",
    size: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
    features: ["Visual designer", "Parallel jobs", "Error recovery", "State tracking"],
    bgColor: "bg-zinc-900"
  },
  {
    title: "Performance Optimization",
    description: "Real-time bottleneck detection and auto-scaling recommendations to keep your applications running at peak velocity.",
    image: "/Performance Optimization.png",
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
    features: ["Load balancing", "Memory profiling", "CPU thresholding"],
    bgColor: "bg-zinc-900"
  },
  {
    title: "Smart Merge Resolution",
    description: "ML-powered conflict detection that understands semantic meaning, eliminating the fear of large branch merges.",
    image: "",
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    features: ["Contextual diffing", "Auto-solving"],
    bgColor: "bg-zinc-900"
  },
  {
    title: "Real-time Monitoring",
    description: "Live dashboards for build status and deployment health across your entire organization.",
    image: "",
    size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    features: ["Live telemetry", "Custom alerts"],
    bgColor: "bg-primary/20"
  },
];

const BentoCard = ({ item, index }: { item: typeof coreCapabilities[0], index: number }) => {
  const isLarge = item.size.includes("row-span-2");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative rounded-[2rem] overflow-hidden border border-white/5 ${item.bgColor || 'bg-zinc-900'} group ${item.size} cursor-default`}
    >
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div>
          <h3 className={`font-heading font-bold text-white tracking-tight mb-4 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {item.title}
          </h3>
          <p className={`text-white/50 leading-relaxed font-body mb-6 ${isLarge ? 'text-lg max-w-sm' : 'text-sm'}`}>
            {item.description}
          </p>
        </div>

        <div>
          <ul className="flex flex-wrap gap-2">
            {item.features.map((f, i) => (
              <li key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/70 uppercase tracking-wider">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 rounded-[2rem] pointer-events-none" />
    </motion.div>
  );
};

const VideoSection = ({ onPlay }: { onPlay: () => void }) => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="w-full max-w-7xl mx-auto px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="text-left space-y-6">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
              Live Ecosystem
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white leading-[1.1]">
            Experience the <span className="text-primary">Ecosystem</span> In Motion.
          </h2>

          <p className="text-white/50 text-lg leading-relaxed font-body max-w-xl">
            Watch how CodeForjHQ orchestrates complex engineering workflows, from intelligent PR reviews to automated multi-cloud deployment cycles.
          </p>

          <div className="pt-4 flex flex-wrap gap-6 text-left">
            <div className="space-y-1">
              <p className="text-white font-bold text-2xl">99.9%</p>
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Uptime Accuracy</p>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-1">
              <p className="text-white font-bold text-2xl">~2.4s</p>
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Average Latency</p>
            </div>
          </div>
        </div>

        {/* Right Side: Video Preview */}
        <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-zinc-900/50">
          <img
            src="/Feature Page Hero banner.png"
            alt="Platform Preview"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={onPlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_40px_rgba(218,7,109,0.4)] z-10"
            >
              <Play fill="currentColor" size={24} />
            </motion.button>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md border border-white/10"
          >
            <X size={24} />
          </button>

          <video
            autoPlay
            controls
            className="w-full h-full object-contain"
          >
            <source src="/The Anthem-codeforjhq.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Features = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Layout>
      <Hero
        title="Platform Features"
        subtitle="AI-powered tools designed to reduce friction, increase velocity, and help your team ship great software."
        bgImage="/Feature Page Hero banner.png"
      />

      <section className="py-20 bg-black">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {coreCapabilities.map((item, i) => (
              <BentoCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <VideoSection onPlay={() => setIsVideoOpen(true)} />

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      <CTA
        title={
          <>
            <span className="text-white/60 font-semibold">Get to know the team</span>{" "}
            <span className="text-white">behind CodeForj.</span>
          </>
        }
        subtitle="We are a group of engineers passionate about helping development teams build better products."
        ctaLabel="About Us"
        ctaLink="/about"
        secondaryLabel="Contact Sales"
        secondaryLink="/contact"
      />
    </Layout>
  );
};

export default Features;