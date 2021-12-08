<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>


<template>
  <div class="work">
    <span class="category-header">
      {{ .Site.Data.content.work.icon | safeHTML}}
      <h2>{{ .Site.Data.content.work.title }}</h2>
    </span>

    <div class="timeline-container">
      {{ range .Site.Data.content.work.items }}
        <div class="timeline-item">
          <span class="date">{{ .timeStart }} - {{ .timeEnd }}</span>
          <h3>
            {{ .position }} @
            <a href="{{ .employerUrl | safeHTML }}" target="_blank" rel="noreferrer">{{ .employerName }}</a>
          </h3>
          <p>
            {{ .text | safeHTML }}
            {{ if .list.enable }}
              <ul>
                {{ range .list.items }}
                   <li>{{ .text | safeHTML }}</li>
                 {{ end }}
              </ul>
            {{ end }}
          </p>
        </div>
      {{ end }}
    </div>
  </div>
  <hr>
</template>