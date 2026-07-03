 "use client";
import { useLang } from "./LangContext";
import { ExternalLink, Radio, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { t } = useLang();

  const projects = [
    {
      icon: Radio,
      iconColor: "text-indigo",
      title: t.proj1_title,
      stack: t.proj1_stack,
      desc: t.proj1_desc,
      tags: ["MicroPython", "Ultrasonique", "Buzzer", "IoT", "Embarqué"],
      gradient: "from-indigo/20 via-indigo/5 to-transparent",
      border: "hover:border-indigo/50",
      shadow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    },
    {
      icon: Award,
      iconColor: "text-cyan",
      title: t.proj2_title,
      stack: t.proj2_stack,
      desc: t.proj2_desc,
      tags: ["Python", "Customtkinter", "GUI", "Quiz", "Sport"],
      gradient: "from-cyan/20 via-cyan/5 to-transparent",
      border: "hover:border-cyan/50",
      shadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="mb-12">
          <p className="section-tag mb-3 text-indigo uppercase tracking-wider text-xs font-semibold">
            {t.proj_tag}
          </p>
          <h2 className="font-display font-bold text-4xl text-white">
            {t.proj_title}
          </h2>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.title}
                className={cn(
                  "group relative bg-card/80 border border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 card-glow",
                  p.border,
                  p.shadow
                )}
              >
                {/* Bannière supérieure */}
                <div className={cn(
                  "h-36 bg-linear-to-br flex items-center justify-center relative overflow-hidden border-b border-slate-800/60",
                  p.gradient
                )}>
                  
                  {/* Grille de points SVG (CORRIGÉE ICI) */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${idx}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#6366F1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${idx})`} />
                  </svg>
                  
                  {/* Icône du projet */}
                  <div className="relative z-10 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className={p.iconColor} />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight group-hover:text-indigo-light transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-indigo text-sm font-medium mt-0.5">{p.stack}</p>
                    </div>
                    <div className="p-2 rounded-lg border border-slate-700 bg-slate-800/40 text-slate-400 group-hover:text-white group-hover:bg-indigo/20 group-hover:border-indigo/50 transition-all shrink-0">
                    <ExternalLink size={14} />
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-xs font-medium group-hover:text-slate-200 group-hover:border-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}