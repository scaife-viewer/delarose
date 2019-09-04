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
  .line:nth-child(even) {
    .line-html {
      margin-left: 0.5rem;
    }
  }
  .line {
    display: flex;
    .line-ref {
      margin-right: 10px;
    }
    .line-text {
      flex: 1;
    }
    .hi-rend-rubric {
      font-size: 1.6rem;
    }
    .hi-rend-init {
      font-size: 1.4rem;
    }
  }
</style>
