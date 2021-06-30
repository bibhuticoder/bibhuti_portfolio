<template>
  <Layout>
    <h1>{{ $page.blog.title }}</h1>
    <p class="intro">{{ $page.blog.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title,
    excerpt
  }
}
</page-query>