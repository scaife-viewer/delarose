<template>
  <div class="line">
    <div class="line-ref">{{ line.milestoneNumber }}</div>
    <div class="line-html" v-html="line.htmlContent"></div>
  </div>
</template>
<script>

export default {
  props: ['line'],
};
</script>

<style lang="scss">
  $hiRed: #cc0000;
  .line:nth-child(even) {
    .line-html {
      margin-left: 0.5em;
    }
    margin-bottom: 0.5em;
  }
  .line {
    display: flex;
    .line-ref {
      margin-right: 0.75em;
    }
    .line-text {
      flex: 1;
    }
    .hi-rend-rubric {
      font-size: 1.5em;
      color: $hiRed;
      margin-left: -0.5em;
    }
    .hi-rend-init {
      font-size: 1.2em;
      color: $hiRed;
    }
  }
</style>
