<template>
  <Layout>
    <div class="t-container t-pt-28 md:t-pt-32">
      <!-- Intro -->
      <div class="t-flex t-justify-center md:t-justify-between" id="intro">
        <div class="md:t-w-11/12">
          <h1 class="t-text-center md:t-text-left t-mb-5">Bibhuti Poudyal</h1>
          <p class="t-text-center md:t-text-left md:t-mr-20 t-mb-10">
            I am a software developer from Kathmandu. I believe building
            successful software requires not only tech skills but also positive
            emotions &amp; empathy. That's what we do at
            <a
              href="https://thevaluecrew.com/works/"
              target="_blank"
              rel="noopener noreferrer"
              class="highlight t-inline-block"
              >work</a
            >.
            <br />
            I spend my free time on open source, reading &amp; cycling.
          </p>

          <p class="t-text-center md:t-text-left">
            Co-Founder @
            <a
              href="https://thevaluecrew.com/"
              target="_blank"
              class="highlight t-inline-block"
              >TheValueCrew</a
            >
            <br />
            MSc CS Graduate @ Pokhara University
          </p>

          <div class="t-flex t-justify-center md:t-justify-start t-mt-3">
            <a
              href="https://github.com/bibhuticoder"
              target="_blank"
              rel="noopener noreferrer"
              class="t-mr-4 t-text-xl"
              title="Github"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              href="https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/"
              target="_blank"
              rel="noopener noreferrer"
              class="t-mr-4 t-text-xl"
              title="LinkedIn"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a
              href="https://bibhuticoder.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="t-mr-4 t-text-xl"
              title="Medium"
            >
              <font-awesome-icon :icon="['fab', 'medium-m']" />
            </a>
            <a
              href="mailto:bibhutipd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="t-mr-4 t-text-xl"
              title="Medium"
            >
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </a>
          </div>
        </div>

        <div class="t-hidden md:t-block">
          <AboutIllus />
          <!-- <g-image alt="Bibhuti" src="/illustration.png" /> -->
        </div>
      </div>

      <!-- Open Source -->
      <div id="open-source" class="t-mt-24 md:t-mt-36">
        <div class="t-flex t-flex-wrap md:t-flex-nowrap">
          <div class="md:t-w-4/12">
            <h1 class="t-text-center md:t-text-left t-mb-5">
              I
              <span class="t-text-heart">
                <font-awesome-icon :icon="['fas', 'heart']"
              /></span>
              OPEN SOURCE
            </h1>

            <p class="t-mt-8 t-text-center md:t-mt-16 md:t-text-left">
              I strongly believe
              <span class="font-bold">sharing what you have in abundance </span>
              is a way to make life meaningful.
            </p>

            <p class="t-mt-3 t-mb-12 t-text-center md:t-mt-6 md:t-text-left">
              In my free time I maintain few open source projects &amp; tools.
              These are my favourites
              <span class="t-hidden md:t-inline"> 👉🏻 </span>
            </p>

            <a
              href="https://github.com/bibhuticoder"
              target="_blank"
              class="
                t-hidden
                t-bg-green
                t-text-white
                t-px-4
                t-py-2
                t-rounded
                t-relative
                t-w-28
                md:t-block
              "
            >
              View More
              <g-image
                alt="Bibhuti"
                src="/oss_hand.png"
                class="t-w-20 t-h-auto t-absolute"
                style="right: 0; top: 50%; transform: translate(100%, -80%)"
              />
            </a>
          </div>

          <div
            class="
              projects-list
              t-flex-grow t-flex t-flex-wrap
              md:t-max-w-2xl
              t-justify-evenly
            "
          >
            <div
              class="
                project
                t-flex
                t-flex-col
                t-bg-white
                t-w-40
                t-p-3
                t-pb-2
                t-shadow-md
                t-rounded
                t-text-center
                t-mb-4
                md:t-w-48 md:t-p-4 md:t-flex
              "
              :class="{ 't-hidden': !oss.showPhone }"
              v-for="(oss, index2) in ossList"
              :key="index2"
            >
              <p class="title t-font-medium t-font-Poppins t-text-sm t-mb-5">
                {{ oss.title }}
              </p>
              <div class="description t-text-sm t-flex-grow">
                {{ oss.desc }}
              </div>
              <p class="t-text-xs t-mt-4 t-flex t-justify-between">
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

        <div class="t-flex t-justify-center t-my-5">
          <a
            href="https://github.com/bibhuticoder"
            target="_blank"
            class="md:t-hidden t-bg-green t-text-white t-px-4 t-py-2 t-rounded"
          >
            View More
          </a>
        </div>
      </div>

      <!-- Blogs -->
      <div id="blogs" class="t-mt-24 md:t-mt-36 t-mb-20">
        <h1 class="t-text-center md:t-text-left t-mb-5">Blogs</h1>

        <div class="t-flex t-flex-wrap">
          <div class="md:t-w-1/2">
            <div class="blogs-list t-flex t-flex-col">
              <div v-for="edge in $page.blogs.edges" :key="edge.node.id">
                <g-link :to="edge.node.path">
                  <div
                    class="
                      blogs-list-item
                      t-bg-white t-shadow-md t-rounded t-px-4 t-py-3 t-my-2
                    "
                  >
                    <p
                      class="
                        t-font-medium t-font-Poppins t-mb-2 t-text-center
                        md:t-text-left
                      "
                    >
                      {{ edge.node.title }}
                    </p>

                    <p class="t-text-sm t-text-center md:t-text-left">
                      {{ edge.node.excerpt }}
                    </p>
                  </div>
                </g-link>
              </div>
            </div>
          </div>

          <div class="t-hidden t-w-1/2 md:t-block">
            <div class="t-flex t-flex-col t-justify-center t-px-10">
              <div class="t-flex t-justify-center">
                <g-image
                  alt="Example image"
                  src="/blogs_illustration.png"
                  class="t-w-64 t-h-auto"
                />
              </div>

              <p class="t-text-center t-mt-5">
                I frequently write about technical stuffs, most probably work
                related, sometimes on side projects/experiments.
              </p>

              <div class="t-flex t-justify-center t-my-5">
                <g-link
                  to="/blog"
                  class="t-bg-green t-text-white t-px-4 t-py-2 t-rounded"
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
      class="t-hidden md:t-block t--mt-32"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,165.3C672,171,768,245,864,256C960,267,1056,213,1152,181.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>

    <!-- Contact -->
    <div id="contact" class="md:t-bg-white md:t-relative">
      <div class="t-container">
        <h1 class="t-text-center md:t-text-left t-mb-5">Contact Me</h1>

        <div class="t-flex">
          <div class="t-text-center md:t-w-1/2 md:t-text-left">
            <p class="t-mb-2">
              I am Co-founder at
              <a
                href="https://thevaluecrew.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight t-w-28 t-inline-block"
                >TheValueCrew</a
              >
            </p>

            <p class="t-mb-2">
              Connect me on
              <a
                href="https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight t-w-16 t-inline-block"
                >LinkedIn</a
              >
            </p>

            <p class="t-mb-2">
              Star my Open Source works at

              <a
                href="https://github.com/bibhuticoder"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight t-w-12 t-inline-block"
                >Github</a
              >
            </p>

            <p class="t-mb-2">
              Send me an email at

              <a
                href="mailto:bibhutipd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="highlight t-w-40 t-inline-block"
                >bibhutipd@gmail.com</a
              >
            </p>

            <div
              class="t-flex t-justify-center md:t-justify-start t-mt-3 t-mb-4"
            >
              <a
                href="https://github.com/bibhuticoder"
                target="_blank"
                rel="noopener noreferrer"
                class="t-mr-2 t-ml-2 t-text-xl"
                title="Github"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/"
                target="_blank"
                rel="noopener noreferrer"
                class="t-mr-2 t-ml-2 t-text-xl"
                title="LinkedIn"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a
                href="https://bibhuticoder.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="t-mr-2 t-ml-2 t-text-xl"
                title="Medium"
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" />
              </a>
              <a
                href="mailto:bibhutipd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="t-mr-2 t-ml-2 t-text-xl"
                title="Medium"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </div>
          </div>

          <div class="t-w-1/2 t-justify-end t-hidden md:t-flex">
            <div class="t-flex t-flex-col t-w-96">
              <div class="t-flex t-justify-center">
                <g-image
                  class="t-w-36 t-mr-4 t-rounded"
                  src="https://lh3.googleusercontent.com/YFIuxWZPFDZRFXDZioC8Lz7b_HIZmve_m9sjGRhpbFhsT-jdKSK2dkeU8WCzO-ykjRHOY_7CfjFVg13VVGoUzfWBLmU=w640-h400-e365-rj-sc0x00ffffff"
                ></g-image>

                <g-image
                  class="t-w-36 t-rounded"
                  src="https://lh3.googleusercontent.com/gPxAbWbNrQyDZ7cZ2pyQlMYAB2NnIr4JEsZMrF11w_YQUxmzEBSGUSDMxNICUstx2dyI0_yCIrRgfqRz1VJ33evpVe0=w640-h400-e365-rj-sc0x00ffffff"
                ></g-image>
              </div>

              <p class="t-text-sm t-mt-2 t-text-center">
                Friendly personal dashboard featuring Nepali calendar, daily
                Nepali quotes & Nepali wallpapers.
                <br />

                <a
                  href="https://bibhuticoder.github.io/samaya/"
                  target="_blank"
                  to="/blog"
                  class="t-inline-block highlight"
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
import AboutIllus from "@/components/AboutIllus";

export default {
  components: { AboutIllus },

  metaInfo() {
    return this.$seo({
      title: "About",
      description: "About page of Bibhuti's website",
      keywords: "Blog, Snippets, Portfolio",
      openGraph: {
        title: "About",
        type: "website",
      },
      twitter: {
        title: "About",
        type: "summary",
      },
    });
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
          codeLink:
            "https://github.com/the-value-crew/vue-easy-multi-file-uploader",
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
          desc: "Samaya is a productivity focused chrome extension highly inspired by dayjsum",
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
