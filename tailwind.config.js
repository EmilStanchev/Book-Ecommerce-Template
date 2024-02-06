/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { fontFamily, defaultTheme } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "405px",
        ...defaultTheme?.screens,
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
      },
      colors: {
        skin: {
          accent: { DEFAULT: "#53CAB5", dark: "#3CAF9A" },
          base: "#F9FFFF",
          muted: "#EDF4F4",
          dark: "#363636",
          gray: "#D1DBD9",
        },
      },
      boxShadow: {
        upper:
          "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
        "upper-md":
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0))" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [],
};
