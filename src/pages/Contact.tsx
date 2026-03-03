import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import { Send, Mail, Phone, Loader2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    // Add turnstile rendering if script is loaded
    const renderTurnstile = () => {
      if ((window as any).turnstile) {
        (window as any).turnstile.render("#turnstile-widget", {
          sitekey: "0x4AAAAAACjrRSa18WxzJUH0",
          theme: "dark",
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    };

    // Check if turnstile is already available or wait for it
    if ((window as any).turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if ((window as any).turnstile) {
          renderTurnstile();
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please verify that you are a human.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xreadben", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...form,
          "cf-turnstile-response": turnstileToken
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setForm({ name: "", email: "", company: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Hero
        title="Your Next Build Starts Here"
        subtitle="Reach out and let's get to work."
        bgImage="/Contact Page Hero banner.png"
      />

      <section className="py-24 bg-background relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 relative">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] font-heading">
                  Enterprise-Grade Communication
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground leading-tight mt-6">
                Initiate Your <br />
                <span className="text-primary">Developer Consultation.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-muted-foreground text-lg font-body leading-relaxed">
                Connect with our engineering team for technical consultation, platform onboarding, or enterprise-level development partnerships
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Email address</p>
                    <p className="text-foreground font-bold text-sm">team@codeforjhq.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Direct Line</p>
                    <p className="text-foreground font-bold text-sm">+1 (224) 599-5263</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Contact Form Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="w-full p-8 sm:p-10 rounded-[2.5rem] bg-card/30 border border-border backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-black text-foreground mb-2">Message Sent</h3>
                    <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-4">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-4">Email address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-4">Organization</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Engineering Lead @ CloudTech"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-4">How can we help you?</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder="Describe your current infrastructure goals or challenges..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none placeholder:text-muted-foreground/30"
                    />
                  </div>

                  {/* Cloudflare Turnstile Widget */}
                  <div className="flex justify-center mb-6">
                    <div id="turnstile-widget"></div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="w-full inline-flex items-center justify-center gap-3 px-10 py-3.5 rounded-full bg-primary text-white font-bold text-sm text-center shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-[1.02] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Google Map Integration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="w-full rounded-[2.5rem] overflow-hidden border border-border relative bg-card/30 backdrop-blur-xl shadow-2xl h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8240645777114!2d-118.25887672428368!3d34.04838387315841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b46621a685%3A0x7b46522f0e5e5e4!2s611%20Wilshire%20Blvd%20Suite%20317%2C%20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2slk!4v1772185140444!5m2!1sen!2slk"
                  className="absolute inset-0 w-full h-full grayscale invert opacity-70 filter brightness-90"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-6 left-6 p-6 rounded-[2rem] bg-black/80 backdrop-blur-lg border border-white/10 max-w-[240px] pointer-events-none">
                  <p className="text-white font-bold text-sm mb-1">Global HQ</p>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    611 Wilshire Blvd, Suite 317, Los Angeles, CA 90017, United States
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
