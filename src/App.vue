<template>
  <div id="app">
    <FixedSkeleton
        :main-widget="mainWidget"
        :left-widgets="leftWidgets"
        :right-widgets="rightWidgets"
    />
  </div>
</template>

<script>
import { FETCH_TEXT } from './constants';
import ImageAnnotationWidget from './reader/widgets/ImageAnnotationWidget.vue';
import TextSizeWidget from './reader/widgets/TextSizeWidget.vue';
import TextWidthWidget from './reader/widgets/TextWidthWidget.vue';
import ReaderWidget from './widgets/ReaderWidget.vue';

export default {
  name: 'app',
  computed: {
    mainWidget() {
      return ReaderWidget;
    },
    leftWidgets() {
      return [
      ];
    },
    rightWidgets() {
      return [
        TextSizeWidget,
        TextWidthWidget,
        ImageAnnotationWidget,
      ];
    },
    reference() {
      return this.$route.query.urn.split(':').slice(-1)[0];
    },
  },
  created() {
    if (!this.$route.query.urn) {
      this.$router.push({ to: 'reader', query: { urn: 'urn:cts:medievalmss:rose.SeldenSupra57:001r' } });
    }
    this.$store.dispatch(FETCH_TEXT, { pageIdentifier: this.reference });
  },
};
</script>

<style lang="scss">
  @import './variables.scss';
  body {
    font-family: $font-family;
    .sidebar-wrapper.left {
      display: none;
    }
  }
</style>
