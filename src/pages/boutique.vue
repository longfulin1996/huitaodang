<!--精品页-->
<template>
  <div>这是精品</div>
</template>

<script>
    export default {
        name: "boutique",
      created: function () {
        this.$store.commit('increment');
        console.log(this.$store.state.count)
      }
    }
</script>

<style scoped>

</style>
