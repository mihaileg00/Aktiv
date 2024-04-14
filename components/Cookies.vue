<template>
      <div v-if="cookieConsent == undefined" class="cookie-consent shadow-02">
        <div class="content">
          <h3 class="display-7 display-5-mobile color-primary extra-bold">Бисквитки</h3>
          <p class="display-2 color-dark">Този уебсайт използва бисквитки, за да ви осигури най-доброто преживяване.</p>
          <div class="buttons">
            <div @click="grantAllConsents()" class="button button-dark color-light button-default">
              <p>Приемам Всички</p>
            </div>
            <div @click="grantAdStorageOnly()" class="button button-light color-primary button-default">
              <p>Приемам само за реклами</p>
            </div>
          </div>
        </div>
      </div>
  </template>
  
 
  
  <style scoped>
  .cookie-consent {
    position: fixed;
    bottom: 32px;
    left: auto;
    right: 32px;
    background-color: var(--main-bg-color);
    border-radius: 8px;
    padding: 32px;
    z-index: 1000;
    display: flex;
    justify-content: center;
  }
  
  .content {
    max-width: 420px;
    text-align: left;
  }
  
  .buttons {
    margin-top: 12px;
    display: flex;
    gap: 12px;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  @media (max-width: 768px) {

    .cookie-consent {
      bottom: 0;
      right: 0;
      left: 0;
      padding: 16px;
    }

    .content {
      text-align: left;
      max-width: none;
      width: 100%;
    }
  
    .buttons {
      text-align: center;
      margin-top: 10px;
    }
  
    .btn {
      display: block;
      margin: 5px auto;
    }
  }
  </style>

<script setup>


const cookieConsent = useCookie('cookie_consent', { 
  path: '/',
  maxAge: 60 * 60 * 24 * 30, 
  secure: true,
})

const grantAllConsents = () =>{
  const { gtag, initialize } = useGtag()
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
    initialize()
    cookieConsent.value = 'all'
}

const grantAdStorageOnly = () => {
  const { gtag, initialize } = useGtag()
    gtag('consent', 'update', {
      ad_storage: 'granted'
    })
    initialize()
    cookieConsent.value = 'ad_storage'
}




</script>