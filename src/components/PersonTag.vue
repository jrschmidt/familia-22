<template>
  <div class="person-tag" :class="rl" id="pt-x">
    <p>AA</p>
    <button v-on:click="markRight()">right</button>
    <button v-on:click="markLeft()">left</button>
    <button v-on:click="toggleRightLeft()">toggle</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rl = ref('go-right')

const markRight = () => {
  rl.value = 'go-right'
}

const markLeft = () => {
  rl.value = 'go-left'
}

const toggleRightLeft = () => {
  rl.value = rl.value === 'go-right' ? 'go-left' : 'go-right'
}
</script>

<style lang="css">
.person-tag {
  width: 100px;
  border-color: blue;
  border-style: dotted;
}

.go-right{
  grid-column-start: 4;
  grid-column-end: 5;
}

.go-left{
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
