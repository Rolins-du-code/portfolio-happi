 "use client";
import { useState, useEffect } from "react";
// Importations avec les bons chemins relatifs
import { useLang } from "./LangContext";
import { Lang } from "../../lib/i18n";
import { Menu, X, Download } from "lucide-react";
import { cn } from "../../lib/utils";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "nl", flag: "🇳🇱", label: "NL" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav_about },
    { href: "#skills", label: t.nav_skills },
    { href: "#experience", label: t.nav_experience },
    { href: "#projects", label: t.nav_projects },
    { href: "#contact", label: t.nav_contact },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/40"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo - Utilise la police Space Grotesk pour le côté tech */}
          <button
            onClick={() => scrollTo("#hero")}
            className="font-space font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-primary">HLY</span>
            <span className="text-foreground">·Steve</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-slate-400 hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right: lang switcher + download button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Sélecteur de langue mat (style carte) */}
            <div className="flex items-center bg-card border border-border rounded-full p-1 gap-1">
              {LANGS.map((lg) => (
                <button
                  key={lg.code}
                  onClick={() => setLang(lg.code)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold transition-all duration-200",
                    lang === lg.code
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-400 hover:text-foreground"
                  )}
                >
                  {lg.flag} {lg.label}
                </button>
              ))}
            </div>

            {/* Bouton Télécharger CV avec ton dégradé mat adouci */}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2 rounded-full btn-gradient text-white text-sm font-semibold shadow-lg shadow-primary/20 cursor-pointer"
            >
              <Download size={14} />
              {t.nav_download}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border transition-all">
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm font-medium text-slate-400 hover:text-foreground py-1 transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <div className="pt-3 border-t border-border flex flex-col gap-3">
                <div className="flex gap-2">
                  {LANGS.map((lg) => (
                    <button
                      key={lg.code}
                      onClick={() => { setLang(lg.code); setMobileOpen(false); }}
                      className={cn(
                        "flex-1 py-2 rounded-lg text-xs font-bold border transition-all duration-200",
                        lang === lg.code
                          ? "bg-primary  text-white"
                          : "border-border text-slate-400 bg-background"
                      )}
                    >
                      {lg.flag} {lg.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => { window.print(); setMobileOpen(false); }}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg btn-gradient text-white text-sm font-semibold shadow-md"
                >
                  <Download size={14} /> {t.nav_download}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}