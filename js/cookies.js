function allConsentGranted() {
    const { gtag } = useGtag()
    const cookieConsent = useCookie('cookie_consent')
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })

    //set cookie_consent to all
    cookieConsent.value = 'all'
  }
  
  function consentGrantedAdStorage() {
    const { gtag } = useGtag()
    const cookieConsent = useCookie('cookie_consent')
    gtag('consent', 'update', {
      ad_storage: 'granted'
    })

    //set cookie_consent to ad_storage
    cookieConsent.value = 'ad_storage'
  }

  export { allConsentGranted, consentGrantedAdStorage }