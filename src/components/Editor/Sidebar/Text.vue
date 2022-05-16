<template>
  <div id="textedit-container">
    <p class="tool-title">Text</p>
    <p class="subtitle">Rückseite der Postkarte</p>
    <v-divider id="divider-sidebar"></v-divider>
    <FontChoice></FontChoice>
        <v-divider id="divider-sidebar"></v-divider>
    <FontSize></FontSize>
        <v-divider id="divider-sidebar"></v-divider>
    <FontColorPicker></FontColorPicker>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FontSize from "./FontSize.vue";
import FontChoice from "./FontChoice.vue";
import FontColorPicker from "./FontColorPicker.vue"

export default Vue.extend({
  data: () => ({}),
  name: "Text",
  components: {
    FontSize,
    FontChoice,
    FontColorPicker
  },
  props: {},
  methods: {},
});
</script>

<style scoped>
#textedit-container {
  width: 100%;
  max-height: 800px;
  overflow: none !important;
}

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
  margin-top: 12px;
  margin-bottom: 16px;
}
</style>
