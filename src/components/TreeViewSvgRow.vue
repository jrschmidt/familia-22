<template>
  <div class="tree-view-svg-row">
    <ConnectorSvg/>
  </div>
</template>

<script setup>
import ConnectorSvg from './ConnectorSvg.vue'

import { inject } from 'vue'

const collapse = inject('collapse')

</script>

<style lang="css">
.tree-view-svg-row {
  overflow: hidden;
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 80px;
}


.collapse {
  height: 0px;
}

</style>
