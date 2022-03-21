<template>
  <div class="person-pair">
    <PersonTag
      v-bind:key="getPersonOneId(pair)"
      v-bind:personId="getPersonOneId(pair)"
      v-bind:personData="getPersonOneData(pair)"
    />
    <PersonTag
      v-bind:key="getPersonTwoId(pair)"
      v-bind:personId="getPersonTwoId(pair)"
      v-bind:personData="getPersonTwoData(pair)"
    />
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

import { inject } from 'vue'

const props = defineProps({
  pair: Array
})

const familyTreeData = inject('familyTreeData')

const getPersonOneId = (pair) => {
  return pair[0]
}

const getPersonOneData = (pair) => {
  return familyTreeData[ pair[0] ]
}

const getPersonTwoId = (pair) => {
  return pair[1]
}

const getPersonTwoData = (pair) => {
  return familyTreeData[ pair[1] ]
}
</script>

<style lang="css">
.person-pair {
  display: flex;
  align-content: center;
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
