<template>
  <g-link :to="path">
    <div
      class="
        blogs-list-item
        t-bg-white t-shadow-md t-rounded t-px-4 t-py-3 t-my-2
      "
    >
      <p class="t-font-Poppins t-font-medium">
        {{ title }}
      </p>
      <p class="t-text-xs t-mb-2 t-text-gray-500">
        {{ createdAtTransformed }} - {{ time }} min read
      </p>

      <p class="t-text-sm t-text-gray-500">
        {{ excerpt }}
      </p>
    </div>
  </g-link>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "BlogItem",
  props: ["title", "path", "tags", "excerpt", "createdAt", "time"],

  computed: {
    createdAtTransformed() {
      let year = dayjs(this.createdAt).year();
      if (year == new Date().getFullYear())
        return dayjs(this.createdAt).format("MMM DD");
      else return dayjs(this.createdAt).format("YYYY MMM DD");
    },
  },
};
</script>

<style lang="scss">
</style>