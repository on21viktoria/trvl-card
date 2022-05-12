<template>
  <div>
    <p class="tool-title">Hintergrund</p>
    <p>
      Ihr könnt hier entweder zwischen einem Hintergrundbild oder einer Farbe
      wählen.
    </p>
    <p class="tool-title subtitle">Hintergrundfarbe</p>
    <input
      type="color"
      id="selection-color"
      name="color-selection"
      value="#ffffff"
      @input="changeColor()"
    />
    <!-- <p class="tool-title">Suche</p>
    <v-text-field label="Suche" solo prepend-inner-icon="mdi-magnify"></v-text-field>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Background",
  methods: {
    changeColor() {
      let colorselector = document.getElementById(
        "selection-color"
      ) as HTMLInputElement;
      this.$store.dispatch("setBackgroundColor", colorselector.value);
    },
  },
});
</script>

<style scoped>
.Photogrid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
}

img:hover {
  opacity: 30%;
}

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
</style>