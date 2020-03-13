<template>
  <div :class="$style.title">
    <slot />
  </div>
</template>

<style lang="scss" module>
  .title {
    width: 100%;

    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
  }
</style>
