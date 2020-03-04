
<template>
  <div>
    <cardsRow 
      v-for="category in getCategories" 
      :key="category.name" 
      :title="category.name"
    >
      <boardCard
        v-for="board in category.boards"
        :key="board.name"
        :title="board.name"
        :discription="board.description"
        :users="board.users"
      />
    </cardsRow>
  </div>
</template>

<script>
import cardsRow from '@/components/CardsRow'
import { boardCard } from '@/components/Cards';
import { mapGetters } from 'vuex';
export default {
  components: {
    cardsRow,
    boardCard,
  },
  computed: {
    ...mapGetters([
      'getCategories'
    ])
  },
}
</script>