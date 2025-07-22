/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        mutedForeground: 'var(--muted-foreground)',
        accentForeground: 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        border: 'var(--border)',

        'highlight-primary': '#10b981', // emerald-500
        'bg-700': '#1f2937', // example dark background
        // Add more custom colors here
      },  
    },
  },
  plugins: [],
};
