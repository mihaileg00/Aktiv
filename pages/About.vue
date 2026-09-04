<template>
  <main class="about-page">
    <section
      id="hero"
      class="about-hero animate__animated"
      :class="elements[0].observed ? elements[0].animationClasses : 'opacity-0'"
    >
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="about-hero-inner">
        <div class="eyebrow">
          <span class="eyebrow-line" aria-hidden="true"></span>
          За нас · Счетоводна къща · От 2003
        </div>
        <h1 class="about-hero-title">
          Ваш мост<br /><span class="line-accent">към <em>успеха.</em></span>
        </h1>
        <p class="about-hero-sub">
          „АКТИВ" е счетоводна къща, утвърдена в бранша, която предоставя
          професионални услуги, насочени към подобряване на финансовата
          структура и ефективност на вашата дейност — с над две десетилетия
          доверие.
        </p>
        <div class="about-chips">
          <div class="chip"><b>+21</b><span>години опит</span></div>
          <div class="chip"><b>+100</b><span>доволни клиенти</span></div>
          <div class="chip"><b>100%</b><span>ангажираност</span></div>
        </div>
      </div>
    </section>

    <section
      id="intro"
      class="about-intro animate__animated"
      :class="elements[1].observed ? elements[1].animationClasses : 'opacity-0'"
    >
      <div class="about-intro-inner">
        <div class="about-media">
          <div class="about-media-inner">
            <NuxtImg
              src="/photos/large/photo8.webp"
              width="640"
              height="800"
              fit="cover"
              loading="lazy"
              alt="Екипът на АКТИВ"
            />
          </div>
          <div class="about-badge">
            <NuxtImg src="/logo.svg" width="36" height="36" alt="" />
            <div>
              <b>Доверен партньор</b><span>от 2003 г.</span>
            </div>
          </div>
        </div>
        <div class="about-content">
          <span class="kicker">За нас</span>
          <h2 class="section-title">Надежден счетоводен партньор</h2>
          <p class="about-text">
            „АКТИВ" предоставя професионални услуги, насочени към подобряване на
            финансовата структура и ефективност на вашата дейност. Нашата цел е
            да предложим модерни и ефикасни счетоводни решения, които отговарят
            на специфичните нужди на всеки клиент, като същевременно гарантираме
            съответствие със законовите изисквания.
          </p>
        </div>
      </div>
    </section>

    <section
      id="values"
      class="about-values animate__animated"
      :class="elements[2].observed ? elements[2].animationClasses : 'opacity-0'"
    >
      <div class="section-head">
        <span class="kicker">Нашият подход</span>
        <h2 class="section-title">Мисия, ценности<br />и обещание</h2>
        <p class="section-lead">
          Избирайки „АКТИВ", вие получавате повече от счетоводни услуги — вие
          намирате партньор, готов да поеме всички ваши данъчни и счетоводни
          задачи.
        </p>
      </div>

      <div class="values-grid">
        <article class="value-card">
          <span class="value-bar" aria-hidden="true"></span>
          <h3>Мисия</h3>
          <p>
            Успехът ви е наш приоритет. Нашата мисия е да подкрепяме вашата
            дейност с качествени счетоводни услуги, осигуряващи спокойствие и
            стабилност.
          </p>
        </article>
        <article class="value-card">
          <span class="value-bar" aria-hidden="true"></span>
          <h3>Защо нас?</h3>
          <p>
            Доверете ни се за успеха на вашата фирма. Вашето спокойствие и фокус
            върху растежа са наша главна цел — поемаме всички данъчни и
            счетоводни задачи.
          </p>
        </article>
        <article class="value-card">
          <span class="value-bar" aria-hidden="true"></span>
          <h3>Нашето обещание</h3>
          <p>
            „Постигаме успеха заедно" — нашето обещание за съвместна работа към
            вашите цели, с пълно съответствие със законовите изисквания.
          </p>
        </article>
      </div>
    </section>

    <section
      id="call-to-action"
      class="about-cta animate__animated"
      :class="elements[3].observed ? elements[3].animationClasses : 'opacity-0'"
    >
      <div class="grid-overlay" aria-hidden="true"></div>
      <div class="about-cta-inner">
        <span class="kicker kicker-accent">Готови ли сте да започнете?</span>
        <h2 class="about-cta-title">
          Свържете се с нас днес и създайте<br />по-стабилно финансово бъдеще
        </h2>
        <div class="about-cta-actions">
          <Button
            buttonText="Свържете се с нас"
            link="/#contacts-container"
            light
            arrow
            large
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "За нас — Актив Сандански",
  ogTitle: "За нас — Актив Сандански",
  description: "Научете повече за Актив ООД, водеща счетоводна къща в Сандански, предлагаща професионални счетоводни, данъчни и осигурителни услуги. Открийте как нашата мисия и опит допринасят за успеха на вашия бизнес.",
  ogDescription: "Научете повече за Актив ООД с над две десетилетия опит в счетоводството, данъчното и осигурително законодателство.",
  ogImage: "https://aktiv.bg/photos/large/photo8.webp",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://aktiv.bg/About",
    },
  ],
});

