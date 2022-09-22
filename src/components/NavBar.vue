<template>
  <div>
    <nav class="nav fixed w-full bg-white shadow-sm z-50">
      <div class="container my-4 mx-auto flex justify-between">
        <div class="logo text-lg">
          <g-link to="/" class="font-bold --no-highlight select-none">
            &lt;bibhutiPoudyal/&gt;
          </g-link>
        </div>
        <div class="hidden md:flex">
          <g-link
            v-for="navLink in navLinks"
            :key="navLink.path"
            class="nav__link mx-4 select-none"
            :to="navLink.path"
            >{{ navLink.name }}</g-link
          >
        </div>
        <span
          class="text-black cursor-pointer md:hidden"
          @click="toggleNav()"
        >
          <font-awesome-icon v-if="sidenav" :icon="['fas', 'times']" />
          <font-awesome-icon v-else :icon="['fas', 'bars']" />
        </span>
      </div>
    </nav>

    <nav
      class="sidenav flex flex-col"
      :class="{ '--hidden': !sidenav }"
      @click="toggleNav"
    >
      <div class="flex flex-col flex-grow mt-48">
        <h2
          class="mb-8 text-center"
          v-for="navLink in navLinks"
          :key="navLink.path"
          @click="toggleNav"
        >
          <g-link
            :to="navLink.path"
            class="inline-block"
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
  top: 60px;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100vh;
  @apply shadow;
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