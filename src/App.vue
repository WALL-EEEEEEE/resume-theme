<template>
  <v-app>
    <v-main>
      <WorkExpirence></WorkExpirence>
    </v-main>
  </v-app>
</template>

<script>
import WorkExpirence from './components/WorkExpirence.vue';

export default {
  name: 'App',

  components: {
    WorkExpirence,
  },

  data: () => ({
    //
  }),
};
</script>
