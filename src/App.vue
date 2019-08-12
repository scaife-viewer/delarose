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
      ];
    },
  },
  created() {
    this.$store.dispatch(FETCH_TEXT);
  },
};
</script>

<style lang="scss">
  @import './variables.scss';
  body {
    font-family: $font-family;
  }
</style>
