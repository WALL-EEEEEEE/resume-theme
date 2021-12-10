<script>
export default {
  name: "Introduction",
  data: function() {
    return {
       title: "自我介绍",
       enable: true,
       icon:'mdi-account-outline'
    }
  }
};
</script>

<template>
 <v-card v-if="enable">
    <v-card-title>
      <v-icon v-if="icon" dense color="black darken-2" size='24px'>{{ icon }}</v-icon>
      {{ title}}
    </v-card-title>
    <v-card-text>
   </v-card-text>
</v-card>
</template>