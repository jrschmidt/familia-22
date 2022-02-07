<template>
  <div class="tree-view">
    <h5>TreeView component</h5>
    <button v-on:click="toggleCollapse()">collapse</button>
    <button v-on:click="toggleSvg()">SVG</button>
    <button v-on:click="toggleRightLeft()">toggle</button>
    <button v-on:click="removeFromTop()">remove first in array</button>
    <button v-on:click="removeFromBottom()">remove last in array</button>
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
    id: 'gen-06',
    generation: 6,
    tag: 'AA AAA'
  },

  {
    id: 'gen-05',
    generation: 5,
    tag: 'BB BBB'
  },

  {
    id: 'gen-04',
    generation: 4,
    tag: 'CC CCC'
  },

  {
    id: 'gen-03',
    generation: 3,
    tag: 'DD DDD'
  },

  {
    id: 'gen-02',
    generation: 2,
    tag: 'EE EEE'
  },

  {
    id: 'gen-01',
    generation: 1,
    tag: 'FF FFF'
  },

  {
    id: 'gen-00',
    generation: 0,
    tag: 'GG GGG'
  }
]

const treeData = ref(originalTreeData)

const rowViewData = ref({
  row4: {
    level: 4 ,
    generation: 6,
    componentId: 'gen-6',
    status: 'normal'
  },

  row3: {
    level: 3,
    generation: 5,
    componentId: 'gen-5',
    status: 'normal'
  },

  row2: {
    level: 2,
    generation: 4,
    componentId: 'gen-4',
    status: 'normal'
  },

  row1: {
    level: 1,
    generation: 3,
    componentId: 'gen-3',
    status: 'normal'
  },

  row0: {
    level: 0,
    generation: 2,
    componentId: 'gen-2',
    status: 'normal'
  }

})

provide('rightLeft', rightLeft)
provide('svgSize', svgSize)
provide('collapse', collapse)

provide ('treeData', treeData)

// Test shifting component horizontally to another grid location.
const toggleRightLeft = () => {
  rightLeft.value = rightLeft.value === 'go-right' ? 'go-left' : 'go-right'
}

// Test shrinking/expanding the SVG horizontally.
const toggleSvg = () => {
  svgSize.value = svgSize.value === 'span-4' ? 'span-2' : 'span-4'
}

// Test collapsing TreeViewRow components vertically.
const toggleCollapse = () => {
  collapse.value = collapse.value === 'collapse' ? '' : 'collapse'
}

// Test removing the topmost TreeViewRow component.
const removeFromTop = () => {
  treeData.value.shift()
}

// Test removing the bottommost TreeViewRow component.
const removeFromBottom = () => {
  treeData.value.pop()
}
</script>

<style lang="css">
.tree-view {
  border-color: maroon;
  border-style: dotted;
}
</style>
