<template>
  <div id="nav-container">
    <nav>
      <!-- Your navigation content goes here -->
      <div @click="() =>{if(menuOn == 'animate__slideInLeft'){openNav(false)} else openNav(true)}" id="hamburger-mobile">
        <img src="/Menu.svg" class="icon" alt="Hamburger menu" />
      </div>
      <Nuxt-link to="/" @click="scrollToTop" class="nav-left">
        <div class="icon-container-small">
          <img src="/logo.svg" class="icon" alt="Aktiv logo" />
        </div>
        <img class="logo-text" src="/name.svg" alt="Aktiv logo" />
      </Nuxt-link>
      <div class="nav-middle">
        <Nuxt-link
          @click="scrollToTop"
          class="link display-3 color-primary"
          to="/"
          >Начало</Nuxt-link
        >
        <div id="services-link">
          <div class="services-text">
            <p class="display-3 display-3 color-primary">Услуги</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2676 4.53846L7.76758 10.4615L2.26758 4.53846"
                stroke="#4C5186"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div id="services-option">
            <div
              class="service-option"
              v-for="(route, index) in routes"
              :key="index"
            >
              <Nuxt-link
                @click="scrollToTop"
                class="link"
                :to="`/Services/${route.id}`"
              >
                <div>{{ route.name }}</div>
              </Nuxt-link>
            </div>
          </div>
        </div>
        <Nuxt-link
          @click="scrollToTop"
          class="link display-3 color-primary"
          to="/About"
          >За нас</Nuxt-link
        >
      </div>
      <div class="nav-right">
        <Button
          buttonText="Свържете се с нас"
          arrow
          link="/#contacts-container"
        />
      </div>
    </nav>
    <div id="mobile-menu" :class="`hidden animate__animated ${menuOn}`">
      <div class="separation-line-nav"></div>
      <Nuxt-link
        @click="openNav(false)"
        class="mobile-menu-item link"
        :class="$route.path === '/' ? 'mobile-menu-item-active' : ''"
        to="/"
      >
        <p class="display-3">Начало</p>
      </Nuxt-link>
      <div class="separation-line-nav"></div>
      <div
        class="mobile-menu-item link"
        :class="serviceOn ? 'mobile-menu-service-active' : ''"
        to="/Services"
        @click="serviceOn = (!serviceOn ? true : false)"
      >
        <p class="display-3">Услуги</p>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 13.0954L10.5 7.17236L5 13.0954"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div id="services-option-mobile" :class="serviceOn ? 'services-open':'services-close'">
        <Nuxt-link
          class="service-option-mobile link"
          :class="$route.path === `/Services/${route.id}` ? 'service-option-mobile-active' : ''"
          v-for="(route, index) in routes"
          :key="index"
          @click="openNav(false)"
          :to="`/Services/${route.id}`"
        >
          <p class="service-option">{{ route.name }}</p>
        </Nuxt-link>
      </div>
      <div class="separation-line-nav"></div>
      <Nuxt-link
        @click="openNav(false)"
        class="mobile-menu-item link"
        :class="$route.path === '/About' ? 'mobile-menu-item-active' : ''"
        to="/About"
      >
        <p class="display-3">За нас</p>
      </Nuxt-link>
      <div class="separation-line-nav"></div>
    </div>
  </div>
</template>


<script setup>
const menuOn = ref(null);
const serviceOn = ref(null);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Function you want to run when `menuOn` changes
const openNav = (actionE) => {
  if (actionE) {
    menuOn.value = 'animate__slideInLeft';
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // A function to prevent scrolling:
  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
  } else {
    menuOn.value = 'animate__slideOutLeft';
    window.onscroll = null;
  }
};

const { data } = await useFetch("/api/service", {
  query: {
    type: "nav",
  },
});

const routes = toRaw(data.value);

</script>

<style scoped>
/* Your component's styles go here */

#nav-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 88px;
  max-width: var(--max-width-medium);
  padding: var(--section-padding);
}

#hamburger-mobile {
  display: none;
}

.logo-text {
  height: 20px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-middle {
  display: flex;
  align-items: center;
  gap: 24px;
}

#services-link {
  position: relative;
  display: flex;
  justify-content: center;
}

.services-text {
  display: flex;
  align-items: center;
  gap: 4px;
}

#services-option {
  display: none;
}

#services-link:hover #services-option {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100%);
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  background-color: var(--main-bg-color);
  border: 1px solid var(--neutral-400);
  border-radius: 8px;
  padding: 6px;
}

.service-option {
  padding: 14px 16px;
  border-radius: 8px;
  color: var(--secondary-text-color);
  transition: all 0.2s;
}

.service-option:hover {
  background-color: var(--neutral-400);
  font-weight: 600;
  color: var(--primary-text-color);
}

@media screen and (max-width: 768px) {
  #nav-container {
  }

  nav {
    height: 70px;
    padding: 0 16px;
  }

  #hamburger-mobile {
    display: block;
  }

  .nav-middle {
    display: none;
  }
  .nav-right {
    display: none;
  }
  .nav-left {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  #mobile-menu {
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc( 100vh - 70px);
    left: 0;
    z-index: 1000;
    background-color: var(--main-bg-color);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .separation-line-nav {
    width: 100%;
    height: 1px;
    background-color: var(--neutral-400);
  }

  .mobile-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: var(--main-bg-color);
    color: var(--secondary-color);
    gap: 4px;
    transition: all 0.3s;
  }

  .mobile-menu-item path {
    stroke: var(--secondary-color);
    transition: all 0.3s;
  }

  .mobile-menu-item-active {
    background-color: var(--secondary-color);
    color: var(--main-bg-color);
    font-weight: 800;
  }

  .mobile-menu-service-active {
    background-color: var(--neutral-500);
    color: var(--main-bg-color);
  }

  .mobile-menu-service-active path {
    stroke: var(--main-bg-color);
  }

  .mobile-menu-item-active path {
    stroke: var(--main-bg-color);
  }

  #services-option-mobile {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 0px;
    overflow: hidden;
  }

  .services-open{
    display: block;
    animation: popIn 0.5s ease-in-out forwards;
  }

  .services-close{
    display: block;
    animation: popOut 0.5s ease-in-out forwards;
  }
  

  .service-option-mobile {
    height: 52px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    transition: all 0.2s;
  }

  .service-option-mobile-active {
    background-color: var(--neutral-200);
    color: var(--neutral-600);
  }
}
</style>
