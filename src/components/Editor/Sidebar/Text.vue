<template>
  <div id="textedit-container">
    <p class="tool-title">Text</p>
    <p class="subtitle">Vorderseite der Postkarte</p>
    <v-divider id="divider-sidebar"></v-divider>
    <p>
      Du möchtest deine Postkarte individualisieren? <br />Dann gebe hier deinen
      individuellen Text ein:
    </p>
    <div class="input-container">
      <input
        class="front-input-field"
        id="input-field-before"
        type="text"
        placeholder="Grüsse aus..."
        aria-label="Grüße aus..."
        aria-describedby="basic-addon2"
        @input="displayInputBefore()"
      />
      <input
        class="front-input-field"
        id="input-field-city"
        type="text"
        placeholder="Stadt..."
        aria-label="Stadt..."
        aria-describedby="basic-addon2"
        @input="displayInputCity()"
      />
      <input
        class="front-input-field"
        id="input-field-below"
        type="text"
        placeholder="Land..."
        aria-label="Land..."
        aria-describedby="basic-addon2"
        @input="displayInputBelow()"
      />
      <p id="display-paragraph">Keinen Text:</p>
      <img
        class="no-custom-input"
        @click="clearInput()"
        src="../../../assets/platzhalter/no_Background.png"
        alt="Platzhalter"
      />
    </div>
    <p class="effect">3D-Effekt:</p>
    <label for="initial-checkbox" class="custom-checkbox-label">
      <input
        type="checkbox"
        id="initial-checkbox"
        name="initial-checlbox"
        @change="changeEffect()"
      />
      <span id="front-checkbox"></span>
    </label>
    <div class="inputcolorpicker-container">
      <p class="inputcolor-choice">Freie Farbwahl:</p>
      <input
        type="color"
        id="inputcolor-picker"
        name="color-selection"
        :value="currentPreSelectedFontColor"
        @input="changeInputColor()"
      />
    </div>
    <p>Unsere trvl card Empfehlungen:</p>
    <div class="inputcolor-suggestions">
      <div
        class="suggestion"
        id="black"
        @click="preselectedInputColor('black')"
      ></div>
      <div
        class="suggestion"
        id="grey"
        @click="preselectedInputColor('grey')"
      ></div>
      <div
        class="suggestion"
        id="blue"
        @click="preselectedInputColor('blue')"
      ></div>
      <div
        class="suggestion"
        id="turquoise"
        @click="preselectedInputColor('turquoise')"
      ></div>
      <div
        class="suggestion"
        id="orange"
        @click="preselectedInputColor('orange')"
      ></div>
    </div>
    <p class="subtitle" id="subtitle-back">Rückseite der Postkarte</p>
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
  data() {
    return {
      customInputBefore: "Grüsse aus...",
      customInputCity: "Stadt...",
      customInputBelow: "Land...",
      applyEffect: false,
      preselectedColors: [
        { value: "#000000", id: "black" },
        { value: "#707070", id: "grey" },
        { value: "#0f0f96", id: "blue" },
        { value: "#1da2a9", id: "turquoise" },
        { value: "#ff4e00", id: "orange" },
      ],
    };
  },
  name: "Text",
  components: {
    FontSize,
    FontChoice,
    FontColorPicker
  },
  props: {},
  methods: {
    // Speichert den im Feld "Stadt..." eingegebenen Text des Nutzers als Wert im store.
    // Gibt der Nutzer keinen personalisierten Text ein, wird wieder der Standardwert des Felds im store gespeichert.  
    displayInputCity() {
      const inputCity = document.querySelector(
        "#input-field-city"
      ) as HTMLInputElement;
      this.customInputCity = inputCity.value;
      if (this.customInputCity === "") {
        this.customInputCity = "";
        this.$store.dispatch("displayCustomLargeLetter", this.customInputCity)
        inputCity.value = this.customInputCity;
      } else {
        this.$store.dispatch("displayCustomLargeLetter", this.customInputCity)
      }
    },
    // Speichert den im Feld "Grüsse aus..." eingegebenen Text des Nutzers als Wert im store. 
    // Gibt der Nutzer keinen personalisierten Text ein, wird wieder der Standardwert des Felds im store gespeichert. 
    displayInputBefore() {
      const inputBefore = document.querySelector(
        "#input-field-before"
      ) as HTMLInputElement;
      this.customInputBefore = inputBefore.value;
      if (this.customInputBefore === "") {
        this.customInputBefore = "";
        this.$store.dispatch("displayCustomBefore", this.customInputBefore)
        inputBefore.value = this.customInputBefore;
      } else {
        this.$store.dispatch("displayCustomBefore", this.customInputBefore)
      }
    },
    // Speichert den im Feld "Land..." eingegebenen Text des Nutzers als Wert im Store. 
    // Gibt der Nutzer keinen personalisierten Text ein, wird wieder der Standardwert des Felds im store gespeichert. 
    displayInputBelow() {
      const inputBelow = document.querySelector(
        "#input-field-below"
      ) as HTMLInputElement;
      this.customInputBelow = inputBelow.value;
      if (this.customInputBelow === "") {
        this.customInputBelow = "";
        this.$store.dispatch("displayCustomBelow", this.customInputBelow);
        inputBelow.value = this.customInputBelow;
      } else {
        this.$store.dispatch("displayCustomBelow", this.customInputBelow);
      }
    },
    // Setzt den vom Nutzer eingegebenen Text für die Felder "Stadt...", "Grüsse aus..." und "Land..." zurück. 
    clearInput() {
      const inputCity = document.querySelector(
        "#input-field-city"
      ) as HTMLInputElement;
      const inputBefore = document.querySelector(
        "#input-field-before"
      ) as HTMLInputElement;
      const inputBelow = document.querySelector(
        "#input-field-below"
      ) as HTMLInputElement;
      inputCity.value = "";
      inputBefore.value = "";
      inputBelow.value = "";
      this.customInputCity = "";
      this.customInputBefore = "";
      this.customInputBelow = "";

      this.$store.dispatch("displayCustomLargeLetter", this.customInputCity)
      this.$store.dispatch("displayCustomBefore", this.customInputBefore)
      this.$store.dispatch("displayCustomBelow", this.customInputBelow);

    },
    // Speichert bei Anklicken der Checkbox "3D-Effekt" den Wert des Booleans applyEffect im store.
    // Dieser Wert ist true, wenn die Checkbox checked ist.
    // Der Wert ist false, wenn die Checkbox unchecked ist. 
    changeEffect() {
      const checkboxEffect = document.querySelector(
        "#initial-checkbox"
      ) as HTMLInputElement;
      if (checkboxEffect.checked) {
        this.applyEffect = true;
        this.$store.dispatch("display3DEffect", this.applyEffect)
        return this.applyEffect;
      } else {
        this.applyEffect = false;
        this.$store.dispatch("display3DEffect", this.applyEffect)
        return (this.applyEffect = false);
      }
    },
    // Speichert den Wert des HTML-Input-Elements des Typs color als Schriftfarbe des Texts für die Vorderseite im store. 
    changeInputColor() {
      let inputcolorPicker = document.getElementById(
        "inputcolor-picker"
      ) as HTMLInputElement;
      this.$store.dispatch("setInputColor", inputcolorPicker.value);
    },
    // Speichert bei Auswahl einer der vorgeschlagenen Textfarben diesen Wert als Schriftfarbe für die Vorderseite im store. 
    preselectedInputColor(colorId: string) {
      for (let choice of this.preselectedColors) {
        if (choice.id === colorId) {
          this.$store.dispatch("setInputColor", choice.value);
          return;
        }
      }
    },
  },
});
</script>

