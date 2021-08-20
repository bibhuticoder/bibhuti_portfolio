<template>
  <Layout>
    <div class="container pt-20">
      <h1>Code Snippets</h1>

            <div class="blogs-list flex flex-col">
        <div v-for="snip in snips" :key="snip.id">
          <g-link :to="snip.path">
            <div
              class="blogs-list-item bg-white shadow-md rounded px-4 py-3 my-2"
            >
              <p class="font-bold text-center md:text-left">
                {{ snip.title }}
              </p>

                <p class="text-sm text-center md:text-left">
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
ux4617