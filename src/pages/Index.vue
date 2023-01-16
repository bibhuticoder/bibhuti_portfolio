<template>
  <Layout>
    <div class="container pt-20 md:pt-32">
      <!-- Site Intro -->
      <div class="md:w-3/4 mb-10">
        <div class="flex">
          <h2 class="mr-4">👋</h2>
          <div class="flex flex-col">
            <h2 class="mb-4 text-center md:text-left">
              Hey, I'm Bibhuti Poudyal
            </h2>
            <p class="text-center md:text-left text-black text-lg">
              I build softwares for a living.
              <br />
              This site is a journal; mostly related to
              <a
                href="https://thevaluecrew.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block highlight"
                >work</a
              >

              and Open Source projects; kept as a self reference for myself and
              other fellow developers interested.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">

        <!-- Blogs -->
        <div class="md:w-2/3">

        <p
            class="ml-2 mt-8 md:mt-0 mb-4 text-center md:text-left"
          >
            ✍🏻  I frequently write about technical stuffs, mostly work related &amp; sometimes on side projects/experiments. View
            <g-link to="/blog" class="highlight inline-block">more</g-link>.
          </p>

       

          <div
            class="
              flex justify-between
              md:justify-between
              mb-4
              md:mr-4
            "
          >
            <div
              v-for="(post, index) in featuredPosts"
              :key="post.id"
              class="md:block w-1/2 md:w-auto"
              :class="{
                'hidden': index == 2,
                'mr-2 md:mr-0': index == 0,
              }"
            >
              <BlogItemImage
                :title="post.title"
                :thumbnail="post.thumbnail"
                :excerpt="post.excerpt"
                :path="post.path"
                :createdAt="post.createdAt"
              />
            </div>
          </div>

          <div class="blogs-list flex flex-col md:mr-4">
            <div v-for="post in otherPosts" :key="post.id">
              <BlogItem
                :title="post.title"
                :tags="post.tags"
                :excerpt="post.excerpt"
                :path="post.path"
                :time="post.time"
                :createdAt="post.createdAt"
              />
            </div>
          </div>
        </div>

        <!-- Snippets -->
        <div class="md:w-1/3">
          <p
            class="ml-2 mt-8 md:mt-0 mb-4 text-center md:text-left"
          >
            📃 Collection of snippets - instructions, code, commands etc. View
            <g-link to="/snip" class="highlight inline-block">more</g-link>.
          </p>
          <div
            class="
              snips-list
              flex flex-wrap justify-between
              md:justify-start
            "
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
  blogs: allBlog(sortBy: "createdAt", order: DESC, perPage: 8, page: 1) {
    edges {
      node {
        title
        path
        excerpt
        createdAt
        time
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
import BlogItemImage from "@/components/BlogItemImage";

export default {
  components: { SnipItem, BlogItem, BlogItemImage },

  metaInfo() {
    let title = "Home";
    let description =
      "This site is a journal; mostly related to work and open source projects; kept as a self reference for myself and other fellow developers interested.";
    let type = "website";
    let keywords = "Blog, Snippets, Portfolio";

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
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },

        {
          key: "twitter:title",
          property: "twitter:title",
          content: title,
        },
      ],
    };
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
