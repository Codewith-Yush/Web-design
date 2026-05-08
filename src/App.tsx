/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowUpRight, Menu, X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease }
};

const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Manifesto", href: "#manifesto" },
    { name: "System", href: "#system" },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue/20">
      
      {/* 1. Full-screen Hero Section */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex flex-col">
        {/* Hero Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_30c6yRkxUog0TZ5432rCR7HN4Pe/hf_20260501_062927_2b8ce586-f555-4610-88ae-b2d3752ede3b.mp4"
            poster="https://playground.bravebrand.com/assets/backgrounds/signal-foundry-painted-city-hero.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/30 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />
        </div>

        <header className="fixed top-0 inset-x-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none">
          <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="flex items-center gap-4 md:gap-6 px-4 md:px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-medium pointer-events-auto shadow-2xl"
          >
            <a href="#hero" className="flex items-center gap-2 pr-4 border-r border-white/20 no-underline text-white">
              <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span className="tracking-tighter font-bold text-base uppercase">SIGNAL</span>
            </a>
            <div className="hidden md:flex items-center gap-6 px-2">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-blue-200 transition-colors no-underline text-white">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#join" className="hidden sm:block bg-ink text-white px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-all text-xs no-underline">
              Get Signal
            </a>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-1 text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </motion.nav>

          <div className="absolute top-8 right-8 text-white/60 text-[10px] uppercase tracking-widest hidden lg:block">
            Foundry 04 — London / Global
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-2xl flex flex-col p-8 md:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-2 text-white">
                  <Star className="w-5 h-5 text-blue-400 fill-blue-400" />
                  <span className="tracking-tighter font-bold text-xl uppercase">SIGNAL</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                  <X className="w-8 h-8" />
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-serif text-white no-underline"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto">
                <a 
                  href="#join" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-white text-ink py-4 rounded-2xl font-bold text-lg no-underline"
                >
                  Get Signal
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content Card */}
        <div id="hero" className="relative z-10 mt-auto p-6 md:p-12 lg:p-20 flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.8 }}
            className="max-w-[480px] p-8 md:p-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] text-white shadow-premium"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight mb-6">
              AI that turns ideas into operating companies.
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Signal Foundry is an applied AI lab building the company brain, launch packet, and agent handoff for founders who want to move from insight to execution.
            </p>
            <a href="#join" className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tighter text-white no-underline">
              Start Building <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Sky Garden Support Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...scaleUp}
            className="skyArt h-[520px] md:h-[58vh] rounded-[48px] shadow-premium flex flex-col justify-end p-8 md:p-16 relative"
          >
            <video
              className="skyVideo"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_30c6yRkxUog0TZ5432rCR7HN4Pe/hf_20260501_082435_42398084-1c8d-48e5-a962-fe7c28c124e6.mp4"
              poster="https://playground.bravebrand.com/assets/backgrounds/signal-foundry-sky-garden.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            {/* Soft tint overlay */}
            <div className="absolute inset-0 bg-blue-900/10 z-0" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.2 }}
                  className="font-serif text-4xl md:text-6xl leading-tight text-white mb-6"
                >
                  From founder insight to agent-ready execution.
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.4 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-white/90 text-sm">
                    <span className="block font-bold">Signal Alert</span>
                    Market gap identified in applied logistics.
                  </div>
                </motion.div>
              </div>
              <div className="lg:text-right">
                <p className="text-white/70 text-lg md:text-xl lg:max-w-md ml-auto leading-relaxed">
                  We bridge the gap between human intuition and machine reliability, creating systems that don't just talk, but build.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Manifesto Section */}
      <section id="manifesto" className="py-24 md:py-32 px-6 bg-[#fffefc]">
        <motion.div 
          {...scaleUp}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div className="flex justify-center">
            <img 
              src="https://playground.bravebrand.com/assets/backgrounds/signal-foundry-pixel-flower.webp" 
              alt="Pixel Flower"
              loading="lazy"
              decoding="async"
              className="max-h-[500px] w-auto mix-blend-multiply"
            />
          </div>
          <div>
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-muted text-xl md:text-2xl leading-relaxed">
                  We envision a world where anyone with an idea and some unique insight can start a business.
                </p>
                <p className="text-muted text-xl md:text-2xl leading-relaxed">
                  A world where someone can wake up with an idea for a company, open their laptop, and create it in real time.
                </p>
              </div>
              <h3 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter">
                Where starting up a real world company is as easy as playing a video game.
              </h3>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. System Section */}
      <section id="system" className="py-24 md:py-32 px-6 bg-cream">
        <motion.div 
          {...fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-16 md:mb-24">
            <span className="text-[10px] uppercase tracking-widest font-bold text-blue mb-4 block">WHAT GETS BUILT</span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter">
              A company brain, not another chat thread.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Brand Wiki", 
                desc: "The source of truth for audience, offer, proof, positioning, and language." 
              },
              { 
                title: "Copy Coach", 
                desc: "Sharpens claims, pages, emails, and scripts against the brain." 
              },
              { 
                title: "Launch Packet", 
                desc: "Turns choices into an agent-ready build spec." 
              },
              { 
                title: "Agent Handoff", 
                desc: "Gives the builder everything needed to ship without guessing." 
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -16, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease }
                }}
                className="bg-white p-8 rounded-[32px] border border-line shadow-sm hover:shadow-premium transition-all duration-500 flex flex-col min-h-[240px] cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-cream border border-line flex items-center justify-center mb-6">
                  <Star className="w-4 h-4 text-ink opacity-40" />
                </div>
                <h4 className="font-bold text-xl mb-3 tracking-tighter">{card.title}</h4>
                <p className="text-muted leading-relaxed text-sm">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Closing CTA & Footer */}
      <section id="join" className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex flex-col justify-center items-center px-6 text-center">
        {/* BG Image overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://playground.bravebrand.com/assets/backgrounds/signal-foundry-painted-city-hero.webp"
            className="w-full h-full object-cover brightness-[0.4]"
            loading="lazy"
            decoding="async"
            alt="Hero Background"
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h2 
            {...fadeInUp}
            className="font-serif text-5xl md:text-8xl text-white tracking-tighter leading-none mb-12"
          >
            Agentic companies are on the horizon. We're building them.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.4 }}
          >
            <a href="#" className="group inline-flex items-center gap-2 text-white text-xl md:text-2xl font-medium tracking-tighter hover:text-blue-300 transition-colors">
              Get to know us <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 inset-x-0 p-8 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="h-px bg-white/20 w-full mb-8" />
            <div className="flex flex-col md:row justify-between items-start md:items-center gap-4 text-white/40 text-sm">
              <div className="flex items-center gap-2 text-white">
                <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                <span className="font-bold tracking-tighter">Signal Foundry</span>
              </div>
              <div className="tracking-tighter">
                Applied intelligence for company creation.
              </div>
              <div className="md:order-last">
                &copy; 2026 Signal Foundry Lab.
              </div>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}
