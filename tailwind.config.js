/** @type {import('tailwindcss').Config} */

// Paleta base
const palette = {
  gray: {
    25: "#FAFAFA",
    50: "#F5F6F7",
    100: "#E5E7EB",
    200: "#D1D5DB",
    300: "#9CA3AF",
    400: "#6B7280",
    500: "#4B5563",
    600: "#374151",
    700: "#1F2937",
    800: "#111827",
    900: "#0B0F19",
    950: "#05070D",
  },
  brand: {
    50: "#E6EEF2",
    100: "#C2D6E0",
    200: "#8BAEC2",
    300: "#5787A5",
    400: "#2D6385",
    500: "#06385A", // Azul principal
    600: "#052E49",
    700: "#042537",
    800: "#031B26",
    900: "#02131A",
  },
  accent: {
    50: "#FFF2E6",
    100: "#FFD9B8",
    200: "#FFB870",
    300: "#FF9838",
    400: "#F9841B",
    500: "#E07317", // Naranja principal
    600: "#B85912",
    700: "#8A420D",
    800: "#5C2C09",
    900: "#2E1604",
  },
  success: {
    100: "#DCFCE7",
    500: "#22C55E",
    700: "#15803D",
  },
  error: {
    100: "#FEE2E2",
    500: "#EF4444",
    700: "#B91C1C",
  },
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  current: "currentColor",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ...palette,
        bg: {
          primary: palette.gray[25],
          secondary: palette.gray[50],
          brand: palette.brand[500],
          brandHover: palette.brand[600],
          accent: palette.accent[500],
          accentHover: palette.accent[600],
          error: palette.error[500],
          errorHover: palette.error[600],
          success: palette.success[500],
          successHover: palette.success[600],
          white: palette.white,
          black: palette.black,
          transparent: palette.transparent,
          current: palette.current,
        },
        text: {
          primary: palette.gray[900],
          secondary: palette.gray[700],
          muted: palette.gray[500],
          brand: palette.brand[500],
          accent: palette.accent[500],
          error: palette.error[500],
          success: palette.success[500],
          white: palette.white,
          black: palette.black,
          transparent: palette.transparent,
          current: palette.current,
        },
        border: {
          default: palette.gray[200],
          brand: palette.brand[500],
          accent: palette.accent[500],
          error: palette.error[500],
          success: palette.success[500],
          white: palette.white,
          black: palette.black,
          transparent: palette.transparent,
          current: palette.current,
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
