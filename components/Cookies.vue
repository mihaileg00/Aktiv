<template>
    <transition  name="fade">
      <div v-if="cookieConsent === undefined" class="cookie-consent shadow-02">
        <div class="content">
          <h3 class="display-7 display-5-mobile color-primary extra-bold">Бисквитки</h3>
          <p class="display-2 color-dark">Този уебсайт използва бисквитки, за да ви осигури най-доброто преживяване.</p>
          <div class="buttons">
            <Button @click="grantAllConsents" buttonText="Приемам Всички"/>
            <Button @click="grantAdStorageOnly" light buttonText="Приемам само за реклами"/>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { allConsentGranted, consentGrantedAdStorage } from '~/js/cookies';

  const cookieConsent = useCookie('cookie_consent');


  function grantAllConsents() {
    allConsentGranted();
    cookieConsent.value = 'all';
  }
  
  function grantAdStorageOnly() {
    consentGrantedAdStorage();
    cookieConsent.value = 'ad_storage';
  }

  </script>
  
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