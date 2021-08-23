<template>
  <Layout>
    <div class="container pt-20">
      <h1 class="text-center mb-5 md:text-left">Code Snippets</h1>
      <p class="mb-5">
        Frequently used stuffs which I have collected throughout my works.
        Having to google same info repeatedly is tedious. This collection serves
        as a faster mechanism.
      </p>

      <div class="toolbar flex mt-2">
        <select
          class="text-black outline-none p-2 rounded-l shadow-sm"
          v-model="selectedTag"
        >
          <option value="All">All</option>
          <option value="Server">Server</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Database">Database</option>
        </select>

        <input
          type="text"
          class="flex-grow p-2 outline-none shadow-sm rounded-r"
          placeholder="Search for snippets"
          v-model="searchKeyword"
        />
      </div>

      <div class="snips-list flex flex-wrap justify-center">
        <div v-for="(snip, index) in snips" :key="snip.id" class="self-center">
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
    title: "Blog",
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