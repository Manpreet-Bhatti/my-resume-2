import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EBEBEB",
        "dark-background": "#393939",
        page: "#FFFFFF",
        "hover-page": "#F8F8F8",
        "dark-hover-page": "#2A2A2A",
        "active-page": "#F1F1F1",
        "dark-active-page": "#2F2F2F",
        "dark-page": "#252525",
        text: "#333333",
        "dark-text": "#CCCCCC",
        "alt-text": "#737373",
        "dark-alt-text": "#8C8C8C",
        primary: "#D40000",
        "primary-hover": "#C90000",
        "dark-primary-hover": "#2D2424",
        "primary-active": "#BF0000",
        "primary-high": "#FDF3F3",
        "primary-high-active": "#FAE7E7",
        "dark-primary-high-active": "#362323",
      },
    },
  },
  plugins: [],
};

export default config;
