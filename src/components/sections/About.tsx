  "use client";
import { useLang } from "./LangContext";
import { User, GraduationCap, Globe } from "lucide-react";
// Importation de motion pour gérer le déclenchement au défilement (scroll)
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLang();

  // Animation douce de fondu vers le haut
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } 
  } as const;

  return (
    <motion.section 
      id="about" 
      className="py-24 relative bg-background text-foreground"
      initial="hidden"
      whileInView="visible" // Déclenche l'animation au moment du scroll
      viewport={{ once: true, margin: "-100px" }} // S'exécute une seule fois pour la fluidité, légèrement avant d'être totalement à l'écran
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* CÔTÉ GAUCHE : Textes & Faits rapides */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-sm font-semibold tracking-wider text-accent-blue uppercase">
              {t.about_tag}
            </p>
            <h2 className="font-space font-bold text-4xl text-foreground leading-tight">
              {t.about_title}
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              {t.about_text}
            </p>

            {/* Cartes d'infos rapides */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <User size={18} />, label: "Happi Leufang Yvan Steve", sub: "yvanhappi11@gmail.com" },
                { icon: <GraduationCap size={18} />, label: "EPHEC – Belgique", sub: "2024 – 2026" },
                { icon: <Globe size={18} />, label: "FR · EN · NL", sub: t.langs_tag },
              ].map((f) => (
                <div key={f.label} className="bg-card border border-border/80 rounded-xl p-4 shadow-sm">
                  <div className="text-primary mb-2">{f.icon}</div>
                  <p className="text-foreground text-sm font-semibold leading-tight">{f.label}</p>
                  <p className="text-slate-400 text-xs mt-1">{f.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CÔTÉ DROIT : Langues & Soft skills */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Bloc des barres de langues */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
              <h3 className="font-space font-semibold text-foreground mb-4">{t.langs_tag}</h3>
              <div className="space-y-4">
                {[
                  { flag: "🇫🇷", lang: t.lang_fr, level: t.lang_fr_level, pct: 100, color: "from-primary to-accent-purple" },
                  { flag: "🇬🇧", lang: t.lang_en, level: t.lang_en_level, pct: 75, color: "from-primary to-accent-blue" },
                  { flag: "🇳🇱", lang: t.lang_nl, level: t.lang_nl_level, pct: 45, color: "from-slate-700 to-slate-500" },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">
                        {l.flag} {l.lang}
                      </span>
                      <span className="text-xs text-slate-400">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-background rounded-full overflow-hidden border border-border/40">
                      {/* Animation de remplissage progressif de la jauge au scroll */}
                      <motion.div
                        className={`h-full rounded-full bg-linear-to-r ${l.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc Soft Skills */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
              <h3 className="font-space font-semibold text-foreground mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[t.soft_adaptability, t.soft_teamwork, t.soft_rigor].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 rounded-full border border-border bg-background text-accent-blue text-sm font-medium hover:border-accent-blue/40 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}