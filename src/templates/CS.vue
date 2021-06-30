<template>
  <Layout>
    <h1>{{ $page.cs.title }}</h1>
    <p class="intro">{{ $page.cs.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Cs ($id: ID!) {
  cs(id: $id) {
    title
  }
}
</page-query>