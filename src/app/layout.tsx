import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import NavBar from "./components/Navbar";
import NavBar2 from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import CmdSound from "./components/CmdSound";
import AIConsole from "./components/AIConsole";

export const metadata: Metadata = {
  title: "Keyboard Shortcuts",
  description: "Quickly find and copy shortcuts across OSes and apps",
  themeColor: "#0b0b0b",
};

const gendy = localFont({
  src: "./fonts/Gendy.otf",
  variable: "--font-gendy",
  weight: "400",
});
const calcio = localFont({
  src: "./fonts/calcio.ttf",
  variable: "--font-calcio",
  weight: "400",
});
const surgena = localFont({
  src: "./fonts/surgena.ttf",
  variable: "--font-surgena",
  weight: "400",
});
const blauerRegular = localFont({
  src: "./fonts/Blauer-Nue-Regular.otf",
  variable: "--font-blauer-regular",
  weight: "400",
});
const blauerExtrabold = localFont({
  src: "./fonts/Blauer-Nue-Extrabold.otf",
  variable: "--font-blauer-extrabold",
  weight: "700",
});
const kregan = localFont({
  src:"./fonts/Kregan.otf",
  variable: "--font-kregan",
});
const mawjusti = localFont({
  src:"./fonts/mawjusti.woff",
  variable: "--font-mawjusti",
});
const qurovaLight = localFont({
  src:"./fonts/Qurova-Light.otf",
  variable: "--font-qurova-light",
});
const qurovaRegular = localFont({
  src:"./fonts/Qurova-Regular.otf",
  variable: "--font-qurova-regular",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gendy.variable} ${calcio.variable} ${surgena.variable} ${blauerRegular.variable} ${blauerExtrabold.variable} ${kregan.variable} ${mawjusti.variable} ${qurovaLight.variable} ${qurovaRegular.variable}`}
    >
      <body className="bg-[#0b0b0b] text-white antialiased min-h-screen ">
        <NavBar2 />
        <CommandPalette />
        <AIConsole />
        <CmdSound />
        {children}
      </body>
    </html>
  );
}
