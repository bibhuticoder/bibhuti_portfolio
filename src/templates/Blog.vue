<template>
  <Layout>
    <div class="t-container t-pt-20 blogPost t-max-w-2xl">
      <h1>{{ $page.blog.title }}</h1>
      <p class="t-text-xs t-text-gray-500">
        {{ createdAtTransformed }} - 5 min read
      </p>
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title,
    createdAt
  }
}
</page-query>

<script>
import moment from "moment";

export default {
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