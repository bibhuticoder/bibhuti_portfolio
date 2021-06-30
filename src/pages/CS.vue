<template>
  <Layout>
    <h1>Case Study</h1>
    <p>
      This page will serve as homepage for Case Study;
    </p>


     <h3>Recent Case Studies</h3>

    <div v-for="edge in $page.cs.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
    </div>

  </Layout>
</template>

<page-query>

query Cs{
  cs: allCs{
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
    title: 'Blog'
  }
}
</script>