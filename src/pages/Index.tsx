import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/layout/Layout";
import HomeHero from "@/components/HomeHero";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import {
  Brain,
  Shield,
  Zap,
  GitBranch,
  BarChart3,
  Workflow,
  Users,
  Globe,
  TrendingUp,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Code Analysis",
    description: "Real-time intelligent code review that catches bugs, vulnerabilities, and performance issues before they ship.",
  },
  {
    icon: GitBranch,
    title: "Smart Version Control",
    description: "Automated branch management, conflict resolution, and merge strategies powered by machine learning.",
  },
  {
    icon: Zap,
    title: "Instant Deployments",
    description: "One-click deployments with automatic rollback, canary releases, and zero-downtime updates.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption, SSO, and granular access controls.",
  },
  {
    icon: BarChart3,
    title: "Team Analytics",
    description: "Comprehensive dashboards tracking velocity, code quality, and engineering health metrics.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom CI/CD pipelines, automated testing triggers, and intelligent task routing.",
  },
];

const stats = [
  { value: "10K+", label: "Engineering Teams", icon: Users },
  { value: "99.99%", label: "Uptime SLA", icon: Globe },
  { value: "40%", label: "Faster Deploys", icon: TrendingUp },
  { value: "2M+", label: "Code Reviews", icon: Code2 },
];

const pricingPlans = [
  {
    name: "Forge",
    description: "For individual developers and small teams.",
    price: { monthly: 49, yearly: 39 },
    paymentLink: {
      monthly: "https://buy.stripe.com/test_7sY4gygEMbTq6GAgO30Jq00",
      yearly: "https://buy.stripe.com/test_bJe7sK74c3mUe92apF0Jq03"
    },
    features: ["Up to 3 repositories", "Basic AI analysis", "Community support", "5 deployments/month"],
  },
  {
    name: "Commit",
    description: "For growing engineering teams.",
    price: { monthly: 99, yearly: 79 },
    paymentLink: {
      monthly: "https://buy.stripe.com/test_fZu00i4W4g9G8OIdBR0Jq01",
      yearly: "https://buy.stripe.com/test_14A3cufAI3mUe92gO30Jq04"
    },
    features: ["Unlimited repositories", "Advanced AI analysis", "Priority support", "Unlimited deployments", "Team analytics", "Custom workflows"],
    highlighted: true,
  },
  {
    name: "Deploy",
    description: "For organizations at scale.",
    price: { monthly: 139, yearly: 111 },
    paymentLink: {
      monthly: "https://buy.stripe.com/test_7sYfZgewE4qYd4YapF0Jq02",
      yearly: "https://buy.stripe.com/test_00w7sK1JS8HeghaeFV0Jq05"
    },
    features: ["Everything in Pro", "SSO & SAML", "Dedicated account manager", "Custom SLA", "On-premise option", "Audit logs"],
  },
];

