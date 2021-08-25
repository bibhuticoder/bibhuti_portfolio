<template>
  <div>
    <nav class="nav t-fixed t-w-full t-bg-white t-shadow-sm t-z-50">
      <div class="t-container t-my-4 t-mx-auto t-flex t-justify-between">
        <div class="logo t-text-lg">
          <g-link to="/" class="t-font-bold --no-highlight">
            &lt;bibhutiPoudyal/&gt;
          </g-link>
        </div>
        <div class="t-hidden md:t-flex">
          <g-link
            v-for="navLink in navLinks"
            :key="navLink.path"
            class="nav__link t-mx-4"
            :to="navLink.path"
            >{{ navLink.name }}</g-link
          >
        </div>
        <span
          class="t-text-black t-cursor-pointer md:t-hidden"
          @click="toggleNav()"
        >
          <font-awesome-icon v-if="sidenav" :icon="['fas', 'times']" />
          <font-awesome-icon v-else :icon="['fas', 'bars']" />
        </span>
      </div>
    </nav>

    <nav
      class="sidenav t-flex t-flex-col"
      :class="{ '--hidden': !sidenav }"
      @click="toggleNav"
    >
      <div class="t-flex t-flex-col t-flex-grow">
        <h2
          class="t-my-4 t-text-center"
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
        </h2>
      </div>
    </nav>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "NavBar",
  components: { Footer },
  data() {
    return {
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
  position: fixed;
  top: 48px;
  left: 0;
  background-color: white;
  width: 100%;
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
  position: fixed;
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