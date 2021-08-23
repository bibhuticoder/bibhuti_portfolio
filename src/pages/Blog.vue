<template>
  <Layout>
    <div class="container pt-20">
      <h1 class="text-center mb-5 md:text-left">Blog</h1>

      <div class="blogs-list flex flex-col">
        <div v-for="post in blogPosts" :key="post.id">
          <BlogItem
            :title="post.title"
            :tags="post.tags"
            :excerpt="post.excerpt"
            :path="post.path"
            :createdAt="post.createdAt"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Blog {
  blogs: allBlog {
    edges {
      node {
        title
        path
        excerpt
        createdAt
      }
    }
  }
}

</page-query>

<script>
import moment from "moment";
import BlogItem from "@/components/BlogItem";

export default {
  components: { BlogItem },
  metaInfo: {
    title: "Blog",
  },

  computed: {
    blogPosts() {
      return this.$page.blogs.edges.map((edge) => {
        return {
          ...edge.node,
          createdAt: moment(edge.node.createdAt).format("YYYY-MM-DD"),
        };
      });
    },
  },
};
</script>