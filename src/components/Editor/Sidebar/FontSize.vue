<template>
    <div class="slidercontainer">
      <p>Schriftgröße wählen:</p>
      <b-form-input
        id="slider"
        type="range"
        min="12"
        max="24"
        v-model="sliderValue"
        @change="changeFontSize()"
      ></b-form-input>
      <div id="rangeValue">Ausgewählte Schriftgröße: {{ sliderValue }}pt</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FontSize",
  data() {
    return {
      sliderValue: 12,
    };
  },
  methods: {
    // Speichert den Wert, auf den das HTML-Input-Element des Typs slider gesetzt wird, als Wert für die Schriftgröße des Texts auf der Rückseite im store. 
    changeFontSize() {
      const fontSize = this.sliderValue + "pt";
      this.$store.dispatch("setTextSize", fontSize)
    },
  },
});
</script>

<style scoped>
.slidercontainer {
  margin: 10px 0px 10px 0px;
}

#slider {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  height: 10px;
  background: #d3d3d3;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 2px;
  width: 100%;
}

#slider:hover {
  opacity: 1;
}

#slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 17px;
  height: 17px;
  background: #ff4e00;
  cursor: pointer;
  border-radius: 50%;
}

#rangeValue {
  margin-top: 15px;
}
</style>
