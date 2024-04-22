<template>
  <main>
    <div id="hero">
      <div
        id="hero-content"
        class="shadow-02 shadow-mobile-none animate__animated"
        :class="
          elements[0].observed ? elements[0].animationClasses : 'opacity-0'
        "
      >
        <h1 class="display-7 extra-bold align-center-mobile color-primary">
          {{ text.hero.title }}
        </h1>
        <div class="spacer-24"></div>
        <p class="paragraph-medium align-center-mobile color-secondary">
          {{ text.hero.description }}
        </p>
        <div class="spacer-32"></div>
        <Button
          buttonText="Свържете се с нас"
          link="/#contacts-container"
          arrow
        />
      </div>
      <div
        class="image-container animate__animated"
        :class="
          elements[0].observed ? elements[0].extra.imageAnimation : 'opacity-0'
        "
      >
        <img :src="text.hero.image.src" :alt="text.hero.image.alt" />
      </div>
    </div>
    <div
      id="description"
      class="animate__animated"
      :class="elements[1].observed ? elements[1].animationClasses : 'opacity-0'"
    >
      <div id="description-header">
        <h2 class="display-8 extra-bold color-primary display-7-mobile">
          {{ text.description.title }}
        </h2>
        <div class="spacer-24"></div>
        <p class="paragraph-large color-secondary">
          {{ text.description.text }}
        </p>
      </div>
      <div class="spacer-32 spacer-48-mobile"></div>
      <ul class="services">
        <li
          class="service-bullet shadow-02"
          v-for="service in text.description.bullets"
          :key="service"
        >
          <NuxtImg
            :src="`/icons/light/${service.iconName}.svg`"
            width="48px"
            height="48px"
            fit="cover"
            :alt="`${service.iconName} Icon`"
          />
          <p class="paragraph-medium color-secondary">{{ service.text }}</p>
        </li>
        <li class="service-bullet shadow-02">
          <NuxtImg
            src="/icons/light/Email.svg"
            width="48px"
            height="48px"
            alt="Bullet Icon"
          />
          <div>
            <p class="color-secondary paragraph-medium">
              Не намерихте това, което търсите?
            </p>
            <Nuxt-link to="/#contacts-container" class="learn-more"
              >Свържете се с нас за решение!</Nuxt-link
            >
          </div>
        </li>
      </ul>
    </div>
    <div
      id="call-to-action"
      class="animate__animated"
      :class="elements[2].observed ? elements[2].animationClasses : 'opacity-0'"
    >
      <div id="cta-content">
        <h3 class="display-7 extra-bold color-light">
          Искате да научите повече за нашите услуги?
        </h3>
        <div class="spacer-24"></div>
        <p class="paragraph-medium color-light">
          Свържете се с нас днес и започнете да създавате по-стабилна и успешна
          финансова бъдеще.
        </p>
        <div class="spacer-32"></div>
        <Button
          buttonText="Свържете се с нас"
          light
          link="/#contacts-container"
          arrow
        />
      </div>
      <div id="cta-image-container">
        <img
          id="cta-image"
          src="/photos/medium/photo9.webp"
          alt="Call to Action Image"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
#hero {
  position: relative;
  width: 100%;
  height: 550px;
  max-width: var(--max-width-medium);
  padding: var(--section-padding);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.image-container {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 64px;
  bottom: 0;
  width: 80%;
}

#hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#hero-content {
  opacity: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 62px 56px;
  background-color: var(--main-bg-color);
  border: 1px solid var(--neutral-400);
  border-radius: 8px;
  width: 45%;
  max-width: 500px;
  z-index: 2;
}

#description {
  width: 100%;
  max-width: var(--max-width-medium);
  padding: var(--section-padding);
  position: relative;
}

#description-header {
  max-width: 800px;
}

.services {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
  padding-inline-start: 0px;
  justify-content: space-between;
}

.service-bullet {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 22px;
  border-radius: 10px;
  border: 1px solid var(--neutral-400);
}

#call-to-action {
  position: relative;
  width: calc(100% - 128px);
  max-width: calc(var(--max-width-medium) - 128px);
  margin-top: 40px;
  padding: 100px 80px 68px 80px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: var(--secondary-color);
}

#cta-content {
  width: 50%;
  max-width: 500px;
  display: block;
}

#cta-image-container {
  position: absolute;
  top: -40px;
  right: 40px;
  bottom: 0;
  width: 30%;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

#cta-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  #hero {
    height: auto;
    justify-content: center;
    flex-direction: column;
    gap: 48px;
  }

  .image-container {
    position: static;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 1;
  }

  #hero-content {
    width: 100%;
    padding: 0px;
    border-radius: 0;
    border: none;
    align-items: stretch;
  }

  #description-header {
    width: 100%;
    text-align: center;
  }

  .services {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  #call-to-action {
    padding: 36px 20px;
    margin-top: 0px;
    width: 100%;
    max-width: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  #cta-content {
    width: 100%;
    padding: 0px;
    text-align: center;
    margin-bottom: 48px;
    max-width: none;
  }

  #cta-image-container {
    position: static;
    width: 100%;
    border-radius: 8px;
    height: 300px;
  }
}
</style>


<script setup>
definePageMeta({
  middleware: "services",
});

const { service, path } = useRoute().params;
const { data } = await useFetch(`/api/service`, {
  query: { id: service, type: "service" },
});

const { text, seo } = toRaw(data.value);

useHead(seo);

const elements = reactive([
  {
    id: "hero",
    observed: false,
    animationClasses: "animate__fadeInLeft animate__delay-500ms",
    extra: { imageAnimation: "animate__fadeInRight animate__faster" },
  },
  {
    id: "description-header",
    observed: false,
    animationClasses: "animate__fadeInUp animate_faster",
  },
  {
    id: "call-to-action",
    observed: false,
    animationClasses: "animate__fadeInUp animate_faster",
  },
  // Add as many elements as needed
]);
let observer;

onMounted(() => {
  if (typeof IntersectionObserver === "undefined") return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = elements.find((el) => el.id === entry.target.id);
        if (element && element.observed == false) {
          element.observed = entry.isIntersecting;
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => {
    const el = document.getElementById(element.id);
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

