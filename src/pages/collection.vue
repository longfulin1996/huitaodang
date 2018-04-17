<!--收藏页-->
<template>
  <div>这是收藏</div>
</template>

<script>
    export default {
        name: "collection",
      created: function () {
        console.log(this.$store.state.count)
      }
    }
</script>

<style scoped>

</style>
