<template>
  <div class="fontcolor-selection-container">
    <b-form-select
    id="fontcolor-selection"
      v-model="selected"
      :options="options"
      text="Schriftart wählen"
      @change="changeFont"
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
    // Speichert die im Drop-Down ausgewählte Schriftart als Wert für die Schriftart des Texts auf der Rückseite im store. 
    // Wendet die ausgewählte Schriftart auf einen Beispieltext an, indem die Klasse entzogen und eine neue Klasse hinzugefügt wird. 
    changeFont() {
        this.fontId = `${this.selected}`;
        this.$store.dispatch("setTextFont", this.fontId)
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

#fontcolor-selection {
    position: relative;
    width: 100%;
    background-color:rgba(112, 112, 112, 0.1) ;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5px !important;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    font-size: 13px;
}

.fontcolor-selection-container {
  margin-bottom: 15px;
}
</style>
