<template>
  <div class="fontcolor-container">
    <p class="fontcolor-title">Schriftfarbe wählen</p>
    <div class="fontcolorpicker-container">
      <p class="fontcolor-choice">Freie Farbwahl:</p>
      <input
        type="color"
        id="fontcolor-picker"
        name="color-selection"
        value="#ffffff"
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
import { EventBus } from "@/main";
import Vue from "vue";

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
    changeColorNew() {
      let fontcolorPicker = document.getElementById(
        "fontcolor-picker"
      ) as HTMLInputElement;
      EventBus.$emit("changeFontColor", fontcolorPicker.value);
    },
    preselectedColor(suggestionId: string){
        for (let choice of this.preselectedColors){
            if(choice.id === suggestionId) {
                EventBus.$emit("preselectedColor", choice.value);
                return
            }
        }
    }
  },
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
  display: inline-block;
  margin-top: 5px;
  width: 70px;
  height: 30px;
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
}

#grey {
  background-color: #707070;
  margin-right: 2px;
  cursor: pointer;
}

#blue {
  background-color: #0f0f96;
  margin-right: 2px;
  cursor: pointer;
}

#turquoise {
  background-color: #1da2a9;
  margin-right: 2px;
  cursor: pointer;
}

#orange {
  background-color: #ff4e00;
  cursor: pointer;
}
</style>
