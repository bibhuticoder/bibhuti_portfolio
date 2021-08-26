<template>
  <Layout>
       <div class="t-container t-pt-20 md:t-pt-32">
      <h1 class="t-text-center t-mb-5 md:t-text-left">Code Snippets</h1>
      <p class="t-mb-5">
        Frequently used stuffs which I have collected throughout my works.
        Having to google same info repeatedly is tedious; hence this collection serves
        as a faster approach 🚀
      </p>

      <div class="toolbar t-flex t-mt-2 t-mb-4">
        <select
          class="t-text-black t-outline-none t-p-2 t-rounded-l t-shadow-sm t-min-w-0"
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
          class="t-flex-grow t-p-2 t-outline-none t-shadow-sm t-rounded-r t-min-w-0"
          placeholder="Search for snippets"
          v-model="searchKeyword"
        />
      </div>

      <div class="snips-list t-flex t-flex-wrap t-justify-between md:t-justify-center t-mb-64">
        <div v-for="(snip, index) in snips" :key="snip.id" class="t-self-center">
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
  metaInfo: {
    title: "Snippets",
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