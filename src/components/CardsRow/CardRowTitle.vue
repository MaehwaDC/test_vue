
<template>
  <div :class="$style.title">
    <slot />
  </div>
</template>

<style lang="scss" module scoped>
.title {
  width: 100%;

  font-size: 26px;
  line-height: 39px;
}
</style>

