<template>
  <Layout>
    <div class="container pt-10">
      <div class="flex justify-between">
        <div class="w-11/12">
          <h1 class="mb-5">Bibhuti Poudyal</h1>
          <p class="mr-20 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae,
            consequuntur rerum illum odit fugit assumenda rem dolores inventore
            iste reprehenderit maxime! Iusto.
          </p>

          <p>
            Co-Founder @ TheValueCrew
            <br />
            MSc CS Graduate @ Pokhara University
          </p>

          <div class="flex mt-3">
            <a href="#" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl">
              <font-awesome-icon :icon="['fab', 'medium-m']" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl">
              <font-awesome-icon :icon="['fab', 'quora']" />
            </a>
          </div>
        </div>

        <div>
          <g-image alt="Example image" src="/illustration.png" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>
