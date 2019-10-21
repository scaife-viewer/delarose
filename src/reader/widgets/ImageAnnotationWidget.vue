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
    apiLink() {
      const havePassageText = this.$store.state.passageText.length;
      // @@@ de-couple from passageText
      return havePassageText ? this.$store.state.passageText[0].imageAnnotations.edges[0].node.imageUrl : '';
    },
  },
};
</script>

<style lang="scss">
    .image-annotation a {
        font-size: 14px;
    }
</style>
