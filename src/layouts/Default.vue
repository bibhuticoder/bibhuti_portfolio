<template>
  <div>
    <nav class="nav">
      <div class="container m-5 mx-auto flex justify-between">
        <div class="logo">
          <g-link to="/" class="font-bold"> &lt;bibhutiPoudyal/&gt; </g-link>
        </div>
        <div class="flex">
          <g-link class="nav__link mx-4" to="/blog">Blogs</g-link>
          <g-link class="nav__link mx-4" to="/snip/">Snips</g-link>
          <g-link class="nav__link mx-4" to="/about/">About Me</g-link>
        </div>
      </div>
    </nav>

    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

</style>
