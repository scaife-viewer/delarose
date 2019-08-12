<template>
  <div class="line">
    <div class="line-ref">{{ lineRef }}</div>
    <div class="line-text">{{ text }}</div>
  </div>
</template>
<script>
  import ReaderLineToken from './ReaderLineToken.vue';

  export default {
    components: { ReaderLineToken },
    props: ['lineRef', 'text', 'side', 'otherSide'],
  };
</script>

<style lang="scss">
  .line {
    display: flex;
    .line-ref {
      margin-right: 10px;
    }
    .line-text {
      flex: 1;
    }
  }
</style>
