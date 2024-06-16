<script>
  export default {
    data() {
      return {
        attributes: {
          type: "primary"
        }
      }
    }
  }

</script>

<template>
  <el-button v-bind="attributes">按钮</el-button>
</template>

<style scoped>

</style>