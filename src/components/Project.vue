<script>
export default {
  name: "Project",
  data: function() {
    return {
        title: "项目",
        enable: true,
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