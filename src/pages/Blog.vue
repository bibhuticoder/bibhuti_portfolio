<template>
  <Layout>
    <div class="container">
      <h1>Blogs</h1>
      <p>This page will serve as homepage for blog posts.</p>

      <h3>Recent Blogs</h3>

      <div v-for="edge in $page.blogs.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Blog {
  blogs: allBlog {
    edges {
      node {
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