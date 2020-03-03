
<template>
  <div>
    <cardsRow title="Recently viewed">

    </cardsRow>
    <cardsRow title="New">

    </cardsRow>
    <cardsRow title="Process">

    </cardsRow>
    <cardsRow title="Completed">
      
    </cardsRow>
  </div>
</template>

<script>
import cardsRow from '@/components/CardsRow'
import { boardCard } from '@/components/Cards';
export default {
  components: {
    cardsRow,
    boardCard,
  }
}
</script>