import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'gray-brand': '#414141',
            },
            fontFamily: {
                heading: ['Zodiak', 'Georgia', 'serif'],
                body: ['Instrument Sans', 'Arial', 'sans-serif'],
                sans: ['Instrument Sans', 'Arial', 'sans-serif'],
            },
        },
    },
}