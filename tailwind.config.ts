import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded'],
      },
      colors: {
        background: "#15055A",
        textColor: "var(--White, #F5F5F5)",
        bgBlack: "#020202",
        bgRed: "#E74C3C",
        bgBlue: "#907CFF",
      },
      backgroundImage: {
        'mobileView': 'linear-gradient(180deg, #020202 0%, #E74C3C 50%, #907CFF 100%)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
