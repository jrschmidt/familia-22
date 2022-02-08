<template>
  <div class="tree-view-display">
      <TreeDisplayRow
      v-for="row in treeData"
      v-bind:key="row.id"
      v-bind:id="row.id"
      v-bind:tag="row.tag"/>
  </div>
</template>

<script setup>
import TreeDisplayRow from './TreeDisplayRow.vue'
import TreeViewSvgRow from './TreeViewSvgRow.vue'

import { inject } from 'vue'

const treeData = inject('treeData')
</script>

<style lang="css">
.tree-view-display {
  max-height: 430px;
  overflow: hidden;
}
</style>
