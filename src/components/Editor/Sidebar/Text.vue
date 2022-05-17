<template>
  <div>
    <p class="tool-title">Text</p>
    <p class="subtitle">Vorderseite der Postkarte</p>
    <v-divider id="divider-sidebar"></v-divider>
    <p>
      Dein Urlaubsort ist nicht in unserer Sammlung dabei? <br />Dann gebe hier
      deinen Ort ein:
    </p>
    <div class="input-container">
      <input
        id="front-input-field"
        type="text"
        placeholder="Grüße aus..."
        aria-label="Grüße aus..."
        aria-describedby="basic-addon2"
        @input="displayInput()"
      />
      <p id="display-paragraph">Keinen Text:</p>
      <label for="initial-checkbox" class="custom-checkbox-label">
      <input type="checkbox" id="initial-checkbox" name="initial-checkbox"> <span id="front-checkbox"></span>
      </label>
    </div>
    
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
import FontColor from "./temp.vue";
import { EventBus } from "@/main";

export default Vue.extend({
  data() {
    return {
      customInput: '',
    }
  },
  name: "Text",
  components: {
    FontSize,
    FontChoice,
    FontColor,
  },
  props: {},
  methods: {
    displayInput() {
      const inputElement = document.querySelector("#front-input-field") as HTMLInputElement;
      this.customInput = inputElement.value;
      if(this.customInput === '') {
        this.customInput = '';
        console.log("Input shall not be displayed", this.customInput)
        EventBus.$emit('displayCustomLargeLetter', this.customInput )
      } else {
        console.log ("Input shall be shown", this.customInput)
        EventBus.$emit('displayCustomLargeLetter', this.customInput )
      }
    }
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

.input-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

#front-input-field {
  width: 100%;
  margin: 0 8px 5px 0;
  padding: 6px 28px 6px 12px;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  background-color: rgba(112, 112, 112, 0.1);
  border-radius: 5px !important;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

#front-input-field:focus-visible {
  outline: none;
}

#display-paragraph {
  margin: 0 10px 0 0;
}

.custom-checkbox-label {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 13px;
  /* width: 25px;
  height: 25px;
  border: 1px red solid; */
}

#initial-checkbox {
  visibility: hidden;
}

#front-checkbox {
  position: absolute;
  top: 7px;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid grey;
  cursor: pointer;
}

.custom-checkbox-label #initial-checkbox:checked ~ #front-checkbox {
  background-color:#ff4e00 !important;
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
</style>
