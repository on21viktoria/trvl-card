<template>
<div id="fontsize">
<b-form-select v-model="selected" :options="options" @change="changeFontSize">
</b-form-select>
</div>
</template>

<script lang="ts">
import Vue from "vue";

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
        ]
      }
    }
});
</script>
