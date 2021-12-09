<script>
export default {
  name: "Introduction",
  data: function() {
    return {
       title: "自我介绍",
       enable: true,
       icon:''
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