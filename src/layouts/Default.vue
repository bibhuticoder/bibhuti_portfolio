<template>
  <div class="t-flex t-flex-col t-t-h-full">
    <nav class="nav t-bg-white t-shadow-sm">
      <div
        class="t-container t-my-3 md:t-my-5 t-mx-auto t-flex t-justify-between"
      >
        <div class="logo">
          <g-link to="/" class="font-bold --no-highlight">
            &lt;bibhutiPoudyal/&gt;
          </g-link>
        </div>
        <div class="t-hidden md:t-flex">
          <g-link class="nav__link t-mx-4" to="/blog">Blog</g-link>
          <g-link class="nav__link t-mx-4" to="/snip/">Snippets</g-link>
          <g-link class="nav__link t-mx-4" to="/about/">About Me</g-link>
        </div>
        <span
          class="t-text-black t-cursor-pointer md:t-hidden"
          @click="toggleNav()"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </span>
      </div>
    </nav>

    <nav class="sidenav" :class="{ '--hidden': !sidenav }">
      <ul class="t-mt-4 t-pl-4">
        <li
          class="t-text-lg t-my-4"
          v-for="navLink in navLinks"
          :key="navLink.path"
          @click="toggleNav"
        >
          <g-link
            :to="navLink.path"
            class="t-inline-block"
            @click="toggleNav"
            >{{ navLink.name }}</g-link
          >
        </li>
      </ul>
    </nav>
    <div class="sidenav-overlay" :class="{ '--hidden': !sidenav }" @click="toggleNav"></div>

    <div class="t-flex-grow">
      <slot />
    </div>

    <footer class="t-py-2 t-text-center t-bg-white t-text-black t-text-sm">
      Copyright © {{ year }} - Made with
      <span class="t-text-heart t-mx-1 t-mt-1">
        <font-awesome-icon :icon="['fas', 'heart']"
      /></span>
      by Bibhuti Poudyal
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      sidenav: false,
      navLinks: [
        { name: "Blog", path: "/blog" },
        { name: "Snippets", path: "/snip" },
        { name: "About Me", path: "/about" },
      ],
    };
  },

  methods: {
    toggleNav() {
      this.sidenav = !this.sidenav;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  position: absolute;
  top: 48px;
  left: 0;
  background-color: white;
  width: 75%;
  height: 100vh;
  @apply t-shadow;
  transition: all 0.25s ease-in-out;
  z-index: 1000;

  &.--hidden {
    transform: translateX(-100%);
  }
}
.sidenav-overlay {
  background-color: black;
  opacity: 0.5;
  position: absolute;
  top: 48px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  opacity: 0.2;
  transition: all 0.05s ease-in-out;

  &.--hidden {
    opacity: 0;
    display: none;
  }
}
</style>