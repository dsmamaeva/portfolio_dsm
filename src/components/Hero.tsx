import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star, Circle, Heart } from "lucide-react";

export default function Hero() {
  const navItems = [
    { id: "01", name: "Обо мне & Путь", href: "#about", color: "bg-brand-pink", textColor: "text-brand-grey" },
    { id: "02", name: "Кейсы", href: "#portfolio", color: "bg-brand-blue", textColor: "text-white" },
  ];

  return (
    <section className="min-h-screen p-6 md:p-12 flex flex-col items-center justify-center bg-brand-offwhite relative overflow-hidden">
      {/* High Contrast Background Elements - Blue Dominant */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-brand-blue/20 blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-blue/30 rounded-full blur-[150px] opacity-40" />
      
      {/* Decorative Ornaments - Blue/Charcoal */}
      <motion.div 
        className="absolute top-24 right-20 text-brand-blue opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={180} />
      </motion.div>

      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 z-10">
        
        {/* Profile Visual - Sticker/Contrast Style */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative group"
          >
            {/* Multiple frames - Ref 1 style depth */}
            <div className="absolute inset-0 bg-brand-charcoal translate-x-6 translate-y-6 rounded-[3rem] -rotate-2" />
            <div className="absolute inset-0 bg-brand-pink translate-x-3 translate-y-3 rounded-[3rem] rotate-1" />
            
            <div className="bg-white p-6 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] border-2 border-brand-charcoal relative overflow-hidden group-hover:rotate-0 transition-transform duration-700">
              <div className="aspect-[4/5] bg-brand-blue/5 rounded-[2rem] overflow-hidden relative border border-brand-charcoal/5">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Daria Mamaeva" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 contrast-[1.05]"
                />
                <div className="absolute bottom-8 right-8 bg-brand-blue text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white transform rotate-12 hover:scale-110 transition-transform">
                   <Heart size={32} fill="currentColor" />
                </div>
              </div>
              <div className="mt-8 flex justify-between items-end px-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-charcoal mb-2">PORTFOLIO • 2026</p>
                  <p className="font-serif italic text-brand-charcoal text-2xl leading-none">Creative Strategy</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-brand-blue border border-brand-charcoal/10" />
                   <div className="w-3 h-3 rounded-full bg-brand-pink border border-brand-charcoal/10" />
                   <div className="w-3 h-3 rounded-full bg-brand-charcoal" />
                </div>
              </div>
            </div>

            {/* Sticker Label - High Contrast */}
            <div className="absolute -top-12 -left-12 bg-brand-blue text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-[0.4em] shadow-2xl -rotate-12 border-2 border-brand-pink scale-110">
               DARIA M.
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-6 mb-10">
                <span className="h-[2px] w-20 bg-brand-charcoal rounded-full" />
                <p className="text-[12px] font-black uppercase tracking-[0.6em] text-brand-charcoal">
                  PR STRATEGIST & CREATIVE
                </p>
              </div>

              <h1 className="hero-title text-brand-charcoal">
                <span className="block mb-4">Дарья</span>
                <span className="serif-italic text-brand-vibrant-pink relative inline-block">
                  Мамаева
                  <motion.div 
                    className="absolute -right-20 -top-4 text-brand-blue"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <Sparkles size={80} className="opacity-40" />
                  </motion.div>
                </span>
              </h1>
            </div>

            <p className="text-3xl md:text-5xl font-light text-brand-charcoal leading-[0.9] max-w-2xl font-display uppercase tracking-tighter">
              Я создаю <span className="text-brand-vibrant-pink font-black italic underline decoration-brand-blue decoration-8 underline-offset-12">смыслы</span>, которые заставляют людей <span className="serif-italic text-brand-blue">говорить</span> о вашем бренде.
            </p>

            <div className="flex flex-wrap gap-8 pt-8">
              <motion.a
                href="#portfolio"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-charcoal text-white px-12 py-6 rounded-full font-black uppercase tracking-widest flex items-center gap-4 shadow-2xl border-2 border-transparent hover:border-brand-pink transition-all"
              >
                <span>Кейсы</span>
                <ArrowRight size={24} />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-pink text-brand-charcoal px-12 py-6 rounded-full font-black uppercase tracking-widest flex items-center gap-4 shadow-2xl border-2 border-brand-charcoal"
              >
                <span>Обо мне</span>
                <Sparkles size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* High Contrast Marquee with Scalloped Edge */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-charcoal text-white py-8 scalloped-top">
        <motion.div 
          className="flex gap-24 font-black text-sm uppercase tracking-[1.2em]"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {Array(10).fill("STRATEGY • CREATIVITY • REPUTATION • GROWTH • VISIBILITY • ").map((s, i) => (
            <span key={i} className={i % 2 === 0 ? "text-brand-vibrant-pink" : "text-white"}>{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
