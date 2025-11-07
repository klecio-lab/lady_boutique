export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  },

  // Configuração do @nuxt/image
  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg', 'jpeg'],
    ipx: {
      maxAge: 60 * 60 * 24 * 365,
    },
    domains: [],
    alias: {}
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'
    }
  },
  app: {
    head: {
      title: 'Lady Boutique - Bolsas Femininas em Abreu e Lima',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {name: 'format-detection', content: 'telephone=no'},
        {name: 'description', content: 'Lady Boutique - Sua loja de bolsas femininas em Abreu e Lima - PE. Atacado e varejo com qualidade e preço justo. Confira nossa coleção!'}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/wnx2rqo.css'
        }
      ]
    }
  },
  routeRules: {
    '/**/*.{png,jpg,jpeg,gif,webp,svg,ico}': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  nitro: {
    compressPublicAssets: true,
  }
})