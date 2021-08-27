<template>
  <div class="illustration t-relative">
    <div class="obj-container" v-for="n in objS" :key="n" :style="randAnim(n)">
      <g-image :src="'/obj_' + objS[n - 1] + '.png'" class="obj" />
    </div>
    <g-image alt="Bibhuti" src="/illus_man.png" class="main-image t-absolute" />
  </div>
</template>

<script>
export default {
  name: "AboutIllus",

  data() {
    return {
      objS: [1, 2, 3, 4, 5, 6, 7, 8].sort(() => 0.5 - Math.random()),
    };
  },

  methods: {
    randAnim(n) {
      return {
        animation: "revolve-" + n,
        animationDuration: 25 + "s",
        animationIterationCount: "infinite",
      };
    },
  },
};
</script>

<style lang="scss">
.illustration {
  width: 18rem;
  height: 20rem;
  margin-top: -2rem;
  img.main-image {
    width: 85%;
    height: auto;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: meditate 5s infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }

  .obj-container {
    width: 18rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform-origin: center center;
  }

  .obj {
    width: 2.5rem;
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
      transform: rotate(#{(360 / 8) * $i}deg);
    }
    to {
      transform: rotate(#{360 + ((360 / 8) * $i)}deg);
    }
  }
}
</style>