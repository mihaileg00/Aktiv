<template>
  <div
    id="nav-container"
    class="animate__animated animate__fadeIn"
    :class="{ scrolled: scrolled || !isHome }"
  >
    <nav>
      <!-- Your navigation content goes here -->
      <NuxtImg
        src="/Menu.svg"
        height="24px"
        width="24px"
        alt="Hamburger menu"
        @click="
          () => {
            if (menuOn == 'animate__slideInLeft') {
              openNav(false);
            } else openNav(true);
          }
        "
        id="hamburger-mobile"
      />
      <Nuxt-link to="/" @click="scrollToTop" class="brand link">
        <NuxtImg
          src="/logo.svg"
          width="40px"
          height="40px"
          alt="Aktiv logo"
          class="brand-mark"
        />
        <div class="brand-name">
          <NuxtImg
            class="brand-word"
            width="115px"
            height="20px"
            src="/name.svg"
            alt="Aktiv"
          />
          <span class="brand-sub">Постигаме успеха заедно</span>
        </div>
      </Nuxt-link>
      <div class="nav-middle">
        <Nuxt-link @click="scrollToTop" class="nav-link" to="/">Начало</Nuxt-link>
        <div id="services-link">
          <div class="services-text nav-link">
            <p>Услуги</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2676 4.53846L7.76758 10.4615L2.26758 4.53846"
                stroke="currentColor"
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
        <Nuxt-link class="nav-link" to="/About">За нас</Nuxt-link>
        <Nuxt-link class="nav-link" to="/#contacts-container">Контакти</Nuxt-link>
        <a
          href="https://aktivbg.com"
          class="nav-link nav-cross"
          target="_blank"
          rel="noopener"
        >
          Недвижими имоти
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path
              d="M2 8L8 2M8 2H3.5M8 2V6.5"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
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
        :class="
          $route.path.startsWith('/Services') ? 'mobile-menu-item-active' : ''
        "
        to="/Services"
        @click="serviceOn = !serviceOn ? true : false"
      >
        <p class="display-3">Услуги</p>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="services-arrow"
          :class="serviceOn ? 'rotate-180' : 'rotate-0'"
        >
          <path
            d="M16 13.0954L10.5 7.17236L5 13.0954"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        id="services-option-mobile"
        :class="serviceOn ? 'services-open' : 'services-close'"
      >
        <Nuxt-link
          class="service-option-mobile link"
          :class="
            $route.path === `/Services/${route.id}`
              ? 'service-option-mobile-active'
              : ''
          "
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
      <a
        @click="openNav(false)"
        class="mobile-menu-item link"
        href="https://aktivbg.com"
        target="_blank"
        rel="noopener"
      >
        <p class="display-3">Недвижими имоти</p>
        <svg width="18" height="18" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path
            d="M2 8L8 2M8 2H3.5M8 2V6.5"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <div class="separation-line-nav"></div>
    </div>
  </div>
</template>


<script setup>
const route = useRoute();
const isHome = computed(() => route.path === "/");

const menuOn = ref(null);
const serviceOn = ref(null);
const scrolled = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Function you want to run when `menuOn` changes
const openNav = (actionE) => {
  if (actionE) {
    menuOn.value = "animate__slideInLeft";
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // A function to prevent scrolling:
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  } else {
    menuOn.value = "animate__slideOutLeft";
    window.onscroll = null;
  }
};

const onScroll = () => {
  scrolled.value = window.scrollY > 28;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const { data } = await useFetch("/api/service", {
  query: {
    type: "nav",
  },
});

const routes = toRaw(data.value);
</script>

<style scoped>
#nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  transition: background 0.35s, border-color 0.35s;
  border-bottom: 1px solid transparent;
}

#nav-container.scrolled {
  background: rgba(6, 9, 26, 0.9);
  backdrop-filter: blur(18px) saturate(1.2);
  border-bottom: 1px solid var(--line-d2);
}

nav {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: var(--maxw);
  padding: 20px 32px;
}

#hamburger-mobile {
  display: none;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brand-name {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-word {
  height: 20px;
  filter: brightness(0) invert(1);
}

.brand-sub {
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fog-2);
  margin-top: 6px;
}

.nav-middle {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--font-b);
  font-size: 14.5px;
  font-weight: 500;
  color: var(--fog);
  padding: 4px 0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s var(--ease);
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cross {
  gap: 4px;
}

.nav-cross svg {
  color: var(--fog-2);
  transition: color 0.2s;
}

.nav-cross:hover svg {
  color: #fff;
}

#services-link {
  position: relative;
  display: flex;
  justify-content: center;
}

.services-text {
  gap: 4px;
}

.services-text svg {
  color: var(--fog);
  transition: color 0.2s;
}

#services-link:hover .services-text {
  color: #fff;
}

#services-link:hover .services-text::after {
  width: 100%;
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
  background: rgba(6, 9, 26, 0.96);
  backdrop-filter: blur(18px) saturate(1.2);
  border: 1px solid var(--line-d);
  border-radius: var(--r);
  padding: 6px;
}

.service-option {
  padding: 12px 16px;
  border-radius: 8px;
  font-family: var(--font-b);
  font-size: 14px;
  color: var(--fog);
  transition: all 0.2s;
}

/* The row text lives inside an <a class="link">, whose global color
   (--secondary-color) would otherwise win and render dark on the dark
   dropdown. Inherit from the row so it stays light (and turns #fff on hover). */
#services-option .link {
  color: inherit;
}

.service-option:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
}

@media screen and (max-width: 768px) {
  nav {
    padding: 16px 20px;
  }

  #hamburger-mobile {
    display: block;
    filter: brightness(0) invert(1);
  }

  .nav-middle {
    display: none;
  }
  .nav-right {
    display: none;
  }
  .brand {
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
    height: calc(100vh - 72px);
    left: 0;
    z-index: 1000;
    background-color: var(--ink);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .separation-line-nav {
    width: 100%;
    height: 1px;
    background-color: var(--line-d);
  }

  .mobile-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: var(--ink);
    color: var(--fog);
    gap: 4px;
    transition: all 0.3s;
  }

  .mobile-menu-item path {
    stroke: var(--fog);
    transition: all 0.3s;
  }

  .mobile-menu-item-active {
    background-color: var(--ink-2);
    color: #fff;
    font-weight: 800;
  }

  .mobile-menu-item-active path {
    stroke: #fff;
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
    background-color: var(--ink-2);
  }

  .services-open {
    display: block;
    animation: popIn 0.5s ease-in-out forwards;
  }

  .services-close {
    display: block;
    animation: popOut 0.5s ease-in-out forwards;
  }

  .service-option-mobile {
    height: 52px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fog);
    transition: all 0.2s;
  }

  .service-option-mobile-active {
    background-color: var(--ink-3);
    color: #fff;
  }

  .services-arrow {
    transition: all 0.3s;
    color: var(--fog);
  }

  .rotate-180 {
    transform: rotate(180deg);
  }

  .rotate-0 {
    transform: rotate(0deg);
  }
}
</style>