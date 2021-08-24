<template>
  <Layout>
    <div class="container pt-20">
      <!-- Intro -->
      <div class="flex justify-between" id="intro">
        <div class="md:w-11/12">
          <h1 class="text-center md:text-left mb-5">Bibhuti Poudyal</h1>
          <p class="text-center md:text-left md:mr-20 mb-10">
            Hi! I am a software developer based in Kathmandu. I work mostly with Javascript.
            <br>
            I believe building successful software requires not only tech skills but also positive emotions &amp; empathy. 
            That's what we do at <a href="https://thevaluecrew.com/works/" target="_blank" rel="noopener noreferrer" class="highlight inline-block">work</a>.
            <br>
            I spend my free time on open source, reading &amp; cycling.
          </p>

          <p class="text-center md:text-left">
            Co-Founder @
            <a href="https://thevaluecrew.com/" target="_blank" class="highlight inline-block"
              >TheValueCrew</a
            >
            <br />
            MSc CS Graduate @ Pokhara University
          </p>

            <div class="flex justify-center md:justify-start mt-3">
              <a
                href="https://github.com/bibhuticoder"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="Github"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="LinkedIn"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a
                href="https://bibhuticoder.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="Medium"
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" />
              </a>
              <a
                href="mailto:bibhutipd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="Medium"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </div>
        </div>

        <div class="hidden md:block">
          <g-image alt="Bibhuti" src="/illustration.png" />
        </div>
      </div>

      <!-- Open Source -->
      <div id="open-source" class="mt-36">
        <div class="flex flex-wrap md:flex-nowrap">
          <div class="md:w-4/12">
            <h1 class="text-center md:text-left mb-5">
              I
              <span class="text-heart">
                <font-awesome-icon :icon="['fas', 'heart']"
              /></span>
              OPEN SOURCE
            </h1>

            <p class="mt-16 text-center md:text-left">
              I strongly believe
              <span class="font-bold">sharing what you have in abundance </span>
              is a way to make life meaningful.
            </p>

            <p class="mt-6 mb-12 text-center md:text-left">
              In my free time I maintain few open source projects &amp; tools.
              These are my favourites <span class="hidden md:inline">👉</span>
            </p>

            <a
              href="https://github.com/bibhuticoder"
              target="_blank"
              class="
                hidden
                bg-green
                text-white
                px-4
                py-2
                rounded
                relative
                w-28
                md:block
              "
            >
              View More
              <g-image
                alt="Bibhuti"
                src="/oss_hand.png"
                class="w-20 h-auto absolute"
                style="right: 0; top: 50%; transform: translate(100%, -80%)"
              />
            </a>
          </div>

          <div
            class="
              projects-list
              flex-grow flex flex-wrap
              md:max-w-2xl
              justify-evenly
            "
          >
            <div
              class="
                project
                flex flex-col
                bg-white
                w-40
                p-3
                pb-2
                shadow-md
                rounded
                text-center
                mb-4
                md:w-48
                md:p-4
                md:flex
              "
              :class="{ hidden: !oss.showPhone }"
              v-for="(oss, index2) in ossList"
              :key="index2"
            >
              <p class="title font-medium font-Poppins text-sm mb-5">{{ oss.title }}</p>
              <div class="description text-sm flex-grow">
                {{ oss.desc }}
              </div>
              <p class="text-xs mt-4 flex justify-between">
                <a :href="oss.tryLink" target="_blank">
                  <font-awesome-icon :icon="['fas', 'rocket']" /> Try</a
                >
                <a :href="oss.codeLink" target="_blank">
                  <font-awesome-icon :icon="['fas', 'code']" /> Code</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center my-5">
          <a
            href="https://github.com/bibhuticoder"
            target="_blank"
            class="md:hidden bg-green text-white px-4 py-2 rounded"
          >
            View More
          </a>
        </div>
      </div>

      <!-- Blogs -->
      <div id="blogs" class="mt-36 mb-20">
        <h1 class="text-center md:text-left mb-5">Blogs</h1>

        <div class="flex flex-wrap">
          <div class="md:w-1/2">
            <div class="blogs-list flex flex-col">
              <div v-for="edge in $page.blogs.edges" :key="edge.node.id">
                <g-link :to="edge.node.path">
                  <div
                    class="
                      blogs-list-item
                      bg-white
                      shadow-md
                      rounded
                      px-4
                      py-3
                      my-2
                    "
                  >
                    <p class="font-medium font-Poppins mb-2 text-center md:text-left">
                      {{ edge.node.title }}
                    </p>

                    <p class="text-sm text-center md:text-left">
                      {{ edge.node.excerpt }}
                    </p>
                  </div>
                </g-link>
              </div>
            </div>
          </div>

          <div class="hidden w-1/2 md:block">
            <div class="flex flex-col justify-center px-10">
              <div class="flex justify-center">
                <g-image
                  alt="Example image"
                  src="/blogs_illustration.png"
                  class="w-64 h-auto"
                />
              </div>

              <p class="text-center mt-5">
                I frequently write about technical stuffs, most probably work
                related, sometimes on side projects/experiments.
              </p>

              <div class="flex justify-center my-5">
                <g-link
                  to="/blog"
                  class="bg-green text-white px-4 py-2 rounded"
                >
                  Read More
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- contact wave -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="hidden md:block -mt-32"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,165.3C672,171,768,245,864,256C960,267,1056,213,1152,181.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>

    <!-- Contact -->
    <div id="contact" class="md:bg-white mt-20 md:-mt-8 md:relative">
      <div class="container">
        <h1 class="text-center md:text-left mb-5">Contact Me</h1>

        <div class="flex">
          <div class="text-center md:w-1/2 md:text-left">
            <p class="mb-2">
              I am Co-founder at
              <a
                href="https://thevaluecrew.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight w-28 inline-block"
                >TheValueCrew</a
              >
            </p>

            <p class="mb-2">
              Connect me on
              <a
                href="https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight w-16 inline-block"
                >LinkedIn</a
              >
            </p>

            <p class="mb-2">
              Star my Open Source works at

              <a
                href="https://github.com/bibhuticoder"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight w-12 inline-block"
                >Github</a
              >
            </p>

            <p class="mb-2">
              Send me an email at

              <a
                href="mailto:bibhutipd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight w-40 inline-block"
                >bibhutipd@gmail.com</a
              >
            </p>

            <div class="flex justify-center md:justify-start mt-3 mb-4">
              <a
                href="https://github.com/bibhuticoder"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="Github"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="LinkedIn"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a
                href="https://bibhuticoder.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="Medium"
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" />
              </a>
              <a
                href="mailto:bibhutipd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 text-xl"
                title="Medium"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </div>
          </div>

          <div class="w-1/2 justify-end hidden md:flex">
            <div class="flex flex-col w-96">
              <div class="flex justify-center">
                <g-image
                  class="w-36 mr-4 rounded"
                  src="https://lh3.googleusercontent.com/YFIuxWZPFDZRFXDZioC8Lz7b_HIZmve_m9sjGRhpbFhsT-jdKSK2dkeU8WCzO-ykjRHOY_7CfjFVg13VVGoUzfWBLmU=w640-h400-e365-rj-sc0x00ffffff"
                ></g-image>

                <g-image
                  class="w-36 rounded"
                  src="https://lh3.googleusercontent.com/gPxAbWbNrQyDZ7cZ2pyQlMYAB2NnIr4JEsZMrF11w_YQUxmzEBSGUSDMxNICUstx2dyI0_yCIrRgfqRz1VJ33evpVe0=w640-h400-e365-rj-sc0x00ffffff"
                ></g-image>
              </div>

              <p class="text-sm mt-2 text-center">
                Friendly personal dashboard featuring Nepali calendar, daily
                Nepali quotes & Nepali wallpapers.
                <br />

                <a
                  href="https://bibhuticoder.github.io/samaya/"
                  target="_blank"
                  to="/blog"
                  class="inline-block highlight"
                >
                  Get Extension
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query Blog {
  blogs: allBlog(perPage: 4, page: 1) {
    edges {
      node {
        title
        path
        excerpt
        createdAt
      }
    }
  }
}

