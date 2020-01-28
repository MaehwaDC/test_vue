<template>
  <div class="level">
    <Task
      v-for="task in getTask" 
      v-bind:key="task.id" 
      :title="task.title"
      :body="task.body"
      :date="task.date"
    />
  </div>
</template>

<script>
import Task from '../Cards/Task';
import { mapGetters } from 'vuex';

export default {
  name: "TaskList",
  components: {
    Task,
  },
  computed: {
    ...mapGetters('getTasks'),
  }
}
</script>