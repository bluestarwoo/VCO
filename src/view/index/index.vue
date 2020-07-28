<template>
  <div class="main-index">
      <button @click="goTo('vworld')" type="button">push vworld</button>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    goTo(name){
      console.log(name)
      this.$router.push('vueWorld')
      // this.$router.push({name:name})
    }
  }
}
</script>

<style>

</style>