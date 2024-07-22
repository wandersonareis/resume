const { DEFAULT_PORT } = require('karma/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        theme: {
          primary: {
            DEFAULT: "#fff",
            dark: "#030712",
          },
          50: {
            DEFAULT: "#F9FAFB",
            dark: "#111827",
          },
          100: {
            DEFAULT: "#F3F4F6",
            dark: "#1f2937",
          },
          200: {
            DEFAULT: "#E5E7EB",
            dark: "#374151",
          },
          300: {
            DEFAULT: "#D1D5DB",
            dark: "#4B5563",
          },
          400: {
            DEFAULT: "#9CA3AF",
            dark: "#6B7280",
          },
          500: {
            DEFAULT: "#6B7280",
            dark: "#9CA3AF",
          },
          600: {
            DEFAULT: "#4B5563",
            dark: "#D1D5DB",
          },
          700: {
            DEFAULT: "#374151",
            dark: "#E5E7EB",
          },
          800: {
            DEFAULT: "#1F2937",
            dark: "#F3F4F6",
          },
          900: {
            DEFAULT: "#111827",
            dark: "#F9FAFB",
          },
          950: {
            DEFAULT: "#030712",
            dark: "#FFFFFF",
          },
        },

        primary: {
          DEFAULT: "#4B5563",
          dark: "#D1D5DB",
        },
        background: {
          DEFAULT: "#fff",
          dark: "#111827",
        },
      },
      fontSize: {
        heading1: {
          desktop: "3.5rem",
          tablet: "3rem",
          mobile: "2.25rem",
        },
        heading2: {
          desktop: "2.25rem",
          tablet: "1.125rem",
          mobile: "1.125rem",
        },
        heading3: {
          desktop: "1.875rem",
          tablet: "1.5rem",
          mobile: "1.5rem",
        },
        subtitle: {
          DEFAULT: "1.25rem",
          mobile: "1.125rem",
        }
      },
      lineHeight: {
        heading1: {
          desktop: "4.5rem",
          tablet: "3rem",
          mobile: "2.5rem",
        },
        heading2: {
          desktop: "2.5rem",
          tablet: "1.75rem",
          mobile: "1.75rem",
        },
        heading3: {
          desktop: "2.25rem",
          tablet: "2rem",
          mobile: "2rem",
        },
        subtitle: {
          DEFAULT: "1.75rem",
          mobile: "1.75rem",
        }
      },
      fontWeight: {
        desktop: "700",
        tablet: "700",
        mobile: "600",
        subtitle: "400",
      },
      borderRadius: {
        primary: ".75rem",
      }
    },
  },
  plugins: [],
};