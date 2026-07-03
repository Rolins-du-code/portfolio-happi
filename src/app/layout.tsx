import type { Metadata } from "next";
// 1. On importe les deux polices depuis Google Fonts
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// 2. On configure la police pour le texte général
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 3. On configure la police pour les titres
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Happi Leufang Yvan Steve - Portfolio",
  description: "Portfolio professionnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("h-full", "font-sans", geist.variable)}>
      {/* 4. On injecte les deux variables et on définit font-sans par défaut */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-full flex flex-col antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
