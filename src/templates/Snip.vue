<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-32 blogPost t-max-w-xl">
      <h1>{{ $page.snip.title }}</h1>
      <p class="intro">{{ $page.snip.excerpt }}</p>
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>
query Snip ($id: ID!) {
  snip(id: $id) {
    title
    excerpt
    path
  }
}
</page-query>

<script>
export default {
};
</script>