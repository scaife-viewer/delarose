<template>
  <div class="open-seadragon-input-widget">
    <section>
      <OpenSeadragon :image-url="imageURL" />
    </section>
  </div>
</template>

<script>
import OpenSeadragon from './OpenSeadragon.vue';

export default {
  scaifeConfig: {
    displayName: 'OpenSeadragon Viewer',
    location: 'main',
  },
  components: {
    OpenSeadragon,
  },
  computed: {
    hasPassageText() {
      // @@@ de-couple from passageText
      return this.$store.state.passageText.length;
    },
    imageURL() {
      return this.hasPassageText ? `${this.$store.state.passageText[0].imageAnnotations.edges[0].node.imageUrl}/full/full/0/default.jpg` : '';
    },
  },
};
</script>

<style lang="scss">
  @import "../../variables.scss";

  .open-seadragon-input-widget {
      margin: 0 2em;
      flex: 1;

    .link {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }

    .toolbar {
      padding-top: 30px;
      padding-bottom: 10px;
    }
  }
</style>
