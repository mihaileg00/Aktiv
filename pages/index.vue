<template>
  <main class="home">
    <section
      id="hero"
      class="hero animate__animated"
      :class="elements[0].observed ? elements[0].animationClasses : 'opacity-0'"
    >
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="eyebrow">
          <span class="eyebrow-line" aria-hidden="true"></span>
          СЧЕТОВОДНА КЪЩА · САНДАНСКИ · ОТ 2003
        </div>

        <h1 class="hero-title">
          <span class="line">Вашият бизнес расте.</span>
          <span class="line line-accent">Ние движим <em>числата.</em></span>
        </h1>

        <p class="hero-sub">
          Професионални услуги в областта на счетоводството, данъчното и
          осигурително законодателство — с над две десетилетия доверие.
        </p>

        <div class="hero-cta">
          <Button
            buttonText="Свържете се с нас"
            isScrollButton
            sectionId="contacts-container"
            arrow
            large
          />
          <Button
            buttonText="Вижте услугите"
            isScrollButton
            sectionId="serviceContainer"
            light
            large
          />
        </div>
      </div>
    </section>

    <section id="trust" class="trust-strip" aria-hidden="true">
      <div class="trust-inner">
        <span>Счетоводство</span><i></i>
        <span>Данъци</span><i></i>
        <span>ТРЗ и заплати</span><i></i>
        <span>Годишно приключване</span><i></i>
        <span>Данъчни консултации</span><i></i>
        <span>Осигуряване</span>
      </div>
    </section>

    <section
      id="statistics"
      class="stats animate__animated"
      :class="elements[1].observed ? elements[1].animationClasses : 'opacity-0'"
    >
      <div class="section-head">
        <span class="kicker">За нас</span>
        <h2 class="section-title">Числа, с които<br />се гордеем</h2>
        <p class="section-lead">
          Повече от две десетилетия като доверен партньор в счетоводството и
          финансите за бизнеси от всякакъв мащаб.
        </p>
      </div>
      <div class="stat-grid">
        <div class="stat">
          <span class="stat-bar" aria-hidden="true"></span>
          <div class="stat-num">+{{ numbers[0] }}</div>
          <h3>Години опит в бизнеса</h3>
          <p>
            Над две десетилетия доверие — натрупан опит във всеки сектор и всяка
            данъчна реформа.
          </p>
        </div>
        <div class="stat">
          <span class="stat-bar" aria-hidden="true"></span>
          <div class="stat-num">+{{ numbers[1] }}</div>
          <h3>Доволни клиенти</h3>
          <p>
            Над 100 фирми разчитат на нас за своето счетоводство, данъци и
            спокойствие.
          </p>
        </div>
        <div class="stat">
          <span class="stat-bar" aria-hidden="true"></span>
          <div class="stat-num">{{ numbers[2] }}%</div>
          <h3>Ангажираност</h3>
          <p>
            Решаването на вашите проблеми е наша първа и най-важна грижа —
            винаги.
          </p>
        </div>
      </div>
    </section>

    <ServicesHome
      class="animate__animated"
      :class="elements[2].observed ? elements[2].animationClasses : 'opacity-0'"
    />

    <section
      id="why"
      class="why-section animate__animated"
      :class="elements[3].observed ? elements[3].animationClasses : 'opacity-0'"
    >
      <div class="why">
        <div class="why-media">
          <div class="why-media-inner">
            <NuxtImg
              src="/photos/large/photo2.webp"
              width="640"
              height="800"
              loading="lazy"
              alt="Екипът на АКТИВ"
            />
          </div>
          <div class="why-badge">
            <NuxtImg src="/logo.svg" width="36" height="36" alt="" />
            <div>
              <b>Доверен партньор</b><span>от 2003 г.</span>
            </div>
          </div>
        </div>
        <div class="why-content">
          <span class="kicker">Защо АКТИВ</span>
          <h2 class="section-title">Партньор, а не<br />просто счетоводител</h2>
          <p class="why-text">
            „АКТИВ" е счетоводна къща, утвърдена в бранша, която предоставя
            професионални услуги, насочени към подобряване на финансовата
            структура и ефективност на вашата дейност.
          </p>
          <ul class="why-list">
            <li>
              <span class="tick" aria-hidden="true"></span>
              <div>
                <b>Модерни решения</b>Ефикасни счетоводни процеси, съобразени със
                специфичните нужди на всеки клиент.
              </div>
            </li>
            <li>
              <span class="tick" aria-hidden="true"></span>
              <div>
                <b>Пълно съответствие</b>Гарантираме съответствие със законовите
                изисквания при всяка операция.
              </div>
            </li>
            <li>
              <span class="tick" aria-hidden="true"></span>
              <div>
                <b>Вашето спокойствие</b>Поемаме всички данъчни и счетоводни
                задачи, за да растете без притеснения.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <Contacts
      class="animate__animated"
      :class="elements[4].observed ? elements[4].animationClasses : 'opacity-0'"
    />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Счетоводни услуги — Актив Сандански",
  ogTitle: "Счетоводни услуги — Актив Сандански",
  description: "Актив Сандански предлага професионални счетоводни услуги за бизнеси от всички сфери. Счетоводство, данъци, одит, ТРЗ, заплати и други услуги.",
  ogDescription: "Актив Сандански предлага професионални счетоводни услуги за бизнеси от всички сфери. Счетоводство, данъци, одит, ТРЗ, заплати и други услуги.",
  ogImage: "https://aktiv.bg/photos/large/photo2.webp",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://aktiv.bg",
    },
  ],
});

