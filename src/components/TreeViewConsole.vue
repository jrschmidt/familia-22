<template>
  <div class="tree-view-console">
    <h5>TreeViewConsole component</h5>
    <TreeViewDisplay/>
  </div>
</template>

<script setup>
import TreeViewDisplay from './TreeViewDisplay.vue'

import { ref, provide } from 'vue'

import { treeData } from '../tree-data.js'

provide ('treeData', treeData)
</script>

<style lang="css">
.tree-view-console {
  border-color: maroon;
  border-style: dotted;
}
</style>
