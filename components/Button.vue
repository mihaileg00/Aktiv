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