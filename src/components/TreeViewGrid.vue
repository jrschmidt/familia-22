<template>
  <div class="tree-view-grid">
    <PersonPair
      v-for="(pair) in pairs"
      v-bind:key="generatePairId(pair)"
      v-bind:class="pair.pairClass"
      v-bind:pair="pair"
    />
    <ConnectorSvg
      v-for="(connector, index) in connectors"
      v-bind:class="connectors[index]"
      v-bind:connect-style="getConnectStyle(connectors, index)"
    />
  </div>
</template>

<script setup>
import PersonPair from './PersonPair.vue'
import ConnectorSvg from './ConnectorSvg.vue'

import { viewModelInit } from '../view-model-functions.js'

import { ref, inject, provide } from 'vue'

const familyTreeData = inject('familyTreeData')

let viewModelData = viewModelInit(familyTreeData, familyTreeData.rootPerson, 5)

const pairs = ref(viewModelData.pairObjects)
const connectors = ref(viewModelData.connectorClasses)

provide('viewModelData', viewModelData)

const generatePairId = (pair) => {
  if (pair.people.length === 2)
    return pair.people[0] + pair.people[1]
  else
    return 'singleton' + pair.people[0]
}

const getConnectStyle = (connectors, index) => {
  return connectors[index].split(' ')[0]
}
</script>

<style lang="css">
.tree-view-grid {
  display: grid;
  overflow: hidden;
  padding: 6px 0px 6px 0px;
  background-color: #ccddcc;
  grid-template-columns: 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px;
  grid-template-rows: 50px 30px 50px 30px 50px 30px 50px 30px 50px;
}

/* Place the PersonPair components in the grid */

.gen0root {
  grid-column: 8 / 10;
  grid-row: 9;
}

.gen1pair0 {
  grid-column: 7 / 11;
  grid-row: 7;
}

.gen2pair0 {
  grid-column: 3 / 7;
  grid-row: 5;
}

.gen2pair1 {
  grid-column: 11 / 15;
  grid-row: 5;
}

.gen3pair0 {
  grid-column: 1 / 5;
  grid-row: 3;
}

.gen3pair1 {
  grid-column: 5 / 9;
  grid-row: 3;
}

.gen3pair2 {
  grid-column: 9 / 13;
  grid-row: 3;
}

.gen3pair3 {
  grid-column: 13 / 17;
  grid-row: 3;
}

.gen4pair0 {
  grid-column: 1 / 3;
  grid-row: 1;
}

.gen4pair1 {
  grid-column: 3 / 5;
  grid-row: 1;
}

.gen4pair2 {
  grid-column: 5 / 7;
  grid-row: 1;
}

.gen4pair3 {
  grid-column: 7 / 9;
  grid-row: 1;
}

.gen4pair4 {
  grid-column: 9 / 11;
  grid-row: 1;
}

.gen4pair5 {
  grid-column: 11 / 13;
  grid-row: 1;
}

.gen4pair6 {
  grid-column: 13 / 15;
  grid-row: 1;
}

.gen4pair7 {
  grid-column: 15 / 17;
  grid-row: 1;
}

/* Place the ConnectorSvg components in the grid */

.parents-of-0-0 {
  grid-column: 8 / 10;
  grid-row: 7 / 9;
}

.parents-of-1-0 {
  grid-column: 4 / 9;
  grid-row: 5 / 7;
}

.parents-of-1-1 {
  grid-column: 9 / 14;
  grid-row: 5 / 7;
}

.parents-of-2-0 {
  grid-column: 2 / 5;
  grid-row: 3 / 5;
}

.parents-of-2-1 {
  grid-column: 5 / 8;
  grid-row: 3 / 5;
}

.parents-of-2-2 {
  grid-column: 10 / 13;
  grid-row: 3 / 5;
}

.parents-of-2-3 {
  grid-column: 13 / 16;
  grid-row: 3 / 5;
}

.parents-of-3-0 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.parents-of-3-1 {
  grid-column: 3 / 5;
  grid-row: 1 / 3;
}

.parents-of-3-2 {
  grid-column: 5 / 7;
  grid-row: 1 / 3;
}

.parents-of-3-3 {
  grid-column: 7 / 9;
  grid-row: 1 / 3;
}

.parents-of-3-4 {
  grid-column: 9 / 11;
  grid-row: 1 / 3;
}

.parents-of-3-5 {
  grid-column: 11 / 13;
  grid-row: 1 / 3;
}

.parents-of-3-6 {
  grid-column: 13 / 15;
  grid-row: 1 / 3;
}

.parents-of-3-7 {
  grid-column: 15 / 17;
  grid-row: 1 / 3;
}
</style>
