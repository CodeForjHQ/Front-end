import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: { monthly: number; yearly: number };
  paymentLink: { monthly: string; yearly: string };
  description: string;
  features: string[];
  highlighted?: boolean;
  isYearly: boolean;
  index?: number;
}

const PricingCard = ({ name, price, paymentLink, description, features, highlighted = false, isYearly, index = 0 }: PricingCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const currentPrice = isYearly ? price.yearly : price.monthly;
  const currentLink = isYearly ? paymentLink.yearly : paymentLink.monthly;

  const handleAction = () => {
    setIsLoading(true);
    // Open Stripe link in a new tab
    window.open(currentLink, "_blank", "noopener,noreferrer");
    // Reset loading state after a short delay (once the tab starts opening)
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className={`relative group rounded-[2.5rem] p-6 md:p-8 lg:p-10 border transition-all duration-500 flex flex-col h-full ${highlighted
        ? "border-primary/40 bg-zinc-900/60 backdrop-blur-xl shadow-[0_0_50px_rgba(var(--primary),0.05)] scale-[1.02] lg:scale-105 z-10"
        : "border-white/5 bg-zinc-900/40 backdrop-blur-md hover:border-white/10"
        }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(var(--primary),0.4)] border border-white/20">
          Most Popular
        </div>
      )}

      {/* Title & Description */}
      <div className="mb-8">
        <h3 className="font-heading font-black text-2xl text-white mb-2 tracking-tight">{name}</h3>
        <p className="text-sm text-white/40 font-body leading-relaxed">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-10 flex items-baseline gap-1">
        <div className="relative overflow-hidden h-14 flex items-center">
          <motion.span
            key={currentPrice}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl lg:text-6xl font-heading font-black text-white"
          >
            ${currentPrice}
          </motion.span>
        </div>
        <span className="text-white/30 text-xs font-bold uppercase tracking-widest ml-1">/ Month</span>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-12 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-4 text-sm text-white/60 leading-tight group/item">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${highlighted ? "bg-primary/20 text-primary border border-primary/20" : "bg-white/5 text-white/30 border border-white/10"
              }`}>
              <Check className="w-3 h-3 group-hover/item:scale-110 transition-transform" />
            </div>
            <span className="group-hover/item:text-white transition-colors duration-300">{f}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="flex flex-col gap-3 mt-auto">
        <button
          onClick={handleAction}
          disabled={isLoading}
          className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${highlighted
            ? "bg-primary text-white shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-[1.02]"
            : "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm"
            } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Redirecting...</span>
            </>
          ) : (
            "Select Plan"
          )}
        </button>
      </div>

      {/* Decorative Glow for Hover */}
      <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/0 group-hover:border-primary/10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default PricingCard;
