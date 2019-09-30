<template>
    <div class="cts-reference">
        <a v-if="apiLink" :href="apiLink" target="_blank">View image for {{ reference }}</a>
        <span v-else>No reference selected</span>
    </div>
</template>

<script>
export default {
  scaifeConfig: {
    displayName: 'Image Annotation',
    location: 'sidebar',
  },
  computed: {
    reference() {
      return this.$route.query.urn.split(':').slice(-1)[0];
    },
    url() {
      // return this.$store.state.scaifeReader.selectedImageAnnotationUrl;
      return `https://image.library.jhu.edu/iiif/rose/SeldenSupra57/SeldenSupra57`;
    },
    apiLink() {
      return this.url && this.reference && `${this.url}.${this.reference}`;
    },
  },
};
</script>

<style lang="scss">
    .image-annotation a {
        font-size: 14px;
    }
</style>
