<script setup>
  import LeftPanel from "@/components/leftPanel/index.vue";
  import DesignArea from "@/components/designArea/index.vue";
  import RightPanel from "@/components/righPanel/index.vue";

</script>

<template>
  <div class="main-root">
    <LeftPanel />
    <DesignArea />
    <RightPanel />
  </div>
</template>



<style scoped>
  .main-root {
    display: inline-flex;
    width: 100%;
    height: calc(100vh - 10rem);
  }
</style>