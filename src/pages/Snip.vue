<template>
  <Layout>
    <div class="container pt-20">
      <h1 class="text-center mb-5 md:text-left">Code Snippets</h1>

      <div class="snips-list flex flex-wrap justify-center md:justify-start">
        <div v-for="(snip, index) in snips" :key="snip.id" class="self-center">
          <SnipItem
                :index="index"
                :title="snip.title"
                :tags="snip.tags"
                :excerpt="snip.excerpt"
                :path="snip.path"
              />
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
import SnipItem from "@/components/SnipItem";

export default {
  components: { SnipItem },
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