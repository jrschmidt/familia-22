<template>
  <div class="person-tag">
    <p>P</p>
  </div>
</template>

<script setup>
const props = defineProps({
  personData: Object
})
</script>

<style lang="css">
.person-tag {
  border: black solid 1px;
  color: green;
  font-size: 0.6rem;
}

.person-tag p {
  margin: 4px;
}
</style>
