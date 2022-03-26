<template>
  <Layout>
    <div class="t-container t-pt-20 md:t-pt-32">
      <h1 class="t-text-center t-mb-5 md:t-text-left">Life hacks</h1>
      <p class="t-mb-5">
        Practical life hacks that I have been using and improving with my experiences 🛠️
      </p>

      <div class="toolbar t-flex t-mt-2 t-mb-4">
        <select
          class="
            t-text-black t-outline-none t-p-2 t-rounded-l t-shadow-sm t-min-w-0
          "
          v-model="selectedTag"
        >
          <option value="All">All</option>
          <option value="Home">Home</option>
        </select>

        <input
          type="text"
          class="
            t-flex-grow t-p-2 t-outline-none t-shadow-sm t-rounded-r t-min-w-0
          "
          placeholder="Search for hacks"
          v-model="searchKeyword"
        />
      </div>

      <div
        class="
          hacks-list
          t-flex t-flex-wrap t-justify-between
          md:t-justify-center
          t-mb-64
        "
      >
        <div
          v-for="(hack, index) in hacks"
          :key="hack.id"
          class="t-self-center"
        >
          <SnipItem
            :index="index"
            :title="hack.title"
            :tags="hack.tags"
            :excerpt="hack.excerpt"
            :path="hack.path"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Snip{
  hacks: allHack{
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
    let title = "Hacks";
    let description =
      "Life hacks that I have been using and improving by my experiences.";
    let type = "website";
    let keywords = "Blog, Snippets, Portfolio, Lifehacks";

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
    hacks() {
      return this.$page.hacks.edges
        .map((edge) => {
          return edge.node;
        })
        .filter((hack) => {
          let allow = false;
          if (
            (this.selectedTag && hack.tags == this.selectedTag) ||
            this.selectedTag == "All"
          )
            allow = true;

          if (this.searchKeyword && this.searchKeyword.length) {
            if (
              hack.title
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