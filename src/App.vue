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
import TextSizeWidget from './reader/widgets/TextSizeWidget.vue';
import TextWidthWidget from './reader/widgets/TextWidthWidget.vue';

export default {
  name: 'app',
  computed: {
    mainWidget() {
      return null;
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
  },
};
</script>

<style lang="scss">
  @import './variables.scss';
  body {
    font-family: $font-family;
  }
</style>
