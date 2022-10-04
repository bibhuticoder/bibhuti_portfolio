<template>
  <Layout :showNavbar="false">
    <div class="font-Nunito text-center pt-8">
      <div class="container">
        <h1 class="text-4xl mb-8">पौडेल परिवारको वंशावली</h1>
        <p class="text-lg mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          dignissimos eveniet quibusdam ipsam sed dicta illo obcaecati
          cupiditate, error quisquam aliquam doloribus esse assumenda blanditiis
          adipisci quis incidunt, repudiandae mollitia?
        </p>
      </div>

      <div id="family-tree" class="overflow-auto mx-auto"></div>
    </div>
  </Layout>
</template>

<script>
import _ from "lodash";
import CHRONICLE_DATA from "../data/chronicle.data";

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

    // setTimeout(() => {
    //   this.initTreant();
    // }, 3000);
  },

  methods: {
    initTreant() {
      console.log(CHRONICLE_DATA);
      this.counter++;
      if (this.counter < 3) return;

      new Treant({
        chart: {
          container: "#family-tree",

          connectors: {
            type: "curve",

            style: {
              "arrow-end": "classic",
              height: 100,
              width: 100,
            },
          },
          node: {
            HTMLclass: "node",
          },
        },
        nodeStructure: CHRONICLE_DATA,
      });
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
}
</style>
