<template>
  <g-link :to="path">
    <div class="blogs-list-item bg-white shadow-md rounded px-4 py-3 my-2">
      <p class="font-Poppins font-medium">
        {{ title }}
      </p>
      <p class="text-xs mb-2 text-gray-500">
        <!-- <font-awesome-icon :icon="['fas', 'calendar-alt']" /> -->
        {{ createdAtTransformed }} - {{'5'}} min read
      </p>

      <p class="text-sm text-gray-500">
        {{ excerpt }}
      </p>
    </div>
  </g-link>
</template>

<script>
import moment from "moment";

export default {
  name: "BlogItem",
  props: ["title", "path", "tags", "excerpt", "createdAt"],

  computed: {
    createdAtTransformed() {
      let year = moment(this.createdAt).year();
      if (year == (new Date()).getFullYear())
        return moment(this.createdAt).format("MMM DD");
      else return moment(this.createdAt).format("YYYY MMM DD");
    },
  },
};
</script>

<style lang="scss">
</style>