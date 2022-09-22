<template>
  <Layout>
    <div class="container pt-20 md:pt-32">
      <h1 class="text-center mb-5 md:text-left">Life hacks</h1>
      <p class="mb-5">
        Practical life hacks that I have been using and improving with my experiences 🛠️
      </p>

      <div class="toolbar flex mt-2 mb-4">
        <select
          class="
            text-black outline-none p-2 rounded-l shadow-sm min-w-0
          "
          v-model="selectedTag"
        >
          <option value="All">All</option>
          <option value="Home">Home</option>
        </select>

        <input
          type="text"
          class="
            flex-grow p-2 outline-none shadow-sm rounded-r min-w-0
          "
          placeholder="Search for hacks"
          v-model="searchKeyword"
        />
      </div>

      <div
        class="
          hacks-list
          flex flex-wrap justify-between
          md:justify-center
          mb-64
        "
      >
        <div
          v-for="(hack, index) in hacks"
          :key="hack.id"
          class="self-center"
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