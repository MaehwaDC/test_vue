<template>
  <div>
    <card-row-title>{{ name }}</card-row-title>
    <custom-scrollbar :settings="settings">
      <div :class="$style.scrollArea">
        <slot />
      </div>
    </custom-scrollbar>
  </div>
</template>

<style lang="scss" module>
  .scrollArea {
    position: relative;
    padding: 20px 0;

    display: inline-flex;
  }
</style>

<script>
  import CardRowTitle from './CardRowTitle';
  import CustomScrollbar from '../CustomScrollbar';
  export default {
    components: {
      CustomScrollbar,
      CardRowTitle,
    },
    data() {
      return {
        settings: {
          width: '400px',
          suppressScrollY: true,
          autoHide: false,
        },
      };
    },
    props: {
      name: String,
    },
  };
</script>
