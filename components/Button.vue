<template>
  <div
    v-if="isScrollButton"
    @click="scrollToSection"
    class="button"
    :class="[
      light ? 'button-light color-primary' : 'button-dark color-light',
      small ? 'button-small' : large ? 'button-large' : 'button-default',
    ]"
  >
    <p>{{ buttonText }}</p>
    <svg
      v-if="arrow"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919"
        stroke="white"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.19984 4.99999L0.799896 4.99999"
        stroke="white"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <Nuxt-link
    v-else
    :to="link"
    class="button"
    :class="[
      light ? 'button-light color-primary' : 'button-dark color-light',
      small ? 'button-small' : large ? 'button-large' : 'button-default',
    ]"
  >
    <p>{{ buttonText }}</p>
    <svg
      v-if="arrow"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919"
        stroke="white"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.19984 4.99999L0.799896 4.99999"
        stroke="white"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      /></svg
  ></Nuxt-link>
</template>
  
  <script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    isScrollButton: {
      type: Boolean,
      default: false,
    },
    sectionId: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    light: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToSection() {
      const section = document.getElementById(this.sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 110,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
  
  <style scoped>
.button {
  position: relative;
  text-decoration: none;
  cursor: pointer;
}

.button p,
.button svg {
  position: relative; /* Ensure the text is in front */
  z-index: 2;
}

.button-small {
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18/12;
  font-weight: 600;
}

.button-default {
  box-shadow: 0px 1px 4px var(--shadow);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20/16;
  font-weight: 600;
}

.button-large {
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 600;
}

.button-dark {
  background: linear-gradient(
    135deg,
    var(--secondary-color),
    var(--secondary-color)
  );
  color: var(--main-bg-color);
  border: 1px solid
    linear-gradient(135deg, var(--secondary-color), var(--secondary-color));
  box-shadow: 0px 1px 4px var(--shadow);
  transition: all 0.2s ease-in-out;
}

.button-dark::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid linear-gradient(135deg, #00f2ff, #0063ff);
  background: linear-gradient(135deg, #00f2ff, #0063ff);
  z-index: 1;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  opacity: 0%;
}

.button-dark path {
  stroke: var(--main-bg-color);
}

.button-dark:hover {
  color: var(--main-bg-color);
  border: 1px solid linear-gradient(135deg, #00f2ff, #0063ff);
  box-shadow: 0px 1px 4px var(--shadow);
}

.button-dark:hover::before {
  opacity: 100%;
}

.button-light {
  background-color: var(--neutral-200);
  color: var(--secondary-color);
  border: 1px solid var(--neutral-400);
  box-shadow: 0px 1px 4px var(--shadow);
}

.button-light path {
  stroke: var(--secondary-color);
}
</style>