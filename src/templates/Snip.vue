<template>
  <Layout>
    <div class="container pt-20">
      <h1>{{ $page.snip.title }}</h1>
      <p class="intro">{{ $page.snip.excerpt }}</p>
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Snip ($id: ID!) {
  snip(id: $id) {
    title
    excerpt
  }
}
</page-query>