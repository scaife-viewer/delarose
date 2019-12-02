<template>
  <div class="image-viewer">
    <ImagePage
      v-for="page in passageText"
      v-bind:key="page.idx"
      :page="page"
    />
  </div>
</template>

<script>
import ImagePage from './ImagePage.vue';

export default {
  props: ['passage-text'],
  components: { ImagePage },
};
</script>
