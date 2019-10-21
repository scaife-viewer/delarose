<template>
  <div class="page">
    <div v-if="previousPage" class="page-ref">PREVIOUS:
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{name: 'reader', query: { urn: previousPage.urn }}">{{ previousPage.pageRef }}</router-link>
    </div>
    <div class="page-ref">PAGE: {{ page.identifier }}</div>
    <div v-if="nextPage" class="page-ref">NEXT:
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{name: 'reader', query: { urn: nextPage.urn }}">{{ nextPage.pageRef }}</router-link>
    </div>
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
  methods: {
    getPageSibling(offset) {
      const pageRef = this.$store.state.pageIndex[this.page.idx + offset];
      if (pageRef) {
        return {
          pageRef,
          urn: `${this.version}:${pageRef}`,
        };
      }
      return undefined;
    },
  },
  computed: {
    version() {
      return this.$route.query.urn.split(':').slice(0, -1).join(':');
    },
    previousPage() {
      return this.getPageSibling(-1);
    },
    nextPage() {
      return this.getPageSibling(1);
    },
  },
};
</script>

<style lang="scss">
  .page {
    display: block;
    .page-ref {
      margin-right: 10px;
      font-size: 0.5em;
    }
    .columns {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
  }
</style>
