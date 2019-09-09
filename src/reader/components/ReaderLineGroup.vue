<template>
  <div class="line-group">
    <div class="line-group-ref">LINE GROUP:{{ lineGroup.position }}</div>
    <div class="line-group-kind">KIND: {{ lineGroup.kind }}</div>
    <div style="clear: both;"></div>
    <div class="lines">
        <ReaderLine
        v-for="line in lineGroup.lines.edges"
        v-bind:key="line.node.idx"
        :line="line.node"
        />
    </div>
  </div>
</template>
<script>
import ReaderLine from './ReaderLine.vue';

export default {
  props: ['lineGroup'],
  components: { ReaderLine },

};
</script>

<style lang="scss">
  .line-group {
    display: block;
    margin-left: 0.1875em;
    margin-top: 0.125em;
    .line-group-ref, .line-group-kind {
      float: left;
      margin-right: 1.25em;
      font-size: 0.5em;
      margin-top: 0.125em;
    }
    .line-group-text {
      flex: 1;
    }
  }
</style>
