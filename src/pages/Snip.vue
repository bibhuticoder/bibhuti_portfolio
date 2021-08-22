<template>
  <Layout>
    <div class="container pt-20">
      <h1 class="text-center mb-5 md:text-left">Code Snippets</h1>

      <div class="snips-list flex flex-wrap justify-center md:justify-start">
        <div v-for="snip in snips" :key="snip.id" class="self-center">
          <g-link :to="snip.path">
            <div
              class="
                snip
                bg-white
                shadow-md
                rounded
                px-3
                py-3
                m-3
                pb-6
                w-36
                md:w-40
              "
            >
              <p class="font-bold text-center text-sm md:text-left leading-4 mb-2">
                {{ snip.title }}
              </p>

               <div class="ribbon-bottom">
                 <span class="tag ml-2">{{snip.tags}}</span>
               </div>
               <div class="hole"></div>

              <p class="text-sm text-center text-gray-600 mt-3 md:text-left">
                {{ snip.excerpt }}
              </p>
            </div>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Snip{
  snips: allSnip{
    edges{
      node{
        title
        tags
        path
        excerpt
        createdAt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog",
  },

  computed: {
    snips() {
      return this.$page.snips.edges.map((edge) => {
        return edge.node;
      });
    },
  },
};
</script>