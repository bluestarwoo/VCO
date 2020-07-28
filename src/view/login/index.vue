<template>
  <div id="login">
      login 
      <div class="wrap-box">

      <div class="stagger-visualizer"></div>
      </div>
  </div>
</template>

<script>
export default {
  mounted(){
    const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    const fragment = document.createDocumentFragment();
    const grid = [17, 17];
    const col = grid[0];
    const row = grid[1];
    const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

console.log(staggerVisualizerEl)
console.log(fragment)
staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = this.$animejs.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: this.$animejs.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  translateX: [
    {value: this.$animejs.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: this.$animejs.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: this.$animejs.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: this.$animejs.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: this.$animejs.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => this.$animejs.random(-10, 10),
  translateY: () => this.$animejs.random(-10, 10),
  delay: this.$animejs.stagger(8, {from: 'last'})
})
.add({
  translateX: this.$animejs.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: this.$animejs.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: this.$animejs.stagger(4, {from: 'center'})
})
.add({
  rotate: this.$animejs.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: this.$animejs.stagger(50, {grid: grid, from: 'center'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 180,
  duration: 1000,
  delay: this.$animejs.stagger(100, {grid: grid, from: 'center'})
})
.add({
  scaleY: 1,
  scale: 1,
  delay: this.$animejs.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();
  }
}
</script>

<style lang="stylus" >
.wrap-box{
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FF4B4B;
}

.stagger-visualizer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 17rem;
}

.stagger-visualizer div {
  /*position: absolute;*/
  width: 1rem;
  height: 1rem;
  border: 1px solid #FFF;
  background-color: #FFF;
}

</style>