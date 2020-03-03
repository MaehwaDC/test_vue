
<template>
  <img :src="imgUrl" :class="$style.userImage" >
</template>

<style lang="scss" module scoped>
.userImage {
  border-radius: 100%;
}
</style>

<script>
export default {
  props: {
    user: {
      imgUrl: String,
    }
  }
}
</script>