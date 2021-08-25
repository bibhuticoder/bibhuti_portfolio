<template>
  <div class="t-flex t-flex-col t-t-h-full">
    <NavBar />

    <!-- conttnt -->
    <div class="t-flex-grow">
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

