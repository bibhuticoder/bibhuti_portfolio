<template>
  <Layout>
    <div class="container pt-20 md:pt-32 blogPost max-w-xl">
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
  metaInfo() {
    let title = this.$page.snip.title;
    let description = this.$page.snip.excerpt;
    let type = "website";
    let keywords = this.$page.snip.tags;

    return {
      title,
      meta: [
        {
          name: "description",
          content: description,
        },

        {
          name: "keywords",
          content: keywords,
        },

        {
          key: "author",
          name: "author",
          content: "Bibhuti",
        },

        {
          key: "og:title",
          property: "og:title",
          content: title,
        },

        {
          key: "og:type",
          property: "og:type",
          content: type,
        },

        {
          key: "og:description",
          property: "og:description",
          content: description,
        },

        {
          key: "twitter:title",
          property: "twitter:title",
          content: title,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
};
</script>