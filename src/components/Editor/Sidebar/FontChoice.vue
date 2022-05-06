<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      text="Schriftart wählen"
      @change="changeFont"
    >
      <b-form-selected-option value="null"
        >Schriftwart wählen</b-form-selected-option
      >
      <b-form-selected-option value="Montserrat"
        >Montserrat</b-form-selected-option
      >
      <b-form-selected-option value="Lora"
        >Lora</b-form-selected-option
      >
      <b-form-selected-option value="Dancing Script"
        >Dancing Script</b-form-selected-option
      >
      <b-form-selected-option value="Klee One"
        >Klee One</b-form-selected-option
      >
      <b-form-selected-option value="Indie Flower"
        >Indie Flower</b-form-selected-option
      >
    </b-form-select>
    <p id="show-font">Ausgewählte Schriftart: {{ selected }}</p>
  </div>
</template>

<script lang="ts">
import { EventBus } from "@/main";
import Vue from "vue";

export default Vue.extend({
name: "FontChoice",
data() {
return {
selected: null,
options: [
{ value: null, text: 'Schriftart wählen' },
{ value: 'Montserrat', text: 'Montserrat' },
{ value: 'Lora', text: 'Lora' },
{ value: 'Dancing Script', text: 'Dancing Script' },
{ value: 'Klee One', text: 'Klee One' },
{ value: 'Indie Flower', text: 'Indie Flower' },
],
fontId: '',
}
},
methods: {
    changeFont() {
        this.fontId = `${this.selected}`;
        EventBus.$emit('changeFont', this.fontId);
        const p = document.querySelector("#show-font") as HTMLElement;
        switch (this.fontId){
            case "Dancing Script":
                p.removeAttribute("class");
                p.setAttribute("class","dancingScript")
            break; 
            case "Lora":
                p.removeAttribute("class");
                p.setAttribute("class","lora")
            break;
            case "Montserrat":
                p.removeAttribute("class");
                p.setAttribute("class","montserrat")
            break;
            case "Klee One":
                p.removeAttribute("class");
                p.setAttribute("class","kleeone")
            break;
            case "Indie Flower":
                p.removeAttribute("class");
                p.setAttribute("class","indieflower")
            break;
            default: console.log("Error");
            } 
    },
},
});
</script>


<style>
.dancingScript {
  font-family: Dancing Script;
}
.lora {
  font-family: Lora;
}
.montserrat {
  font-family: Montserrat;
}
.kleeone {
  font-family: Klee One;
}
.indieflower {
  font-family: Indie Flower;
}

p {
    margin-top: 20px;
}
</style>
