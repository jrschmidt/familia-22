<template>
  <div class="tree-view-box">
    <!-- <transtion-group> -->
      <TreeViewRow
      v-for="row in treeData"
      v-bind:key="row.id"
      v-bind:id="row.id"
      v-bind:tag="row.tag"/>
    <!-- </transtion-group> -->
  </div>
</template>

<script setup>
import TreeViewRow from './TreeViewRow.vue'
import TreeViewSvgRow from './TreeViewSvgRow.vue'

import { inject } from 'vue'

const treeData = inject('treeData')
</script>

<style lang="css">
.tree-view-box {
  max-height: 430px;
  overflow: hidden;
}
</style>
