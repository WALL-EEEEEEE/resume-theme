<script>
export default {
  name: "WorkExpirence",
  data: function() {
    return {
      expirences: {
        enable: true,
        icon: `<icon class="fa fa-building fa-2x"></icon>`,
        title: `工作经历`,
        items: [
          {
            position: "爬虫工程师",
            company: "虎牙直播",
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
    };
  }
};
</script>


<template>
  <v-card v-if="expirences.enable">
    <v-card-title>
      <span v-html="expirences.icon"></span>
      {{ expirences.title}}
    </v-card-title>
    <v-container>
        <div class="timeline-item" v-for="item in expirences.items" :key="item.company">
          <span class="date">{{ item.timeStart }} - {{ item.timeEnd }}</span>
          <h3>
            {{ item.position }} @
            <a :href="item.companyUrl" target="_blank" rel="noreferrer">{{ item.company }}</a>
          </h3>
          <p>
            {{ item.text }}
              <ul v-if="item.achivements.enable">
                <li v-for="item in item.achivements.items" :key="item.text">{{item.text}}</li>
              </ul>
          </p>
        </div>
  </v-container>
</v-card>
</template>