const Home = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Layout>
      <HomeHero
        title={<>Your Smartest Codebase <br /> Starts Here</>}
        subtitle="CodeForj HQ gives your codebase an AI-powered command center, automatically reviewing, optimizing, and synchronizing every line of code across your entire development workflow."
        ctaLabel="CodeForj Engine"
        ctaLink="/waitlist"
      />

      {/* ── About Section ─────────────────────────────────── */}
      <section className="">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">

          {/* Row 1: Split title + description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-14">
            {/* Left – Badge + Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                  About CodeForjHQ
                </span>
              </div>

              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
                Where AI Meets Every  <span className="text-primary text-gradient">Line of Your Workflow</span>
              </h2>
            </motion.div>

            {/* Right – Description + Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="flex flex-col gap-6 pt-1 md:pt-8"
            >
              <p className="text-muted-foreground text-md sm:text-md lg:text-md leading-relaxed font-body">
                CodeForjHQ is an intelligent engineering workspace that transforms how modern teams build. We combine AI with battle-tested practices to eliminate friction and amplify your output.
              </p>
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-primary text-white font-bold text-sm text-center shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-[1.02] transition-all duration-300 active:scale-95"
                >
                  Explore now
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Three-column reference-style card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

            {/* Card 1 – title top, description, floating mockup image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col min-h-[360px] group hover:border-primary/30 transition-all duration-300"
            >
              {/* Title + Description at top */}
              <div className="px-7 pt-7 pb-4">
                <h3 className="font-heading font-bold text-xl leading-snug text-foreground mb-3">
                  Code that grows with you
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Build faster as your codebase scales. Our AI adapts to your project's patterns and accelerates delivery.
                </p>
              </div>

              {/* Image section — Highlighted Mockup Style */}
              <div className="px-5 pb-5 mt-auto relative group-hover:translate-y-[-4px] transition-transform duration-500">
                {/* Subtle base glow behind the image */}
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden">
                  <img
                    src="/Code that grows with you.png"
                    alt="Code that grows with you"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 2 – Primary tinted dark */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative rounded-2xl bg-primary/10 border border-primary/25 overflow-hidden flex flex-col min-h-[360px] group hover:bg-primary/15 hover:border-primary/40 transition-all duration-300 p-7"
            >
              {/* Glow top-right */}
              <div className="absolute -top-10 -right-10 w-52 h-52 bg-primary/25 blur-3xl rounded-full pointer-events-none" />

              {/* Large title at top */}
              <h3 className="font-heading font-semibold text-3xl sm:text-4xl leading-tight text-white mb-auto relative z-10">
                Always fast,<br />always reliable
              </h3>

              {/* Description at bottom */}
              <p className="text-white/50 text-sm leading-relaxed mt-20 relative z-10">
                Sub-100ms latency on every action. 99.99% uptime SLA. Zero-downtime deploys with instant rollback — never lose your momentum.
              </p>
            </motion.div>

            {/* Card 3 – Neutral dark with subtle border */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col min-h-[360px] group hover:border-primary/30 transition-all duration-300 p-7"
            >
              {/* Subtle glow */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

              {/* Large title at top */}
              <h3 className="font-heading font-semibold text-3xl sm:text-4xl leading-tight text-white mb-auto relative z-10">
                100%<br />hands-free
              </h3>

              {/* Description at bottom */}
              <p className="text-zinc-400 text-sm leading-relaxed mt-20 relative z-10">
                Set up your pipeline once and let CodeForjHQ handle the rest. Automated reviews, tests, and deployments — no manual steps needed.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Features Showcase */}
      <section className="py-28 bg-background/30 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center mb-24">

            {/* Combined Text Column (Left on Desktop, Top on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                  About Features
                </span>
              </div>

              {/* Title */}
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.2] tracking-tight mb-6 max-w-lg text-foreground">
                The Complete  <span className="text-primary text-gradient">Coding</span> Arsenal
              </h2>

              {/* Description (Visible after title on mobile, positioned here for flow) */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-body max-w-md opacity-80 mb-8">
                We aim to accelerate the transition to a sustainable engineering future by delivering innovative workspace technologies.
              </p>

              {/* Premium Feature Highlights */}
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { title: "AI Intelligence", icon: Brain, mobile: true },
                  { title: "Global Shield", icon: Shield, mobile: true },
                  { title: "Smart VCS", icon: GitBranch, mobile: false },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    className={`items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${item.mobile ? 'flex' : 'hidden lg:flex'}`}
                  >
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    {item.title}
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-primary text-white font-bold text-sm text-center shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-[1.02] transition-all duration-300 active:scale-95"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Middle Column: Major Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative h-[380px] lg:h-[480px] rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl group/img"
            >
              <img
                src="/We empower teams with intelligent & reliable workspaces.png"
                alt="Intelligent & Reliable Workspaces"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>


        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                  Pricing Plans
                </span>
              </div>

              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">
                Simple, Transparent <span className="text-primary text-gradient">Pricing</span>
              </h2>

              <p className="text-muted-foreground text-md sm:text-md lg:text-md leading-relaxed font-body max-w-xl mx-auto px-4 opacity-90 mb-10">
                Start free. Scale as you grow. Our plans are designed to empower engineering teams of all sizes with next-gen AI capabilities.
              </p>

              {/* Toggle */}
              <div className="inline-flex items-center gap-1 bg-zinc-900/50 border border-white/5 rounded-2xl p-1.5 backdrop-blur-md">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${!isYearly ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.3)]" : "text-muted-foreground hover:text-white"
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${isYearly ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.3)]" : "text-muted-foreground hover:text-white"
                    }`}
                >
                  Yearly <span className="text-[10px] opacity-70 ml-1">(-20%)</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={i === 2 ? "md:col-span-2 lg:col-span-1 w-full" : ""}
              >
                <PricingCard
                  {...plan}
                  isYearly={isYearly}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <FAQ />
      <CTA
        title={
          <>
            <span className="text-white/60 font-semibold">Ready to talk</span>{" "}
            <span className="text-white">with us?</span>
          </>
        }
        subtitle="Get in touch with our team to find out how CodeForj can accelerate your workflow."
        ctaLabel="Contact us"
        ctaLink="/contact"
        secondaryLabel="Learn more"
        secondaryLink="/features"
      />
    </Layout>
  );
};

export default Home;
