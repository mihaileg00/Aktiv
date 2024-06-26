// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['animate.css/animate.min.css', '~/assets/css/style.css'],
  modules: [['nuxt-mail', {
    message: {
      to: process.env.SMTP_USER,
      name: 'website'
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_HOST,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    },
  }], 'nuxt-gtag', "@nuxt/image", '@nuxtjs/seo'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'bg'
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      mapsApiKey: process.env.MAPS_API_KEY
    }
  },
  generate: {
    routes: [
      // Add routes for dynamic content (e.g., services)
      '/Services/subscription-services',
      '/Services/annual-closure',
      '/Services/hr-services',
      '/Services/quarterly-service',
      // Add more routes as needed
    ],
  },
  gtag: {
    id: process.env.GA_ID,
    initCommands: [
      // Setup up consent mode
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      }]
    ],
  },
  site: {
    url: 'https://aktiv.bg',
    name: 'Актив Сандански | aktiv.bg',
    description: 'Професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.',
    dafaultLocale: 'bg',
    locales: ['bg'],
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    fallbackTitle: false,
  }
})