<template>
  <div class="tree-view-box">
    <h5>TreeViewBox component</h5>
    <TreeViewRow/>
  </div>
</template>

<script setup>
  import TreeViewRow from './TreeViewRow.vue'
</script>

<style lang="css">
  .tree-view-box {
    border-color: maroon;
    border-style: dotted;
  }
</style>
