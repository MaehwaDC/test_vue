<template>
  <div class="card">
    <div class="card-header-title">{{ title }}</div>

    <div class="card-content is-size-5 has-text-black">
      {{ description }}
    </div>

    <div class="card-footer is-size-5 has-text-primary" >{{ dateTime.toString() }}</div>
  </div>
</template>

<script>
  export default {
    name: "Task",
    props: {
      title: String,
      description: String,
      dateTime: Date,
    }
  }
</script>
