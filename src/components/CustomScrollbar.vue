<template>
  <vue-custom-scrollbar :settings="settings" v-if="!media.isMobile">
    <slot />
  </vue-custom-scrollbar>
  <div v-else :class="$style.scrollArea">
    <slot />
  </div>
</template>

<style lang="scss" module>
  .scrollArea {
    overflow-x: auto;
  }
</style>

<script>
  import VueCustomScrollbar from 'vue-custom-scrollbar';
  import createMediaObserverMixin from '../mixins/mediaObserverMixin';

  export default {
    mixins: [createMediaObserverMixin()],
    props: {
      settings: Object,
    },
    components: {
      VueCustomScrollbar,
    },
  };
</script>
