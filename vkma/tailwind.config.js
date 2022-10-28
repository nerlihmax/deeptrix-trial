/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'vkui-text-secondary': 'var(--vkui--color_text_secondary)',
                'vkui-icon-accent': 'var(--vkui--color_icon_accent)',
            },
        },
    },
    plugins: [],
};
