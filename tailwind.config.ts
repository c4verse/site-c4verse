
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // C4Verse brand colors - Using CSS variables for light/dark mode
        'c4-primary': 'hsl(var(--c4-primary))',
        'c4-secondary': 'hsl(var(--c4-secondary))',
        'c4-accent': 'hsl(var(--c4-accent))',
        'c4-background': 'hsl(var(--c4-background))',
        'c4-light': 'hsl(var(--c4-light))',
        'c4-text': 'hsl(var(--c4-text))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)"
          },
          "50%": {
            transform: "translateY(-20px) rotate(10deg)"
          }
        },
        "rotate-3d": {
          "0%": {
            transform: "rotate(0deg) rotateY(0deg)"
          },
          "33%": {
            transform: "rotate(120deg) rotateY(180deg)"
          },
          "66%": {
            transform: "rotate(240deg) rotateY(360deg)"
          },
          "100%": {
            transform: "rotate(360deg) rotateY(540deg)"
          }
        },
        "smooth-float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)"
          },
          "25%": {
            transform: "translateY(-15px) translateX(10px) rotate(5deg)"
          },
          "50%": {
            transform: "translateY(-10px) translateX(-5px) rotate(-3deg)"
          },
          "75%": {
            transform: "translateY(-20px) translateX(8px) rotate(7deg)"
          }
        },
        "gentle-spin": {
          "0%": {
            transform: "rotate(0deg) scale(1)"
          },
          "50%": {
            transform: "rotate(180deg) scale(1.05)"
          },
          "100%": {
            transform: "rotate(360deg) scale(1)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "rotate-3d": "rotate-3d 12s ease-in-out infinite",
        "smooth-float": "smooth-float 8s ease-in-out infinite",
        "gentle-spin": "gentle-spin 10s linear infinite"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
