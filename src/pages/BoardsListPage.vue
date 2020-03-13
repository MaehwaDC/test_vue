<template>
  <div>
    <cards-row
      v-for="category in getCategories"
      :key="category.name"
      :name="category.name"
    >
      <board-card
        v-for="board in category.boards"
        :key="board.name"
        v-bind="board"
        :class="$style.card"
      />
    </cards-row>
  </div>
</template>

<style lang="scss" module>
  .card:not(:last-child) {
    margin-right: 30px;
  }
</style>

<script>
  import CardsRow from '@/components/CardsRow';
  import { BoardCard } from '@/components/Cards';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      CardsRow,
      BoardCard,
    },
    computed: {
      ...mapGetters(['getCategories']),
    },
  };
</script>
