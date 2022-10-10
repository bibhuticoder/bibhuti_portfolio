<template>
  <Layout :showNavbar="false">
    <div class="font-Mukta text-center pt-8">
      <div class="container">
        <h1 class="text-7xl mb-8 font-Mukta">पौडेल परिवार</h1>

        <p class="text-lg mb-8">
          Welcome to Poudel family.
          <br />
          This page contains all the general information on Poudel family. It
          serves as a reference to newer generations to know more about their
          family history, family memebers.
        </p>
      </div>

      <section id="chronicles">
        <div class="overflow-auto mx-auto px-4">
          <div class="toolbar flex justify-end">
            <select v-model="view" @change="handleViewChange()">
              <option value="normal" :selected="view == 'normal'">
                Normal
              </option>
              <option value="min" :selected="view == 'min'">Minimized</option>
            </select>
          </div>

          <div id="family-tree" ref="familyTree" :class="'--' + view"></div>
        </div>
      </section>

      <section id="demographics">
        <!-- gender -->
        <!-- Age group -->
      </section>
    </div>
  </Layout>
</template>

<script>
import _ from "lodash";
import CHRONICLE_DATA from "../data/chronicle.data";

const TREE_VIEW = {
  NORMAL: "normal",
  MIN: "min",
};

export default {
  metaInfo() {
    let title = "Chronicles";
    let description =
      "I am a software developer from Kathmandu. I believe building successful software requires not only tech skills but also positive emotions & empathy";
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
      counter: 0,
      view: TREE_VIEW.MIN,
    };
  },

  mounted() {
    let raphaeljs = document.createElement("script");
    raphaeljs.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js"
    );
    document.head.appendChild(raphaeljs);

    let treantjs = document.createElement("script");
    treantjs.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.min.js"
    );
    document.head.appendChild(treantjs);

    let treantCss = document.createElement("link");
    treantCss.setAttribute("rel", "stylesheet");
    treantCss.setAttribute(
      "href",
      "https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.css"
    );
    document.head.appendChild(treantCss);

    raphaeljs.addEventListener("load", this.initTreant);
    treantjs.addEventListener("load", this.initTreant);
    treantCss.addEventListener("load", this.initTreant);
  },

  methods: {
    initTreant() {
      this.counter++;
      if (this.counter < 3) return;

      new Treant({
        chart: {
          container: "#family-tree",

          connectors: {
            type: "step",

            style: {
              "arrow-end": "classic-wide-medium",
              stroke: "#9CA3AF",
              "stroke-width": "2.5",
            },
          },
          node: {
            HTMLclass: "node",
          },
        },
        nodeStructure: CHRONICLE_DATA,
      });
      this.counter = 3;
    },

    handleViewChange() {
      this.$refs.familyTree.innerHTML = "";
      setTimeout(() => this.initTreant(), 500);
      // this.initTreant();
    },
  },
};
</script>

<style lang="scss">
#family-tree {
  .person-group {
    @apply flex flex-row p-1 bg-gray-400 rounded-md;

    .person {
      @apply w-28 h-36 flex flex-col py-2 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-50;

      &:nth-child(odd) {
        @apply mr-1;
      }

      .image {
        @apply w-12 h-12 rounded-full mx-auto mb-4;
      }

      .name {
        @apply font-normal text-gray-800 font-Mukta;
      }

      &.--unmarried {
        @apply mr-0;
      }
    }
  }

  &.--min {
    .person-group .person {
      @apply grid place-content-center;
      @apply h-auto w-20 px-2 break-words;
      .image,
      .age {
        @apply hidden;
      }
    }
  }
}
</style>
