<template>
  <div class="fontcolor-container">
    <p class="fontcolor-title">Schriftfarbe wählen</p>
    <div class="fontcolorpicker-container">
      <p class="fontcolor-choice">Freie Farbwahl:</p>
      <input
        type="color"
        id="fontcolor-picker"
        name="color-selection"
        :value="textColor"
        @input="changeColorNew()"
      />
    </div>
    <p>Unsere trvl card Empfehlungen:</p>
    <div class="fontcolor-suggestions">
      <div class="suggestion" id="black" @click="preselectedColor('black')"></div>
      <div class="suggestion" id="grey" @click="preselectedColor('grey')"></div>
      <div class="suggestion" id="blue" @click="preselectedColor('blue')"></div>
      <div class="suggestion" id="turquoise" @click="preselectedColor('turquoise')"></div>
      <div class="suggestion" id="orange" @click="preselectedColor('orange')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "FontColorPicker",
  data() {
    return {
      preselectedColors: [
        { value: "#000000", id: "black" },
        { value: "#707070", id: "grey" },
        { value: "#0f0f96", id: "blue" },
        { value: "#1da2a9", id: "turquoise" },
        { value: "#ff4e00", id: "orange" },
      ],
    };
  },
  methods: {
    // Speichert den ausgewählten Farbwert des HTML-Input-Elements des Typs color als Wert für die Schriftfarbe des Texts auf der Rückseite im store. 
    changeColorNew() {
      let fontcolorPicker = document.getElementById(
        "fontcolor-picker"
      ) as HTMLInputElement;
      this.$store.dispatch("setTextColor", fontcolorPicker.value)
    },
    // Speichert den aus den vorgeschlagenen Farbwerten ausgewählten Farbwert als Wert für die Schriftfarbe des Texts auf der Rückseite im store. 
    preselectedColor(suggestionId: string){
        for (let choice of this.preselectedColors){
            if(choice.id === suggestionId) {
                this.$store.dispatch("setTextColor", choice.value)
                return
            }
        }
    }
  },
  // Generiert eine getter-Funktion für den aufgeführten state im store. 
  computed: {...mapState(["textColor"])}
});
</script>

<style scoped>
.fontcolorpicker-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
}

.fontcolor-choice {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  line-height: 30px;
}

#fontcolor-picker {
  margin-top: 5px;
  width: 70px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px !important;
  outline: none;
  -webkit-appearance: none;
  border: none;
}

#fontcolor-picker::-webkit-color-swatch-wrapper {
padding: 0;
}

#fontcolor-picker::-webkit-color-swatch {
border: 0.5px solid grey;
border-radius: 5px;
}


.fontcolor-suggestions {
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
  cursor: pointer;
  border-radius: 4px !important;
}
</style>
