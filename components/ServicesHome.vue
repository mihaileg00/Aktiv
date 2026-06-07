<template>
  <section id="serviceContainer" class="services">
    <div class="section-head">
      <span class="kicker">Услуги</span>
      <h2 class="section-title">Създадени за<br />вашето спокойствие</h2>
      <p class="section-lead">
        Широк спектър от счетоводни, данъчни и консултантски услуги — гъвкави
        решения, съобразени с нуждите на вашия бизнес.
      </p>
    </div>

    <div class="bento">
      <article
        v-for="(service, index) in services"
        :key="service.id"
        class="card"
      >
        <NuxtImg
          class="card-icon"
          width="48"
          height="48"
          :src="`/icons/light/${service.summary.iconName}.svg`"
          :alt="`${service.summary.iconName} Icon`"
        />
        <div class="card-body">
          <span class="card-no">{{ String(index + 1).padStart(2, "0") }}</span>
          <h3>{{ service.summary.name }}</h3>
          <p>
            {{ service.summary.descriptionShort || service.summary.description }}
          </p>
        </div>
        <Nuxt-link
          v-if="service.summary.link"
          :to="`/Services/${service.id}`"
          class="card-link"
        >
          Научи повече
          <svg
            width="14"
            height="13"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8.14 2.35L13.54 7.5L8.14 12.65"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.54 7.5H3.04"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Nuxt-link>
        <span
          v-else
          @click="scrollToElement('contacts-container')"
          class="card-link card-link-prompt"
        >
          Попитайте тук
          <svg
            width="14"
            height="13"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8.14 2.35L13.54 7.5L8.14 12.65"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.54 7.5H3.04"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services {
  width: 100%;
  padding: 128px 0;
  background: var(--paper-2);
  color: var(--navy);
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
  max-width: 520px;
  margin: 24px 0 0;
  font-size: 17px;
  line-height: 1.68;
  color: var(--slate);
}

.bento {
  max-width: var(--maxw);
  margin: 68px auto 0;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  position: relative;
  padding: 44px 42px 38px;
  border-radius: var(--r-lg);
  background: var(--paper);
  border: 1px solid var(--line-l);
  display: flex;
  flex-direction: column;
  min-height: 285px;
  transition: box-shadow 0.28s, border-color 0.28s;
}

.card:hover {
  box-shadow: 0 10px 36px -18px rgba(0, 24, 80, 0.18);
  border-color: rgba(26, 106, 255, 0.2);
}

.card-icon {
  width: 48px;
  height: 48px;
  opacity: 0.8;
}

.card-body {
  margin-top: auto;
  padding-top: 32px;
}

.card-no {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--blue-2);
  letter-spacing: 0.14em;
}

.card h3 {
  font-family: var(--font-d);
  font-size: 26px;
  font-weight: 400;
  color: var(--navy);
  margin: 10px 0 12px;
  letter-spacing: -0.01em;
}

.card p {
  font-size: 15px;
  line-height: 1.62;
  color: var(--slate);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-2);
  text-decoration: none;
  cursor: pointer;
}

.card-link svg {
  transition: transform 0.28s;
}

.card:hover .card-link svg {
  transform: translateX(4px);
}

@media screen and (max-width: 768px) {
  .services {
    padding: 80px 0;
  }

  .section-head,
  .bento {
    padding-left: 20px;
    padding-right: 20px;
  }

  .bento {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
const scrollToElement = (elementID) => {
  const element = document.getElementById(elementID);
  if (!element) return;
  window.scrollTo({
    top: element.offsetTop - 80,
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
</script>
