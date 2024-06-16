<script>
  import Constant from "@/Constant";

  export default  {
    props: {
      text: String,
      compName: String,
    },
    methods: {

    },
    mounted() {
      this.observer = new IntersectionObserver(entries => {
        console.log(entries[0])
      }, {
        root: document.getElementById(Constant.DESIGN_AREA_ID)
      });
      // 监视目标元素
      this.observer.observe(this.$refs.dragEle);
    }
  }
</script>

<template>
  <div
      draggable="true"
      class="draggable-element"
      ref="dragEle"
  >
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