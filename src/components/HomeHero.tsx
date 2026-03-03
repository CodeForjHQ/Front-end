import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


interface HomeHeroProps {
    title: React.ReactNode;
    subtitle: string;
    ctaLabel?: string;
    ctaLink?: string;
}

const HomeHero = ({ title, subtitle, ctaLabel, ctaLink }: HomeHeroProps) => {
    return (
        <section className="relative h-screen min-h-[850px] w-full flex flex-col items-center justify-start bg-black text-white overflow-hidden pt-32 px-6">
            {/* 
        PREMIUM VIDEO BACKGROUND
      */}
            <div className="absolute inset-0 z-0 overflow-hidden will-change-transform">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="/beam.webm" type="video/webm" />
                </video>
                {/* Multi-layer exposure/darkness overlay */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
            </div>

            {/* 
        CONTENT STACK (CENTERED)
      */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl space-y-8 mb-16 will-change-transform">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading font-bold text-5xl md:text-7xl lg:text-[65px] leading-tight tracking-tight text-white"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-white/60 text-md md:text-md max-w-3xl leading-relaxed font-body font-medium"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0"
                >
                    <Link
                        to={ctaLink || "/codeforj-engine"}
                        className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-primary text-white font-bold text-sm text-center shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-[1.02] transition-all duration-300 active:scale-95"
                    >
                        {ctaLabel || "Start Free Trial"}
                    </Link>

                    <Link
                        to="/#how-it-works"
                        className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm text-center hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-95"
                    >
                        See How It Works
                    </Link>
                </motion.div>
            </div>

            {/* 
        DASHBOARD MOCKUP (CENTERED BOTTOM)
      */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-6xl mt-auto overflow-hidden rounded-t-[2.5rem] border-t border-x border-white/10 bg-[#0A0A0C]/90 backdrop-blur-md shadow-[0_-40px_100px_rgba(0,0,0,0.8)]"
            >
                <img
                    src="/dashboard.png"
                    alt="Dashboard"
                    className="w-full h-auto object-cover opacity-90 transition-opacity duration-700"
                />
            </motion.div>

            {/* Atmospheric Bottom Blend */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default HomeHero;
