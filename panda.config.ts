import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#D4AF37" },
          secondary: { value: "#2C3E50" },
          accent: { value: "#E74C3C" },
          background: { value: "#FFFFFF" },
          text: { value: "#2C3E50" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
          heading: { value: "Georgia, serif" },
        },
      },
    },
  },
  outdir: "styled-system",
});
