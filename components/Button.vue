<template>
  <button
    v-if="isScrollButton"
    @click="scrollToSection"
    class="btn"
    :class="[
      light ? 'btn-ghost' : 'btn-primary',
      small ? 'btn-sm' : large ? 'btn-lg' : '',
    ]"
  >
    <p>{{ buttonText }}</p>
    <svg
      v-if="arrow"
      width="13"
      height="13"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
  <Nuxt-link
    v-else
    :to="link"
    class="btn"
    :class="[
      light ? 'btn-ghost' : 'btn-primary',
      small ? 'btn-sm' : large ? 'btn-lg' : '',
    ]"
  >
    <p>{{ buttonText }}</p>
    <svg
      v-if="arrow"
      width="13"
      height="13"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

  <style scoped>
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-b);
  font-weight: 600;
  font-size: 15px;
  padding: 13px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s, border-color 0.2s, color 0.2s;
}

.btn-lg {
  padding: 15px 30px;
  font-size: 16px;
}

.btn-sm {
  padding: 9px 16px;
  font-size: 13px;
  gap: 6px;
}

.btn-primary {
  color: #fff;
  background: var(--blue-2);
  box-shadow: 0 4px 18px -6px rgba(0, 88, 224, 0.42);
}

.btn-primary:hover {
  background: var(--blue-deep);
  box-shadow: 0 6px 22px -6px rgba(0, 88, 224, 0.52);
}

.btn-ghost {
  color: var(--fog);
  border-color: var(--line-d);
  background: rgba(255, 255, 255, 0.03);
}

.btn-ghost:hover {
  color: #fff;
  border-color: rgba(96, 144, 255, 0.4);
}
</style>