<script setup>

import DraggableEle from "@/components/leftPanel/DraggableEle.vue";
</script>

<template>
  <div class="left-panel">
    <h1>左侧面板</h1>
    <DraggableEle :text="'button按钮'"/>
    <DraggableEle :text="'Text文本'"/>
  </div>
</template>

<style scoped>
  .left-panel {
    width: 20%;
    height: 100%;
  }
  .move-ele {
    cursor: move;
  }
</style>