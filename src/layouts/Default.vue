<template>
  <div class="flex flex-col h-screen">
    <NavBar v-if="showNavbar" />

    <!-- conttnt -->
    <div class="flex-grow pb-12">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: { NavBar, Footer },
  props: {
    showNavbar: {
      default: true,
    },
  },
};
</script>

