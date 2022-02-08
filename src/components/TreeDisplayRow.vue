<template>
  <!-- <div class="tree-display-row" :class="rowClass[key]"> -->
  <!-- <div class="tree-display-row" :class="rowClass[id]"> -->
  <div class="tree-display-row">
    <span>{{ tag }}</span>
    <span>{{ id }}</span>
    <PersonTag/>
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

import { inject } from 'vue'

const props = defineProps({
  tag:String,
  id: String
})

const collapse = inject('collapse')

</script>

<style lang="css">
.tree-display-row {
  overflow: hidden;
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 80px;
}

.normal {
  height: 100%;
}

.adding {
  height: 100%;
}

.deleting {
  height: 0%;
}
</style>
