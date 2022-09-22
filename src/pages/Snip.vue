<template>
  <Layout>
    <div class="container pt-20 md:pt-32">
      <h1 class="text-center mb-5 md:text-left">Code Snippets</h1>
      <p class="mb-5">
        Frequently used stuffs which I have collected throughout my works.
        Having to google same info repeatedly is tedious; hence this collection
        serves as a faster approach 🚀
      </p>

      <div class="toolbar flex mt-2 mb-4">
        <select
          class="
            text-black outline-none p-2 rounded-l shadow-sm min-w-0
          "
          v-model="selectedTag"
        >
          <option value="All">All</option>
          <option value="Server">Server</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Database">Database</option>
          <option value="CSS">CSS</option>
          <option value="GithubAction">Github Action</option>
        </select>

        <input
          type="text"
          class="
            flex-grow p-2 outline-none shadow-sm rounded-r min-w-0
          "
          placeholder="Search for snippets"
          v-model="searchKeyword"
        />
      </div>

      <div
        class="
          snips-list
          flex flex-wrap justify-between
          md:justify-center
          mb-64
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
  </Layout>
</template>

<page-query>

query Snip{
  snips: allSnip{
    edges{
      node{
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
import SnipItem from "@/components/SnipItem";

export default {
  components: { SnipItem },

  metaInfo() {
    let title = "Snippets";
    let description =
      "Frequently used stuffs which I have collected throughout my works.";
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
  data() {
    return {
      searchKeyword: null,
      selectedTag: "All",
    };
  },

  computed: {
    snips() {
      return this.$page.snips.edges
        .map((edge) => {
          return edge.node;
        })
        .filter((snip) => {
          let allow = false;
          if (
            (this.selectedTag && snip.tags == this.selectedTag) ||
            this.selectedTag == "All"
          )
            allow = true;

          if (this.searchKeyword && this.searchKeyword.length) {
            if (
              snip.title
                .toLowerCase()
                .includes(this.searchKeyword.toLowerCase())
            )
              allow = true;
            else allow = false;
          }

          return allow;
        });
    },
  },
};
</script>