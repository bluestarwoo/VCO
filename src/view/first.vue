<template>
  <div id="login">
    <!-- <van-nav-bar title="标题" class="blue" /> -->
    <!-- <div id="main" style="width: 600px;height:400px;" ref="xman" @click="setEchart"></div> -->
    <div class="title">login页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: ['复选框 B'],
      isChecked:true,
      option: {
        legend:{
          
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          },
          {
            data: [920, 832, 801, 8934, 8290, 1830, 1820],
            type: 'line'
          }
        ]
      }
    }
  },
  methods: {
    setEchart() {
      let mychart = this.$echarts.init(this.$refs['xman'])
      mychart.setOption(this.option)
    },
    wenhao(){
      console.log(event.target)
    }
  },
  mounted() {
    // this.setEchart()
  }
}
</script>

<style scoped>
/* #login .van-nav-bar {
  background-color: blue;
} */
</style>