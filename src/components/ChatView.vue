<template>
  <div>Welcome, {{ username }}</div>
</template>

<script>

import { ref } from "vue";
export default {
  props: ["username"],
  setup(){
    const inputMesssage = ref("");
  }
};
</script>

<style>
</style>