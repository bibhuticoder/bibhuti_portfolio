<template>
  <div class="t-flex t-flex-col t-h-screen">
    <NavBar />

    <!-- conttnt -->
    <div class="t-flex-grow t-pb-12">
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
};
</script>

