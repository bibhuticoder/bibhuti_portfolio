<template>
  <div class="illustration t-relative">
    <div class="obj-container" v-for="n in 8" :key="n" :style="randAnim(n)">
      <g-image :src="'/obj_' + n + '.png'" class="obj" />
    </div>
    <g-image alt="Bibhuti" src="/illus_man.png" class="main-image t-absolute" />
  </div>
</template>

<script>
export default {
  name: "AboutIllus",

  methods: {
    randAnim(n) {
      return {
        animation: "revolve-" + n,
        animationDuration: n * 10 + "s",
        animationIterationCount: "infinite",
        // animationDirection: "alternate"
      };
    },

    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style lang="scss">
.illustration {
  width: 22rem;
  height: 25rem;
  img.main-image {
    width: 80%;
    height: auto;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: meditate 5s infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }

  .obj-container {
    width: 25rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform-origin: center center;
  }

  .obj {
    width: 3rem;
    height: auto;
    border-radius: 50%;
    animation: meditate 5s infinite;
  }
}

@keyframes meditate {
  from {
    top: 45%;
  }
  to {
    top: 55%;
  }
}

@for $i from 1 through 8 {
  @keyframes revolve-#{$i} {
    from {
      transform: rotate(#{360 / ($i + 1)}deg);
    }
    to {
      transform: rotate(#{360 + (360 / ($i + 1))}deg);
    }
  }
}
</style>