// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['animate.css/animate.min.css','~/assets/css/style.css'],
  modules: [['nuxt-mail', {
    message: {
      to: process.env.SMTP_USER,
      name: 'website'
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_HOST,
      secure: true,
      auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    },
  }], 'nuxt-gtag', '@nuxtjs/sitemap', "@nuxt/image"],
  app: {
    head: {
      titleTemplate: (titleChunk) => {
        // If the titleChunk exists, use it; otherwise, use the default title
        return titleChunk ? `${titleChunk} - АКТИВ Сандански` : 'АКТИВ - счетоводни услуги, данъчни консултации, фирмени услуги';
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.' }
      ],
      htmlAttrs: {
        lang: 'bg'
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' }
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
    ]
  },
  site: {
    name: 'АКТИВ Сандански',
    description: 'Професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.',
    url: 'https://aktiv.bg',
  },
  sitemap: {
    path: '/sitemap.xml', // Specify the path where the sitemap file will be generated within the public directory
  }
})