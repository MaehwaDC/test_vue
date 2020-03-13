<template>
  <img :src="imgUrl" :class="$style.userImage" />
</template>

<style lang="scss" module>
  .userImage {
    border-radius: 100%;
    width: 30px;
    height: 30px;

    border-radius: 50%;
  }
</style>

<script>
  export default {
    props: {
      imgUrl: String,
    },
  };
</script>
