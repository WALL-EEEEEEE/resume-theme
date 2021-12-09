<template>
  <v-app>
    <v-main>
      <Introduction></Introduction>
      <WorkExpirence></WorkExpirence>
      <Education></Education>
      <Project></Project>
    </v-main>
  </v-app>
</template>

<script>
import WorkExpirence from './components/WorkExpirence.vue';
import Project from './components/Project.vue'
import Education from './components/Education.vue'
import Introduction from './components/Introduction.vue'

export default {
  name: 'App',

  components: {
    Introduction,
    WorkExpirence,
    Education,
    Project,
  },

  data: () => ({
    //
  }),
};
</script>
