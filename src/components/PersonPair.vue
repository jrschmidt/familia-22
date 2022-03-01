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
.person-tag {
  width: 70px;
  border-color: blue;
  border-style: dotted;
  color: green;
  font-size: 0.6rem;
}

.person-tag p {
  margin: 8px;
}

.go-right{
  grid-column-start: 4;
  grid-column-end: 5;
}

.go-left{
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