const numbersMax = [21, 100, 100];
const numbers = ref([...numbersMax]);

const elements = reactive([
  // Hero is above the fold: start revealed so it paints on first load
  { id: "hero", observed: true, animationClasses: "animate__fadeIn" },
  { id: "statistics", observed: false, animationClasses: "animate__fadeIn" },
  {
    id: "serviceContainer",
    observed: false,
    animationClasses: "animate__fadeIn",
  },
  { id: "why", observed: false, animationClasses: "animate__fadeIn" },
  {
    id: "contacts-container",
    observed: false,
    animationClasses: "animate__fadeInUp",
  },
]);

let observer;

onMounted(() => {
  if (typeof IntersectionObserver === "undefined") {
    elements.forEach((el) => (el.observed = true));
    return;
  }

  // Reset to 0 for client-side count animation
  numbers.value = [0, 0, 0];

  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = elements.find((el) => el.id === entry.target.id);
        if (element && !element.observed) {
          if (entry.isIntersecting) {
            element.observed = true;
            observer.unobserve(entry.target);
            if (entry.target.id === "statistics") {
              if (reducedMotion) {
                numbers.value = [...numbersMax];
                return;
              }
              let i = 0;
              const interval = setInterval(() => {
                if (i < 100) {
                  i++;
                  numbers.value = numbersMax.map((max) =>
                    Math.round((i / 100) * max)
                  );
                } else {
                  clearInterval(interval);
                }
              }, 15);
            }
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
.home {
  margin-top: 0;
  padding-top: 0;
  gap: 0;
  align-items: stretch;
}

/* =========================================================
   HERO
   ========================================================= */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(152deg, #09112e 0%, #06091a 58%);
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

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 52%, var(--ink) 100%);
}

.hero-inner {
  position: relative;
  z-index: 3;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 160px 32px 90px;
  width: 100%;
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

.hero-title {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(46px, 6.8vw, 92px);
  line-height: 1.03;
  letter-spacing: -0.02em;
  margin: 34px 0 0;
  color: #fff;
}

.hero-title .line {
  display: block;
}

.hero-title .line-accent {
  display: block;
  color: rgba(255, 255, 255, 0.62);
  font-style: italic;
}

.hero-title .line-accent em {
  font-style: italic;
  color: #fff;
  font-variation-settings: "ital" 1;
}

.hero-sub {
  max-width: 520px;
  margin: 32px 0 0;
  font-size: clamp(16px, 1.4vw, 18.5px);
  line-height: 1.72;
  color: var(--fog);
}

.hero-cta {
  display: flex;
  gap: 14px;
  margin-top: 44px;
  flex-wrap: wrap;
}

/* =========================================================
   TRUST STRIP
   ========================================================= */
.trust-strip {
  width: 100%;
  background: var(--ink);
  border-top: 1px solid var(--line-d2);
  border-bottom: 1px solid var(--line-d2);
}

.trust-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
}

.trust-inner span {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fog-2);
  padding: 4px 22px;
}

.trust-inner i {
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--line-d);
  flex: none;
}

/* =========================================================
   SHARED LIGHT-BODY STYLES
   ========================================================= */
.stats,
.why-section {
  width: 100%;
  background: var(--paper);
  color: var(--navy);
}

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

/* =========================================================
   STATS
   ========================================================= */
.stats {
  padding: 128px 0;
}

.stat-grid {
  max-width: var(--maxw);
  margin: 68px auto 0;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--line-l);
  border-radius: var(--r-lg);
  overflow: hidden;
  background: var(--line-l);
  gap: 1px;
}

