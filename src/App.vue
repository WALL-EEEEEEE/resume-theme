<template>
  <v-app>
    <v-main>
      <Profile></Profile>
      <Introduction></Introduction>
      <WorkExpirence></WorkExpirence>
      <Project></Project>
      <Education></Education>
    </v-main>
  </v-app>
</template>

<script>
import WorkExpirence from './components/WorkExpirence.vue';
import Project from './components/Project.vue'
import Education from './components/Education.vue'
import Introduction from './components/Introduction.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',

  components: {
    Introduction,
    WorkExpirence,
    Education,
    Project,
    Profile
},

  data: () => ({
    //
  }),
};
</script>
