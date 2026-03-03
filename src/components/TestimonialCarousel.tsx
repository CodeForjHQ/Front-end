import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Kim",
    role: "Engineering Lead",
    content: "The digital creator roadmap is a game-changer! I saw a 500% increase in our team's velocity within weeks of implementation.",
    image: "/David Kim.png",
  },
  {
    name: "Sophie Brian",
    role: "Senior Developer",
    content: "I was skeptical at first, but after integrating CodeForjHQ, our deployment quality skyrocketed. Now we ship with zero stress.",
    image: "/Sophie Brian.png",
  },
  {
    name: "Brie Josephine",
    role: "Product Manager",
    content: "Unbelievable efficiency. We cut our code review cycles by 60% and the AI identifies patterns our senior devs often missed.",
    image: "/Brie Josephine.png",
  },
  {
    name: "Jenny Park",
    role: "Frontend Engineer",
    content: "Setting up our CI/CD pipeline was a breeze. Best decision for our startup's early infrastructure. Scale with confidence!",
    image: "/Jenny Park.png",
  },
  {
    name: "Clara Johansson",
    role: "Backend Architect",
    content: "The level of insight into our codebase is unparalleled. It's like having static analysis and a senior mentor combined into one.",
    image: "/Clara Johansson.png",
  },
  {
    name: "Axel Bjorn",
    role: "DevOps Specialist",
    content: "Finally, a platform that understands modern engineering workflows. The automation features saved us hundreds of manual hours.",
    image: "/Axel Bjorn.png",
  },
  {
    name: "Mike Brown",
    role: "CTO, CloudScale",
    content: "Reliable, fast, and secure. We've scaled from 10 to 100 repositories without a single hitch. Exceptional support and tooling.",
    image: "/Mike Brown.png",
  },
  {
    name: "Lila Ranju",
    role: "Tech Lead",
    content: "The AI suggestions are surprisingly nuanced. It understands the context of our unique architecture rather than just generic rules.",
    image: "/Lila Ranju.png",
  },
];

const TestimonialCard = ({ name, role, content, image }: (typeof testimonials)[0]) => (
  <div className="flex-shrink-0 w-80 sm:w-96 h-[270px] bg-card border border-border/50 rounded-[2.5rem] p-9 flex flex-col group hover:border-primary/40 transition-border duration-300 hover:shadow-xl relative overflow-hidden will-change-transform">
    {/* Decorative Quote Mark */}
    <div className="absolute top-6 right-8 text-muted-foreground/10 transform rotate-12">
      <Quote size={48} fill="currentColor" />
    </div>

    {/* Profile Header */}
    <div className="flex items-center gap-5 mb-6 shrink-0">
      <div className="w-16 h-16 rounded-[1.25rem] overflow-hidden border border-primary/20 shadow-sm shrink-0 group-hover:border-primary/50 transition-colors duration-300">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="overflow-hidden">
        <h4 className="font-heading font-black text-lg text-foreground leading-tight truncate">{name}</h4>
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-1.5">{role}</p>
      </div>
    </div>

    {/* Content Section */}
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-1 mb-4 shrink-0">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} fill="currentColor" className="text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed font-body line-clamp-4">
        "{content}"
      </p>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const containerRef = useRef<HTMLElement>(null);

  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section
      id="customer-reviews"
      ref={containerRef}
      className="py-24 sm:py-32 relative overflow-hidden bg-[#000000] lg:bg-background"
    >
      {/* Background decoration - Optimized for mobile/tablet visibility */}
      <div className="absolute inset-0 grid-dot-pattern opacity-[0.03] sm:opacity-[0.04] pointer-events-none" />


      {/* Desktop Side Glows */}
      <div className="hidden lg:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full mb-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                Success Stories
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              Trusted by the Best Tech <span className="text-primary text-gradient"> Teams</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-md"
          >
            <p className="text-muted-foreground text-md sm:text-md leading-relaxed font-body">
              Join thousands of creators who have unlocked their social media potential with the CodeForjHQ roadmap. Discover how our community is scaling efficiently.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Rows - Hardware Accelerated */}
      <div className="space-y-10 flex flex-col">
        {/* Row 1 */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="flex items-center gap-14 px-5 transform-gpu"
          >
            {row1.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} {...t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="flex items-center gap-14 px-5 transform-gpu"
          >
            {row2.map((t, i) => (
              <TestimonialCard key={`row2-${i}`} {...t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
