// src/components/sections/skillsData.ts

export interface SkillCard {
  id: string;
  name: string;
  desc: string;
  tags: string[];
}

export const SKILLS_CARDS: SkillCard[] = [
  {
    id: "auto",
    name: "Automatisation Industrielle",
    desc: "Analyse de circuits, systèmes automatisés et contrôle de processus industriels.",
    tags: ["Analyse de circuits", "Systèmes automatisés", "PLC"],
  },
  {
    id: "code",
    name: "Programmation",
    desc: "Développement logiciel en Python, MicroPython et interfaces graphiques avec Customtkinter.",
    tags: ["Python", "Customtkinter", "GUI", "OOP"],
  },
  {
    id: "iot",
    name: "MicroPython et IoT",
    desc: "Conception de modules embarqués, capteurs ultrasoniques et systèmes d'alerte intelligents.",
    tags: ["MicroPython", "Raspberry Pi", "Capteurs", "Buzzer"],
  },
  {
    id: "log",
    name: "Logistique et Flux",
    desc: "Gestion des flux d'usine, gestion de stocks et optimisation des chaînes opérationnelles.",
    tags: ["Gestion de stocks", "Flux d'usine", "ERP"],
  },
];

export const TECH_TAGS = [
  "Python", "MicroPython", "Customtkinter", "Automatisation",
  "Analyse de circuits", "IoT", "Gestion de stocks",
  "Logistique", "Git", "Linux",
];