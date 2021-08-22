<template>
  <Layout>
    <div class="container pt-20">
      <h1 class="text-center mb-5 md:text-left">Blog</h1>

      <div class="blogs-list flex flex-col">
        <div v-for="post in blogPosts" :key="post.id">
          <g-link :to="post.path">
            <div
              class="blogs-list-item bg-white shadow-md rounded px-4 py-3 my-2"
            >
              <p class="font-bold text-center md:text-left">
                {{ post.title }}
              </p>
              <p class="text-xs mb-2">
                <font-awesome-icon :icon="['fas', 'calendar-alt']" />
                {{ post.createdAt }}
              </p>

              <p class="text-sm text-center md:text-left">
                {{ post.excerpt }}
              </p>
            </div>
          </g-link>
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

export default {
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