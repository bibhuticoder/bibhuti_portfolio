<template>
  <Layout>
    <div class="container pt-10 md:pt-20">
      <div class="flex flex-wrap">
        <div class="md:w-2/3">
          <!-- <h1 class="text-center mb-5 md:text-left">Recent Blogs</h1> -->

          <div class="flex justify-between md:justify-between mb-4 md:mr-4">
            <div
              v-for="(post, index) in featuredPosts"
              :key="post.id"
              class="md:block w-1/2 md:w-auto"
              :class="{ hidden: index == 2, 'mr-2 md:mr-0': index == 0 }"
            >
              <g-link :to="post.path">
                <div
                  class="
                    blogs-list-item
                    bg-white
                    shadow-md
                    rounded
                    h-auto
                    md:w-56
                    md:h-full
                  "
                >
                  <g-image
                    :src="post.thumbnail"
                    class="rounded-tr rounded-tl h-32 w-full"
                  />

                  <div class="content p-2">
                    <p class="font-Poppins font-medium mb-3">
                      {{ post.title }}
                    </p>

                    <p class="text-sm text-gray-500">
                      {{ post.excerpt.substr(0, 50) + "..." }}
                    </p>
                  </div>
                </div>
              </g-link>
            </div>
          </div>

          <div class="blogs-list flex flex-col md:mr-4">
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

        <div class="md:w-1/3">
          <!-- <h1 class="text-center mb-8 mt-10 md:mt-0 md:text-left">Recent Snippets</h1> -->
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
        thumbnail
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
