<template>
  <div id="app">
    <Header />
    <main class="container" role="main">
      <router-view />
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>
