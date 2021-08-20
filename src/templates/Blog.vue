<template>
  <Layout>
    <div class="container pt-20 blogPost">
      <h1>{{ $page.blog.title }}</h1>
      <p class="intro">{{ $page.blog.createdAt }}</p>
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title,
    createdAt
  }
}
</page-query>

<style lang="scss" scoped>

</style>