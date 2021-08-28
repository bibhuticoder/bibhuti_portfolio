<template>
  <footer class="t-pb-2 t-pt-2 t-text-center t-text-black t-text-sm">
    Copyright © {{ new Date().getFullYear() }} - Made with
    <span class="t-text-heart t-mx-1 t-mt-1">
      <font-awesome-icon :icon="['fas', 'heart']"
    /></span>
    by Bibhuti Poudyal
    <br>
    Built using <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer" class="highlight t-inline-block">Gridsome</a> &amp; 
    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="highlight t-inline-block">Tailwind</a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
