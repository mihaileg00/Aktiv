<template>
    <transition name="fade">
      <div v-if="!cookieConsent" class="cookie-consent">
        <div class="content">
          <p>Този уебсайт използва бисквитки, за да ви осигури най-доброто преживяване.</p>
          <div class="buttons">
            <button @click="grantAllConsents" class="btn accept-all">Приемам Всички</button>
            <button @click="grantAdStorageOnly" class="btn accept-ads">Приемам само за реклами</button>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  
  const cookieConsent = useCookie('cookie_consent', { path: '/', maxAge: 60 * 60 * 24 * 30 });
  
  function grantAllConsents() {
    const { gtag } = useGtag()
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
    cookieConsent.value = true; // This will automatically update the cookie
  }
  
  function grantAdStorageOnly() {
    const { gtag } = useGtag()
    gtag('consent', 'update', {
      ad_storage: 'granted'
    })
    cookieConsent.value = true; // This will automatically update the cookie
  }
  </script>
  
  <style scoped>
  .cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #323232;
    color: #ffffff;
    padding: 16px;
    z-index: 1000;
    box-shadow: 0 -2px 8px 0 rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
  }
  
  .content {
    max-width: 900px;
    text-align: center;
  }
  
  .buttons {
    margin-top: 12px;
  }
  
  .btn {
    display: inline-block;
    margin-right: 10px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    transition: background-color 0.3s;
  }
  
  .accept-all {
    background-color: #4caf50;
    color: white;
  }
  
  .accept-all:hover {
    background-color: #45a045;
  }
  
  .accept-ads {
    background-color: #f1c40f;
    color: white;
  }
  
  .accept-ads:hover {
    background-color: #dab10e;
  }
  
  p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  @media (max-width: 768px) {
    .content {
      text-align: left;
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