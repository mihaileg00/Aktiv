
export default defineNuxtPlugin((nuxtApp) => {

    const cookieConsent = useCookie('cookie_consent',  {
  path: '/',
  maxAge: 60 * 60 * 24 * 30,
  secure: true,
})

    const { gtag } = useGtag()
    //switch case for cookie consent
    switch (cookieConsent.value) {
        case 'all':
            gtag('consent', 'update', {
                ad_user_data: "granted",
                ad_personalization: "granted",
                ad_storage: "granted",
                analytics_storage: "granted",
              })
            break
        case 'ad_storage':
            gtag('consent', 'update', {
              ad_storage: 'granted'
            })
            break
        default:
            break
    }

})



