"use client";
import { useLang } from "./LangContext";
import { Lang, translations } from "@/lib/i18n";
import { Mail, MapPin, Download, ExternalLink } from "lucide-react";

const DL_LANGS: { code: Lang; flag: string; label: (t: typeof translations.fr) => string }[] = [
  { code: "fr", flag: "🇫🇷", label: (t) => t.dl_fr },
  { code: "en", flag: "🇬🇧", label: (t) => t.dl_en },
  { code: "nl", flag: "🇳🇱", label: (t) => t.dl_nl },
];

export default function Contact() {
  const { t, setLang } = useLang();

  const handleDownload = (code: Lang) => {
    setLang(code);
    setTimeout(() => window.print(), 200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Halo lumineux en arrière-plan */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="mb-12">
          <p className="section-tag mb-3 text-indigo uppercase tracking-wider text-xs font-semibold">
            {t.contact_tag}
          </p>
          <h2 className="font-display font-bold text-4xl text-white">
            {t.contact_title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-card/80 border border-slate-700/80 rounded-2xl p-8 card-glow">
              <h3 className="font-display font-bold text-white text-xl mb-2">
                {t.contact_subtitle}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t.contact_desc}
              </p>

              <div className="space-y-4">
                {/* Bouton Email corrigé (Pas d'imbrication de balises <a>) */}
                <a
                  href={`mailto:${t.contact_email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800/20 hover:border-indigo/50 hover:bg-indigo/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo/10 border border-indigo/30 flex items-center justify-center text-indigo shrink-0 group-hover:bg-indigo/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email</p>
                    <span className="text-white text-sm font-medium">{t.contact_email}</span>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-slate-400 group-hover:text-indigo" />
                </a>

                {/* Badge Localisation */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800/20">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Localisation</p>
                    <p className="text-white text-sm font-medium">{t.contact_location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Téléchargement du CV */}
          <div className="bg-card/80 border border-slate-700/80 rounded-2xl p-8 card-glow">
            <div className="flex items-center gap-3 mb-2">
              <Download size={20} className="text-indigo" />
              <h3 className="font-display font-bold text-white text-xl">{t.dl_title}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.dl_desc}
            </p>
            <div className="space-y-3">
              {DL_LANGS.map((dl) => (
                <button
                  key={dl.code}
                  onClick={() => handleDownload(dl.code)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800/20 hover:border-indigo/50 hover:bg-indigo/5 transition-all group text-left"
                >
                  <span className="text-2xl">{dl.flag}</span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-white text-sm font-semibold group-hover:text-indigo transition-colors">
                      {dl.label(t)}
                    </span>
                    <span className="block text-slate-400 text-xs mt-0.5">PDF · A4</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo/10 border border-indigo/30 text-indigo text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <Download size={12} />
                    PDF
                  </div>
                </button>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-4 leading-relaxed">
              💡 Le PDF est généré directement depuis votre navigateur via la fonction d&apos;impression. Choisissez &quot;Enregistrer en PDF&quot; dans les options.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}