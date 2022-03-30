<template>
  <div class="person-pair">
    <PersonTag
      v-bind:key="pair.people[0]"
      v-bind:personData="getPersonData(pair, 0)"
    />
  <PairConnectorSvg
    v-if="pair.people.length > 1"
  />
    <PersonTag
      v-if="pair.people.length > 1"
      v-bind:key="pair.people[1]"
      v-bind:personData="getPersonData(pair, 1)"
    />
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'
import PairConnectorSvg from './PairConnectorSvg.vue'

import { inject, ref } from 'vue'

const props = defineProps({
  pair: Object
})

const familyTreeData = inject('familyTreeData')

const getPersonData = (pair, index) => {
  return familyTreeData[pair.people[index]]
}
</script>

<style lang="css">
.person-pair {
  display: flex;
  justify-content: center;
}

.normal {
  width: 240px;
}

.compressed {
  width: 120px;
}

.singleton {
  width: 120px;
}

.pc13 {
  grid-column-start: 1;
  grid-column-end: 3;
}

.pc35 {
  grid-column-start: 3;
  grid-column-end: 5;
}

.pc57 {
  grid-column-start: 5;
  grid-column-end: 7;
}

.pc79 {
  grid-column-start: 7;
  grid-column-end: 9;
}

.pc911 {
  grid-column-start: 9;
  grid-column-end: 11;
}

.pc1113 {
  grid-column-start: 11;
  grid-column-end: 13;
}

.pc1315 {
  grid-column-start: 13;
  grid-column-end: 15;
}

.pc1517 {
  grid-column-start: 15;
  grid-column-end: 17;
}

.pc24 {
  grid-column-start: 2;
  grid-column-end: 4;
}

.pc68 {
  grid-column-start: 6;
  grid-column-end: 8;
}

.pc1012 {
  grid-column-start: 10;
  grid-column-end: 12;
}

.pc1416 {
  grid-column-start: 14;
  grid-column-end: 16;
}

.pc46 {
  grid-column-start: 4;
  grid-column-end: 6;
}

.pc1214 {
  grid-column-start: 12;
  grid-column-end: 14;
}

.pc810 {
  grid-column-start: 8;
  grid-column-end: 10;
}
</style>
