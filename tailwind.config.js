/** @type {import('tailwindcss').Config} */
const Color = require('color');
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();
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
                brand: {
                    default: 'hotpink', // => .bg-brand
                    lighter: lighten('hotpink', 0.1), // => .bg-brand-lighter
                    darkerSecondary: darken('#f0f2f5', 0.1), // => .bg-brand-darker
                    darkerFacebook: darken('#0064D1', 0.1), // => .bg-brand-darker
                    75: alpha('hotpink', 0.75), // => .bg-brand-75
                },
            },
            maxWidth: {
                content: 'max-content',
            },
        },
    },
    plugins: [],
};
