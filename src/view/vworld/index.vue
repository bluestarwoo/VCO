<template>
  <div class="vue-world">
      <div class="round-log"></div>
      <div>this is vue moduel</div>
      <button type="button" class="perf-btn" @click="$router.go(-1)">provideBtnToReturn</button>
      <div class="wrap">
          <div class="nav-bar">
            <div class="simulate-ul">
                <div class="simulate-li" v-for="config in renderMenu" @click="menuEvent(config.title)" :key="config.title">{{config.title}}</div>
            </div>
          </div>
          <transition name="fade" mode="out-in">
             <div class="main-window" :key="content">
               <div class="anime-bar">
                   
               </div>
                
               <component :is="'xs'" :title="content" :key="Date.now()"></component>

             </div>
          </transition>
      </div>
      
  </div>
</template>

<script>
// import xs from './components/reusable-machine'
export default {
    data(){
        return {
            dom:'',
            content:'',
            renderMenu:[
                {title:'模块1'},
                {title:'模块2'},
                {title:'模块3'},
                {title:'模块4'},
            ],
        }
    },
    methods:{
        menuEvent(param){
            this.content=param
            var roundLogEl = document.querySelector('.round-log');
            this.$animejs({
            targets: roundLogEl,
            innerHTML: [0, 100.00],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
            });
        }
    },
    components:{
        xs:()=>import ('./components/reusable-machine.vue'),
        // xs
    },
    mounted(){
        var roundLogEl = document.querySelector('.round-log');
        this.$animejs({
        targets: roundLogEl,
        innerHTML: [0, 100.00],
        easing: 'linear',
        round: 10 // Will round the animated value to 1 decimal
        });
        // this.dom=roundLogEl

    }
}
</script>

<style lang="stylus" scoped>
.vue-world {
    width 99%
    margin 0 auto
    background-color rgba(1,158,151,0.1)
    color #019e97
    border-radius 10px
    min-height 790px
    .nav-bar {
        display flex
    }
    .wrap {
        display flex
    }
    .perf-btn {
        background #2A6EB4
        color #ffffff
        border-radius 8px
        height 25px
        width 130px
        text-align center
        font-size 14px
        line-height 25px
        border none
        transition 0.9s
    }
    .perf-btn:hover {
        transform scale(0.98)
    }
    .simulate-li {
        width 100px
        background-color rgba(1,158,151,0.3)
        transition 0.3s
        position relative
        border-radius 8px 0 0 0 
        margin 0 0 1px 0
        text-align center
        font-size 16px
        width 80px
        height 24px
    }
    .simulate-li:hover {
        color #fff
        background-color rgba(1,158,151,0.1)
        transform translateX(1px) translateY(-1px)
    }
    .simulate-li::before {
        content ''
        display block
        width 0
        left 50%
        position absolute
        bottom 0
        height 2px
        background rgba(0,0,0,.1)
        transition .5s
    }
    .simulate-li:hover::before {
        content ''
        display block
        width 100%
        height 2px
        left 0
        background rgba(0,0,0,.7)
    }
}
.round-log {
    width 100px
    position relative
}
.main-window {
    width 400px
    height 300px
    background-color  #fff
    box-sizing border-box
    border-radius 20px
    margin-left 10px
    overflow hidden
    .anime-bar {
        width 100%
        height 15px
        background rgba(0,255,1,.2)
        position relative
    }
    .anime-bar::before{
        content ''
        position absolute
        left 50%
        height 15px
        background rgba(0,255,1,.8)
        width 0
        transition 0.5s
    }
    .anime-bar:hover::before{
        width 100%
        left 0
    }
}

.fade-enter-active {
  transition: all 1.2s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
 .fade-leave-to {
  opacity: 0;
  transform: translateX(10px)
}
.fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}
</style>