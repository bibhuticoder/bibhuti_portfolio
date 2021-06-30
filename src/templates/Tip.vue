<template>
  <Layout>
    <h1>{{ $page.tip.title }}</h1>
    <p class="intro">{{ $page.tip.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Tip ($id: ID!) {
  tip(id: $id) {
    title
  }
}
</page-query>