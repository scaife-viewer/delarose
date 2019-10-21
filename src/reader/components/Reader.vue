<template>
  <div class="reader" :class="['text', `text-${textSize}`, `text-width-${textWidth}`]">
    <ReaderPage
      v-for="page in passageText"
      v-bind:key="page.idx"
      :page="page"
    />
  </div>
</template>

<script>
import ReaderPage from './ReaderPage.vue';

export default {
  props: ['passage-text'],
  components: { ReaderPage },
  computed: {
    textSize() {
      return this.$store.state.scaifeReader.textSize;
    },
    textWidth() {
      return this.$store.state.scaifeReader.textWidth;
    },
  },
};
</script>

<style lang="scss">
  .text {
    font-family: 'Noto Serif';
    margin: 0.5em 0.5em 1em;
    line-height: 1.5;

    .line {
      .line-ref {
        font-size: 10pt;
        color: #69C;
        font-family: 'Noto Sans';
      }
      .line-text {
      }
    }
  }

  .widget-sidebar .text {
    font-size: 14px;
    line-height: 1.6;
  }

  .text-xs {
    font-size: 12px;
  }
  .text-sm {
    font-size: 14px;
  }
  .text-md {
    font-size: 16px;
  }
  .text-lg {
    font-size: 20px;
  }
  .text-xl {
    font-size: 24px;
  }

  .text-width-normal {
    max-width: 900px;
  }

  .text-width-narrow {
    max-width: 700px;
  }

  .text-width-wide {
    max-width: 1200px;
  }
</style>
