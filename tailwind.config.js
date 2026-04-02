/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/**/*.html", "./src/js/*.js", "./src/js/**/*.js"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "90rem",
      },
      padding: {
        DEFAULT: "1.25rem", // мобилка        
        lg: "1.875rem",      // планшет
        xl: "3.125rem",      // десктоп
        xxl: "4.6875rem"
      },
    },
    extend: {
      colors: {
        "belyy": "#fff",
        "sirenevyy": "#f5f7ff",
        "chernyy": "#0A0D20",
        "chernyy-900": "rgba(10, 13, 32, 0.9)",
        "chernyy-500": "rgba(10, 13, 32, 0.5)",
        "siniy": "#1a27e8",
        "pinker": "#F4A77F"
      },
      fontFamily: {
        "inter": ["InterTight", "sans-serif"],

        "heading": ["MoniqaHeading", "sans-serif"],
        "heading-semibold": ["MoniqaHeading", "sans-serif"],
        "heading-narrow": ["MoniqaHeadingNarrow", "sans-serif"],

        "paragraph": ["MoniqaParagraph", "sans-serif"],
        "paragraph-narrow": ["MoniqaParagraphNarrow", "sans-serif"],

        "myriad": ["MyriadPro", "sans-serif"],
        "myriad-condensed": ["MyriadProSemiCondensed", "sans-serif"],

        "transforma": ["TransformaSansTrial", "sans-serif"],
      },     
      maxWidth: {
        "container": "90rem",
      },
    },
  },
  plugins: [],
};
