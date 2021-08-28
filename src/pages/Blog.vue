<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-32">
      <h1 class="t-text-center t-mb-5 md:t-text-left">Blog</h1>

      <p>
        I write about the stuffs I have learnt and experienced over the years.
        Almost all technical information found here are battle tested; being used on live projects.
      </p>

      <div class="blogs-list t-flex t-flex-col">
        <div v-for="year in blogYears" :key="year">
          <h2 class="t-mt-12">{{ year }}</h2>

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
    return this.$seo({
      title: "Blog",
      description: "I write about the stuffs I have learnt and experienced over the years.",
      keywords: "Blog, Snippets, Portfolio",
      openGraph: {
        title: "Blog",
        type: "website",
      },
      twitter: {
        title: "Blog",
        type: "summary",
      },
    });
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