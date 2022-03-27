<template>
  <div class="tree-view-console">
    <h5>TreeViewConsole component</h5>
    <TreeViewGrid/>
  </div>
</template>

<script setup>
import TreeViewGrid from './TreeViewGrid.vue'

import { provide } from 'vue'

import { familyTreeData } from '../family-tree-data.js'

provide ('familyTreeData', familyTreeData)
</script>

<style lang="css">
.tree-view-console {
  border-color: maroon;
  border-style: dotted;
}
</style>
