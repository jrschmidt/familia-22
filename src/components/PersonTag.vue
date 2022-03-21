<template>
  <div class="person-tag">
    <p>p-tag</p>
  </div>
</template>

<script setup>
const props = defineProps({
  personId: String,
  personData: Object
})
</script>

<style lang="css">
.person-tag {
  max-width: 44px;
  border: black solid 1px;
  color: green;
  font-size: 0.6rem;
}

.person-tag p {
  margin: 4px;
}
</style>
