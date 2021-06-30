<template>
  <Layout>
    <h1>{{ $page.blog.title }}</h1>
    <p class="intro">{{ $page.blog.createdAt }}</p>
    <VueRemarkContent />
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

<style>
.shiki {
  padding: 1rem;
  border-radius: 0.25rem;
}
</style>