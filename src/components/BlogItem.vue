<template>
  <g-link :to="path">
    <div
      class="
        blogs-list-item
        bg-white shadow-md rounded px-4 py-3 my-2
      "
    >
      <p class="font-Poppins font-medium">
        {{ title }}
      </p>
      <p class="text-xs mb-2 text-gray-500">
        {{ createdAtTransformed }} - {{ time }} min read
      </p>

      <p class="text-sm text-gray-500">
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