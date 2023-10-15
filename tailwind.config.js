/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                facebook: '#0866ff',
                primary: '#ffff',
                secondary: '#f0f2f5',
                secondaryHover: '#e4e6eb',
                textPrimary: '#050505',
                textSecondary: '#0064D1',
                textPost: '#65676b',
                love: '#fc484f',
            },
        },
    },
    plugins: [],
};
