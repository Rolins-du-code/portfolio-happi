  "use client";
import { useLang } from "./LangContext";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation définie proprement pour les barres de progression
const progressVariants = {
  hidden: { width: "0%" },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: { duration: 1.2, ease: "easeOut" as const },
  }),
};

export default function Experience() {
  const { t } = useLang();

  const jobs = [
    { role: t.exp1_role, company: t.exp1_company, date: t.exp1_date, desc: t.exp1_desc, current: true },
    { role: t.exp2_role, company: t.exp2_company, date: t.exp2_date, desc: t.exp2_desc, current: false },
    { role: t.exp3_role, company: t.exp3_company, date: t.exp3_date, desc: t.exp3_desc, current: false },
  ];

  const edu = [
    { name: t.edu1_name, school: t.edu1_school, date: t.edu1_date },
    { name: t.edu2_name, school: t.edu2_school, date: t.edu2_date },
    { name: t.edu3_name, school: t.edu3_school, date: t.edu3_date },
  ];

  return (
    <section id="experience" className="py-24 bg-surface/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Work Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-indigo/20 border border-indigo/40">
                <Briefcase size={18} className="text-indigo" />
              </div>
              <div>
                <p className="section-tag text-indigo uppercase tracking-wider text-xs font-semibold">{t.exp_tag}</p>
                <h2 className="font-display font-bold text-2xl text-white">{t.exp_title}</h2>
              </div>
            </div>

            <div className="relative space-y-0">
              {jobs.map((job, i) => (
                <div key={i} className="relative pl-8 pb-8 last:pb-0">
                  {i < jobs.length - 1 && <div className="absolute left-2.70 top-5 bottom-0 w-px bg-slate-700/60" />}
                  
                  <div className={cn(
                    "absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    job.current ? "border-indigo bg-indigo/30" : "border-slate-600 bg-slate-900"
                  )}>
                    {job.current && <div className="w-2 h-2 rounded-full bg-indigo animate-pulse" />}
                  </div>

                  <div className="bg-card/80 border border-slate-700/80 rounded-xl p-5 card-glow hover:border-slate-600 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-white text-base">{job.role}</h3>
                        <p className="text-indigo-light text-sm font-medium">{job.company}</p>
                      </div>
                      <span className={cn(
                        "text-xs px-3 py-1 rounded-full border font-medium",
                        job.current ? "border-indigo/50 bg-indigo/20 text-white" : "border-slate-700 bg-slate-800/40 text-slate-300"
                      )}>
                        {job.date}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-cyan/20 border border-cyan/40">
                <GraduationCap size={18} className="text-cyan" />
                </div>
              <div>
                <p className="section-tag text-cyan uppercase tracking-wider text-xs font-semibold">{t.edu_tag}</p>
                <h2 className="font-display font-bold text-2xl text-white">{t.edu_title}</h2>
              </div>
            </div>

            <div className="space-y-4">
              {edu.map((e, i) => (
                <div key={i} className="bg-card/80 border border-slate-700/80 rounded-xl p-5 card-glow flex gap-4 hover:border-slate-600 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-dark to-cyan flex items-center justify-center shrink-0 shadow-md shadow-cyan/20">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap justify-between items-center gap-1 mb-1">
                      <h3 className="font-display font-semibold text-white text-sm">{e.name}</h3>
                      <span className="text-xs text-slate-400 font-medium shrink-0">{e.date}</span>
                    </div>
                    <p className="text-cyan text-xs font-medium">{e.school}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section Soft Skills animée */}
            <div className="mt-8 bg-card/80 border border-slate-700/80 rounded-2xl p-6 card-glow">
              <h3 className="font-display font-semibold text-white text-sm mb-4">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { label: t.soft_adaptability, pct: 95 },
                  { label: t.soft_teamwork, pct: 90 },
                  { label: t.soft_rigor, pct: 88 },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                      <span className="text-slate-200 font-medium">{s.label}</span>
                      <span className="text-slate-400 font-mono">{s.pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-indigo to-cyan shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                        custom={s.pct}
                        initial="hidden"
                        whileInView="visible"
                        variants={progressVariants}
                        viewport={{ once: true, margin: "-20px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}