 "use client";
import { Mail, MapPin, Briefcase, GraduationCap, Code, Globe, Lightbulb } from "lucide-react";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext } from "react";
/* Importe le contexte ou le hook de langue que tu as créé à la ligne 8 de ton page.tsx */
import { LangContext } from "@/components/sections/LangContext"; 
import { cvTranslations } from "../../lib/cvTranslation";

export default function CVPrint() {
  /* Récupère la langue courante ('fr', 'en', ou 'nl') depuis ton LangContext globale */
  const { lang } = useContext(LangContext) as { lang: "fr" | "en" | "nl" };
  
  // Sécurité si la langue courante n'est pas trouvée, on charge le français par défaut
  const t = cvTranslations[lang] || cvTranslations.fr;

  return (
    <div className="hidden print:flex flex-col justify-between bg-white text-slate-900 p-6 w-full max-w-[210mm] h-screen max-h-[285mm] mx-auto font-sans antialiased text-[11px] leading-relaxed box-border">
      
      <div>
        {/* EN-TÊTE DU CV */}
        <div className="border-b-2 border-slate-900 pb-3 mb-5 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
              HAPPI LEUFANG YVAN STEVE
            </h1>
            <p className="text-xs font-semibold text-indigo-700 mt-0.5">
              {t.title}
            </p>
          </div>
          <div className="space-y-0.5 text-right text-slate-600 font-medium text-[10px]">
            <div className="flex items-center justify-end gap-1.5">
              <span>yvanhappi11@gmail.com</span>
              <Mail size={11} className="text-slate-700" />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>Belgique / Bruxelles</span>
              <MapPin size={11} className="text-slate-700" />
            </div>
          </div>
        </div>

        {/* PROFIL PROFESSIONNEL */}
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-300 pb-0.5 flex items-center gap-1.5">
            <Lightbulb size={12} className="text-indigo-600" /> {t.profileTitle}
          </h2>
          <p className="text-slate-700 text-justify text-[10.5px] leading-relaxed">
            {t.profileDesc}
          </p>
        </div>

        {/* GRILLE PRINCIPALE (2 COLONNES) */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* COLONNE GAUCHE : EXPÉRIENCES & PARCOURS */}
          <div className="col-span-8 space-y-5">
            
            {/* EXPÉRIENCE PROFESSIONNELLE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-0.5 flex items-center gap-1.5">
                <Briefcase size={12} className="text-indigo-600" /> {t.expTitle}
              </h2>
              <div className="space-y-3.5">
                {t.jobs.map((job, index) => (
                  <div key={index}>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{job.role}</span>
                      <span className="text-slate-500 font-semibold">{job.period}</span>
                    </div>
                    <p className="text-indigo-700 font-medium text-[10px] mb-1">{job.company}</p>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[10px]">
                      {job.tasks.map((task, tIdx) => (
                        <li key={tIdx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* PARCOURS ACADÉMIQUE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-0.5 flex items-center gap-1.5">
                  <GraduationCap size={12} className="text-indigo-600" /> {t.eduTitle}
              </h2>
              <div className="space-y-2.5">
                {t.education.map((edu, index) => (
                  <div className="flex justify-between items-start" key={index}>
                    <div>
                      <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-indigo-700 font-medium text-[10px]">{edu.school}</p>
                    </div>
                    <span className="text-slate-500 font-semibold shrink-0 text-[10px]">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : PROJETS & COMPÉTENCES */}
          <div className="col-span-4 space-y-5">
            
            {/* PROJETS PERSONNELS & ACADÉMIQUES */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-0.5 flex items-center gap-1.5">
                <Code size={12} className="text-indigo-600" /> {t.projectTitle}
              </h2>
              <div className="space-y-3.5">
                {t.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-slate-900 leading-tight">{project.title}</h3>
                    <p className="text-[9px] font-semibold text-slate-500 mb-0.5">{project.tech}</p>
                    <p className="text-slate-700 text-justify text-[10px] leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPÉTENCES TECHNIQUES */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-0.5 flex items-center gap-1.5">
                <Code size={12} className="text-indigo-600" /> {t.skillsTitle}
              </h2>
              <div className="flex flex-wrap gap-1">
                {t.skills.map((skill) => (
                  <span key={skill} className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded border border-slate-200 font-medium text-[9.5px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* LANGUES & ATOUTS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-0.5 flex items-center gap-1.5">
                <Globe size={12} className="text-indigo-600" /> {t.langTitle}
              </h2>
              <div className="space-y-1.5 text-slate-700 text-[10px]">
                {t.langList.map((l: { label: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined; level: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
                  <div key={index}><span className="font-bold text-slate-950">{l.label} :</span> {l.level}</div>
                ))}
                
                <div className="pt-2 flex flex-wrap gap-1">
                  {t.assets.map((atout) => (
                    <span key={atout} className="bg-indigo-50 text-indigo-800 border border-indigo-100 px-1.5 py-0.5 rounded font-semibold text-[9px]">
                      {atout}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Footer dynamisé */}
      <div className="text-center text-[9px] text-slate-400 border-t border-slate-100 pt-1 mt-2 shrink-0">
        {t.footer}
      </div>

    </div>
  );
}