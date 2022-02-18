<template>
  <div class="tree-view-display">
      <TreeDisplayRow
        v-for="(row, index) in displayData.rows"
        v-bind:key="rowNames[index]"
        v-bind:id="rowNames[index]"
        :people="displayData.rows[index].people"
      />
  </div>
</template>

<script setup>
import TreeDisplayRow from './TreeDisplayRow.vue'
import TreeViewSvgRow from './TreeViewSvgRow.vue'

import { treeDisplayInit } from '../display-data-functions.js'

import { inject, provide, ref } from 'vue'

const treeData = inject('treeData')
let displayData = treeDisplayInit(treeData, treeData.rootPerson, 5)
provide('displayData', displayData)

const rowNames = ref( ['row0' ,'row1' ,'row2' ,'row3' ,'row4'] )

</script>

<style lang="css">
.tree-view-display {
  max-height: 430px;
  overflow: hidden;
}
</style>
