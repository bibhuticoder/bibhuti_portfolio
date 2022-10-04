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

      <div class="overflow-auto">
        <VueFamilyTree
          :tree="tree"
          :enable-drag="false"
          @card-click="cardClick"
        >
          <template v-slot:card="{ item }">
            <div class="p-2 border-2 border-red rounded-md w-20 h-20">
              {{ item.name }}
            </div>
          </template>
        </VueFamilyTree>
      </div>
    </div>
  </Layout>
</template>

<script>
import _ from "lodash";
import VueFamilyTree from "vue-family-tree";

export default {
  components: { VueFamilyTree },

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
      tree: [
        {
          firstPerson: {
            name: "Kalidas Poudyal",
            image: "https://picsum.photos/300/300?random=1",
          },
          secondPerson: {
            name: "ABC Poudyal",
            image: "https://picsum.photos/300/300?random=2",
          },
          children: [
            {
              firstPerson: {
                name: "Katia",
              },
              secondPerson: {
                name: "Oleg",
              },
              children: [
                {
                  firstPerson: {
                    name: "Gleb",
                  },
                  secondPerson: {
                    name: "Viktoriya",
                  },
                  children: [
                    {
                      firstPerson: {
                        name: "Rim",
                      },
                      secondPerson: {
                        name: "Natasha",
                      },
                    },
                    {
                      firstPerson: {
                        name: "Leonid",
                      },
                    },
                  ],
                },
                {
                  firstPerson: {
                    name: "Olga",
                  },
                  secondPerson: {
                    name: "Nikita",
                  },
                },
              ],
            },
            {
              firstPerson: {
                name: "Vitia",
              },
              secondPerson: {
                name: "Dasha",
              },
            },
            {
              firstPerson: {
                name: "Antonio Wild",
                image: "https://picsum.photos/300/300?random=3",
              },
              secondPerson: {
                name: "Olivia Olson",
              },
              children: [
                {
                  firstPerson: {
                    name: "Kristina Wild",
                  },
                },
                {
                  firstPerson: {
                    name: "Alexey Wild",
                  },
                },
                {
                  firstPerson: {
                    name: "Viktor Wild",
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  },

  methods: {
    cardClick(item) {
      console.log(item);
    },
  },
};
</script>
