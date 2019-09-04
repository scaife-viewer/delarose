<template>
  <div class="page">
    <div class="page-ref">PAGE: {{ page.identifier }}</div>
    <div class="columns">
        <ReaderColumn
            v-for="column in page.columns.edges"
            v-bind:key="column.node.idx"
            :column="column.node"
        />
    </div>
    <div style="clear: both;"></div>
  </div>
</template>
<script>
import ReaderColumn from './ReaderColumn.vue';

export default {
  props: ['page'],
  components: { ReaderColumn },
};
</script>

<style lang="scss">
  .page {
    display: block;
    .page-ref {
      margin-right: 10px;
      font-size: 0.5rem;
    }
    .columns {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
  }
</style>
