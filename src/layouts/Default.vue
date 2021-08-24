<template>
  <div class="flex flex-col h-full">
    <nav class="nav bg-white shadow-sm">
      <div class="container my-3 md:my-5 mx-auto flex justify-between">
        <div class="logo">
          <g-link to="/" class="font-bold --no-highlight"> &lt;bibhutiPoudyal/&gt; </g-link>
        </div>
        <div class="hidden md:flex">
          <g-link class="nav__link mx-4" to="/blog">Blog</g-link>
          <g-link class="nav__link mx-4" to="/snip/">Snippets</g-link>
          <g-link class="nav__link mx-4" to="/about/">About Me</g-link>
        </div>
      </div>
    </nav>

    <div class="flex-grow">
      <slot />
    </div>

    <footer class="py-2 text-center bg-white text-black text-sm">
      Copyright © {{ year }} - Made with
      <span class="text-heart mx-1 mt-1">
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
    };
  },
};
</script>
