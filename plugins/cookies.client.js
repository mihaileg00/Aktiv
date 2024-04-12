

export default defineNuxtPlugin((nuxtApp) => {

    const cookieConsent = useCookie('cookie_consent')

    const { gtag, initialize } = useGtag()
    //switch case for cookie consent
    switch (cookieConsent.value) {
        case 'all':
            gtag('consent', 'update', {
                ad_storage: 'granted',
                analytics_storage: 'granted'
              })
            break
        case 'ad_storage':
            gtag('consent', 'update', {
              ad_storage: 'granted'
            })
            initialize()
            break
        default:
            break
    }

})



