<template>
  <router-link
    :to="{ name: 'board', params: { id } }"
    :class="$style.card"
    :style="{ backgroundColor: color }"
  >
    <div :class="$style.text">
      <div :class="[$style.title, $style.cardItem]">{{ name }}</div>
      <div :class="[$style.discription, $style.cardItem]">
        {{ discription }}
      </div>
    </div>
    <user-image v-for="user in users" :key="user.id" v-bind="user" />
  </router-link>
</template>

<style lang="scss" module>
  .card {
    width: 362px;
    padding: 20px;

    border-radius: 10px;

    text-decoration: none;
    color: inherit;
  }

  .cardItem:not(:last-child) {
    margin-bottom: 5px;
  }

  .text {
    margin-bottom: 30px;
  }
</style>

<script>
  import UserImage from '@/ui-kits/UserImage';

  export default {
    components: {
      UserImage,
    },
    props: {
      name: String,
      discription: String,
      users: Array,
      color: String,
      id: [String, Number],
    },
  };
</script>
