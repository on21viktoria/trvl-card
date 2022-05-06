<template>
<div class="fontcolor-selection-container">
<b-form-select
 id="fontcolor-selection"
 v-model="selected" 
 :options="options" 
 @change="changeFontSize()">
</b-form-select>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import {EventBus} from "@/main";

export default Vue.extend({
  name: "FontSize",
  data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Bitte wähle eine Schriftgröße.' },
          { value: '12px', text: '12px' },
          { value: '14px', text: '14px' },
          { value: '18px', text: '18px' },
          { value: '20px', text: '20px' },
          { value: '24px', text: '24px' },
        ],
        sizeId: '',
        }
    },
    methods: {
    changeFontSize() {
    this.sizeId = `${this.selected}`;
    console.log("Size has been selected", this.sizeId, this.selected);
    EventBus.$emit('changeFontSize', this.sizeId);
    },
      }
    }
);
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