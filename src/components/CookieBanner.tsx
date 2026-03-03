import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small delay to ensure everything is mounted and ready
        const timer = setTimeout(() => {
            const consent = localStorage.getItem("codeforj-cookie-consent-v1");
            if (!consent) {
                setIsVisible(true);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("codeforj-cookie-consent-v1", "accepted");
        setIsVisible(false);
    };

    const handleDeny = () => {
        localStorage.setItem("codeforj-cookie-consent-v1", "denied");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 50, x: "-50%", opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, x: "-50%", opacity: 1, scale: 1 }}
                    exit={{ y: 50, x: "-50%", opacity: 0, scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        opacity: { duration: 0.2 }
                    }}
                    className="fixed bottom-8 left-1/2 z-[10000] w-[95%] max-w-lg"
                >
                    <div className="bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center gap-5">
                        <div className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-[0_0_20px_rgba(218,7,109,0.2)]">
                            <Cookie size={24} />
                        </div>

                        <div className="flex-1 text-center sm:text-left">
                            <h4 className="text-white font-heading font-black text-xs mb-1 uppercase tracking-[0.15em]">
                                Privacy & Cookies
                            </h4>
                            <p className="text-white/40 text-[13px] leading-relaxed font-body">
                                We use cookies to personalizing your journey & analyzing traffic flow.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <button
                                onClick={handleDeny}
                                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 text-xs font-bold transition-all border border-white/5 hover:border-white/10"
                            >
                                Deny
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all shadow-[0_10px_20px_rgba(218,7,109,0.3)] hover:shadow-[0_10px_25px_rgba(218,7,109,0.5)]"
                            >
                                Accept
                            </button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 sm:hidden text-white/20 hover:text-white transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
