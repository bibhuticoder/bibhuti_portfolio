<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-32 blogPost t-max-w-xl">
      <h1>{{ $page.hack.title }}</h1>
      <br>
      <br>
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>
query Hack ($id: ID!) {
  hack(id: $id) {
    title
    excerpt
    path
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    let title = this.$page.hack.title;
    let description = this.$page.hack.excerpt;
    let type = "website";
    let keywords = this.$page.hack.tags;

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