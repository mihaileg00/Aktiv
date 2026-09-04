<template>
  <section id="contacts-container" class="contacts">
    <div class="section-head">
      <span class="kicker">Контакти</span>
      <h2 class="section-title">Свържете се<br />с нас</h2>
      <p class="section-lead">
        Имате въпрос или искате оферта? Пишете ни чрез формата или използвайте
        данните за контакт — ще се свържем с вас възможно най-скоро.
      </p>
    </div>

    <div class="contacts-grid">
      <aside class="contacts-aside">
        <ul class="contact-list">
          <li class="contact-item">
            <NuxtImg
              class="contact-ic"
              src="/icons/dark/Email.svg"
              width="48"
              height="48"
              alt=""
            />
            <div>
              <span class="contact-label">Имейл</span>
              <a class="contact-value" :href="`mailto:${companyInfo.email}`">{{
                companyInfo.email
              }}</a>
            </div>
          </li>
          <li class="contact-item">
            <NuxtImg
              class="contact-ic"
              src="/icons/dark/Phone.svg"
              width="48"
              height="48"
              alt=""
            />
            <div>
              <span class="contact-label">Телефон</span>
              <a class="contact-value" :href="`tel:${companyInfo.phone.href}`">{{
                companyInfo.phone.display
              }}</a>
            </div>
          </li>
          <li class="contact-item">
            <NuxtImg
              class="contact-ic"
              src="/icons/dark/Location.svg"
              width="48"
              height="48"
              alt=""
            />
            <div>
              <span class="contact-label">Адрес</span>
              <span class="contact-value"
                >{{ companyInfo.address.street }},<br />{{
                  companyInfo.address.postalCode
                }}
                {{ companyInfo.address.city }}</span
              >
            </div>
          </li>
          <li class="contact-item">
            <NuxtImg
              class="contact-ic"
              src="/icons/dark/Time.svg"
              width="48"
              height="48"
              alt=""
            />
            <div>
              <span class="contact-label">Работно време</span>
              <span class="contact-value"
                >{{ companyInfo.hours.label }}<br />{{
                  companyInfo.hours.value
                }}</span
              >
            </div>
          </li>
        </ul>

        <div class="map-card">
          <iframe
            loading="lazy"
            allowfullscreen
            sandbox="allow-scripts allow-same-origin allow-popups"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            title="Местоположение на Актив Сандански на картата"
            :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJGbYT6ngxqhQRUaFum_7dAkA&key=${mapsApiKey}`"
          />
        </div>
      </aside>

      <form class="contact-form" @submit.prevent="sendEmail">
        <!-- honeypot: hidden from users; bots that fill it are dropped -->
        <div class="hp" aria-hidden="true">
          <label
            >Не попълвайте това поле
            <input
              type="text"
              tabindex="-1"
              autocomplete="off"
              v-model="website"
            />
          </label>
        </div>

        <div class="field-row">
          <div class="field">
            <label for="name">Име <span class="req">*</span></label>
            <input
              id="name"
              type="text"
              autocomplete="name"
              placeholder="Иван Иванов"
              v-model.trim="name"
              :disabled="sending"
              required
            />
          </div>
          <div class="field">
            <label for="email">Имейл <span class="req">*</span></label>
            <input
              id="email"
              type="email"
              autocomplete="email"
              placeholder="ivan@example.com"
              v-model.trim="email"
              :disabled="sending"
              required
            />
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label for="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              autocomplete="tel"
              placeholder="088 888 8888"
              v-model.trim="phone"
              :disabled="sending"
            />
          </div>
          <div class="field">
            <label for="company">Компания</label>
            <input
              id="company"
              type="text"
              autocomplete="organization"
              placeholder="Фирма"
              v-model.trim="company"
              :disabled="sending"
            />
          </div>
        </div>

        <div class="field">
          <label for="message">Съобщение <span class="req">*</span></label>
          <textarea
            id="message"
            rows="5"
            placeholder="Как можем да помогнем?"
            v-model.trim="message"
            :disabled="sending"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="sending">
          <span>{{ sending ? "Изпращане…" : "Изпрати съобщение" }}</span>
          <svg
            v-if="!sending"
            width="13"
            height="13"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919"
              stroke="currentColor"
              stroke-width="1.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.19984 4.99999L0.799896 4.99999"
              stroke="currentColor"
              stroke-width="1.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <p
          class="form-status"
          :class="{
            'is-ok': status === 'success',
            'is-err': status === 'error',
          }"
          role="status"
          aria-live="polite"
        >
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
const companyInfo = useCompanyInfo();
const { mapsApiKey } = useRuntimeConfig().public;

const name = ref("");
const email = ref("");
const phone = ref("");
const company = ref("");
const message = ref("");
const website = ref(""); // honeypot

const sending = ref(false);
const status = ref(""); // "" | "success" | "error"

const statusMessage = computed(() => {
  if (status.value === "success")
    return "Благодарим ви! Съобщението е изпратено успешно — ще се свържем с вас възможно най-скоро.";
  if (status.value === "error")
    return "Възникна грешка при изпращането. Моля, опитайте отново или ни пишете директно на contact@aktiv.bg.";
  return "";
});

const sendEmail = async () => {
  if (sending.value) return;

  sending.value = true;
  status.value = "";

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        message: message.value,
        website: website.value, // honeypot
      }
    });

    status.value = "success";
    const { gtag } = useGtag();
    gtag("event", "form_submit");

    name.value = "";
    email.value = "";
    phone.value = "";
    company.value = "";
    message.value = "";
  } catch (error) {
    console.error("Error sending email: ", error);
    status.value = "error";
  } finally {
    sending.value = false;
  }
};
</script>

<style scoped>
.contacts {
  width: 100%;
  background: var(--paper-2);
  color: var(--navy);
  padding: 128px 0;
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
   GRID
   ========================================================= */
.contacts-grid {
  max-width: var(--maxw);
  margin: 60px auto 0;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 56px;
  align-items: start;
}

/* =========================================================
   ASIDE — contact details + map
   ========================================================= */
.contacts-aside {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-ic {
  width: 48px;
  height: 48px;
  flex: none;
}

.contact-label {
  display: block;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: var(--slate-2);
  margin-bottom: 3px;
}

.contact-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--navy);
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.2s;
}

a.contact-value:hover {
  color: var(--blue-2);
}

.map-card {
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--line-l);
  aspect-ratio: 4 / 3;
  background: var(--paper-3);
}

.map-card iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

/* =========================================================
   FORM
   ========================================================= */
.contact-form {
  background: var(--paper);
  border: 1px solid var(--line-l);
  border-radius: var(--r-lg);
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 16px 40px -28px rgba(0, 24, 80, 0.18);
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--navy);
}

.req {
  color: var(--blue-2);
}

.field input,
.field textarea {
  width: 100%;
  font-family: var(--font-b);
  font-size: 15px;
  color: var(--navy);
  background: var(--paper);
  border: 1px solid var(--line-l);
  border-radius: var(--r);
  padding: 13px 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.field textarea {
  resize: vertical;
  min-height: 120px;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--slate-2);
  opacity: 0.7;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(96, 144, 255, 0.18);
}

.field input:disabled,
.field textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.field input:user-invalid,
.field textarea:user-invalid {
  border-color: #e0566f;
}

.field input:user-invalid:focus,
.field textarea:user-invalid:focus {
  box-shadow: 0 0 0 3px rgba(224, 86, 111, 0.16);
}

.submit-btn {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-b);
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  background: var(--blue-2);
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 14px 28px;
  cursor: pointer;
  box-shadow: 0 4px 18px -6px rgba(0, 88, 224, 0.42);
  transition: background 0.2s, box-shadow 0.2s, opacity 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: var(--blue-deep);
  box-shadow: 0 6px 22px -6px rgba(0, 88, 224, 0.52);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: default;
}

.form-status {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.5;
}

.form-status.is-ok {
  color: #1c7d4d;
  font-weight: 600;
}

.form-status.is-err {
  color: #c0392b;
  font-weight: 600;
}

/* visually-hidden honeypot */
.hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media screen and (max-width: 768px) {
  .contacts {
    padding: 64px 0;
  }

  .section-head,
  .contacts-grid {
    padding-left: 20px;
    padding-right: 20px;
  }

  .contacts-grid {
    grid-template-columns: 1fr;
    margin-top: 32px;
    gap: 32px;
  }

  .field-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 24px 18px;
  }

  .submit-btn {
    align-self: stretch;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-value,
  .field input,
  .field textarea,
  .submit-btn {
    transition: none;
  }
}
</style>
