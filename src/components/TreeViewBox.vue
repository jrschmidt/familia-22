<template>
  <div class="tree-view-box">
    <h5>TreeViewBox component</h5>
    <button v-on:click="toggleRightLeft()">toggle</button>
    <TreeViewRow/>
  </div>
</template>

<script setup>
import TreeViewRow from './TreeViewRow.vue'

import { ref, provide } from 'vue'

const rlz = ref('go-right')

provide('rlz', rlz)

const toggleRightLeft = () => {
  rlz.value = rlz.value === 'go-right' ? 'go-left' : 'go-right'
}
</script>

<style lang="css">
  .tree-view-box {
    border-color: maroon;
    border-style: dotted;
  }
</style>