.stat {
  padding: 48px 44px;
  background: var(--paper);
  position: relative;
}

.stat-bar {
  display: block;
  width: 36px;
  height: 2px;
  background: var(--blue-2);
  margin-bottom: 36px;
}

.stat-num {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(52px, 5.4vw, 72px);
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--navy);
}

.stat h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--navy);
  margin: 20px 0 10px;
}

.stat p {
  font-size: 14.5px;
  line-height: 1.62;
  color: var(--slate);
}

/* =========================================================
   WHY / ABOUT
   ========================================================= */
.why-section {
  padding: 0;
}

.why {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 128px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 88px;
  align-items: center;
}

.why-media {
  position: relative;
}

.why-media-inner {
  border-radius: var(--r-lg);
  overflow: hidden;
  aspect-ratio: 4/5;
  border: 1px solid var(--line-l);
}

.why-media-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.why-badge {
  position: absolute;
  right: -22px;
  bottom: 40px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-radius: var(--r);
  background: var(--paper);
  border: 1px solid var(--line-l);
  box-shadow: 0 16px 40px -20px rgba(0, 24, 80, 0.16);
}

.why-badge img {
  width: 36px;
  height: 36px;
}

.why-badge b {
  display: block;
  font-size: 15px;
  color: var(--navy);
  font-weight: 700;
}

.why-badge span {
  font-size: 12.5px;
  color: var(--slate-2);
}

.why-content .section-title {
  margin-top: 16px;
}

.why-text {
  font-size: 18px;
  line-height: 1.74;
  color: var(--slate);
  margin: 26px 0 0;
}

.why-list {
  list-style: none;
  margin: 36px 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.why-list li {
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

.why-list .tick {
  flex: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--blue-2);
  position: relative;
  margin-top: 3px;
}

.why-list .tick::after {
  content: "";
  position: absolute;
  left: 8px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(42deg);
}

.why-list b {
  display: block;
  font-size: 16px;
  color: var(--navy);
  font-weight: 700;
  margin-bottom: 4px;
}

.why-list div {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--slate);
}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media screen and (max-width: 768px) {
  .hero {
    min-height: auto;
  }

  .hero-inner {
    padding: 104px 20px 48px;
  }

  .hero-title {
    font-size: clamp(32px, 7.5vw, 44px);
    margin: 20px 0 0;
    line-height: 1.08;
  }

  .hero-sub {
    margin: 18px 0 0;
    font-size: 15.5px;
    line-height: 1.6;
  }

  .hero-cta {
    margin-top: 28px;
    gap: 12px;
  }

  .trust-inner {
    padding: 16px 20px;
    gap: 8px 14px;
  }

  .trust-inner i {
    display: none;
  }

  .trust-inner span {
    padding: 4px 8px;
    font-size: 11px;
    letter-spacing: 0.1em;
  }

  .section-head {
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

  .stats {
    padding: 64px 0;
  }

  .stat-grid {
    grid-template-columns: 1fr;
    margin-top: 36px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .stat {
    padding: 28px 20px;
  }

  .stat-bar {
    margin-bottom: 20px;
  }

  .stat-num {
    font-size: clamp(40px, 8vw, 56px);
  }

  .stat h3 {
    margin: 14px 0 8px;
  }

  .why {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 64px 20px;
  }

  .why-media {
    max-width: 380px;
    margin: 0 auto;
    width: 100%;
  }

  .why-badge {
    right: 12px;
    bottom: 16px;
    padding: 12px 16px;
    gap: 10px;
  }

  .why-badge img {
    width: 28px;
    height: 28px;
  }

  .why-badge b {
    font-size: 13.5px;
  }

  .why-badge span {
    font-size: 11.5px;
  }

  .why-text {
    font-size: 16px;
    line-height: 1.65;
    margin: 18px 0 0;
  }

  .why-list {
    margin: 24px 0 0;
    gap: 18px;
  }
}
</style>
