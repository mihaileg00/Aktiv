function allConsentGranted() {
    const { gtag } = useGtag()
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
  }
  
  function consentGrantedAdStorage() {
    const { gtag } = useGtag()
    gtag('consent', 'update', {
      ad_storage: 'granted'
    })
  }

  export { allConsentGranted, consentGrantedAdStorage }