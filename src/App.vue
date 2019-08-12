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
