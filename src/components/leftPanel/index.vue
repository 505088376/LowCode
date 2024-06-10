<script setup>




</script>

<template>

  <div class="left-panel">
    <h1>左侧面板</h1>
    <a-collapse>
      <a-collapse-panel key="1" header="通用组件">
        <p>{{ aaaa }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ aaa }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>{{ aaaa }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style scoped>
  .left-panel {
    width: 20%;
    height: 100%;
    background: red;
  }
</style>