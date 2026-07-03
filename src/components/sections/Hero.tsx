
 "use client";
import { Mail, Download, MapPin, ArrowDown, Settings, Terminal, Box, Cpu } from "lucide-react";
import { useLang } from "./LangContext";
// Importation de Framer Motion pour les animations au scroll
import { motion } from "framer-motion";
import   Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  } ;

  // Configuration d'une animation d'apparition simple et rapide
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  } as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground"
    >
      {/* EFFETS D'ARRIÈRE-PLAN */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--color-accent-purple)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* CONTENU AVEC ANIMATIONS PROGRESSIVES CONTROLEES */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* CÔTÉ GAUCHE : Textes */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } } // Fait charger les éléments les uns après les autres rapidement
            }}
          >
            {/* Tag */}
            <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-wider text-accent-blue uppercase">
              {t.hero_eyebrow}
            </motion.p>

            {/* Titre principal */}
            <motion.h1 variants={fadeInUp} className="font-space font-bold leading-[1.05] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-foreground">
                Happi Leufang
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary mt-1">
                Yvan Steve
              </span>
            </motion.h1>

            {/* Biographie */}
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed max-w-xl">
              {t.hero_bio}
            </motion.p>

            {/* Localisation */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} className="text-accent-blue" />
              {t.hero_location}
            </motion.div>

            {/* Boutons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-white font-semibold text-sm shadow-lg shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Mail size={16} />
                {t.hero_cta_contact}
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground bg-card/40 font-semibold text-sm hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
              >
                <Download size={16} />
                {t.hero_cta_cv}
              </button>
            </motion.div>

            {/* Statistiques */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { val: "2+", key: t.stat_exp },
                { val: "3", key: t.stat_projects },
                { val: "3", key: t.stat_langs },
                { val: "6+", key: t.stat_tools },
              ].map((s) => (
                <div key={s.key} className="bg-card/50 border border-border rounded-xl p-4 text-center backdrop-blur-sm">
                  <span className="block font-space font-bold text-2xl text-primary">{s.val}</span>
                  <span className="text-slate-400 text-xs font-medium leading-tight mt-0.5 block">{s.key}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* CÔTÉ DROIT : Carte de profil avec animation au chargement */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-accent-purple/10 to-accent-blue/10 blur-2xl scale-105 pointer-events-none" />
              <div className="relative bg-card border border-border rounded-3xl p-8 text-center w-full shadow-xl shadow-black/20">
                
                {/* Image / Avatar */}
                <div className="relative w-72 h-72 md:w-40 md:h-40  mx-auto rounded-3xl overflow-hidden border border-border/60 shadow-2xl card-glow bg-card/40">
                  <Image src="/image/happi1.png" alt="photo de happi" sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw" fill className="object-cover object-top  transition-transform duration-700 hover:scale-105 " />
                </div>

                <h2 className="font-space font-bold text-foreground text-xl leading-tight">Happi Leufang</h2>
                <h2 className="font-space font-bold text-foreground text-xl mb-1">Yvan Steve</h2>
                <p className="text-xs text-accent-blue font-semibold tracking-wide uppercase mb-6">{t.hero_eyebrow}</p>

                {/* Compétences */}
                <div className="space-y-3 text-left">
                  {[
                    { icon: <Settings size={16} className="text-accent-purple" />, label: "Automatisation" },
                    { icon: <Terminal size={16} className="text-accent-blue" />, label: "Python / MicroPython" },
                    { icon: <Box size={16} className="text-slate-400" />, label: "Logistique industrielle" },
                    { icon: <Cpu size={16} className="text-primary" />, label: "IoT & Électronique" },
                  ].map((sk) => (
                    <div key={sk.label} className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-2.5 border border-border/60">
                      {sk.icon}
                      <span className="text-xs text-slate-300 font-medium">{sk.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full px-4 py-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Disponible · Available
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bouton de scroll hint */}
        <div className="flex justify-center mt-12">
          <button onClick={() => scrollTo("#about")} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary transition-colors cursor-pointer">
            <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}