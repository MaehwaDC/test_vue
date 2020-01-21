
<template>
  <header>
    <div class="container level">
      <h1 class="has-text-primary has-text-weight-semibold is-capitalized level-left is-size-2">
        My vue app
      </h1>
      <nav class="level-right" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link
            v-bind:key="route.id"
            v-for="route in routes"
            class="navbar-item is-size-4"
            :to="{ name: route.name }"
          >
            {{route.label}}
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
  @import "~bulma/sass/utilities/initial-variables";

  header {
    background-color: $cyan;
  }
</style>

<script>
  export default {
    data() {
      return {
        routes: [
          { name: 'home', label: 'Home', id: 0 },
          { name: 'tasks', label: 'Task', id: 1 },
          { name: 'test2', label: 'Test2', id: 2 },
        ]
      }
    }
  }
</script>
