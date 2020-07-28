<template>
  <div class="reusable-machine">
      <span>{{title}}</span>
      <span>{{Date.now()}}</span>
  </div>
</template>

<script>
export default {
    name:'rm',
    data(){
        return {

        }
    },
    props:['title']
}
</script>

<style>

</style>