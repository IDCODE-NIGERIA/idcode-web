import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4ADE80",
                secondary: "#F2EAD3",
                surface: "#F5F5F5",
                surfaceLow: "#FAFAFA",
                surfaceLowest: "#FFFFFF",
                onSurface: "#111111",
                onSurfaceMuted: "#666666",
                'idcode-bg': '#1E40AF',
                'idcode-green': '#4ADE80',
                'idcode-text': '#000000',
                'idcode-warm': '#F2EAD3',
                'idcode-green-accent': '#93D291',
                'text-secondary': '#6B7280',
                'text-text-light': '#111111',
            },
            boxShadow: {
                ambient: "0 20px 60px rgba(0,0,0,0.05)",
            },
            borderRadius: {
                md: "10px",
            },
            fontFamily: {
                display: ['var(--font-heading)', 'var(--font-poppins)', 'var(--font-geist-sans)', 'sans-serif'],
                body: ['var(--font-poppins)', 'var(--font-heading)', 'var(--font-geist-sans)', 'sans-serif'],
                brand: ['var(--font-geist-sans)', 'var(--font-poppins)', 'var(--font-heading)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config;