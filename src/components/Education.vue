<script>
export default {
  name: "Education",
  data: function() {
    return {
      title: '教育经历',
      enable: true,
      icon: 'mdi-school-outline'
    }
  }
};
</script>

<template>
 <v-card v-if="enable">
    <v-card-title>
      <v-icon v-if="icon" size='24px' dense color="black darken-2">{{ icon }}</v-icon>
      {{ title}}
    </v-card-title>
    <v-card-text>
   </v-card-text>
</v-card>
</template>