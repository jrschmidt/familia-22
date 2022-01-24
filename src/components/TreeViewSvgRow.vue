<template>
  <div class="tree-view-svg-row">
    <ConnectorSvg/>
  </div>
</template>

<script setup>
import ConnectorSvg from './ConnectorSvg.vue'

</script>

<style lang="css">
.tree-view-svg-row {
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 80px;
}

</style>
