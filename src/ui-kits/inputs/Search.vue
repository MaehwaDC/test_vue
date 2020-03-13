<template>
  <div :class="$style.search">
    <input
      v-model="model"
      type="search"
      :class="$style.input"
      :on-chage="onChange"
    />
    <img src="images/search-outline.svg" :class="$style.image" />
  </div>
</template>

<style lang="scss" module>
  @import '@/styles/variables';

  .search {
    height: 30px;
    max-width: 512px;
    width: 100%;
    background-color: $secondary-background-color;
    border-radius: 25px;
    position: relative;

    .input {
      display: block;
      border: unset;
      background-color: transparent;
      padding-left: 14px;
      line-height: 30px;
      width: 100%;
    }

    .image {
      position: absolute;
      right: 14px;
      top: 7px;
    }
  }
</style>

<script>
  export default {
    props: {
      onChange: Function,
      model: Object,
    },
  };
</script>
