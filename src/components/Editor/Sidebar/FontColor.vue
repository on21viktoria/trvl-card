<template>
  <div class="fontcolor-selection-container">
      <b-form-select id="fontcolor-selection" v-model="selected" :options="options" @change="changeColor">
      </b-form-select>
  </div>
</template>

<script lang="ts">
import { EventBus } from "@/main";
import Vue from "vue";

export default Vue.extend ({
    name: "FontColor",
    data() {
        return {
            selected: null,
            options: [
                {value: null, text: "Schriftfarbe wählen"},
                {value: '#000000', text: "Schwarz"},
                {value: '#707070', text: "Grau"},
                {value: '#0f0f96', text: "Dunkelblau"},
                {value: '#1da2a9', text: "Türkis"},
                {value: '#ff4e00', text: "Orange"},
            ],
            colorId: '',
        }
    },
    methods: {
    changeColor() {
    this.colorId = `${this.selected}`;
    this.$store.dispatch("setTextColor", this.colorId)
    //EventBus.$emit('changeFontColor', this.colorId);
    },
  },
});

</script>

<style scoped>
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
