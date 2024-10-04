/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        spinCustom: 'spinCustom 20s linear infinite',
        gradient: 'gradient 5s ease infinite',
      },
      keyframes: {
        spinCustom: {
          '0%': { transform: 'rotate(0deg)',
                  scale:'1',
                },
          '50%': { transform: 'rotate(180deg)',
                    scale:'1.1',
                  },
                  '100%': { transform: 'rotate(360deg)',
                    scale:'1',
                  },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
