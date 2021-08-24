<template>
  <div class="t-flex t-flex-col t-t-h-full">
    <nav class="nav t-bg-white t-shadow-sm">
      <div class="t-container t-my-3 md:t-my-5 t-mx-auto t-flex t-justify-between">
        <div class="logo">
          <g-link to="/" class="font-bold --no-highlight"> &lt;bibhutiPoudyal/&gt; </g-link>
        </div>
        <div class="t-hidden md:t-flex">
          <g-link class="nav__link t-mx-4" to="/blog">Blog</g-link>
          <g-link class="nav__link t-mx-4" to="/snip/">Snippets</g-link>
          <g-link class="nav__link t-mx-4" to="/about/">About Me</g-link>
        </div>
      </div>
    </nav>

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
    };
  },
};
</script>
