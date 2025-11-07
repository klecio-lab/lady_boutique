import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'gray-brand': '#414141',
            },
            fontFamily: {
                heading: ['Georgia', 'serif'],
                body: ['Arial', 'sans-serif'],
            },
        },
    },
}