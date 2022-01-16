<template>
  <div class="tree-view-box">
    <h5>TreeViewBox component</h5>
    <TreeViewRow/>
  </div>
</template>

<script>
  import TreeViewRow from './TreeViewRow.vue'

  export default {
    components: {
      TreeViewRow
    }
  }
</script>

<style lang="css">
  .tree-view-box {
    border-color: maroon;
    border-style: dotted;
  }
</style>
