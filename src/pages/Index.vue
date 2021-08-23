<template>
  <Layout>
    <div class="container pt-20">
      <div class="flex flex-wrap">
        <div class="md:w-2/3">
          <h1 class="text-center mb-5 md:text-left">Recent Blogs</h1>

          <div class="blogs-list flex flex-col md:mr-4">
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

        <div class="md:w-1/3">
          <h1 class="text-center mb-5 md:text-left">Recent Snippets</h1>
          <div
            class="snips-list flex flex-wrap justify-center md:justify-start"
          >
            <div
              v-for="(snip, index) in snips"
              :key="snip.id"
              class="self-center"
            >
              <SnipItem
                :index="index"
                :title="snip.title"
                :tags="snip.tags"
                :excerpt="snip.excerpt"
                :path="snip.path"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Blog {
  blogs: allBlog(sortBy: "createdAt", order: DESC) {
    edges {
      node {
        title
        path
        excerpt
        createdAt
      }
    }
  }

  snips: allSnip(sortBy: "createdAt", order: DESC) {
    edges {
      node {
        title
        tags
        path
        excerpt
      }
    }
  }
}

</page-query>


<script>
import moment from "moment";
import SnipItem from "@/components/SnipItem";
import BlogItem from "@/components/BlogItem";

export default {
  components: { SnipItem, BlogItem },
  metaInfo: {
    title: "Bibhuti",
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

    snips() {
      return this.$page.snips.edges.map((edge) => {
        return edge.node;
      });
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
