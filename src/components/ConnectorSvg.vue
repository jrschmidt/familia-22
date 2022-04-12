<template>
  <div class="connector-svg">
    <svg v-if="isStraightSkinny(connectStyle)" height="100px" width="120px">
      <line x1="55" y1="25" x2="65" y2="25" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="100" stroke="#669966" stroke-width="2"/>
    </svg>

    <svg v-if="isStraightSingleton(connectStyle)" height="100px" width="120px">
      <line x1="30" y1="25" x2="90" y2="25" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="100" stroke="#669966" stroke-width="2"/>
    </svg>

    <svg v-if="isLeftW3(connectStyle)" height="100px" width="180px">
      <line x1="30" y1="25" x2="90" y2="25" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="75" x2="120" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="120" y1="75" x2="120" y2="100" stroke="#669966" stroke-width="2"/>
    </svg>

    <svg v-if="isRightW3(connectStyle)" height="100px" width="180px">
      <line x1="90" y1="25" x2="150" y2="25" stroke="#669966" stroke-width="2"/>
      <line x1="120" y1="25" x2="120" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="120" y1="75" x2="60" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="75" x2="60" y2="100" stroke="#669966" stroke-width="2"/>
    </svg>

    <svg v-if="isLeftW5(connectStyle)" height="100px" width="300px">
      <line x1="30" y1="25" x2="90" y2="25" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="75" x2="240" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="240" y1="75" x2="240" y2="100" stroke="#669966" stroke-width="2"/>
    </svg>

    <svg v-if="isRightW5(connectStyle)" height="100px" width="300px">
      <line x1="210" y1="25" x2="270" y2="25" stroke="#669966" stroke-width="2"/>
      <line x1="240" y1="25" x2="240" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="240" y1="75" x2="60" y2="75" stroke="#669966" stroke-width="2"/>
      <line x1="60" y1="75" x2="60" y2="100" stroke="#669966" stroke-width="2"/>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  connectStyle: String
})

const isStraightSkinny = (connectStyle) => {
  if (connectStyle === 'straight-skinny')
    return true
  else
    return false
}

const isStraightSingleton = (connectStyle) => {
  if (connectStyle === 'straight-singleton')
    return true
  else
    return false
}

const isLeftW3 = (connectStyle) => {
  if (connectStyle === 'left-w3')
    return true
  else
    return false
}

const isRightW3 = (connectStyle) => {
  if (connectStyle === 'right-w3')
    return true
  else
    return false
}

const isLeftW5 = (connectStyle) => {
  if (connectStyle === 'left-w5')
    return true
  else
    return false
}

const isRightW5 = (connectStyle) => {
  if (connectStyle === 'right-w5')
    return true
  else
    return false
}
</script>

<style lang="css">
.connector-svg {
  position: absolute;
}

.connector-svg.straight {
}

.connector-svg.left {
  padding-left: 60px;
  padding-right: 60px;
}

.connector-svg.right {
  padding-left: 60px;
  padding-right: 60px;
}
</style>
