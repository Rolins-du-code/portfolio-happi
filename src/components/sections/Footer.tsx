"use client";
import { useLang } from "./LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/40 py-8 no-print backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Texte du footer en gris clair hautement lisible */}
        <p className="text-slate-400 text-sm font-medium tracking-wide text-center sm:text-left">
          {t.footer}
        </p>

        {/* Section Indicateurs de Langues / Droits */}
        <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800/60 shadow-inner">
          <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3">
            <span className="text-sm cursor-help hover:scale-110 transition-transform" title="Français">🇫🇷</span>
            <span className="text-sm cursor-help hover:scale-110 transition-transform" title="Belgique">🇧🇪</span>
            <span className="text-sm cursor-help hover:scale-110 transition-transform" title="Nederlands">🇳🇱</span>
          </div>
          <span className="text-slate-500 font-mono text-xs font-semibold">
            © 2026
          </span>
        </div>

      </div>
    </footer>
  );
}