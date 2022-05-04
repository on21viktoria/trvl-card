<template>
<div>
<b-form-select v-model="selected" :options="options" @change="changeFontSize()">
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
