<template>
              <g-link :to="path">
                <div
                  class="
                    blogs-list-item
                    bg-white shadow-md rounded h-full
                    md:w-56
                  "
                >
                  <g-image
                    :src="thumbnail"
                    class="rounded-tr rounded-tl h-32 w-full"
                  />

                  <div class="content p-2">
                    <p class="font-Poppins font-medium mb-3 text-center md:text-left">
                      {{ title }}
                    </p>

                    <p class="text-sm text-gray-500 hidden md:block">
                      {{ excerpt.substr(0, 50) + "..." }}
                    </p>
                  </div>
                </div>
              </g-link>
</template>

<script>

export default {
  name: "BlogItemImage",
  props: ["title", "path", "thumbnail", "excerpt"],
};
</script>

<style lang="scss">
</style>