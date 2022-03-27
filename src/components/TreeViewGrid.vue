<template>
<div class="tree-view-grid">
  <h5>TreeViewGrid component</h5>
    <PersonPair
      v-for="(pair) in pairs"
      v-bind:key="generatePairId(pair)"
      v-bind:class="pair.pairLocation"
      v-bind:pair="pair"
    />
</div>
</template>

<script setup>
import PersonPair from './PersonPair.vue'

import { viewModelInit } from '../display-data-functions.js'

import { ref, inject, provide } from 'vue'

const familyTreeData = inject('familyTreeData')

let viewModelData = viewModelInit(familyTreeData, familyTreeData.rootPerson, 5)

const pairs = ref(viewModelData.pairObjects)

provide('viewModelData', viewModelData)

const notSingleton = (pair) => {
  return (pair.people.length === 2)
}

const generatePairId = (pair) => {
  if (pair.people.length === 2)
    return pair.people[0] + pair.people[1]
  else
    return 'singleton' + pair.people[0]
}

</script>

<style lang="css">
.tree-view-display {
  overflow: hidden;
}
</style>
