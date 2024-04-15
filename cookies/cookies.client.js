
// export default defineNuxtPlugin((nuxtApp) => {

//     const cookieConsent = useCookie('cookie_consent',  {
//   path: '/',
//   maxAge: 60 * 60 * 24 * 30,
//   secure: true,
// })

//     const { gtag, initialize } = useGtag()
//     //switch case for cookie consent
//     switch (cookieConsent.value) {
//         case 'all':
//             gtag('consent', 'update', {
//                 ad_storage: 'granted',
//                 analytics_storage: 'granted'
//               })
//                initialize()
//             break
//         case 'ad_storage':
//             gtag('consent', 'update', {
//               ad_storage: 'granted'
//             })
//             initialize()
//             break
//         default:
//             break
//     }

// })



