<template>
  <div class="tree-view-display">
      <TreeDisplayRow
        v-for="(row, index) in viewModelData.rows"
        v-bind:key="rowNames[index]"
        v-bind:id="rowNames[index]"
        :people="viewModelData.rows[index].people"
      />
  </div>
</template>

<script setup>
import TreeDisplayRow from './TreeDisplayRow.vue'
import TreeViewSvgRow from './TreeViewSvgRow.vue'

import { treeDisplayInit } from '../display-data-functions.js'

import { inject, provide, ref } from 'vue'

const familyTreeData = inject('familyTreeData')
let viewModelData = treeDisplayInit(familyTreeData, familyTreeData.rootPerson, 5)
provide('viewModelData', viewModelData)

const rowNames = ref( ['row0', 'row1', 'row2', 'row3', 'row4'] )

</script>

<style lang="css">
.tree-view-display {
  overflow: hidden;
}
</style>
