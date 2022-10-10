<template>
  <Layout :showNavbar="false">
    <div class="font-Nunito text-center pt-8">
      <div class="container">
        <h1 class="text-4xl mb-8">पौडेल परिवार</h1>
        <p class="text-lg mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          dignissimos eveniet quibusdam ipsam sed dicta illo obcaecati
          cupiditate, error quisquam aliquam doloribus esse assumenda blanditiis
          adipisci quis incidunt, repudiandae mollitia?
        </p>
      </div>

      <div class="overflow-auto mx-auto">
        <select v-model="view" @change="handleViewChange()">
          <option value="normal" :selected="view == 'normal'">Normal</option>
          <option value="min" :selected="view == 'min'">Minimized</option>
        </select>

        <div id="family-tree" ref="familyTree" :class="'--' + view"></div>
      </div>
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
              stroke: "dimgray",
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
    @apply flex flex-row p-2 bg-gray-200 rounded-md;

    .person {
      @apply w-40 h-44 flex flex-col py-2 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-50;

      &:nth-child(odd) {
        @apply mr-2;
      }

      &:nth-child(even) {
        @apply ml-2;
      }

      .image {
        @apply w-12 h-12 rounded-full mx-auto mb-4;
      }

      .name {
        @apply font-bold;
      }

      &.--unmarried {
        @apply mr-0;
      }
    }
  }

  &.--min {
    .person-group .person {
      @apply h-10;
      .image,
      .age {
        @apply hidden;
      }
    }
  }
}
</style>
