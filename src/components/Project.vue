<script>
export default {
  name: "Project",
  props: {
    title: {
      type: String,
      default: "项目"
    },
    enable: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: "mdi-developer-board"
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data: function() {
    return {
    }
  },
  computed: {
    opensource: function() {
      var os_projects = []
      console.log(this.items)
      for (const project of this.items) {
        if (project.type == "opensource") {
          os_projects.push(project)
        }
      }
      return { title: '开源项目', 'items': os_projects}
    },
    company: function() {
      var os_projects = []
      for (const project of this.items) {
        if (project.type == "company") {
          os_projects.push(project)
        }
      }
      return { title: '公司项目', 'items': os_projects}
    },
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
      <v-card v-if="opensource">
        <v-card-title secondary>
          <v-icon v-if="icon" size='24px' dense color="black darken-2">{{ opensource.icon }}</v-icon>
          {{ opensource.title}}
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
      <v-card v-if="company" v-bind:value="company">
        <v-card-title class="text--secondary">
          <v-icon v-if="icon" size='24px' dense color="black darken-2">{{ company.icon }}</v-icon>
          {{ company.title}}
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
   </v-card-text>
</v-card>
</template>