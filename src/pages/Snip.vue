<template>
  <Layout>
    <div class="container">
      <h1>Code Snippets</h1>
      <p>This page will serve as homepage for Code Snippets;</p>

      <h3>Recent Snippets</h3>

      <div v-for="edge in $page.snips.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
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
};
</script>
ux4617