<template>
  <section class="section columns">
    <div class="column">
      <div class="title is-capitalized is-4">
        task list:
      </div>
      <TaskList />
    </div>
    <div class="column">
      <div class="title is-capitalized is-4">
        Task info:
      </div>
    </div>
  </section>
</template>

<script>
  import TaskList from "@/components/TaskList"

  export default {
    name: "Task",
    components: {
      TaskList,
    },
    computed: {
      tasks() {
        return this.$store.getters.getTasks;
      }
    }
  }
</script>
