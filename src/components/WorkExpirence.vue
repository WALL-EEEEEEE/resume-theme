<script>
export default {
  name: "WorkExpirence",
  props: {
    enable: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: `工作经历`,
    },
    icon: {
      type: String,
      default: `mdi-domain`
    },
    items: {
      type: Array,
      default: function() {
        return [
        {
            position: "爬虫工程师",
            company: "虎牙直播",
            color: "pink",
            companyUrl: "https://maimai.cn/company?webcid=s9Qooyze&fr=profile",
            timeStart: "2019/01",
            timeEnd: "现在",
            text: "负责虎牙数据中心的爬虫平台的分布式爬虫任务系统的开发, 爬虫框架的开发以及外部数据采集接入的工作",
            achivements: {
              enable: true,
              items: [
                {text: `a tincidunt tortor dictum non. Phasellus lobortis leo risus, at malesuada eros rutrum non.`},
                {text: `Quisque hendrerit hendrerit lectus.`},
                {text: `Aliquam erat volutpat. Nam sit amet viverra orci. Nulla rutrum facilisis.`}
              ],
            }
        },
      ]
    }
  },
  },
  data: function() {
    return {};
}
}
</script>


<template>
  <v-card v-if="enable">
    <v-card-title>
      <v-icon v-if="icon" size='24px' dense color="black darken-2">{{ icon }}</v-icon>
      {{ title}}
    </v-card-title>
    <v-card-text>
       <v-timeline align-top dense>
        <v-timeline-item  :color="item.color" small v-for="item in items" :key="item.company">
          <v-card>
            <v-card-title primary-title>
              {{ item.position }}@<a :href="item.companyUrl" target="_blank" rel="noreferrer">{{ item.company }}</a>
            </v-card-title>
            <v-card-subtitle>
              {{ item.timeStart}}-{{ item.timeEnd }}
            </v-card-subtitle>
            <v-card-text>
             {{ item.text }}
              <ul v-if="item.achivements.enable">
                <li v-for="item in item.achivements.items" :key="item.text">{{item.text}}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-timeline-item>
       </v-timeline>
    </v-card-text>
</v-card>
</template>