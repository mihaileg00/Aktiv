<template>
  <section id="serviceContainer">
    <div id="services">
      <h2 class="color-primary display-7 extra-bold z-index-5">Услуги</h2>
      <div class="spacer-24"></div>
      <p class="color-secondary paragraph-medium align-center z-index-5">
        Предлагаме широк спектър от счетоводни, данъчни и консултантски
        услуги,<br />
        осигуряващи най-доброто решение за вашия бизнес.
      </p>
      <div class="spacer-32"></div>
      <div id="services-content">
        <div id="home-services-navigation">
          <button
            v-for="(service, index) in services"
            :key="index"
            @click="changeSlide(index)"
            class="service shadow-02"
            :class="index === newSlide ? '' : ''"
          >
            <NuxtImg
              width="32px"
              height="32px"
              :src="`/icons/light/${service.summary.iconName}.svg`"
              :alt="`${service.summary.iconName} Icon`"
            />
            <p class="display-2 color-secondary">{{ service.summary.name }}</p>
          </button>
        </div>
        <div id="service-container">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="servicebox shadow-02 animate__animated"
            :class="
              index == newSlide
                ? 'newSlide'
                : index == currentSlide
                ? 'currentSlide animate__rotateOutUpRight z-index-4'
                : 'hidden'
            "
          >
            <div class="service-content">
              <div>
                <h3 class="display-5 color-primary">
                  {{ service.summary.name }}
                </h3>
                <div class="spacer-16"></div>
                <p class="color-secondary paragraph-medium">
                  {{ service.summary.description }}
                </p>
                <div class="spacer-32"></div>
              </div>
              <Nuxt-link
                v-if="service.summary.link"
                :to="`/Services/${service.id}`"
                class="link service-link"
              >
                <p class="learn-more">Научи повече</p>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.1427 2.35095L13.5369 7.49996L8.1427 12.649"
                    stroke="#6D758F"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5369 7.5L3.03699 7.5"
                    stroke="#6D758F"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Nuxt-link>
              <div v-else class="">
                <p class="color-secondary paragraph-medium">Още въпроси?</p>
                <p
                  @click="scrollToElement('contacts-container')"
                  class="learn-more"
                >
                  Попитайте тук
                </p>
              </div>
            </div>
            <NuxtImg
              width="100%"
              height="100%"
              class="service-image"
              :src="service.summary.image.src"
              :alt="service.summary.image.alt"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="services-mobile">
      <h2 class="display-7 color-primary extra-bold">Услуги</h2>
      <div class="spacer-24"></div>
      <p class="paragraph-medium color-dark align-center">
        Предлагаме широк спектър от счетоводни, данъчни и консултантски услуги,
        осигуряващи най-доброто решение за вашия бизнес.
      </p>
      <div class="spacer-48"></div>
      <div id="services-content-mobile">
        <div
          id="service-mobile"
          v-for="(service, index) in services"
          :key="index"
        >
          <NuxtImg
            width="100%"
            height="100%"
            class="service-image"
            :src="service.summary.image.src"
            :alt="service.summary.image.alt"
          />
          <div class="spacer-24"></div>
          <h3 class="display-5 color-primary extra-bold">
            {{ service.summary.name }}
          </h3>
          <div class="spacer-24"></div>
          <p class="color-secondary paragraph-medium">
            {{ service.summary.descriptionShort }}
          </p>
          <div class="spacer-32"></div>
          <Nuxt-link :to="`/Services/${service.id}`" class="link service-link">
            <p class="learn-more">Научи повече</p>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.1427 2.35095L13.5369 7.49996L8.1427 12.649"
                stroke="#6D758F"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5369 7.5L3.03699 7.5"
                stroke="#6D758F"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Your component's styles go here */

#serviceContainer {
  width: 100%;
  display: flex;
  max-width: var(--max-width-medium);
  padding: 0 var(--padding-side);
}

#services {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--max-width-medium);
}

#services-mobile {
  display: none;
}

#services-content {
  display: flex;
  gap: 40px;
  width: 100%;
}

#home-services-navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

.service {
  display: flex;
  padding: 6px 14px 6px 7px;
  transition: all 0.2s ease;
  border-radius: 6px;
  border: none;
  gap: 10px;
  background: white;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
}

.service:hover {
  transform: scale(1.05);
  background-color: #e0e0e0;
}

.service:active {
  transform: scale(0.95);
  background-color: #d0d0d0;
}

.service:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  white-space: nowrap;
  padding: 5px;
  border-radius: 5px;
  background-color: #555;
  color: #fff;
  font-size: 12px;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-left: 10px;
}

.service:hover::after {
  opacity: 1;
}

.service-icon {
  width: 32px;
  height: 32px;
}

.service-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#service-container {
  position: relative;
  height: 368px;
  width: 75%;
}

.servicebox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 20px 20px 40px;
  height: 368px;
  gap: 40px;
  border: 1px solid var(--neutral-300);
  border-radius: 8px;
  background: var(--main-bg-color);
}

.sercivebox.currentSlide {
  z-index: 4;
  animation: fadeOut 0.5s ease-in forwards;
}

.servicebox.hidden {
  display: none;
}

.service-content {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
}

.service-image {
  width: 50%;
  border-radius: 8px;
}

.service-link {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  #services {
    display: none;
  }

  #services-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: none;
    padding: 0px;
  }

  #services-content-mobile {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  #service-mobile {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  .service-image {
    border-radius: 8px;
    width: 100%;
    aspect-ratio: 10/7;
  }
}
</style>


<script setup>
const currentSlide = ref(0);
const newSlide = ref(0);

const scrollToElement = (elementID) => {
  const element = document.getElementById(elementID);

  const offset = element.offsetTop - 110;
  // Scroll to the element
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

const { data } = await useFetch("/api/service", {
  transform: (service) => {
    return service.map((service) => ({
      id: service.id,
      summary: service.summary,
    }));
  },
});

const services = toRaw(data.value);

const changeSlide = (index) => {
  const oldSlide = newSlide.value;
  newSlide.value = index;
  currentSlide.value = oldSlide;
};
</script>