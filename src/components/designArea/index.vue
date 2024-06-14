<script>
  export default {
    methods: {
      onDragEnter: () => {
        console.log('进入设计区域了……')
      }
    }
  }

</script>

<template>
  <div @dragenter="onDragEnter" class="design-area">
    <h1>设计区域</h1>
  </div>
</template>

<style scoped>
.design-area {
  width: 100%;
  height: 100%;
  background: yellow;
}
</style>