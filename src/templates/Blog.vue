<template>
  <Layout>
    <div class="container pt-20 md:pt-32 max-w-4xl">
      <h1 class="mb-4">{{ $page.blog.title }}</h1>
      <p class="text-xs text-gray-500 mb-4">
        {{ createdAtTransformed }} - {{ $page.blog.time }} min read
      </p>
      <g-image :src="$page.blog.thumbnail" class="my-4" />
      <div
        class="
          pb-8 text-gray-500 italic text-sm text-center
          image-caption
        "
        v-html="$page.blog.caption"
      ></div>

      <div class="blogPost">
        <VueRemarkContent />
      </div>

      <hr class="my-10" />
      <Disqus shortname="bibhutipoudyal-com-np" :identifier="$page.blog.path" />
    </div>
  </Layout>
</template>

<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title,
    path,
    time,
    thumbnail,
    caption,
    excerpt,
    tags,
    createdAt
  }
}
</page-query>

<script>
import dayjs from "dayjs";
export default {

  metaInfo() {
    let title = this.$page.blog.title;
    let description = this.$page.blog.excerpt;
    let type = "website";
    let keywords = this.$page.blog.tags;
    let imagePath = this.$page.blog.thumbnail;

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
          key: "og:image",
          property: "og:image",
          content: imagePath,
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

        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
      ],
    };
  },

  computed: {
    createdAtTransformed() {
      let year = dayjs(this.$page.blog.createdAt).year();
      if (year == new Date().getFullYear())
        return dayjs(this.$page.blog.createdAt).format("MMM DD");
      else return dayjs(this.$page.blog.createdAt).format("YYYY MMM DD");
    },
  },
};
</script>


<style lang="scss" scoped>
</style>