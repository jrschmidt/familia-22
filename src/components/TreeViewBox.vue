<template>
  <div class="tree-view-box">
    <h5>TreeViewBox component</h5>
    <button v-on:click="toggleSvg()">SVG</button>
    <button v-on:click="toggleRightLeft()">toggle</button>
    <TreeViewRow/>
    <TreeViewSvgRow/>
  </div>
</template>

<script setup>
import TreeViewRow from './TreeViewRow.vue'
import TreeViewSvgRow from './TreeViewSvgRow.vue'

import { ref, provide } from 'vue'

const rlz = ref('go-right')
const svgSize = ref('span-4')

provide('rlz', rlz)
provide('svgSize', svgSize)

const toggleRightLeft = () => {
  rlz.value = rlz.value === 'go-right' ? 'go-left' : 'go-right'
}

const toggleSvg = () => {
  svgSize.value = svgSize.value === 'span-4' ? 'span-2' : 'span-4'
}
</script>

<style lang="css">
  .tree-view-box {
    border-color: maroon;
    border-style: dotted;
  }
</style>
