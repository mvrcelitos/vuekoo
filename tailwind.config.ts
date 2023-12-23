import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: "class",
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#FF0055",
            "primary-active": "#AA00CC",
         },
         screens: {
            xs: "420px",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
export default config;
