<template>
  <div id="app">
    <Header />
    <main class="content-wrapper" role="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">



</style>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>
