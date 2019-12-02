<template>
  <div class="page">
    <div v-if="previousPage" class="page-ref">PREVIOUS:
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{name: imageViewerRoute, query: { urn: previousPage.urn }}">{{ previousPage.pageRef }}</router-link>
    </div>
    <div class="page-ref">PAGE: {{ page.identifier }}</div>
    <div v-if="nextPage" class="page-ref">NEXT:
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{name: imageViewerRoute, query: { urn: nextPage.urn }}">{{ nextPage.pageRef }}</router-link>
    </div>
    <div style="text-align: center;">
        <!-- eslint-disable-next-line max-len -->
        <router-link :to="{name: 'reader', query: { urn: $route.query.urn }}">View in Reader</router-link>
    </div>
    <OpenSeadragonWidget/>
    <div style="clear: both;"></div>
  </div>
</template>
<script>
import OpenSeadragonWidget from '../../widgets/image/OpenSeadragonWidget.vue';
import { IMAGE_VIEWER_ROUTE } from '../../constants';

export default {
  props: ['page'],
  components: { OpenSeadragonWidget },
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
    imageViewerRoute() {
      return IMAGE_VIEWER_ROUTE;
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
