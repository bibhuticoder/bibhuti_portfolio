<template>
  <Layout>
    <div class="container pt-20 md:pt-32">
      <h1 class="text-center mb-5 md:text-left">Blog</h1>

      <p>
        I write about the stuffs I have learnt and experienced over the years.
        Almost all technical information found here are battle tested; being
        used on live projects.
      </p>

      <div class="blogs-list flex flex-col">
        <div v-for="year in blogYears" :key="year">
          <h2 class="mt-12">{{ year }}</h2>

          <BlogItem
            v-for="post in blogPosts[year]"
            :key="post.id"
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
        time
        createdAt
      }
    }
  }
}

</page-query>

<script>
import dayjs from "dayjs";
import BlogItem from "@/components/BlogItem";

export default {
  components: { BlogItem },

  metaInfo() {
    let title = "Blog";
    let description =
      "I write about the stuffs I have learnt and experienced over the years.";
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
      let blogs = this.$page.blogs.edges.map((edge) => {
        return {
          ...edge.node,
          createdAt: dayjs(edge.node.createdAt).format("YYYY-MM-DD"),
          createdYear: parseInt(dayjs(edge.node.createdAt).format("YYYY")),
        };
      });

      let blogsDict = {};
      blogs.forEach((blog) => {
        if (blogsDict[blog.createdYear]) blogsDict[blog.createdYear].push(blog);
        else blogsDict[blog.createdYear] = [blog];
      });

      return blogsDict;
    },

    blogYears() {
      return Object.keys(this.blogPosts)
        .map((y) => parseInt(y))
        .sort((a, b) => b - a);
    },
  },
};
</script>