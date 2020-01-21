<template>
  <section class="columns">
    <div class="column">
      <div class="title is-capitalized is-4">
        task list
      </div>
      <div class="is-flex">
        <Task
          v-bind:key="task.id"
          v-for="task in tasks"
          title="task.title"
          description="task.description"
          date-time="task.date"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Task from "@/components/Cards/Task"

  export default {
    name: "Task",
    components: {
      Task,
    },
    computed: {
      tasks() {
        return this.$store.getters.getTasks;
      }
    }
  }
</script>