</page-query>

<script>
import _ from "lodash";

export default {
  metaInfo: {
    title: "About",
  },

  data() {
    return {
      ossList: [
        {
          title: "RamroCode",
          desc: "✨ Beautiful screenshot of your code snippets",
          tryLink: "https://ramrocode.netlify.app/",
          codeLink: "https://github.com/the-value-crew/ramroCode",
          showPhone: true,
        },

        {
          title: "vue-file-uploader",
          desc: "Easy File upload component for Vue 2",
          tryLink: "https://www.npmjs.com/package/vue-easy-multi-file-upload",
          codeLink: "https://github.com/the-value-crew/vue-easy-multi-file-uploader",
          showPhone: false,
        },

        {
          title: "num-to-nep-words",
          desc: "Convert Arabic numerals into Nepali words. Both in Nepali and English language.",
          tryLink: "https://the-value-crew.github.io/num-to-nepali-words-demo/",
          codeLink: "https://github.com/the-value-crew/num-to-nepali-words",
          showPhone: false,
        },
        {
          title: "Samaya",
          desc: "Samaya is a productivity focused chrome extension highly inspired by Momentum",
          tryLink: "https://bibhuticoder.github.io/samaya/",
          codeLink: "https://github.com/bibhuticoder/samaya",
          showPhone: true,
        },
        {
          title: "samaya-quotes-api",
          desc: "Collection of quotes in Nepali language. Built for samaya chrome extension.",
          tryLink: "https://bibhuticoder.github.io/samaya-quotes-api/",
          codeLink: "https://github.com/bibhuticoder/samaya-quotes-api",
          showPhone: true,
        },
        {
          title: "find-emoji",
          desc: "Search for emojis,instantly 🧐",
          codeLink: "https://github.com/bibhuticoder/find-emoji",
          tryLink: "https://bibhuticoder.github.io/find-emoji/",
          showPhone: true,
        },
      ],
    };
  },
};
</script>
