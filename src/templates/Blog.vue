<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-32 t-max-w-xl">
      <h1 class="t-mb-4">{{ $page.blog.title }}</h1>
      <p class="t-text-xs t-text-gray-500 t-mb-4">
        {{ createdAtTransformed }} - {{ $page.blog.time }} min read
      </p>
      <g-image :src="$page.blog.thumbnail" class="t-my-4" />
      <div
        class="t-pb-8 t-text-gray-500 t-italic t-text-sm t-text-center image-caption"
        v-html="$page.blog.caption"
      ></div>

      <div class="blogPost">
        <VueRemarkContent />
      </div>

      <hr class="t-my-10" />
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
    return this.$seo({
      title: this.$page.blog.title,
      description: this.$page.blog.excerpt,
      keywords: this.$page.blog.tags,
      openGraph: {
        title: this.$page.blog.title,
        type: "website",
      },
      twitter: {
        title: this.$page.blog.title,
        type: "summary",
      },
    });
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