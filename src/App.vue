<template>
  <div id="app">
    <Head />
    <Main />
  </div>
</template>

<script>

import Main from "@/main/index.vue";
import Head from "@/head/index.vue"

export default {
  name: 'App',
  components: {
    Main,
    Head
  }
}
</script>

<style>
#app {
  height: 100vh;

}
</style>
