<template>
  <div class="fontcolor-selection container">
      <b-form-select class="fontcolor-selection" v-model="selected" :options="options" @change="changeColor">
      </b-form-select>
  </div>
</template>

<script lang="ts">
import { EventBus } from "@/main";
import Vue from "vue";

export default Vue.extend ({
    name: "Fontcolor",
    data() {
        return {
            selected: null,
            options: [
                {value: null, text: "Schriftfarbe wählen"},
                {value: 'black', text: "Schwarz"},
                {value: 'blue', text: "Dunkelblau"},
                {value: 'green', text: "Hellblau"},
                {value: 'red', text: "Grau"},
                {value: 'orange', text: "Orange"},
            ],
            colorId: '',
        }
    },
    methods: {
    changeColor() {
    this.colorId = `${this.selected}`;
    console.log("Color has been selected", this.colorId, this.selected);
    EventBus.$emit('changeFontColor', this.colorId);
    },
  },
});

</script>

<style scoped>
.fontcolor-selection.container {
    display: flex;
    min-width: 300px;
    background-color: rgba(112, 112, 112, 0.1)!important;
    border-radius: 5px !important;
    margin-bottom: 20px !important;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
    cursor: pointer !important;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
}

.fontcolor-selection {
    position: relative;
    width: 100%;
    /* line-height: 100; */
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    
}
</style>
