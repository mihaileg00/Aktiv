<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <NuxtImg
          src="/logo.svg"
          width="40px"
          height="40px"
          alt="Aktiv logo"
          class="brand-mark"
        />
        <div>
          <NuxtImg
            class="brand-word"
            width="115px"
            height="20px"
            src="/name.svg"
            alt="Aktiv"
          />
          <span class="brand-sub">Постигаме успеха заедно</span>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <h4>Услуги</h4>
          <Nuxt-link
            v-for="(route, index) in routes"
            :key="index"
            :to="`/Services/${route.id}`"
          >
            {{ route.name }}
          </Nuxt-link>
        </div>
        <div>
          <h4>Компания</h4>
          <Nuxt-link to="/About">За нас</Nuxt-link>
          <Nuxt-link to="/#contacts-container">Контакти</Nuxt-link>
        </div>
        <div>
          <h4>Контакт</h4>
          <a href="mailto:contact@aktiv.bg">contact@aktiv.bg</a>
          <a href="tel:+359885164849">(+359)88 516 4849</a>
          <span>Stanke Dimitrov 7, Sandanski</span>
        </div>
      </div>
    </div>
    <div class="footer-base">
      <span>© 2003–2026 АКТИВ ЕООД · Всички права запазени</span>
      <span class="footer-base-loc">Сандански, България</span>
      <div class="footer-legal">
        <a
          href="https://www.termsofservicegenerator.net/live.php?token=G7YQ7VXO8pyNpizDBMdTG2AvnycnYvSU"
          target="_blank"
        >
          Условия за ползване
        </a>
        <a
          href="https://www.termsfeed.com/live/d6d1ef3a-6a2d-447c-b22a-c9a3f73d6ef6"
          target="_blank"
        >
          Поверителност
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data } = await useFetch("/api/service", {
  query: {
    type: "nav",
  },
});

const routes = toRaw(data.value);
</script>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--fog);
  padding: 72px 0 32px;
  border-top: 1px solid var(--line-d2);
}

.footer-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 56px;
}

.footer-brand {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.brand-word {
  display: block;
  height: 20px;
}

.brand-sub {
  font-size: 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fog-2);
  display: block;
  margin-top: 6px;
}

.footer-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.footer-cols h4 {
  font-family: var(--font-b);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 18px;
  font-weight: 700;
}

.footer-cols a,
.footer-cols span {
  display: block;
  font-size: 14px;
  color: var(--fog-2);
  margin-bottom: 10px;
  transition: color 0.2s;
}

.footer-cols a:hover {
  color: #fff;
}

.footer-base {
  max-width: var(--maxw);
  margin: 48px auto 0;
  padding: 24px 32px 0;
  border-top: 1px solid var(--line-d2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 12.5px;
  color: var(--fog-2);
}

.footer-legal {
  display: flex;
  gap: 20px;
}

.footer-legal a {
  color: var(--fog-2);
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: #fff;
}

@media screen and (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 0 20px;
  }

  .footer-cols {
    grid-template-columns: 1fr 1fr;
  }

  .footer-base {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 24px 20px 0;
  }
}
</style>