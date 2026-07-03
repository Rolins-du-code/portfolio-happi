"use client";

import { Settings, Code2, Cpu, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH_TAGS = [
  "Python", "MicroPython", "Customtkinter", "Automatisation",
  "Analyse de circuits", "IoT", "Gestion de stocks",
  "Logistique", "Git", "Linux",
];

const CARD_STYLES = {
  auto: {
    accent: "from-indigo to-indigo",
    bgIcon: "bg-indigo/20 border-indigo/40 text-indigo",
    hoverText: "group-hover:text-indigo",
  },
  code: {
    accent: "from-indigo to-cyan",
    bgIcon: "bg-cyan/20 border-cyan/40 text-cyan",
    hoverText: "group-hover:text-cyan",
  },
  iot: {
    accent: "from-cyan to-cyan",
    bgIcon: "bg-cyan/20 border-cyan/40 text-cyan",
    hoverText: "group-hover:text-cyan",
  },
  log: {
    accent: "from-cyan to-indigo",
    bgIcon: "bg-indigo/20 border-indigo/40 text-indigo",
    hoverText: "group-hover:text-indigo",
  },
};

export default function Skills() {


  const cards = [
    {
      id: "auto" as const,
      icon: <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />,
      name: "Automatisation Industrielle",
      desc: "Analyse de circuits, systèmes automatisés et contrôle de processus industriels.",
      tags: ["Analyse de circuits", "Systèmes automatisés", "PLC"],
    },
    {
      id: "code" as const,
      icon: <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />,
      name: "Programmation",
      desc: "Développement logiciel en Python, MicroPython et interfaces graphiques avec Customtkinter.",
      tags: ["Python", "Customtkinter", "GUI", "OOP"],
    },
    {
      id: "iot" as const,
      icon: <Cpu className="w-5 h-5 group-hover:animate-pulse transition-transform duration-300" />,
      name: "MicroPython et IoT",
      desc: "Conception de modules embarqués, capteurs ultrasoniques et systèmes d'alerte intelligents.",
      tags: ["MicroPython", "Raspberry Pi", "Capteurs", "Buzzer"],
    },
    {
      id: "log" as const,
      icon: <Box className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />,
      name: "Logistique et Flux",
      desc: "Gestion des flux d'usine, gestion de stocks et optimisation des chaînes opérationnelles.",
      tags: ["Gestion de stocks", "Flux d'usine", "ERP"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <p className="section-tag uppercase tracking-widest text-xs text-indigo font-semibold mb-2">EXPERTISE</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Compétences techniques
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c) => {
            const styles = CARD_STYLES[c.id];

            return (
              <div
                key={c.id}
                className="group bg-card/80 border border-border/80 rounded-2xl p-6 card-glow relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-slate-700"
              >
                {/* Ligne supérieure éclatante au survol */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-0.77 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r",
                  styles.accent
                )} />

                {/* Boîtier de l'icône */}
                <div className={cn(
                  "w-10 h-10 rounded-xl border flex items-center justify-center mb-5 shadow-inner transition-colors duration-300",
                  styles.bgIcon
                )}>
                  {c.icon}
                </div>
                          {/* Titre (Blanc éclatant) */}
                <h3 className={cn(
                  "font-display font-semibold text-white text-lg mb-2 tracking-tight transition-colors duration-200",
                  styles.hoverText
                )}>
                  {c.name}
                </h3>
                
                {/* Description corrigée (Gris clair hautement lisible) */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-17">
                  {c.desc}
                </p>
                
                {/* Petits badges dans les cartes */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-slate-900/60 border border-slate-700 text-slate-200 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nuage de tags inférieurs (Gris clair devenant indigo éclatant au survol) */}
        <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto pt-4">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-slate-700 bg-card/40 text-slate-200 text-xs sm:text-sm font-medium hover:border-indigo hover:text-white hover:bg-indigo/20 transition-all duration-200 cursor-default shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}