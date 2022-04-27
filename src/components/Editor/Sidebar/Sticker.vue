<template>
    <div>
    <p class="tool-title">Sticker</p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros.
    </p>
    <b-img
      src="https://picsum.photos/500/500/?image=54"
      fluid
      thumbnail
    ></b-img>
    <!-- <p class="tool-title subtitle">Suche</p>
    <v-text-field label="Suche" solo prepend-inner-icon="mdi-magnify"></v-text-field> -->
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sticker",
  components: {},
  props: {
  },
  methods: {},
});
</script>

<style scoped>
.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}
.tool-title.subtitle {
  font-size: 16px;
}
</style>