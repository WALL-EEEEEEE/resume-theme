<script setup>
import WorkExpirence from './components/WorkExpirence.vue'
import vuetify from '@/plugins/vuetify'
import Vue from "vue"
/*
export default {
  vuetify,
  components: {
    WorkExpirence
  }
}
*/
new Vue("#app", {
  vuetify,
  components: {
    WorkExpirence
  }
})
</script>

<template>
  <div id="app">
    <WorkExpirence></WorkExpirence>
  </div>
</template>

<style>
</style>
