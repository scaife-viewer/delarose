<template>
  <ImageViewer :passage-text="passageText" />
</template>

<script>
import ImageViewer from '../reader/components/ImageViewer.vue';

export default {
  scaifeConfig: {
    displayName: 'Image Viewer',
    location: 'main',
  },
  components: {
    ImageViewer,
  },
  computed: {
    passageText() {
      return this.$store.state.passageText;
    },
  },
};
</script>
