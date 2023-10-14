/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#ffff',
                secondary: '#f0f2f5',
                secondaryHover: '#e4e6eb',
                textPrimary: '#050505',
                textSecondary: '#0064D1',
            },
            // boxShadow: {
            //     lightShadowLg: '0 10px 15px -3px var(--primary), 0 4px 6px -4px var(--primary)',
            //     lightShadowMd: '0 4px 6px -1px var(--primary), 0 2px 4px -2px var(--primary);',
            //     lightShadow: '0 1px 3px 0 var(--primary), 0 1px 2px -1px var(--primary);',
            // },
        },
    },
    plugins: [],
};
