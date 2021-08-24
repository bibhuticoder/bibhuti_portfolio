<template>
  <Layout>
    <div class="t-container t-pt-20 blogPost t-max-w-xl">
      <h1>{{ $page.blog.title }}</h1>
      <p class="t-text-xs t-text-gray-500">
        {{ createdAtTransformed }} - {{$page.blog.time}} min read
      </p>
      <g-image :src="$page.blog.thumbnail" class="t-my-4" />
      <div class="t-py-4"></div>
      <VueRemarkContent />
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
    createdAt
  }
}
</page-query>

<script>
import moment from "moment";

export default {
  updated() {
    gtag("event", "page_view", {
      page_title: this.$page.blog.title,
      page_path: this.$page.blog.path,
      send_to: "UA-97437577-6",
    });
  },

  computed: {
    createdAtTransformed() {
      let year = moment(this.$page.blog.createdAt).year();
      if (year == new Date().getFullYear())
        return moment(this.$page.blog.createdAt).format("MMM DD");
      else return moment(this.$page.blog.createdAt).format("YYYY MMM DD");
    },
  },
};
</script>


<style lang="scss" scoped>
</style>