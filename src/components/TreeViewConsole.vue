<template>
  <div class="tree-view-console">
    <h6>TreeViewConsole component</h6>
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

.tree-view-console h6 {
  margin: 2px 0px 14px 8px;
  text-align: left;
  font-size: 0.6rem;
  color: #999999;
}
</style>
