<template>
  <main class="service-page">
    <section
      id="hero"
      class="svc-hero animate__animated"
      :class="elements[0].observed ? elements[0].animationClasses : 'opacity-0'"
    >
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="svc-hero-inner">
        <div class="svc-hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-line" aria-hidden="true"></span>
            Услуга · Актив Сандански
          </div>

          <h1 class="svc-hero-title">{{ text.hero.title }}</h1>

          <p class="svc-hero-sub">{{ text.hero.description }}</p>

          <div class="svc-hero-cta">
            <Button
              buttonText="Свържете се с нас"
              link="/#contacts-container"
              arrow
              large
            />
            <Button
              buttonText="Всички услуги"
              link="/#serviceContainer"
              light
              large
            />
          </div>
        </div>

        <div class="svc-hero-media">
          <div class="svc-hero-media-inner">
            <NuxtImg
              :src="text.hero.image.src"
              :alt="text.hero.image.alt"
              width="640"
              height="760"
              fit="cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="description"
      class="svc-detail animate__animated"
      :class="elements[1].observed ? elements[1].animationClasses : 'opacity-0'"
    >
      <div class="section-head">
        <span class="kicker">Какво включва</span>
        <h2 class="section-title">{{ text.description.title }}</h2>
        <p class="section-lead">{{ text.description.text }}</p>
      </div>

      <ul class="svc-bullets">
        <li
          class="svc-bullet"
          v-for="bullet in text.description.bullets"
          :key="bullet.text"
        >
          <NuxtImg
            class="svc-bullet-icon"
            :src="`/icons/light/${bullet.iconName}.svg`"
            width="40"
            height="40"
            fit="cover"
            :alt="`${bullet.iconName} Icon`"
          />
          <p>{{ bullet.text }}</p>
        </li>
        <li class="svc-bullet svc-bullet-prompt">
          <NuxtImg
            class="svc-bullet-icon"
            src="/icons/light/Email.svg"
            width="40"
            height="40"
            alt="Email Icon"
          />
          <div>
            <p>Не намерихте това, което търсите?</p>
            <Nuxt-link to="/#contacts-container" class="svc-bullet-link">
              Свържете се с нас за решение
            </Nuxt-link>
          </div>
        </li>
      </ul>
    </section>

    <section
      id="call-to-action"
      class="svc-cta animate__animated"
      :class="elements[2].observed ? elements[2].animationClasses : 'opacity-0'"
    >
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="svc-cta-inner">
        <span class="kicker kicker-accent">Готови за следваща стъпка?</span>
        <h2 class="svc-cta-title">
          Искате да научите повече<br />за нашите услуги?
        </h2>
        <p class="svc-cta-text">
          Свържете се с нас днес и започнете да изграждате по-стабилно и успешно
          финансово бъдеще за вашия бизнес.
        </p>
        <div class="svc-cta-actions">
          <Button
            buttonText="Свържете се с нас"
            link="/#contacts-container"
            arrow
            large
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: "services",
});

const route = useRoute();
const serviceId = Array.isArray(route.params.service)
  ? route.params.service[0]
  : route.params.service;

const { data } = await useFetch(`/api/service`, {
  query: { id: serviceId, type: "service" },
});

const text = computed(() => data.value?.text || { hero: { title: "", description: "", image: { src: "", alt: "" } }, description: { title: "", text: "", bullets: [] } });
const seo = computed(() => data.value?.seo || {});

useSeoMeta({
  title: () => `${seo.value?.title || ''} — Актив Сандански`,
  ogTitle: () => `${seo.value?.title || ''} — Актив Сандански`,
  description: () => seo.value?.meta?.find((m) => m.name === 'description')?.content || '',
  ogDescription: () => seo.value?.meta?.find((m) => m.name === 'description')?.content || '',
  ogImage: () => text.value?.hero?.image?.src ? `https://aktiv.bg${text.value.hero.image.src}` : '',
  ogType: 'website',
  twitterCard: 'summary_large_image',
});

useHead({
  link: () => [
    {
      rel: 'canonical',
      href: seo.value?.link?.find((l) => l.rel === 'canonical')?.href || `https://aktiv.bg/Services/${serviceId}`,
    }
  ]
});

const elements = reactive([
  { id: "hero", observed: true, animationClasses: "animate__fadeIn" },
  { id: "description", observed: false, animationClasses: "animate__fadeIn" },
  {
    id: "call-to-action",
    observed: false,
    animationClasses: "animate__fadeIn",
  },
]);

let observer;

