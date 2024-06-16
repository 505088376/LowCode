<script>
  import uiCompoents from "@/components/uiCompoents";
  import Constant from "@/Constant";

  export default {
    computed: {
      Constant() {
        return Constant
      }
    },
    data() {
      return {
        components: [],
      }
    },
    components: {
      ...uiCompoents
    },
    methods: {
    },
    mounted() {
      this.components = this.$store.state.Page.page.components.map(component => component.compName)
    }
  }
</script>

<template>
  <div
    :id="Constant.DESIGN_AREA_ID"
    class="design-area"
    ref="designArea"
  >
    <h1>设计区域</h1>
    <li v-for="comp in components" :is="comp" :key="comp"></li>
  </div>
</template>

<style scoped>
.design-area {
  width: 100%;
  height: 100%;
  background: yellow;
}
</style>