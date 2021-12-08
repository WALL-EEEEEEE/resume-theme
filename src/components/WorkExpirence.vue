<script>
module.exports = {
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
            text: "Nullam aliquam ornare massa. Nulla eleifend viverra velit, et vehicula metus condimentum sit amet. Aliquam erat volutpat. Nam sit amet viverra orci. Nulla rutrum facilisis massa, vel tincidunt erat. Nam ante quam, ultricies eu dignissim quis, consequat non velit.",
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
  <div class="work" v-if="expirences.enable">
    <span class="category-header">
         {{expirences.icon}}
      <h2>{{ expirences.title}}</h2>
    </span>

    <div class="timeline-container">
      {{ range .Site.Data.content.work.items }}
        <div class="timeline-item" v-for="item in expirences.items" :key="item.company">
          <span class="date">{{ item.timeStart }} - {{ item.timeEnd }}</span>
          <h3>
            {{ item.position }} @
            <a href="{{ item.companyUrl }}" target="_blank" rel="noreferrer">{{ item.company }}</a>
          </h3>
          <p>
            {{ item.text }}
              <ul v-if="item.achivements.enable">
                <li v-for="item in item.achivements.items" :key="item.text">{{ text}}</li>
              </ul>
          </p>
        </div>
      {{ end }}
    </div>
    <hr/>
  </div>
</template>