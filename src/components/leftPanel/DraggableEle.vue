<script>
  export default  {
    props: {
      text: String,
    },
    methods: {
      onDragEnter: () => {
        console.log("dfasdfas")
      }
    }
  }
</script>

<template>
  <div @dragenter="onDragEnter" draggable="true" class="draggable-element">
    {{ text }}
  </div>

</template>

<style scoped>
  .draggable-element:active {
    background-color: lightblue;
  }
  .draggable-element {
    cursor: move;
    margin: 1rem;
  }

</style>