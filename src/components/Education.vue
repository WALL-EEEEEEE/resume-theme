<script>
export default {
  name: "Education",
  data: function() {
    return {
      title: '教育经历',
      enable: true,
      icon: ''
    }
  }
};
</script>

<template>
 <v-card v-if="enable">
    <v-card-title>
      <span v-if="icon" v-html="icon"></span>
      {{ title}}
    </v-card-title>
    <v-card-text>
   </v-card-text>
</v-card>
</template>