<template>
  <Layout>
    <div class="t-container t-pt-20 blogPost t-max-w-2xl">
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
  updated() {
    gtag("event", "page_view", {
      page_title: this.$page.snip.title,
      page_path: this.$page.snip.path,
      send_to: "UA-97437577-6",
    });
  },
};
</script>