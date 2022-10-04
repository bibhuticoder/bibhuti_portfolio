<template>
  <Layout :showNavbar="false">
    <div class="container font-Nunito text-center pt-8">
      <h1 class="text-4xl mb-8">पौडेल परिवारको वंशावली</h1>
      <p class="text-lg mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        dignissimos eveniet quibusdam ipsam sed dicta illo obcaecati cupiditate,
        error quisquam aliquam doloribus esse assumenda blanditiis adipisci quis
        incidunt, repudiandae mollitia?
      </p>

      <div id="basic-example"></div>
    </div>
  </Layout>
</template>

<script>
import _ from "lodash";

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
      console.log(this.counter);
      this.counter++;
      if (this.counter < 3) return;


      var ceo = {
        text: {
          name: "Mark Hill",
          title: "Chief executive officer",
          contact: "Tel: 01 213 123 134",
        },
        image: "../headshots/2.jpg",
      };

      var cbo = {
        parent: ceo,
        stackChildren: true,
        text: {
          name: "Linda May",
          title: "Chief Business Officer",
        },
        image: "../headshots/5.jpg",
      };

      new Treant({
        chart: {
          container: "#basic-example",

          connectors: {
            type: "step",
          },
          node: {
            HTMLclass: "nodeExample1",
          },
        },
        nodeStructure: {
          text: {
            name: "Mark Hill",
            title: "Chief executive officer",
            contact: "Tel: 01 213 123 134",
          },
          image: "../headshots/2.jpg",
          children: [
            {
              text: {
                name: "Joe Linux",
                title: "Chief Technology Officer",
              },
              stackChildren: true,
              image: "../headshots/1.jpg",
              children: [
                {
                  text: {
                    name: "Ron Blomquist",
                    title: "Chief Information Security Officer",
                  },
                  image: "../headshots/8.jpg",
                },
                {
                  text: {
                    name: "Michael Rubin",
                    title: "Chief Innovation Officer",
                    contact: "we@aregreat.com",
                  },
                  image: "../headshots/9.jpg",
                },
              ],
            },
            {
              stackChildren: true,
              text: {
                name: "Linda May",
                title: "Chief Business Officer",
              },
              image: "../headshots/5.jpg",
              children: [
                {
                  parent: cbo,
                  text: {
                    name: "Alice Lopez",
                    title: "Chief Communications Officer",
                  },
                  image: "../headshots/7.jpg",
                },
                {
                  text: {
                    name: "Mary Johnson",
                    title: "Chief Brand Officer",
                  },
                  image: "../headshots/4.jpg",
                },
                {
                  text: {
                    name: "Kirk Douglas",
                    title: "Chief Business Development Officer",
                  },
                  image: "../headshots/11.jpg",
                },
              ],
            },
            {
              text: {
                name: "John Green",
                title: "Chief accounting officer",
                contact: "Tel: 01 213 123 134",
              },
              image: "../headshots/6.jpg",
              children: [
                {
                  text: {
                    name: "Erica Reel",
                    title: "Chief Customer Officer",
                  },
                  link: {
                    href: "http://www.google.com",
                  },
                  image: "../headshots/10.jpg",
                },
              ],
            },
          ],
        },
      });
    },
  },
};
</script>
