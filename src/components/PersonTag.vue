<template>
  <div class="person-tag" id="id">
    <p><strong>{{ personId }}</strong></p>
    <p><strong>{{ personData.firstname }} {{personData.lastname}}</strong></p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  personId: String,
  personData: Object
})

</script>

<style lang="css">
.person-tag {
  width: 70px;
  border-color: blue;
  border-style: dotted;
  color: green;
  font-size: 0.85rem;
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
