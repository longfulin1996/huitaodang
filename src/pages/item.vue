<!--好券直播等四个-->
<template>
    <div>
      {{ aa }}
    </div>
</template>

<script>
    export default {
        name: "a9k9",
        data(){
          return {
            aa: this.$route.params.title
          }
        },
        created(){
          console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
