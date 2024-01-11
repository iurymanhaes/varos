import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "red-hat": ["Red Hat Display", "sans-serif"],
      },
      colors: {
        greyC1: "rgba(242, 244, 248, 1)",
        greyC2: "rgba(226, 229, 235, 1)",
        greyC3: "rgba(211, 214, 223, 1)",
        greyC4: "rgba(198, 202, 210, 1)",
        greyC5: "rgba(176, 183, 190, 1)",
        greyC6: "rgba(135, 141, 150, 1)",
        greyC7: "rgba(77, 83, 88, 1)",
        greyC8: "rgba(34, 39, 41, 1)",
        greyC9: "rgba(19, 21, 22, 1)",
        turquoiseT2: "rgba(0, 240, 201, 1)",
        varosFLGreen: "rgba(25, 200, 25, 1)",
        varosButtonGreen: "rgba(25, 200, 25, 0.40)",
        varosSGreen: "rgba(0, 247, 0, 1)",
        varosCBlack: "rgba(19, 19, 19, 1)",
        varosDoc: "rgba(250, 250, 250, 1)",
        varosG1: "rgba(204, 204, 204, 1)",
      },
      gradientColorStops: (theme) => ({
        "gray-0": "rgba(77, 83, 88, 0)",
        "gray-100": "rgba(77, 83, 88, 1)",
      }),
    },
  },
  plugins: [],
};
export default config;