<style scoped>
#textedit-container {
  width: 100%;
  max-height: 800px;
  overflow: auto;
  margin-bottom: 20px;
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
  color: #ff4e00;
  font-weight: bold;
}

#subtitle-back {
  margin-top: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.front-input-field {
  width: 100%;
  margin: 0 8px 10px 0;
  padding: 6px 28px 6px 12px;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  background-color: rgba(112, 112, 112, 0.1);
  border-radius: 5px !important;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.front-input-field:focus-visible {
  outline: none;
}

#display-paragraph {
  margin: 0 10px 0 0;
}

.no-custom-input {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

p.effect {
  margin: 0 25px 0 0;
  display: inline-block;
}

.custom-checkbox-label {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 13px;
  width: 15px;
  height: 15px;
}

#initial-checkbox {
  visibility: hidden;
}

#front-checkbox {
  position: absolute;
  top: 2px;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid grey;
  cursor: pointer;
}

.custom-checkbox-label #initial-checkbox:checked ~ #front-checkbox {
  background-color: #ff4e00 !important;
}

#front-checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox-label #initial-checkbox:checked ~ #front-checkbox:after {
  display: block;
}

.custom-checkbox-label #front-checkbox:after {
  left: 4px;
  bottom: 1.5px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

#divider-sidebar {
  margin-top: 12px;
  margin-bottom: 16px;
}

.inputcolorpicker-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
}

.inputcolor-choice {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  line-height: 30px;
}

#inputcolor-picker {
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

#inputcolor-picker::-webkit-color-swatch-wrapper {
  padding: 0;
}

#inputcolor-picker::-webkit-color-swatch {
  border: 0.5px solid grey;
  border-radius: 5px;
}

.inputcolor-suggestions {
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
