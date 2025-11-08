import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gendy: "var(--font-gendy)",
        calcio: "var(--font-calcio)",
        surgena: "var(--font-surgena)",
        blauer: "var(--font-blauer-regular)",
        blauerEx: "var(--font-blauer-extrabold)",
      },
    },
  },
  plugins: [],
} satisfies Config;