onMounted(() => {
  if (typeof IntersectionObserver === "undefined") {
    elements.forEach((el) => (el.observed = true));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = elements.find((el) => el.id === entry.target.id);
        if (element && !element.observed) {
          if (entry.isIntersecting) {
            element.observed = true;
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.05, rootMargin: "150px 0px" }
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

<style scoped>
.service-page {
  margin-top: 0;
  padding-top: 0;
  gap: 0;
  align-items: stretch;
}

/* =========================================================
   SHARED
   ========================================================= */
.kicker {
  font-family: var(--font-b);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--blue-2);
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.kicker::before {
  content: "";
  display: block;
  width: 24px;
  height: 1.5px;
  background: currentColor;
  flex: none;
}

.kicker-accent {
  color: var(--accent);
}

.section-head {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 32px;
}

.section-title {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(36px, 4.8vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.016em;
  color: var(--navy);
  margin: 20px 0 0;
  text-wrap: balance;
}

.section-lead {
  max-width: 640px;
  margin: 24px 0 0;
  font-size: 17px;
  line-height: 1.68;
  color: var(--slate);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-image: linear-gradient(var(--line-d2) 1px, transparent 1px),
    linear-gradient(90deg, var(--line-d2) 1px, transparent 1px);
  background-size: 88px 88px;
  -webkit-mask-image: radial-gradient(
    ellipse 90% 80% at 50% 20%,
    #000 14%,
    transparent 68%
  );
  mask-image: radial-gradient(
    ellipse 90% 80% at 50% 20%,
    #000 14%,
    transparent 68%
  );
}

/* =========================================================
   HERO
   ========================================================= */
.svc-hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(152deg, #09112e 0%, #06091a 58%);
}

.svc-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 60%, var(--ink) 100%);
}

.svc-hero-inner {
  position: relative;
  z-index: 3;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 168px 32px 110px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 72px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
}

.eyebrow-line {
  display: block;
  width: 28px;
  height: 1px;
  background: var(--accent);
  flex: none;
}

.svc-hero-title {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(40px, 5.4vw, 68px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 28px 0 0;
  color: #fff;
  text-wrap: balance;
}

.svc-hero-sub {
  max-width: 520px;
  margin: 26px 0 0;
  font-size: clamp(16px, 1.4vw, 18px);
  line-height: 1.72;
  color: var(--fog);
}

.svc-hero-cta {
  display: flex;
  gap: 14px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.svc-hero-media-inner {
  position: relative;
  border-radius: var(--r-lg);
  overflow: hidden;
  aspect-ratio: 4/5;
  border: 1px solid var(--line-d);
  box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 0.7);
}

.svc-hero-media-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* =========================================================
   DESCRIPTION
   ========================================================= */
.svc-detail {
  width: 100%;
  background: var(--paper);
  color: var(--navy);
  padding: 120px 0;
}

.svc-bullets {
  list-style: none;
  max-width: var(--maxw);
  margin: 60px auto 0;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.svc-bullet {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 26px;
  border-radius: var(--r);
  background: var(--paper);
  border: 1px solid var(--line-l);
  transition: box-shadow 0.28s, border-color 0.28s;
}

.svc-bullet:hover {
  box-shadow: 0 10px 36px -18px rgba(0, 24, 80, 0.18);
  border-color: rgba(26, 106, 255, 0.2);
}

.svc-bullet-icon {
  flex: none;
  width: 40px;
  height: 40px;
  opacity: 0.85;
}

.svc-bullet p {
  font-size: 15.5px;
  line-height: 1.55;
  color: var(--slate);
}

.svc-bullet-prompt {
  background: var(--paper-2);
}

.svc-bullet-prompt p {
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 4px;
}

.svc-bullet-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--blue-2);
  text-decoration: none;
}

.svc-bullet-link:hover {
  text-decoration: underline;
}

/* =========================================================
   CTA
   ========================================================= */
.svc-cta {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--ink-2);
  border-top: 1px solid var(--line-d2);
}

.svc-cta-inner {
  position: relative;
  z-index: 3;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 120px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.svc-cta .kicker {
  justify-content: center;
}

.svc-cta-title {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(32px, 4.2vw, 54px);
  line-height: 1.07;
  letter-spacing: -0.018em;
  color: #fff;
  margin: 22px 0 0;
  text-wrap: balance;
}

.svc-cta-text {
  max-width: 560px;
  margin: 22px 0 0;
  font-size: 17px;
  line-height: 1.72;
  color: var(--fog);
}

.svc-cta-actions {
  margin-top: 40px;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media screen and (max-width: 768px) {
  .svc-hero-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 104px 20px 48px;
  }

  .svc-hero-title {
    font-size: clamp(30px, 7vw, 42px);
    margin: 18px 0 0;
    line-height: 1.08;
  }

  .svc-hero-sub {
    margin: 18px 0 0;
    font-size: 15.5px;
    line-height: 1.6;
  }

  .svc-hero-cta {
    margin-top: 28px;
    gap: 12px;
  }

  .svc-hero-media {
    max-width: 380px;
    margin: 0 auto;
    width: 100%;
  }

  .svc-detail {
    padding: 64px 0;
  }

  .section-head,
  .svc-bullets {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section-title {
    font-size: clamp(28px, 6.5vw, 40px);
    margin: 16px 0 0;
  }

  .section-lead {
    margin: 16px 0 0;
    font-size: 15.5px;
  }

  .svc-bullets {
    grid-template-columns: 1fr;
    margin-top: 32px;
    gap: 14px;
  }

  .svc-bullet {
    padding: 16px 18px;
    gap: 14px;
  }

  .svc-bullet p {
    font-size: 14.5px;
  }

  .svc-cta-inner {
    padding: 64px 20px;
  }

  .svc-cta-title {
    font-size: clamp(26px, 6vw, 36px);
    margin: 16px 0 0;
  }

  .svc-cta-text {
    margin: 16px 0 0;
    font-size: 15.5px;
  }

  .svc-cta-actions {
    margin-top: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .svc-bullet,
  .svc-bullet-icon {
    transition: none;
  }
}
</style>
