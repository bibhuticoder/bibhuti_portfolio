<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-40">
      <div class="t-flex t-flex-wrap">
        <div class="md:t-w-2/3">
          <!-- <h1 class="t-text-center t-mb-5 md:t-text-left">Recent Blogs</h1> -->

          <div class="t-flex t-justify-between md:t-justify-between t-mb-4 md:t-mr-4">
            <div
              v-for="(post, index) in featuredPosts"
              :key="post.id"
              class="md:t-block t-w-1/2 md:t-w-auto"
              :class="{ 't-hidden': index == 2, 't-mr-2 md:t-mr-0': index == 0 }"
            >
              <g-link :to="post.path">
                <div
                  class="
                    blogs-list-item
                    t-bg-white
                    t-shadow-md
                    t-rounded
                    t-h-full
                    md:t-w-56
                  "
                >
                  <g-image
                    :src="post.thumbnail"
                    class="t-rounded-tr t-rounded-tl t-h-32 t-w-full"
                  />

                  <div class="content t-p-2">
                    <p class="t-font-Poppins t-font-medium t-mb-3">
                      {{ post.title }}
                    </p>

                    <p class="t-text-sm t-text-gray-500">
                      {{ post.excerpt.substr(0, 50) + "..." }}
                    </p>
                  </div>
                </div>
              </g-link>
            </div>
          </div>

          <div class="blogs-list t-flex t-flex-col md:t-mr-4">
            <div v-for="post in otherPosts" :key="post.id">
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

        <div class="md:t-w-1/3">
          <!-- <h1 class="t-text-center t-mb-8 t-mt-10 md:t-mt-0 md:t-text-left">Recent Snippets</h1> -->
          <div
            class="snips-list t-flex t-flex-wrap t-justify-center md:t-justify-start"
          >
            <div
              v-for="(snip, index) in snips"
              :key="snip.id"
              class="t-self-center"
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
  blogs: allBlog(sortBy: "createdAt", order: DESC, perPage: 8, page: 1) {
    edges {
      node {
        title
        path
        excerpt
        createdAt
        thumbnail
      }
    }
  }

  snips: allSnip(sortBy: "createdAt", order: DESC, perPage: 8, page: 1) {
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
        };
      });
    },

    otherPosts() {
      return this.blogPosts.slice(3);
    },

    featuredPosts() {
      return this.blogPosts.slice(0, 3);
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
