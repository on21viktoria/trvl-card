<template>
  <div>
    <p class="tool-title">Text</p>
    <p class="subtitle">Rückseite der Postkarte</p>
    <v-divider id="divider-sidebar"></v-divider>
    <FontChoice></FontChoice>
    <FontSize></FontSize>
    <FontColor></FontColor>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FontSize from "./FontSize.vue";
import FontChoice from "./FontChoice.vue";
import FontColor from "./FontColor.vue";


export default Vue.extend({
  data: () => ({
  }),
  name: "Text",
  components: {
    FontSize,
    FontChoice,
    FontColor,},
  props: {},
  methods: {
  },
});
</script>

<style scoped>
.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 15px;
  text-align: center;
}
.subtitle {
  font-size: 15px;
  text-align: center;
  margin-bottom: 0;
}

#divider-sidebar {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
