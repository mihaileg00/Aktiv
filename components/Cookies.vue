<template>
    <transition  name="fade">
      <div v-if="cookieConsent === undefined" class="cookie-consent">
        <div class="content">
          <p>Този уебсайт използва бисквитки, за да ви осигури най-доброто преживяване.</p>
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
    display: flex;
    gap: 12px;
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