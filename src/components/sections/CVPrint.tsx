     "use client";
import { Mail, MapPin, Briefcase, GraduationCap, Code, Globe, Lightbulb } from "lucide-react";

export default function CVPrint() {
  return (
    /* h-[296mm] force le conteneur à occuper presque toute la hauteur d'une feuille A4 (297mm) */
    <div className="hidden print:flex flex-col justify-between bg-white text-slate-900 p-8 w-full max-w-[210mm] h-[277mm] mx-auto font-sans antialiased text-[11.5px] leading-relaxed">
      
      <div>
        {/* EN-TÊTE DU CV */}
        <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
              HAPPI LEUFANG YVAN STEVE
            </h1>
            <p className="text-xs font-semibold text-indigo-700 mt-1">
              Étudiant en Automatisation et Développeur Software
            </p>
          </div>
          <div className="space-y-1 text-right text-slate-600 font-medium text-[10.5px]">
            <div className="flex items-center justify-end gap-1.5">
              <span>yvanhappi11@gmail.com</span>
              <Mail size={12} className="text-slate-700" />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>Belgique / Bruxelles</span>
              <MapPin size={12} className="text-slate-700" />
            </div>
          </div>
        </div>

        {/* PROFIL PROFESSIONNEL */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-300 pb-1 flex items-center gap-1.5">
            <Lightbulb size={13} className="text-indigo-600" /> Profil Professionnel
          </h2>
          <p className="text-slate-700 text-justify text-[11px] leading-relaxed">
            Étudiant passionné et rigoureux en bloc d&apos;automatisation, combinant de solides
            compétences académiques en ingénierie des systèmes et programmation logicielle
            avec une expérience pratique acquise sur le terrain logistique et industriel. Capable
            de s&apos;adapter rapidement aux exigences techniques, d&apos;analyser les systèmes
            complexes et d&apos;optimiser l&apos;organisation opérationnelle au sein d&apos;une équipe.
          </p>
        </div>

        {/* GRILLE PRINCIPALE (2 COLONNES) */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* COLONNE GAUCHE : EXPÉRIENCES & PARCOURS */}
          <div className="col-span-8 space-y-6">
            
            {/* EXPÉRIENCE PROFESSIONNELLE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                <Briefcase size={13} className="text-indigo-600" /> Expérience Professionnelle
              </h2>
              <div className="space-y-4">
                
                {/* Poste 1 */}
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Préparateur de commandes</span>
                    <span className="text-slate-500 font-semibold">2025 - Présent</span>
                  </div>
                  <p className="text-indigo-700 font-medium text-[10.5px] mb-1">Colruyt Group</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[10.5px]">
                    <li>Gestion logistique des flux, préparation méthodique et conditionnement des commandes.</li>
                    <li>Suivi rigoureux de l&apos;état des stocks à l&apos;aide de terminaux numériques et signalement des écarts.</li>
                    <li>Respect absolu des impératifs de cadence, des règles d&apos;hygiène et des protocoles de sécurité.</li>
                  </ul>
                </div>
                       {/* Poste 2 */}
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Magasinier / Manutentionnaire</span>
                    <span className="text-slate-500 font-semibold">2024 - 2025</span>
                  </div>
                  <p className="text-indigo-700 font-medium text-[10.5px] mb-1">DPD Logistics</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[10.5px]">
                    <li>Prise en charge du déchargement, du tri automatisé et du dispatching des colis sur plateforme.</li>
                    <li>Organisation stratégique de la zone de stockage pour fluidifier les entrées et sorties.</li>
                    <li>Travail collaboratif sous indicateurs en maintenant une vigilance accrue sur la qualité.</li>
                  </ul>
                </div>

                {/* Poste 3 */}
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Ouvrier de Production</span>
                    <span className="text-slate-500 font-semibold">2024</span>
                  </div>
                  <p className="text-indigo-700 font-medium text-[10.5px] mb-1">Sipapi</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[10.5px]">
                    <li>Opérations techniques d&apos;assemblage et alimentation des lignes automatisées.</li>
                    <li>Exécution stricte des processus de contrôle qualité visuels et dimensionnels.</li>
                    <li>Maintenance de premier niveau du poste de travail et application des normes.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* PARCOURS ACADÉMIQUE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                <GraduationCap size={13} className="text-indigo-600" /> Parcours Académique
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900">Bachelier en Automatisation</h3>
                    <p className="text-indigo-700 font-medium text-[10.5px]">Haute École EPHEC (Belgique)</p>
                  </div>
                  <span className="text-slate-500 font-semibold shrink-0 text-[10.5px]">2024 - 2026</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900">Cursus en Génie Logiciel</h3>
                    <p className="text-indigo-700 font-medium text-[10.5px]">UIT de Douala</p>
                  </div>
                  <span className="text-slate-500 font-semibold shrink-0 text-[10.5px]">2024 - 2025</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900">Baccalauréat Scientifique (Série D)</h3>
                    <p className="text-indigo-700 font-medium text-[10.5px]">Collège Saint-Thomas</p>
                  </div>
                  <span className="text-slate-500 font-semibold shrink-0 text-[10.5px]">2024</span>
                </div>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : PROJETS & COMPÉTENCES */}
          <div className="col-span-4 space-y-6">
            
            {/* PROJETS PERSONNELS & ACADÉMIQUES */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-1 flex items-center gap-1.5">
              <Code size={13} className="text-indigo-600" /> Projets Récents
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Système d&apos;Alerte Embarqué</h3>
                  <p className="text-[9.5px] font-semibold text-slate-500 mb-1">MicroPython & Électronique</p>
                  <p className="text-slate-700 text-justify text-[10.5px] leading-relaxed">
                    Module basé sur un capteur à ultrasons et buzzer avec fréquence proportionnelle à la distance.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">INAZUQUIZZ / FOOTQUIZZ</h3>
                  <p className="text-[9.5px] font-semibold text-slate-500 mb-1">Python & Interface GUI</p>
                  <p className="text-slate-700 text-justify text-[10.5px] leading-relaxed">
                    Jeu de quiz de football exploitant la bibliothèque graphique Customtkinter.
                  </p>
                </div>
              </div>
            </div>

            {/* COMPÉTENCES TECHNIQUES */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                <Code size={13} className="text-indigo-600" /> Compétences
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Automatisation",
                  "Analyse Circuits",
                  "Python & GUI",
                  "MicroPython & IoT",
                  "Gestion Stocks",
                  "Flux d'Usine",
                ].map((skill) => (
                  <span key={skill} className="bg-slate-100 text-slate-800 px-2 py-1 rounded border border-slate-200 font-medium text-[10px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* LANGUES & ATOUTS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                <Globe size={13} className="text-indigo-600" /> Langues & Atouts
              </h2>
              <div className="space-y-1.5 text-slate-700 text-[10.5px]">
                <div><span className="font-bold text-slate-950">Français :</span> Maternelle</div>
                <div><span className="font-bold text-slate-950">Anglais :</span> Technique</div>
                <div><span className="font-bold text-slate-950">Néerlandais :</span> Bases</div>
                
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {["Adaptabilité", "Esprit d'équipe", "Rigueur"].map((atout) => (
                    <span key={atout} className="bg-indigo-50 text-indigo-800 border border-indigo-100 px-2 py-0.5 rounded font-semibold text-[9.5px]">
                      {atout}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Petit footer discret tout en bas de la page A4 */}
      <div className="text-center text-[9px] text-slate-400 border-t border-slate-100 pt-2">
        Document généré depuis le portfolio en ligne de Happi Leufang Yvan Steve
      </div>

    </div>
  );
}