const elements = reactive([
  { id: "hero", observed: true, animationClasses: "animate__fadeIn" },
  { id: "intro", observed: false, animationClasses: "animate__fadeIn" },
  { id: "values", observed: false, animationClasses: "animate__fadeIn" },
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
.about-page {
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
  max-width: 560px;
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
.about-hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(152deg, #09112e 0%, #06091a 58%);
}

.about-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 56%, var(--ink) 100%);
}

.about-hero-inner {
  position: relative;
  z-index: 3;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 172px 32px 110px;
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

.about-hero-title {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(46px, 6.4vw, 86px);
  line-height: 1.03;
  letter-spacing: -0.02em;
  margin: 30px 0 0;
  color: #fff;
}

.about-hero-title .line-accent {
  color: rgba(255, 255, 255, 0.62);
  font-style: italic;
}

.about-hero-title .line-accent em {
  font-style: italic;
  color: #fff;
  font-variation-settings: "ital" 1;
}

.about-hero-sub {
  max-width: 560px;
  margin: 30px 0 0;
  font-size: clamp(16px, 1.4vw, 18px);
  line-height: 1.72;
  color: var(--fog);
}

.about-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid var(--line-d);
}

.chip {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-right: 48px;
  margin-right: 48px;
  border-right: 1px solid var(--line-d);
}

.chip:last-child {
  border-right: 0;
  margin-right: 0;
  padding-right: 0;
}

.chip b {
  font-family: var(--font-d);
  font-size: 38px;
  font-weight: 400;
  color: #fff;
  line-height: 1;
}

.chip span {
  font-size: 12.5px;
  color: var(--fog-2);
  letter-spacing: 0.04em;
}

/* =========================================================
   INTRO (photo + content)
   ========================================================= */
.about-intro {
  width: 100%;
  background: var(--paper);
  color: var(--navy);
}

.about-intro-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 128px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 88px;
  align-items: center;
}

.about-media {
  position: relative;
}

.about-media-inner {
  border-radius: var(--r-lg);
  overflow: hidden;
  aspect-ratio: 4/5;
  border: 1px solid var(--line-l);
}

.about-media-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-badge {
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

.about-badge img {
  width: 36px;
  height: 36px;
}

.about-badge b {
  display: block;
  font-size: 15px;
  color: var(--navy);
  font-weight: 700;
}

.about-badge span {
  font-size: 12.5px;
  color: var(--slate-2);
}

.about-content .section-title {
  margin-top: 16px;
}

.about-text {
  font-size: 18px;
  line-height: 1.74;
  color: var(--slate);
  margin: 26px 0 0;
}

/* =========================================================
   VALUES
   ========================================================= */
.about-values {
  width: 100%;
  background: var(--paper-2);
  color: var(--navy);
  padding: 128px 0;
}

.values-grid {
  max-width: var(--maxw);
  margin: 60px auto 0;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.value-card {
  padding: 44px 40px;
  border-radius: var(--r-lg);
  background: var(--paper);
  border: 1px solid var(--line-l);
  transition: box-shadow 0.28s, border-color 0.28s;
}

.value-card:hover {
  box-shadow: 0 10px 36px -18px rgba(0, 24, 80, 0.18);
  border-color: rgba(26, 106, 255, 0.2);
}

.value-bar {
  display: block;
  width: 36px;
  height: 2px;
  background: var(--blue-2);
  margin-bottom: 32px;
}

.value-card h3 {
  font-family: var(--font-d);
  font-size: 26px;
  font-weight: 400;
  color: var(--navy);
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}

.value-card p {
  font-size: 15px;
  line-height: 1.62;
  color: var(--slate);
}

/* =========================================================
   CTA
   ========================================================= */
.about-cta {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--ink-2);
  border-top: 1px solid var(--line-d2);
}

.about-cta-inner {
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

.about-cta .kicker {
  justify-content: center;
}

.about-cta-title {
  font-family: var(--font-d);
  font-weight: 400;
  font-size: clamp(32px, 4.2vw, 54px);
  line-height: 1.07;
  letter-spacing: -0.018em;
  color: #fff;
  margin: 22px 0 0;
  text-wrap: balance;
}

.about-cta-actions {
  margin-top: 40px;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media screen and (max-width: 768px) {
  .about-hero-inner {
    padding: 104px 20px 48px;
  }

  .about-hero-title {
    font-size: clamp(32px, 7.5vw, 44px);
    margin: 20px 0 0;
    line-height: 1.08;
  }

  .about-hero-sub {
    margin: 18px 0 0;
    font-size: 15.5px;
    line-height: 1.6;
  }

  .about-chips {
    margin-top: 36px;
    padding-top: 24px;
    flex-direction: column;
  }

  .chip {
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
    padding-right: 0;
    margin-right: 0;
    border-right: 0;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--line-d);
  }

  .chip:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .chip b {
    font-size: 28px;
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

  .about-intro-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 60px 20px;
  }

  .about-media {
    max-width: 380px;
    margin: 0 auto;
    width: 100%;
  }

  .about-badge {
    right: 12px;
    bottom: 16px;
    padding: 12px 16px;
    gap: 10px;
  }

  .about-badge img {
    width: 28px;
    height: 28px;
  }

  .about-badge b {
    font-size: 13.5px;
  }

  .about-badge span {
    font-size: 11.5px;
  }

  .about-text {
    font-size: 16px;
    line-height: 1.65;
    margin: 18px 0 0;
  }

  .about-values {
    padding: 64px 0;
  }

  .values-grid {
    grid-template-columns: 1fr;
    margin-top: 36px;
    padding-left: 20px;
    padding-right: 20px;
    gap: 16px;
  }

  .value-card {
    padding: 28px 20px;
  }

  .about-cta-inner {
    padding: 64px 20px;
  }

  .about-cta-title {
    font-size: clamp(26px, 6vw, 36px);
    margin: 16px 0 0;
  }

  .about-cta-actions {
    margin-top: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .value-card {
    transition: none;
  }
}
</style>
