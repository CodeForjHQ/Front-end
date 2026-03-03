import { useEffect, useState } from "react";
import { Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

const achievements = [
  { label: "Code Scanned", value: 1.2, suffix: "B", decimals: 1, description: "Billion lines analyzed." },
  { label: "Global Users", value: 85, suffix: "k+", decimals: 0, description: "Active engineering teams." },
  { label: "Efficiency", value: 65, suffix: "%", decimals: 0, description: "Deployment speed increase." },
  { label: "Integrations", value: 150, suffix: "+", decimals: 0, description: "Dev ecosystem tools." },
];

const CountUp = ({ value, decimals = 0 }: { value: number; decimals?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Power animation (ease-out-expo-style)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * value;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <>{displayValue.toFixed(decimals)}</>;
};

const team = [
  {
    name: "Caden Voss",
    role: "Senior AI Infrastructure Engineer",
    image: "/Alex Sterling.png",
    bio: "Architecting robust platforms and deployment pipelines."
  },
  {
    name: "Remy Hale",
    role: "CTO",
    image: "/Axel Bjorn.png",
    bio: "Pioneering distributed systems and quantum-resistant security."
  },
  {
    name: "Zara Ellison",
    role: "Head of Product",
    image: "/Elena Rodriguez.png",
    bio: "Obsessed with developer intuition and zero-friction design."
  },
  {
    name: "Nyla Rhodes",
    role: "Lead AI Engineer",
    image: "/Sarah Chen.png",
    bio: "Specializing in large-scale semantic analysis."
  }
];

const About = () => {
  return (
    <Layout>
      <Hero
        title="Our Journey"
        subtitle="Empowering developers with the next generation of AI-driven tools."
        bgImage="/About Page Hero banner.png"
      />

      <div className="relative bg-black overflow-hidden">
        {/* Shared Background Decorations */}
        <div className="absolute inset-0 grid-dot-pattern opacity-[0.03] pointer-events-none" />


        {/* Mission Section - Redesigned to Asymmetrical Layout */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute top-[10%] -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                    The Mission
                  </span>
                </div>

                <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
                  Building the Infrastructure for <span className="text-primary">Tomorrow.</span>
                </h2>

                <p className="text-white/50 text-md sm:text-lg leading-relaxed font-body max-w-xl">
                  CodeForjHQ exists to bridge the gap between complex engineering and elegant deployment. We believe your workflow should be your competitive advantage, not your roadblock.
                </p>

                <div className="space-y-8 pt-8">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-[0_0_20px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
                      <Zap className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">Technical Rigor</h4>
                      <p className="text-white/40 text-[15px] leading-relaxed max-w-sm font-body">Deep system optimization at every layer of the codebase.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
                      <Globe className="w-5 h-5 text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">Scale First</h4>
                      <p className="text-white/40 text-[15px] leading-relaxed max-w-sm font-body">Engineered for global workloads from the very first line of code.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative aspect-[4/5] lg:aspect-auto lg:h-[650px] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl group"
              >
                <img
                  src="/Building the Infrastructure for Tomorrow.png"
                  alt="Modern Workspace"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Visual Accent */}
                <div className="absolute bottom-10 left-10 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[240px]">
                  <p className="text-white font-heading font-bold text-sm mb-1 uppercase tracking-wider">Join the Elite</p>
                  <p className="text-white/40 text-[10px] leading-relaxed italic">"The future belongs to those who build it with intelligence and precision."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section - High-Impact Stats */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />

          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {achievements.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="relative group p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--primary),0.1)] flex flex-col items-center text-center"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                  <div className="relative mb-6">
                    <span className="text-6xl lg:text-7xl font-heading font-black text-white tracking-tighter group-hover:text-primary transition-colors duration-500 inline-block">
                      <CountUp value={stat.value} decimals={stat.decimals} />{stat.suffix}
                    </span>
                    {/* Ghost number in background */}
                    <div className="absolute -top-4 -right-4 text-primary opacity-[0.03] group-hover:opacity-[0.08] font-heading font-black text-8xl pointer-events-none select-none transition-all duration-700">
                      {i + 1}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] font-heading">
                      {stat.label}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed font-body group-hover:text-zinc-400 transition-colors duration-500">
                      {stat.description}
                    </p>
                  </div>

                  {/* Corner glow */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Refined Grid & Cards */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                    The Collective
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-heading font-black text-white leading-tight">
                  Meet the <span className="text-primary">Architects.</span>
                </h2>
              </div>
              <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-2">
                Our team consists of world-class engineers, designers, and visionaries dedicated to perfecting the developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(var(--primary),0.05)]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                    />

                    {/* Glassmorphism Bottom Card */}
                    <div className="absolute inset-x-3 bottom-3 p-6 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/20">
                      <p className="text-white font-heading font-bold text-lg mb-1">{member.name}</p>
                      <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>

                      <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:mt-2">
                        <p className="text-white/40 text-[11px] leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTA
        title={
          <>
            <span className="text-white/60 font-semibold">Explore our</span>{" "}
            <span className="text-white">intelligent features.</span>
          </>
        }
        subtitle="Discover the extensive tools and pipelines that make CodeForj the best AI-powered code assistant."
        ctaLabel="See Features"
        ctaLink="/features"
        secondaryLabel="Try for free"
        secondaryLink="/contact"
      />
    </Layout>
  );
};

export default About;
