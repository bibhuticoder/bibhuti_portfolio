<template>
  <Layout>
    <div class="container pt-20">
      <div class="flex flex-wrap">
        <div class="md:w-2/3">
          <h1 class="text-center mb-5 md:text-left">Recent Blogs</h1>

          <div class="blogs-list flex flex-col md:mr-4">
            <div v-for="post in blogPosts" :key="post.id">
              <g-link :to="post.path">
                <div
                  class="
                    blogs-list-item
                    bg-white
                    shadow-md
                    rounded
                    px-4
                    py-3
                    my-2
                  "
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

        <div class="md:w-1/3">
          <h1 class="text-center mb-5 md:text-left">Recent Snips</h1>
          <div
            class="snips-list flex flex-wrap justify-center md:justify-start"
          >
            <div v-for="snip in snips" :key="snip.id" class="self-center">
              <g-link :to="snip.path">
                <div
                  class="
                    snip
                    bg-white
                    shadow-md
                    rounded
                    px-3
                    py-3
                    m-2
                    mb-3
                    pb-6
                    w-36
                    md:w-40
                  "
                >
                  <p
                    class="
                      font-bold
                      text-center text-sm
                      md:text-left
                      leading-4
                      mb-2
                    "
                  >
                    {{ snip.title }}
                  </p>

                  <div class="ribbon-bottom">
                    <span class="tag ml-2">{{ snip.tags }}</span>
                  </div>
                  <div class="hole"></div>

                  <p
                    class="text-sm text-center text-gray-600 mt-3 md:text-left"
                  >
                    {{ snip.excerpt }}
                  </p>
                </div>
              </g-link>
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
