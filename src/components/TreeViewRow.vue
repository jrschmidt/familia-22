<template>
  <div class="tree-view-row">
    <button v-on:click="toggleRightLeft()">toggle</button>
    <PersonTag :rlz="rlz"/>
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

import { ref } from 'vue'

const rlz = ref('go-right')

const toggleRightLeft = () => {
  rlz.value = rlz.value === 'go-right' ? 'go-left' : 'go-right'
}
</script>

<style lang="css">
.tree-view-row {
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
}

</style>
