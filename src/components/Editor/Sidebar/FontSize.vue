<template>
<div>
<b-form-select v-model="selected" :options="options" @change="changeFontSize">
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
          { value: 'a', text: '8px' },
          { value: 'b', text: '10px' },
          { value: 'c', text: '12px' },
          { value: 'd', text: '14px' },
          { value: 'e', text: '16px' },
          { value: 'f', text: '18px' },
        ],
        sizeId: '',
        }
    },
    methods: {
    changeFontSize() {
    this.sizeId = `${this.selected}`;
    console.log("Color has been selected", this.sizeId, this.selected);
    EventBus.$emit('changeFontColor', this.sizeId);
    },
      }
    }
});
</script>
