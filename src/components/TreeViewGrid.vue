<template>
  <div class="tree-view-grid">
    <PersonPair
      v-for="(pair) in pairs"
      v-bind:key="generatePairId(pair)"
      v-bind:class="pair.pairLocation"
      v-bind:pair="pair"
    />
    <SvgPlaceholder
      class="svgrow1"
    />
    <SvgPlaceholder
      class="svgrow2"
    />
    <SvgPlaceholder
      class="svgrow3"
    />
    <SvgPlaceholder
      class="svgrow4"
    />
  </div>
</template>

<script setup>
import PersonPair from './PersonPair.vue'
import SvgPlaceholder from './SvgPlaceholder.vue'

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
.tree-view-grid {
  display: grid;
  overflow: hidden;
  grid-template-columns: 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px 30px 30px 30px 30px 30px 30px 30px;
}

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

.svgrow1 {
  grid-column: 1 / 17;
  grid-row: 2;
}

.svgrow2 {
  grid-column: 1 / 17;
  grid-row: 4;
}

.svgrow3 {
  grid-column: 1 / 17;
  grid-row: 6;
}

.svgrow4 {
  grid-column: 1 / 17;
  grid-row: 8;
}
</style>
