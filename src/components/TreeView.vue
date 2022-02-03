<template>
  <div class="tree-view">
    <h5>TreeView component</h5>
    <button v-on:click="toggleCollapse()">collapse</button>
    <button v-on:click="toggleSvg()">SVG</button>
    <button v-on:click="toggleRightLeft()">toggle</button>
    <button v-on:click="arrayShift()">remove first in array</button>
    <button v-on:click="arrayPop()">remove last in array</button>
    <TreeViewBox/>
  </div>
</template>

<script setup>
import TreeViewBox from './TreeViewBox.vue'

import { ref, provide } from 'vue'

const rightLeft = ref('go-right')
const svgSize = ref('span-4')
const collapse = ref('')

const originalTreeData = [
  {
    id: 'row-aa',
    tag: 'AA AAA',
  },

  {
    id: 'row-bb',
    tag: 'BB BBB',
  },

  {
    id: 'row-cc',
    tag: 'CC CCC',
  },

  {
    id: 'row-dd',
    tag: 'DD DDD',
  },

  {
    id: 'row-ee',
    tag: 'EE EEE',
  },

  {
    id: 'row-ff',
    tag: 'FF FFF',
  },

  {
    id: 'row-gg',
    tag: 'GG GGG',
  }
]

const treeData = ref(originalTreeData)

provide('rightLeft', rightLeft)
provide('svgSize', svgSize)
provide('collapse', collapse)

provide ('treeData', treeData)

const toggleRightLeft = () => {
  rightLeft.value = rightLeft.value === 'go-right' ? 'go-left' : 'go-right'
}

const toggleSvg = () => {
  svgSize.value = svgSize.value === 'span-4' ? 'span-2' : 'span-4'
}

const toggleCollapse = () => {
  collapse.value = collapse.value === 'collapse' ? '' : 'collapse'
}

const arrayShift = () => {
  treeData.value.shift()
}

const arrayPop = () => {
  treeData.value.pop()
}
</script>

<style lang="css">
.tree-view {
  border-color: maroon;
  border-style: dotted;
}
</style>
