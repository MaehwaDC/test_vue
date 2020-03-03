
<template>
  <div :class="$style.card">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.discription">{{ discription }}</div>
    <user-image v-for="user in users" :key="user.id" :userImage="user.imageUrl" />
  </div>
</template>

<style lang="scss" module scoped>
.card {
  
}
</style>

<script>
import { getRandomColor } from '@/utils/helpers';
import userImage from '@/ui-kits/UserImage';

export default {
  components: {
    userImage,
  },
  data() {
    return {
      backgroundColor: getRandomColor(),
    }
  },
  props: {
    title: String,
    discription: String,
    users: Array,
  },
  update() {
    this.backgroundColor = getRandomColor();
  }
}
</script>