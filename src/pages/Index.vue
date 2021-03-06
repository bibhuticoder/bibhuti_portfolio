<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-32">
      <!-- Site Intro -->
      <div class="md:t-w-3/4 t-mb-10">
        <div class="t-flex">
          <h2 class="t-mr-4">👋</h2>
          <div class="t-flex t-flex-col">
            <h2 class="t-mb-4 t-text-center md:t-text-left">
              Hey, I'm Bibhuti Poudyal.
            </h2>
            <p class="t-text-center md:t-text-left t-text-black t-text-lg">
              I build softwares for a living.
              <br />
              This site is a journal; mostly related to
              <a
                href="https://thevaluecrew.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="t-inline-block highlight"
                >work</a
              >

              and Open Source projects; kept as a self reference for myself and
              other fellow developers interested.
            </p>
          </div>
        </div>
      </div>

      <div class="t-flex t-flex-wrap">

        <!-- Blogs -->
        <div class="md:t-w-2/3">

        <p
            class="t-ml-2 t-mt-8 md:t-mt-0 t-mb-4 t-text-center md:t-text-left"
          >
            ✍🏻  I frequently write about technical stuffs, mostly work related &amp; sometimes on side projects/experiments. View
            <g-link to="/blog" class="highlight t-inline-block">more</g-link>.
          </p>

       

          <div
            class="
              t-flex t-justify-between
              md:t-justify-between
              t-mb-4
              md:t-mr-4
            "
          >
            <div
              v-for="(post, index) in featuredPosts"
              :key="post.id"
              class="md:t-block t-w-1/2 md:t-w-auto"
              :class="{
                't-hidden': index == 2,
                't-mr-2 md:t-mr-0': index == 0,
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

          <div class="blogs-list t-flex t-flex-col md:t-mr-4">
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
        <div class="md:t-w-1/3">
          <p
            class="t-ml-2 t-mt-8 md:t-mt-0 t-mb-4 t-text-center md:t-text-left"
          >
            📃 Collection of snippets - instructions, code, commands etc. View
            <g-link to="/snip" class="highlight t-inline-block">more</g-link>.
          </p>
          <div
            class="
              snips-list
              t-flex t-flex-wrap t-justify-between
              md:t-justify-start
            "
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
