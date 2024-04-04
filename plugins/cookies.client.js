import { allConsentGranted, consentGrantedAdStorage } from "~/js/cookies"

export default defineNuxtPlugin((nuxtApp) => {

    const cookieConsent = useCookie('cookie_consent', { path: '/', maxAge: 60 * 60 * 24 * 30 })


    //switch case for cookie consent
    switch (cookieConsent.value) {
        case 'all':
            allConsentGranted()
            break
        case 'ad_storage':
            consentGrantedAdStorage()
            break
        default:
            break
    }



})



