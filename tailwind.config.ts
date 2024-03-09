import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Maxi", ...fontFamily.sans],
      },
      backgroundImage: {
        "crumpled-paper": "url('/public/crumpled-paper.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
