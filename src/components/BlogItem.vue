<template>
              <g-link :to="path">
                <div
                  class="
                    blogs-list-item
                    bg-white
                    shadow-md
                    rounded
                    px-4
                    py-3
                    my-2
                  "
                >
                  <p class="font-Poppins font-medium text-center md:text-left">
                    {{ title }}
                  </p>
                  <p class="text-xs mb-2">
                    <font-awesome-icon :icon="['fas', 'calendar-alt']" />
                    {{ createdAt }}
                  </p>

                  <p class="text-sm text-center md:text-left">
                    {{ excerpt }}
                  </p>
                </div>
              </g-link>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["title", "path", "tags", "excerpt", "createdAt"],
};
</script>

<style lang="scss">

</style>