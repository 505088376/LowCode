<script setup>

  import DraggableEle from "@/components/drag/index.vue";

  import { onMounted } from "vue";
  import Constant from "@/components/uiCompoents/Constant";
  import GlobalConstant from "@/Constant";

  onMounted(() => {
    const desginAreaEle = document.getElementById(GlobalConstant.DESIGN_AREA_ID)

    desginAreaEle.addEventListener("drop", (event) => {
      event.stopPropagation();
      event.preventDefault();
      console.log("拖入到设计区域了")
    }, false)
    desginAreaEle.addEventListener("dragleave", (event) => {
      event.stopPropagation();
      event.preventDefault();
    })
    desginAreaEle.addEventListener("dragenter", (event) => {
      event.stopPropagation();
      event.preventDefault();
    })
    desginAreaEle.addEventListener("dragover", (event) => {
      event.stopPropagation();
      event.preventDefault();
    })

  })




</script>

<template>

  <div class="left-panel">
    <h1>左侧面板</h1>
    <DraggableEle :compName="Constant.uiCompName.BUTTON" :text="'button按钮'"/>
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