<template>
  <div class="tree-view-row">
    <PersonTag />
  </div>
</template>

<script setup>
  import PersonTag from './PersonTag.vue'
</script>

<style lang="css">
.tree-view-row {
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
}

</style>
