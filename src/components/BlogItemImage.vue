<template>
              <g-link :to="path">
                <div
                  class="
                    blogs-list-item
                    t-bg-white t-shadow-md t-rounded t-h-full
                    md:t-w-56
                  "
                >
                  <g-image
                    :src="thumbnail"
                    class="t-rounded-tr t-rounded-tl t-h-32 t-w-full"
                  />

                  <div class="content t-p-2">
                    <p class="t-font-Poppins t-font-medium t-mb-3">
                      {{ title }}
                    </p>

                    <p class="t-text-sm t-text-gray-500">
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