<template>
  <footer class="pb-2 pt-2 text-center text-black text-sm">
    Copyright © {{ new Date().getFullYear() }} - Made with
    <span class="text-heart mx-1 mt-1">
      <font-awesome-icon :icon="['fas', 'heart']"
    /></span>
    by Bibhuti Poudyal
    <br>
    Built using <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer" class="highlight inline-block">Gridsome</a> &amp; 
    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="highlight inline-block">Tailwind</a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
