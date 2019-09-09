<template>
  <div class="column">
    <div class="column-ref">COLUMN: {{ column.identifier }}</div>
    <div class="line-groups">
        <ReaderLineGroup
        v-for="lineGroup in column.lineGroups.edges"
        v-bind:key="lineGroup.node.idx"
        :line-group="lineGroup.node"
        />
    </div>
  </div>
</template>
<script>
import ReaderLineGroup from './ReaderLineGroup.vue';

export default {
  props: ['column'],
  components: { ReaderLineGroup },
};
</script>

<style lang="scss">
  .column {
    border-top: 1px dashed black;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    margin-left: 5px;
    .column-ref {
      margin-right: 10px;
      font-size: 0.5em;
    }
  }
</style>
