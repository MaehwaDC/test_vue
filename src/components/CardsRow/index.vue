
<template>
<div>
  <cardRowTitle>{{ title }}</cardRowTitle>
  <vue-custom-scrollbar :class="$style.scrollArea" :settings="settings">
    <slot />
  </vue-custom-scrollbar>
</div>
</template>

<style lang="scss" module scoped>
  .scrollArea {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
</style>

<script>
import cardRowTitle from "./CardRowTitle"
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar,
    cardRowTitle,
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  props: {
    title: String,
  }
}
</script>
