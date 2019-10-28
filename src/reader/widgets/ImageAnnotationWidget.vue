<template>
    <div class="cts-reference">
        <a v-if="apiLink" :href="apiLink" target="_blank">View image for {{ reference }}</a>
        <a
          class="annotation-link"
          v-if="annotationLink"
          :href="annotationLink"
          target="_blank">
          View web annotation for {{ reference }}
        </a>
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
    hasPassageText() {
      // @@@ de-couple from passageText
      return this.$store.state.passageText.length;
    },
    apiLink() {
      return this.hasPassageText ? this.$store.state.passageText[0].imageAnnotations.edges[0].node.imageUrl : '';
    },
    annotationLink() {
      return this.hasPassageText ? this.$store.state.passageText[0].imageAnnotations.edges[0].node.annotationUrl : '';
    },

  },
};
</script>

<style lang="scss">
    .image-annotation a {
        font-size: 14px;
    }
    a.annotation-link  {
      display: block;
      margin-top: 1.0em;
    }

</style>
