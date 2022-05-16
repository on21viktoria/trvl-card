<template>
  <div id="background-div">
    <p class="tool-title">Hintergrund</p>
     <p class="background-title">Hintergrundfarbe wählen</p>
    <div class="backgroundcolorpicker-container">
      <p class="backgroundcolor-choice">Freie Farbwahl:</p>
      <input
        type="color"
        id="selection-color"
        name="color-selection"
        :value="currentBackgroundColor"
        @input="changeColor()"
      />
    </div>
    <p>Unsere trvl card Empfehlungen:</p>
    <div class="backgroundcolor-suggestions">
      <div class="suggestion" id="black" @click="preselectedColor('black')"></div>
      <div class="suggestion" id="grey" @click="preselectedColor('grey')"></div>
      <div class="suggestion" id="blue" @click="preselectedColor('blue')"></div>
      <div class="suggestion" id="turquoise" @click="preselectedColor('turquoise')"></div>
      <div class="suggestion" id="orange" @click="preselectedColor('orange')"></div>
        <img class="no-background-img" @click="preselectedColor('transparent')" src="../../../assets/platzhalter/no_Background.png" alt="Platzhalter">
    </div>
    <!-- <p class="tool-title">Suche</p>
    <v-text-field label="Suche" solo prepend-inner-icon="mdi-magnify"></v-text-field>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Background",
  data() {
    return {
      preselectedColors: [
        { value: "#000000", id: "black" },
        { value: "#707070", id: "grey" },
        { value: "#0f0f96", id: "blue" },
        { value: "#1da2a9", id: "turquoise" },
        { value: "#ff4e00", id: "orange" },
        { value: "#ffffff", id: "transparent" },
      ],
    }
  },
  methods: {
    changeColor() {
      let colorselector = document.getElementById(
        "selection-color"
      ) as HTMLInputElement;
      this.$store.dispatch("setBackgroundColor", colorselector.value);
    },
    preselectedColor(suggestionId: string){
        for (let choice of this.preselectedColors){
            if(choice.id === suggestionId) {
                this.$store.dispatch("setBackgroundColor", choice.value)
                console.log("in preselected function", choice.value)
                return
            }
        }
    }
  },
  computed: {...mapState(["currentBackgroundColor"])}
});
</script>

<style scoped>
#background-div {
  width: 100%;
  max-height: 800px;
  overflow: none !important;
}
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

.backgroundcolorpicker-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
}

.backgroundcolor-choice {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  line-height: 30px;
}

#selection-color {
  /* display: inline-block; */
  margin-top: 5px;
  width: 70px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px !important;
  outline: none;
  -webkit-appearance: none;
  border: none;
}

#selection-color::-webkit-color-swatch-wrapper {
padding: 0;
}

#selection-color::-webkit-color-swatch {
border: 0.5px solid grey;
border-radius: 5px;
}

.backgroundcolor-suggestions {
  display: flex;
}

p {
  margin: 5px;
}

.suggestion {
  width: 20px;
  height: 20px;
  border: 0.5px solid white;
}

#black {
  background-color: #000000;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 4px !important;
}

#grey {
  background-color: #707070;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 4px !important;
}

#blue {
  background-color: #0f0f96;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 4px !important;
}

#turquoise {
  background-color: #1da2a9;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 4px !important;
}

#orange {
  background-color: #ff4e00;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 4px !important;
}

.no-background-img {
  position: relative;
  width: 20px;
  height: 20px;
  border: 0.5px solid white;

}
</style>
</style>